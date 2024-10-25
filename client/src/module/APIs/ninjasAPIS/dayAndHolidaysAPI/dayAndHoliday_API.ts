import axios from "axios";
import { Type_for_dayAndHoliday } from "../../../CalendarModule";

async function dayAndHoliday(): Promise<Type_for_dayAndHoliday[] | undefined> {
    const apiKey = process.env.REACT_APP_NINJAS_API;
    const country = "SK";
    const year = "2024";

    try {
        const reqData = await axios.get(`https://api.api-ninjas.com/v1/holidays?country=${country}&year=${year}`, {
            headers: { 'X-Api-Key': apiKey },
        });
        const allHoliday: [] = reqData.data
        const returnedData = allHoliday.map((item: Type_for_dayAndHoliday) => {
            return {
                country: item.country,
                date: item.date,
                day: item.day,
                name: item.name
            };
        });
        return returnedData

    } catch (error) {
        console.error("Error fetching data:", error);
        return undefined;
    }
}

export default dayAndHoliday;
