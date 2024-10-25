import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { createData_API } from "../../../APIs/index.";
import { NewRequest } from "../../../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { Type_for_newMessageFor_API, Type_for_newMesssageFrom_DB } from "./types";
import { ValidMessageList, InvalidMessageList } from "./router";
import { Route, Routes, NavLink } from "react-router-dom";
import { Type_RootState, setAllMessages } from "../../../../redux";
import { useSelector, useDispatch } from 'react-redux';

function MessageList(): JSX.Element {
    const [newMessage, setNewMessage] = React.useState<any>({ start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();
    const divRef = React.useRef<HTMLDivElement>(null);
    //! redux
    const dispatch = useDispatch();
    const allMessages = useSelector((state: Type_RootState) => state.allMessages);
    const userName = useSelector((state: Type_RootState) => state.userLogData.userName);

    //! function add a new messasge
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
            //! vymazanie form
            reset();
        } else {
            alert(create_data)
        };
    };


    return (
        <div
            ref={divRef}
            id="messageContent"
            className='w-full h-full flex items-center justify-center'>
            <div className="w-full h-full flex items-center justify-start flex-col bg-thems-messageContent_background">
                <div className="  w-full h-[10%] min-h-[80px] flex items-center justify-between flex-row">
                    <div className=" w-[100%] h-[100%] bg-thems-minBackg_content flex items-center justify-center  rounded-tl-[10px] rounded-tr-[10px]">
                        <h2 className="text-[25px] text-thems-defaultTextColor">
                            Message
                        </h2>
                    </div>
                </div>
                <div className=" w-full h-[18%] flex items-center justify-center">
                    <form
                        className="w-full h-[100%] p-2 flex justify-center items-center flex-col gap-5 bg-thems-newMessageForm_Background"
                        onSubmit={(e) => handleSubmit(e, submit)}>
                        <div className="w-full h-full flex justify-center items-center flex-row gap-2 ">
                            <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                                <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                    <h3 className=" text-thems-defaultTextColor">
                                        The title for new message
                                    </h3>
                                </div>
                                <div className=" w-[100%] h-[100%] flex justify-center items-center ">
                                    <input
                                        className=" w-[300px] h-[25px] text-center pl-2 pr-2 rounded-lg text-[14px]"
                                        placeholder="Title message"
                                        name="message"
                                        type="text" />
                                </div>
                            </div>
                            <div className="w-[850px] h-[100%] flex justify-center items-center flex-col">
                                <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                    <h3 className=" text-thems-defaultTextColor">
                                        The content for new message
                                    </h3>
                                </div>
                                <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                    <input
                                        className=" w-[100%] h-[25px] text-center pl-2 pr-2 rounded-lg text-[14px]"
                                        placeholder="Message"
                                        name="message"
                                        type="text" />
                                </div>
                            </div>
                            <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                                <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                    <h3 className=" text-thems-defaultTextColor">
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
                                        className=" w-[300px] h-[25px] rounded-lg pl-2 pr-2 text-center border border-thems-inputBorder text-[14px]"
                                        placeholderText="Due Date"
                                        selected={newMessage.start}
                                        onChange={(start) => setNewMessage({ ...newMessage, start })} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[100%] flex justify-center items-center flex-row">
                            <div className="w-full h-full flex justify-center items-center">
                                <button
                                    className=" w-[280px] h-[36px] border border-thems-minBackg_content rounded-xl bg-thems-background_button text-thems-defaultTextColorDark hover:bg-thems-background_button_hover"
                                    type="submit">
                                    Create new message
                                </button>
                            </div>
                            <div className=" w-full h-full flex items-center justify-around bg-thems-newMessageForm_Background">
                                <NavLink
                                    className="m-2 flex justify-center items-center text-[14px] w-[220px] h-[25px] border border-thems-minBackg_content rounded-xl  hover:bg-thems-background_button_hover"
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? 'var(--minBackg_content)' : 'var(--background_button)',
                                        color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                    })}
                                    to="ValidMessageList">
                                    Your note
                                </NavLink>
                                <NavLink
                                    className="m-2 flex justify-center items-center text-[14px] w-[220px] h-[25px] border border-thems-minBackg_content rounded-xl hover:bg-thems-background_button_hover"
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? 'var(--minBackg_content)' : 'var(--background_button)',
                                        color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                    })}
                                    to="InvalidMessageList"
                                >Fulfilled note
                                </NavLink>
                            </div>
                            <div className="w-full h-full flex justify-center items-center ">
                                <div className="w-[50%] h-[50%] flex justify-center items-center flex-row bg-thems-minBackg_content rounded-lg gap-6">
                                    <div className="w-[100%] h-[100%] flex justify-end items-center">
                                        <h2 className=" text-thems-defaultTextColor text-[14px]">
                                            All message count:
                                        </h2>
                                    </div>
                                    <div className="w-[30%] h-[25px] flex justify-start items-center">
                                        <h1 className=" text-[17px] text-thems-defaultTextColor">
                                            {allMessages.length}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" w-full h-[700px] h-max-[700px] overflow-x-auto min-h-[500px] flex items-start justify-center" >
                    <div className=" w-[100%] h-[100%] flex justify-center items-center  bg-thems-calendarContent_background rounded-br-[10px] rounded-bl-[10px]">
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
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MessageList;