import { Route, Routes } from "react-router-dom";
import {
    AllMessageList,
    InvalidMessageList,
    ValidMessageList
} from "./router";
import { Type_forMessageContent } from "./types";


function MessageContent(props: Type_forMessageContent): JSX.Element {

    return (
        <div className=" w-[100%] h-[100%] flex justify-center items-center overflow-hidden no-scrollbar">
            <Routes>
                <Route
                    path="ValidMessageList"
                    element={
                        <ValidMessageList
                            allMessages={props.allMessageForList} />
                    } />
                <Route
                    path="InvalidMessageList"
                    element={
                        <InvalidMessageList
                            allMessages={props.allMessageForList} />
                    } />
                <Route
                    path="AllMessageList"
                    element={
                        <AllMessageList
                            allMessages={props.allMessageForList} />
                    } />
            </Routes>
        </div>
    );
};

export default MessageContent;