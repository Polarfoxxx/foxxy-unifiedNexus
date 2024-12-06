import React from "react";
import { NavigateBarInOpenApplication } from "../../Shared";
import { useSelector, useDispatch } from 'react-redux';
import { Type_RootState } from "../../../redux";
import { forecastWeatherAPI } from "../../APIs/openWeatherAPI";
import { useNavigate } from "react-router-dom";
import { Type_for_weatherForecast } from "../../APIs/openWeatherAPI";
import {
    CurrentWeather,
    ForecastGraphWeather,
    ForecastIconWeather
} from "./";


function Weather(): JSX.Element {
    const weatherData = useSelector((state: Type_RootState) => state.weatherData.weatherData);
    const timeUpdateWeatherData = useSelector((state: Type_RootState) => state.weatherData.timeUpdateWeatherData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [weatherForecastList, setWeatherForecastList] = React.useState<Array<Type_for_weatherForecast>>([]);

    React.useEffect(() => {
        loadForecastWeather();
    }, []);

    async function loadForecastWeather() {
        const coutryID = weatherData.id;
        try {
            const responseForecast = await forecastWeatherAPI(coutryID);
            if (responseForecast) {
                setWeatherForecastList(responseForecast);
                navigate("TemperatureForecast")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" w-[100%] h-[100%] bg-thems-appThemeColorSecondary flex justify-center items-center flex-col ">
            {/* header */}
            <div className=" w-full h-[7%] flex justify-start items-start bg-thems-appThemeColor">
                <div className=" w-[250px] h-[100%] text-center flex justify-center items-center bg-thems-appThemeColorSecondary">
                    <h2 className="text-[33px] text-thems-defaultTextColorSec font-oswald ">
                        Weather
                    </h2>
                </div>
            </div>
            {/* content--------------------------------- */}
            <div className=" w-full h-full flex flex-row justify-center items-center">
                <div className=' w-[100%] xl:w-[75px] xl:min-w-[75px] h-full items-center justify-center'>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=" w-[100%] h-[100%] items-center justify-center flex flex-col">
                    <div className=" w-full h-[230px] flex items-center justify-center flex-row">
                        <CurrentWeather
                            weatherData={weatherData}
                            timeUpdateWeatherData={timeUpdateWeatherData} />
                    </div>
                    <div className=" w-full h-[100%] min-h-[280px] flex items-center justify-center flex-col">
                        <ForecastGraphWeather
                            weatherForecastList={weatherForecastList} />
                    </div>
                    <div className="relative w-full h-full flex justify-center items-center">
                        <ForecastIconWeather
                            weatherForecastList={weatherForecastList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;