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
import "foxxy-package/dist/foxxy_package_dis.css"

function MessageList(): JSX.Element {
    const [newMessage, setNewMessage] = React.useState<any>({ start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();
    const dispatch = useDispatch();
    const allMessages = useSelector((state: Type_RootState) => state.allMessages);
    const userName = useSelector((state: Type_RootState) => state.userLogData.userName);

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


    return (
        <div
            id="messageContent"
            className='w-full h-full flex items-center justify-center'>
            <div className="w-full h-full flex items-center justify-start flex-col  bg-thems-messageContent_background">
                <div className="  w-full h-[auto] min-h-[80px] flex items-center justify-between flex-row">
                    <div className=" w-[100%] h-[100%] bg-thems-appThemeColor flex items-center justify-center ">
                        <h2 className="text-[30px] text-thems-defaultTextColor font-oswald">
                            Message
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[auto] flex items-center justify-center flex-col xl:flex-row">
                    <div className=" w-full xl:h-[100%] min-h-[350px] flex items-center justify-center">
                        <form
                            className="w-full h-[100%] p-2 flex justify-center items-center flex-col gap-5 bg-thems-newMessageForm_Background"
                            onSubmit={(e) => handleSubmit(e, submit)}>
                            <div className="w-full h-full flex justify-center items-center flex-col xl:flex-row gap-2 ">
                                <div className="w-[350px] h-[100%] flex justify-center items-center flex-col">
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
                                <div className="w-[350px] h-[100%] flex justify-center items-center flex-col">
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
                                <div className="w-[350px] h-[100%] flex justify-center items-center flex-col">
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
                                            className=" w-[350px] h-[30px] text-[14px] ml-3 placeholder:text-slate-300 bg-transparent pl-3 pr-3 text-center border-b border-thems-inputBorder focus:outline-none focus:border-red-500"
                                            placeholderText="End date"
                                            selected={newMessage.start}
                                            onChange={(start) => setNewMessage({ ...newMessage, start })} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[100%] flex justify-center items-center xl:flex-row flex-col">
                                <div className="w-full h-full flex justify-center items-center">
                                <ButtonComponent.ButtonBox>
                            <ButtonComponent.Button
                            
                            type="submit"
                                button_text='Save new message'
                                variant_btn='primaryButton' />
                        </ButtonComponent.ButtonBox>
                                </div>
                                <div className=" w-full h-full flex items-center justify-around bg-thems-newMessageForm_Background">
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
                                <div className="w-full h-full flex justify-start items-center ">
                                    <div className="w-[50%] h-[30px] flex justify-center items-center flex-row bg-thems-appThemeColorSecondary gap-6">
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
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" w-full h-auto bg-thems-appThemeColor">
                        <NavigateBarInOpenApplication />
                    </div>
                    <div className=" w-full h-[700px] h-max-[700px] overflow-x-auto min-h-[500px] flex items-start justify-center " >
                        <div className=" w-[100%] h-[100%] flex justify-center items-center bg-slate-300 rounded-br-[10px] rounded-bl-[10px]">
                            <Routes>
                                <Route
                                    path="ValidMessageList"
                                    element={
                                        <ValidMessageList
                                            allMessages={allMessages} />
                                    }
                                />
                                <Route
                                    path="InvalidMessageList"
                                    element={
                                        <InvalidMessageList
                                            allMessages={allMessages} />
                                    }
                                />
                                <Route
                                    path="AllMessageList"
                                    element={
                                        <AllMessageList
                                            allMessages={allMessages} />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default MessageList;