import axios from "axios";

async function randomFact() {
    const apiKey = process.env.REACT_APP_NINJAS_API;

    try {
        const reqData = await axios.get("https://api.api-ninjas.com/v1/facts", {
            headers: { 'X-Api-Key': apiKey },
        });

        console.log(reqData.data);  // Přístup k datům

    } catch (error) {
        console.error("Error fetching data:", error);
        return undefined;
    }
};

export default randomFact;
