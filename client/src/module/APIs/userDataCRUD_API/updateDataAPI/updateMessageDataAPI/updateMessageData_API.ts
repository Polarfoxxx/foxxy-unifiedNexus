import axios from "axios";
import { BASE_URL } from "../../../BASE_URL";
import {
    Type_for_updateMessageData_forAPI,
    Type_from_returned_updateMessage_API
} from "./types";


async function updateMessageData_API(props: Type_for_updateMessageData_forAPI): Promise<Type_from_returned_updateMessage_API | undefined> {
    if (props.itemData) {
        const data_forApi = {
            userName: props.loginUserName,
            update_Data: props.itemData,
        };
        try {
            const respo_data = await axios.put(`${BASE_URL}updateMessage/data`, data_forApi, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log(respo_data);

            return {
                status: respo_data.status,
                updateMessages: respo_data.data.updateMessages
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default updateMessageData_API;
