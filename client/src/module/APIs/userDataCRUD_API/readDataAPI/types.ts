import { Type_for_newEventFrom_DB } from "../../../CalendarModule";
import { Type_for_newMesssageFrom_DB } from "../../../MessageModule";

export type Type_for_readData_API = {
    status: number,
    data: {
        events: Type_for_newEventFrom_DB[],
        messages: Type_for_newMesssageFrom_DB[],
        theme: string
    }
};