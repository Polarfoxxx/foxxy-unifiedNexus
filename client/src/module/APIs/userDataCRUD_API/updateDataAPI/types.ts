import { Type_for_newMesssageFrom_DB } from "../../../MessageModule";

export type Type_for_updateData_forAPI = {
    loginUserName: string,
    itemData: Type_for_newMesssageFrom_DB
};

export type Type_from_returned_update_API = {
    status: number, updateMessages: Type_for_newMesssageFrom_DB[]
};
