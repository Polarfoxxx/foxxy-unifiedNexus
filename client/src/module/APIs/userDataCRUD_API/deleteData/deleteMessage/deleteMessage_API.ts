import axios from "axios";
import { BASE_URL } from "../../../BASE_URL";
import {
    Type_for_deleteMessage_forAPI,
    Type_from_returned_delete_API
} from "./types";



async function deleteMessage_API(props: Type_for_deleteMessage_forAPI): Promise<Type_from_returned_delete_API | undefined> {
    if (props.itemData) {
        const data_forApi = {
            userName: props.loginUserName,
            delete_Data: props.itemData,
        };
        try {
            const respo_data = await axios.delete(`${BASE_URL}deleteMessage/data`, {
                params: data_forApi,
            });
            return {
                status: respo_data.status,
                updateMessages: respo_data.data.updateMessages
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default deleteMessage_API;
