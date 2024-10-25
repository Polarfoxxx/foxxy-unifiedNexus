import { Type_for_newMesssageFrom_DB } from "../../module/MessageModule";
import { Type_SetMessageDataAction } from "../reducers";


//! types for message action state
export type Type_forSetAllMessage = {
    data: Type_for_newMesssageFrom_DB[] | Type_for_newMesssageFrom_DB,
    typeEvent: Type_SetMessageDataAction["type"]
};
