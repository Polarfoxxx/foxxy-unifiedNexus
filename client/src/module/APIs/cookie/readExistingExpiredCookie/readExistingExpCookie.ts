import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_readExistingExpCookie_returned } from "..";

async function readExistingExpCookie(): Promise<Type_for_readExistingExpCookie_returned | undefined> {

    try {
        const cookieExpired = await axios.get(`${BASE_URL}cookies-exp/read_Exp_Existing_Cookie`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });
        const cookieData = {
            isValid: cookieExpired.data.cookieExp.valid,
            cookie_data: {
                appTheme: cookieExpired.data.theme,
                userName: cookieExpired.data.userName
            }
        };
        return cookieData
    }
    catch (error) {
        return undefined
    };
};

export default readExistingExpCookie;