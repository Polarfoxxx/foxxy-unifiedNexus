import { Type_for_newMesssageFrom_DB } from "../../../../MessageModule/Components/MessageList/types";

export type Type_for_deleteMessage_forAPI = {
    loginUserName: string,
    itemData: Type_for_newMesssageFrom_DB
};
export type Type_from_returned_delete_API = {
    status: number, updateMessages: Type_for_newMesssageFrom_DB[]
}