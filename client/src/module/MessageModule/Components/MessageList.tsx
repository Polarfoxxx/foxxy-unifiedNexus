import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Type_RootState } from "../../../redux";
import { useSelector } from 'react-redux';
import { NavigateBarInOpenApplication } from "../../Shared";
import "foxxy-package/dist/foxxy_package_dis.css";
import "./style_messageList.css"
import { useNavigate } from "react-router-dom";
import { ControlPanel } from "./ControlPanel";
import { Type_for_newMesssageFrom_DB } from "./types";
import { MessageContent } from "./MessageContent";


function MessageList(): JSX.Element {
    const navigate = useNavigate()
    const allMessages = useSelector((state: Type_RootState) => state.allMessages);
    const [allMessageForList, setAllmessageForList] = React.useState<Array<Type_for_newMesssageFrom_DB>>([]);


    //! default load patch..............................
    React.useEffect(() => {
        navigate("ValidMessageList")
    }, []);

    //! setting for all message..............................
    React.useEffect(() => {
        setAllmessageForList(allMessages);
    }, [allMessages.length, allMessages]);



    return (
        <div
            id="messageContent"
            className='w-full h-auto xl:h-full flex items-center justify-center flex-col'>
            <div className="w-full h-[7%] flex items-start justify-start bg-thems-appThemeColor">
                <div className=" w-[250px] h-[100%] text-center flex justify-center items-center bg-thems-appThemeColorSecondary">
                    <h2 className="text-[33px] text-thems-defaultTextColorSec font-oswald ">
                        Your messages
                    </h2>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center xl:flex-row flex-col">
                <div className=' w-[100%] xl:w-[75px] h-full  bg-thems-appThemeColorSecondary items-center justify-center '>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=" w-full h-full flex justify-center items-center flex-col xl:flex-row">
                    {/* -----constrol message side--------- */}
                    <ControlPanel
                        setAllmessageForList={setAllmessageForList} />
                    {/* ------list message side-------- */}
                    <div className=" w-full h-full min-h-[100%] flex justify-center items-center bg-thems-messageContent_background">
                        <div className="w-full h-full flex justify-start items-center flex-col">
                            <div className="w-[100%] h-[50px] flex justify-center items-center flex-row gap-3 bg-thems-appThemeColorSecondary">
                                <div className="w-[100%] h-[100%] flex justify-end items-center">
                                    <h2 className=" text-[16px] font-oswald">
                                        All message count:
                                    </h2>
                                </div>
                                <div className="w-[30%] h-[25px] flex justify-center items-center font-oswald">
                                    <h1 className=" text-[17px]">
                                        {allMessages.length}
                                    </h1>
                                </div>
                            </div>
                            <div className=" w-full h-[90%] min-h-[90%] flex items-start justify-center flex-col" >
                                <MessageContent
                                    allMessageForList={allMessageForList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MessageList;