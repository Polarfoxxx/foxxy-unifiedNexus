import axios from "axios";
import { Type_for_weatherForecast } from "./types";

async function forecastWeatherAPI(locationID: number): Promise<Array<Type_for_weatherForecast> | undefined> {
    const baseUrl = "http://api.openweathermap.org/data/2.5";
    const apiKey = process.env.REACT_APP_API_KEY_FOR_WEATHER_API;
    const kelvin = 273.15;

    try {
        const responseForecast = await axios.get(`${baseUrl}/forecast?id=${locationID}&appid=${apiKey}`);
        const forecastList = responseForecast.data.list as Array<any>;
        console.log(responseForecast);
        
        const forecastReturnedData: Array<Type_for_weatherForecast> = forecastList.map((item: any) => {
            return {
                dt_txt: item.dt_txt,
                id: responseForecast.data.city.id,
                name: responseForecast.data.city.name,
                sunrise: responseForecast.data.city.sunrise,
                sunset: responseForecast.data.city.sunset,
                timezone: responseForecast.data.city.timezone,
                clouds: item.clouds.all,
                main: {
                    feels_like: Math.round((item.main.feels_like - kelvin) * 10) / 10,
                    grnd_level: item.main.grnd_level,
                    humidity: item.main.humidity,
                    pressure: item.main.pressure,
                    sea_level: item.main.sea_level,
                    temp: Math.round((item.main.temp - kelvin) * 10) / 10,
                    temp_kf: Math.round((item.main.temp_kf - kelvin) * 10) / 10,
                    temp_max: Math.round((item.main.temp_max - kelvin) * 10) / 10,
                    temp_min: Math.round((item.main.temp_min - kelvin) * 10) / 10,
                },
                rain3h: item.rain?.['3h'] | 0,
                visibility: item.visibility,
                weather: {
                    description: item.weather[0].description,
                    icon: item.weather[0].icon,
                    id: item.weather[0].id,
                    main: item.weather[0].main
                },
                wind: {
                    deg: item.wind.deg,
                    gust: item.wind.gust,
                    speed: item.wind.speed
                }
            };
        });
        return forecastReturnedData;
    } catch (error) {
        console.log(error);
        return undefined;
    };
};

export default forecastWeatherAPI;