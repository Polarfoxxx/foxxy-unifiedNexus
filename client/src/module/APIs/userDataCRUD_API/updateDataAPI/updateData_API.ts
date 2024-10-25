import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_updateData_forAPI, Type_from_returned_update_API } from "./types";


async function updateData_API(props: Type_for_updateData_forAPI): Promise<Type_from_returned_update_API | undefined> {
    if (props.itemData) {
        const data_forApi = {
            userName: props.loginUserName,
            delete_Data: props.itemData,
        };
        try {
            const respo_data = await axios.put(`${BASE_URL}update/data`, data_forApi);
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

export default updateData_API;
