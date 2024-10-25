import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_readData_API } from "./types";

async function readData_API(): Promise<Type_for_readData_API | undefined> {

    try {
        const reqData = await axios.get(`${BASE_URL}read/data`, {
            withCredentials: true
        });
        return {
            status: reqData.status,
            data: {
                events: reqData.data.events,
                messages: reqData.data.message,
                theme: reqData.data.theme
            }
        };
    } catch (error) {
        return undefined;
    };
};

export default readData_API;
