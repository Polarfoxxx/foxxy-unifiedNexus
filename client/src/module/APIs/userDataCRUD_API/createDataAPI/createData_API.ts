import axios from "axios";
import { Type_for_createData_API } from "./types";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_newMesssageFrom_DB } from "../../../MessageModule";
import { Type_for_newEventFrom_DB } from "../../../CalendarModule";

/* --------------------------------------------------------------------------------------- */
async function createData_API(props: Type_for_createData_API): Promise<{ status: number, updateMessage: Type_for_newMesssageFrom_DB[] | Type_for_newEventFrom_DB[]} | undefined> {
    if (props.create_data) {
        const dataFor_Api = {
            userName: props.loginUserName,
            save_Data: props.create_data,
        };
        
        try {
            const respo_data = await axios.post(`${BASE_URL}create/data`, dataFor_Api, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        console.log(respo_data);

            return {
                status: respo_data.status,
                updateMessage: respo_data.data.updateAllMessasge
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default createData_API;
