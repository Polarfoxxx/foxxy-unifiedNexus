import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { createData_API } from "../../../APIs/index.";
import { NewRequest } from "../../../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { Type_for_newMessageFor_API, Type_for_newMesssageFrom_DB } from "./types";
import { ValidMessageList, InvalidMessageList, AllMessageList } from "./router";
import { Route, Routes, NavLink } from "react-router-dom";
import { Type_RootState, setAllMessages } from "../../../../redux";
import { useSelector, useDispatch } from 'react-redux';
import { NavigateBarInOpenApplication } from "../../../Shared";
import { ButtonComponent } from 'foxxy-package';
import "foxxy-package/dist/foxxy_package_dis.css";
import { services_filterMessage } from "./router";

function MessageList(): JSX.Element {
    const [newMessage, setNewMessage] = React.useState<any>({ start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();
    const dispatch = useDispatch();
    const allMessages = useSelector((state: Type_RootState) => state.allMessages);
    const userName = useSelector((state: Type_RootState) => state.userLogData.userName);
    const [allMessageForList, setAllmessageForList] = React.useState<Type_for_newMesssageFrom_DB[]>(allMessages);

    //! function add a new messasge............................
    const submit = async (v: TypeForInputsObject["v"]): Promise<void> => {
        const NEW_REQ = new NewRequest({
            startDate_message: new Date(),
            title_message: v[0].inputValues.toString(),
            content_Message: v[1].inputValues.toString(),
            endDate_message: v[2].inputValues.toString()
        });
        const create_data: Type_for_newEventFor_API | Type_for_newMessageFor_API | string = NEW_REQ.create();
        if (typeof create_data !== "string" && "message" in create_data) {
            const loginUserName = userName;
            try {
                const createMessage = await createData_API({ loginUserName, create_data });
                if (createMessage) {
                    const upd_data = createMessage.updateMessage as Type_for_newMesssageFrom_DB[]
                    dispatch(setAllMessages({
                        data: upd_data,
                        typeEvent: "setAll_message"
                    }))
                };
            }
            catch (error) {
                console.log(error);
            };
            reset();
        } else {
            alert(create_data)
        };
    };

    //! filter message...................
    const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const findText = e.currentTarget.value as string;
        setAllmessageForList(
            services_filterMessage({ findText, allMessages })
        )
    };


    return (
        <div
            id="messageContent"
            className='w-full h-auto xl:h-full flex items-center justify-center flex-col'>
            <div className="w-full h-[10%] flex items-center justify-center bg-thems-appThemeColor">
                <div className=" w-full h-full text-center flex justify-center items-center">
                    <h2 className="text-[37px] text-thems-defaultTextColor font-oswald">
                       Your messages
                    </h2>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center xl:flex-row flex-col  bg-thems-messageContent_background">
                <div className=' w-[100%] xl:w-[75px] h-full  bg-thems-appThemeColor items-center justify-center '>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=" w-full h-full flex justify-center items-center flex-col xl:flex-row">
                    {/* -----constrol message side--------- */}
                    <div className=" xl:w-[500px] w-full h-full flex justify-start items-center flex-col">
                        <div className=" w-full h-[40px] flex justify-center items-center font-oswald text-[20px] bg-orange-500">
                            <h3>Create a new message</h3>
                        </div>
                        <div className="w-full h-[300px] bg-red-500 flex items-center justify-center flex-col xl:flex-row ">
                            <div className=" w-full xl:h-[100%] min-h-[200px] flex items-center justify-center">
                                <form
                                    className="w-full h-[100%] p-4 flex justify-center items-center flex-col gap-[5px]"
                                    onSubmit={(e) => handleSubmit(e, submit)}>
                                    <div className="w-full h-full flex justify-center items-center flex-col">
                                        <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                                            <div className=" w-[100%] h-[20%] flex justify-start items-center">
                                                <h3 className=" text-thems-defaultTextColorOpossite">
                                                    The title for new message
                                                </h3>
                                            </div>
                                            <div className=" w-[100%] h-[100%] flex justify-center items-center ">
                                                <input
                                                    className=" w-[400px] h-[30px] text-[14px] ml-3 placeholder:text-slate-300 bg-transparent pl-3 pr-3 text-center border-b border-thems-inputBorder focus:outline-none focus:border-red-500"
                                                    placeholder="Title message"
                                                    name="message"
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                                            <div className=" w-[100%] h-[20%] flex justify-start items-center">
                                                <h3 className=" text-thems-defaultTextColorOpossite">
                                                    The content for new message
                                                </h3>
                                            </div>
                                            <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                                <input
                                                    className=" w-[400px] h-[30px] text-[14px] ml-3 placeholder:text-slate-300 bg-transparent pl-3 pr-3 text-center border-b border-thems-inputBorder focus:outline-none focus:border-red-500"
                                                    placeholder="Message"
                                                    name="message"
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                                            <div className=" w-[100%] h-[20%] flex justify-start items-center">
                                                <h3 className=" text-thems-defaultTextColorOpossite">
                                                    Last termin
                                                </h3>
                                            </div>
                                            <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                                <DatePicker
                                                    autoComplete="false"
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                    timeCaption="Čas"
                                                    dateFormat="dd.MM.yyyy HH:mm"
                                                    name="startDate"
                                                    className=" w-[300px] h-[30px] text-[14px] ml-3 placeholder:text-slate-300 bg-transparent pl-3 pr-3 text-center border-b border-thems-inputBorder focus:outline-none focus:border-red-500"
                                                    placeholderText="End date"
                                                    selected={newMessage.start}
                                                    onChange={(start) => setNewMessage({ ...newMessage, start })} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[auto] flex justify-center items-center">
                                        <div className="w-full h-full flex justify-center items-center">
                                            <ButtonComponent.ButtonBox>
                                                <ButtonComponent.Button
                                                    type="submit"
                                                    button_text='Save new message'
                                                    variant_btn='primaryButton' />
                                            </ButtonComponent.ButtonBox>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className=" w-full h-[150px] flex items-center justify-around bg-blue-500 flex-col">
                            <div className=" w-full h-[50px] flex items-center justify-center font-oswald">
                                <h3>Show list by type</h3>
                            </div>
                            <div className=" w-full h-full flex justify-center items-center flex-col">
                                <NavLink
                                    className="m-2 flex justify-center items-center text-[14px] w-[220px] h-[25px] border border-thems-appThemeColor rounded-[5px]  hover:bg-thems-background_button_hover"
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? 'var(--appThemeColor)' : 'var(--appThemeColorSecondary)',
                                        color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                    })}
                                    to="ValidMessageList">
                                    Your note
                                </NavLink>
                                <NavLink
                                    className="m-2 flex justify-center items-center text-[14px] w-[220px] h-[25px] border border-thems-appThemeColor rounded-[5px] hover:bg-thems-background_button_hover"
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? 'var(--appThemeColor)' : 'var(--appThemeColorSecondary)',
                                        color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                    })}
                                    to="InvalidMessageList"
                                >Fulfilled note
                                </NavLink>
                                <NavLink
                                    className="m-2 flex justify-center items-center text-[14px] w-[220px] h-[25px] border border-thems-appThemeColor rounded-[5px] hover:bg-thems-background_button_hover"
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? 'var(--appThemeColor)' : 'var(--appThemeColorSecondary)',
                                        color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                    })}
                                    to="AllMessageList"
                                >All list
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-[100%] h-[70px]  flex justify-center items-center bg-slate-800">
                            <div className=" w-[140px] h-[50px] flex items-center justify-center font-oswald bg-slate-200">
                                <h3>Find message</h3>
                            </div>
                            <div className=" w-full h-[50px] flex items-center justify-start">
                                <form className="w-[100%] h-[100%]  flex justify-start items-center">
                                    <div>
                                        <input
                                            placeholder="Find message"
                                            onChange={e => handleChangeFilter(e)}
                                            name="filter"
                                            className=""
                                            type="text" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* ------list message side-------- */}
                    <div className=" w-full h-full min-h-[100%] flex justify-center items-center bg-amber-300">
                        <div className="w-full h-full flex justify-start items-center flex-col ">
                            <div className="w-[100%] h-[30px] flex justify-center items-center flex-row bg-red-400 gap-6">
                                <div className="w-[100%] h-[100%] flex justify-end items-center">
                                    <h2 className=" text-thems-defaultTextColorOpposite text-[14px]">
                                        All message count:
                                    </h2>
                                </div>
                                <div className="w-[30%] h-[25px] flex justify-center items-center">
                                    <h1 className=" text-[17px] text-thems-defaultTextColorOpposite">
                                        {allMessages.length}
                                    </h1>
                                </div>
                            </div>
                            <div className=" w-full h-[90%] min-h-[90%] flex items-start justify-center flex-col  bg-slate-800  " >
                                <div className=" w-[100%] h-[100%] flex justify-center items-center overflow-hidden no-scrollbar">
                                    <Routes>
                                        <Route
                                            path="ValidMessageList"
                                            element={
                                                <ValidMessageList
                                                    allMessages={allMessageForList} />
                                            }
                                        />
                                        <Route
                                            path="InvalidMessageList"
                                            element={
                                                <InvalidMessageList
                                                    allMessages={allMessageForList} />
                                            }
                                        />
                                        <Route
                                            path="AllMessageList"
                                            element={
                                                <AllMessageList
                                                    allMessages={allMessageForList} />
                                            }
                                        />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MessageList;