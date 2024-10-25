import axios from "axios";
import { BASE_URL } from "../../BASE_URL";


/* --------------------------------------------------------------------------------------- */
async function logOutUser_API(): Promise<number | undefined> {

  try {
    const response = await axios.post(`${BASE_URL}logOut/user`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
console.log(response);

    return response.status;

  } catch (error) {
    return 0
  };
};

export default logOutUser_API;



