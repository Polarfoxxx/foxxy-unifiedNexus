import { Type_for_newEventFrom_DB } from "../../../../CalendarModule";

export type Type_for_deleteEvent_forAPI = {
    user: string,
    itemData: {
        title: string,
        comment: string
    }
};

export type Type_from_returned_deleteEvent_API = {
    status: number,
    updateEvent: Type_for_newEventFrom_DB[]
}