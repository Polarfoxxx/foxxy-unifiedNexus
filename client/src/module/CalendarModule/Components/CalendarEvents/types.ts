import { Type_for_newEventFrom_DB } from "../NewEvent";

export type Type_forCalendarEvents = {
    allEvents: Type_for_newEventFrom_DB[]
};


export type Type_for_CalEvents_for_display = {
    title: string,
    typeEvent: string,
    start: {
        date: string,
        time: string
    },
    end: {
        date: string,
        time: string
    }
};

