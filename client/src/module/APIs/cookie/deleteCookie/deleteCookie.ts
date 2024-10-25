
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";


async function deleteCookie(): Promise<boolean> {

    try {
        await axios.get(`${BASE_URL}cookies-delete/clear-cookie`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    catch (error) {
        console.log(error);
    };
    return false
};


export default deleteCookie;