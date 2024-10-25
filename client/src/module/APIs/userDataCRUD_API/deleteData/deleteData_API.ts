import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_deleteData_forAPI, Type_from_returned_delete_API } from "./types";


async function deleteData_API(props: Type_for_deleteData_forAPI): Promise<Type_from_returned_delete_API | undefined> {
    if (props.itemData) {
        const data_forApi = {
            userName: props.loginUserName,
            delete_Data: props.itemData,
        };
        try {
            const respo_data = await axios.delete(`${BASE_URL}delete/data`, {
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

export default deleteData_API;
