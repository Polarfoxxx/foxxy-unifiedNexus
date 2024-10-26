import axios from "axios";
import { BASE_URL } from "../../../BASE_URL";
import {
    Type_for_deleteEvent_forAPI,
    Type_from_returned_deleteEvent_API
} from "./types";


async function deleteEvent_API(props: Type_for_deleteEvent_forAPI): Promise<Type_from_returned_deleteEvent_API | undefined> {
    if (props.itemData) {
        const data_forApi = {
            userName: props.user,
            delete_Data: props.itemData,
        };
        try {
            const respo_data = await axios.delete(`${BASE_URL}deleteEvent/data`, {
                params: data_forApi,
            });
            return {
                status: respo_data.status,
                updateEvent: respo_data.data.updateEvents
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default deleteEvent_API;
