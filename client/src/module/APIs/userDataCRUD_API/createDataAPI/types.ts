import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { Type_for_saveDataTheme } from "../../../HeaderModule";
import { Type_for_newMessageFor_API } from "../../../MessageModule/Components/MessageList/types";

export type Type_for_createData_API = {
    loginUserName: string,
    create_data: Type_for_newEventFor_API | Type_for_saveDataTheme | Type_for_newMessageFor_API
};