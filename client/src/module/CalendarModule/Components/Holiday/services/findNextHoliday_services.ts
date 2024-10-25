import { Type_for_dayAndHoliday } from "../types";

function findNextHoliday(holidays: Type_for_dayAndHoliday[]): Type_for_dayAndHoliday | null {
    const today = new Date();

    if (holidays.length > 0) {
        const holidayDates = holidays.map(holiday => ({
            ...holiday,
            date: new Date(holiday.date)
        }));

        const upcomingHolidays = holidayDates.filter(holiday => holiday.date > today);

        if (upcomingHolidays.length === 0) {
            return null;
        }

        const nextHoliday = upcomingHolidays.reduce((closest, current) => {
            return current.date < closest.date ? current : closest;
        });

        return nextHoliday;
    }
    return null

}
export default findNextHoliday;