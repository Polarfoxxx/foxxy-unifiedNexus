import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

async function updateCookie(theme: string): Promise<number> {
    try {
        const response = await axios.post(`${BASE_URL}cookies-update/update_Cookie`, { theme }, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);
        
        return response.status;
    } catch (error) {
        console.error("Error updating cookie:", error);
        return 0;
    }
}

export default updateCookie;
