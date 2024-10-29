/* event */
export type Type_for_newEventFor_API = {
    event: {
        start: Date;
        end: Date;
        title: string;
        typeEvent: string;
    }
};

export type Type_for_newEventFrom_DB = {
    start: Date;
    end: Date;
    title: string;
    typeEvent: string;
};

