/* event */
export type Type_for_newEventFor_API = {
    event: {
        start: Date;
        end: Date;
        title: string;
        comment: string;
    }
};

export type Type_for_newEventFrom_DB = {
    start: Date;
    end: Date;
    title: string;
    comment: string;
};

