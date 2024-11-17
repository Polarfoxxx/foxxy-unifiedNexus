import axios from "axios";

async function forecastWeatherAPI(locationID: number): Promise<any> {
    const baseUrl = "http://api.openweathermap.org/data/2.5";
    const apiKey = process.env.REACT_APP_API_KEY_FOR_WEATHER_API;

    try {
        const responseData = await axios.get(`${baseUrl}/forecast?id=${locationID}&appid=${apiKey}`);
        return responseData;

    } catch (error) {
        return undefined;
    };
};

export default forecastWeatherAPI;