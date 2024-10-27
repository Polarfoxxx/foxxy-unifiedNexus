import axios from "axios";
import { BASE_URL } from "../../../BASE_URL";
import {
    Type_for_updateUserDataAPI,
    Type_for_updateUserDataAPI_returned
} from "./types";

async function updateUserDataAPI(props: Type_for_updateUserDataAPI): Promise<Type_for_updateUserDataAPI_returned | undefined> {
    if (props) {
        const data_forApi = {
            userName: props.userName,
            updateUserData: props.updateUserData,
        };
        try {
            const respo_data = await axios.put(`${BASE_URL}updateUser/data`, data_forApi, {
                withCredentials: true
            });
            
            return {
                status: respo_data.status,
                updateUserData: respo_data.data.updateUserData
            };
        } catch (error) {
            console.log(error);
            return undefined
        };
    };
};

export default updateUserDataAPI;