
export type Type_for_dayAndHoliday = {
    country: string,
    date: string | Date,
    day: string,
    name: string
};

export type Type_for_holiday = {
    allHoliday: Type_for_dayAndHoliday[]
};