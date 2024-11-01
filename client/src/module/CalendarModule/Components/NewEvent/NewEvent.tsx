import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { Type_for_newEventFor_API } from "./type";
import { Type_for_newMessageFor_API } from "../../../MessageModule/Components/MessageList/types";
import { NewRequest } from "../../../utils";
import { createData_API } from "../../../APIs/userDataCRUD_API";
import { setAllEvent } from "../../../../redux";
import { Type_for_newEventFrom_DB } from "./type";
import { useSelector, useDispatch } from 'react-redux';
import { Type_RootState } from "../../../../redux";
import { ButtonComponent } from 'foxxy-package';
import "foxxy-package/dist/foxxy_package_dis.css"
import { CalendarContainer } from "react-datepicker";


function NewEvent(): JSX.Element {
    const [newEvent, setNewEvent] = React.useState<any>({ title: "", typeEvent: "", start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();
    const now = new Date();
    const dispatch = useDispatch();
    const userName = useSelector((state: Type_RootState) => state.userLogData.userName);

    const submit = (v: TypeForInputsObject["v"]): void => {
        const NEW_REQ = new NewRequest({
            startDate_event: v[0].inputValues.toString(),
            endDate_event: v[1].inputValues.toString(),
            name_Event: v[2].inputValues.toString().trim(),
            typeEvent: v[3].inputValues.toString().trim() === "" ? "no typeEvent" : v[3].inputValues.toString().trim()
        });

        const create_data: Type_for_newMessageFor_API | Type_for_newEventFor_API | string = NEW_REQ.create();
        if (typeof create_data !== "string" && "event" in create_data) {
            createAsyncData(create_data);
            reset();
            setNewEvent({
                title: "",
                typeEvent: "",
                start: "",
                end: ""
            })

        } else {
            alert(create_data)
        };
    };


    async function createAsyncData(create_data: Type_for_newEventFor_API) {
        const loginUserName = userName
        try {
            const create_event = await createData_API({ loginUserName, create_data });
            if (create_event) {
                const pdateMessage = create_event.updateMessage as Type_for_newEventFrom_DB[];
                dispatch(setAllEvent(pdateMessage));
            };
        }
        catch (error) {
            console.log(error);
        };
    };

    const MyDateContainer = ({ className, children }: any) => {
        return (
            <div style={{ position: "relative", padding: "1px", background: "black", color: "#fff", top: "-110px", zIndex: "9999999", right: "50px" }}>
                <CalendarContainer className={className}>
                    <div style={{ background: "green" }}>
                    </div>
                    <div style={{ position: "relative", backgroundColor: "green" }}>
                        {children}
                    </div>
                </CalendarContainer>
            </div>
        );
    };

    return (
        <div className=" w-full h-full relative">
            <div className=" w-full h-full flex items-center justify-start flex-col">
                <div className=" w-full min-h-[50px] flex justify-center items-center bg-thems-appThemeColor ">
                    <h2 className=" text-[22px] text-thems-defaultTextColor">
                        Set new event
                    </h2>
                </div>
                <form
                    onSubmit={(e) => handleSubmit(e, submit)}
                    className=" w-full h-[100%]  flex justify-center items-center flex-col bg-transparent  ">
                    <div className=" w-[90%] h-[100%]  flex justify-center items-start flex-col ">
                        <div className="w-full h-[100%] flex justify-center items-start flex-col gap-1">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[14px] font-bold">
                                    Set start event:
                                </h4>
                            </div>
                            <div>
                                <DatePicker
                                    autoComplete="false"
                                    showTimeSelect
                                    minDate={now}
                                    calendarContainer={MyDateContainer}
                                    timeFormat="HH:mm"
                                    popperPlacement="top"
                                    timeIntervals={15}
                                    timeCaption="Čas"
                                    dateFormat="dd.MM.yyyy HH:mm"
                                    name="startDate"
                                    placeholderText="Start event"
                                    className=" w-[400px] h-[30px] text-[14px] bg-transparent placeholder:text-slate-300 ml-3 pl-3 pr-3 text-center border-b-2 border-thems-inputBorder focus:outline-none focus:border-red-500"
                                    selected={newEvent.start}
                                    onChange={(start) => setNewEvent({ ...newEvent, start })} />
                            </div>
                        </div>

                        <div className="w-full h-[100%] flex justify-center items-start flex-col">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[14px] font-bold">
                                    Set end event:
                                </h4>
                            </div>
                            <div>
                                <DatePicker
                                    autoComplete="false"
                                    showTimeSelect
                                    minDate={now}
                                    calendarContainer={MyDateContainer}
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Čas"
                                    dateFormat="dd.MM.yyyy HH:mm"
                                    name="endDate"
                                    placeholderText="End event"
                                    className=" w-[400px] h-[30px] text-[14px] bg-transparent placeholder:text-slate-300 ml-3 pl-3 pr-3 text-center border-b-2 border-thems-inputBorder focus:outline-none focus:border-red-500"
                                    selected={newEvent.end}
                                    onChange={(end) => setNewEvent({ ...newEvent, end })} />
                            </div>
                        </div>
                    </div>

                    <div className=" w-[90%] h-full flex flex-col justify-center items-center gap-1">
                        <div className="w-full h-full flex items-start justify-center flex-col gap-1">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[14px] font-bold">
                                    Set Name event.
                                </h4>
                            </div>
                            <div>
                                <input
                                    name="name event"
                                    type="text"
                                    placeholder="Add event"
                                    className=" w-[400px] h-[30px] text-[14px] ml-3 placeholder:text-slate-300 bg-transparent pl-3 pr-3 text-center border-b-2 border-thems-inputBorder focus:outline-none focus:border-red-500" />
                            </div>
                        </div>
                        <div className="w-full  h-full flex items-start justify-center flex-col gap-1">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[14px] font-bold">
                                    Set typeEvent.
                                </h4>
                            </div>
                            <div>
                                <select
                                    defaultValue=""
                                    className="w-[400px] h-[30px] text-[14px] ml-3 placeholder:text-slate-300 bg-transparent pl-3 pr-3 text-center border-b-2 border-thems-inputBorder focus:outline-none focus:border-red-500"
                                    name="name event"
                                    aria-label="Choose an option">
                                    <option value="" disabled hidden>Select a category</option>
                                    <option value="health">Health</option>
                                    <option value="work">Work</option>
                                    <option value="family">Family</option>
                                    <option value="hobbies">Hobbies</option>
                                    <option value="free_time">Free Time</option>
                                    <option value="education">Education</option>
                                    <option value="friends">Friends</option>
                                    <option value="travel">Travel</option>
                                    <option value="sports">Sports</option>
                                    <option value="food">Food</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="personal_growth">Personal Growth</option>
                                    <option value="finance">Finance</option>
                                    <option value="other">Other</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className=" w-[90%] h-full flex justify-start items-center">
                        <ButtonComponent.ButtonBox>
                            <ButtonComponent.Button
                                button_text='Save new event'
                                variant_btn='primaryButton' />
                        </ButtonComponent.ButtonBox>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewEvent;