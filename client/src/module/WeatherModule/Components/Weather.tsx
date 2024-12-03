import React from "react";
import { NavigateBarInOpenApplication } from "../../Shared";
import { useSelector, useDispatch } from 'react-redux';
import { Type_RootState } from "../../../redux";
import { forecastWeatherAPI } from "../../APIs/openWeatherAPI";
import { NavLink, Routes, Route } from "react-router-dom";
import { Type_for_weatherForecast } from "../../APIs/openWeatherAPI";
import {
    WeatherPressure,
    WeatherTepmerature,
    WeatherDayTepmerature,
    WeatherWind,
    WeatherClouds,
    WeatherRain
} from "./routes";
const Compass = require("cardinal-direction");

function Weather(): JSX.Element {
    const weatherInfo = useSelector((state: Type_RootState) => state.weatherData.weatherData);
    const timeUpdateweatherInfo = useSelector((state: Type_RootState) => state.weatherData.timeUpdateWeatherData);
    const dispatch = useDispatch();
    const [weatherForecastList, setWeatherForecastList] = React.useState<Array<Type_for_weatherForecast>>([]);

    React.useEffect(() => {
        loadForecastWeather();
    }, []);

    async function loadForecastWeather() {
        const coutryID = weatherInfo.id;
        try {
            const responseForecast = await forecastWeatherAPI(coutryID);
            if (responseForecast) {
                setWeatherForecastList(responseForecast);
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
                <div className=' w-[100%] xl:w-[75px] h-full items-center justify-center '>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=" w-[100%] h-[100%] items-center justify-center flex flex-col">
                    <div className=" w-full h-[230px] flex items-center justify-center flex-row">
                        <div className=" w-full h-full flex items-center justify-start">
                            <div className=" w-[450px] h-full flex items-center justify-center flex-col">
                                <div className=" w-full min-h-[20%] h-[20%] flex items-center justify-center text-[20px] gap-3 font-oswald font-bold">
                                    <div>
                                        <h3>{weatherInfo.name}</h3>
                                    </div>
                                    <div>
                                        <h3>{weatherInfo.country}</h3>
                                    </div>
                                    <div>
                                        <h3>{timeUpdateweatherInfo}</h3>
                                    </div>
                                </div>
                                <div className=" w-full h-[100%] flex items-center justify-start overflow-hidden">
                                    <div className=" h-full flex justify-center items-start relative top-[-50px]">
                                        <img src={weatherInfo.icon} alt="weather icon" />
                                    </div>
                                    <div className=" text-[120px] h-full flex justify-center items-start font-bold font-anta">
                                        <h1 className="leading-[150px]">{weatherInfo.temp}</h1>
                                    </div>
                                    <div className=" h-full flex justify-center items-start text-[40px] font-anta font-bold">
                                        <h1>°C</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-full flex items-center justify-center flex-row">
                            <div className=" w-full h-full flex justify-center items-center">
                                {/* empty block---------------------------*/}
                            </div>
                            <div className=" w-full h-full flex justify-center items-center p-2">
                                <div className=" w-full h-[60%] flex justify-center items-center flex-col font-light text-[17px]">
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Feels like:</span>
                                        <span className=" font-bold"> {weatherInfo.feels_like}</span>
                                        <span className=" text-[13px]">°C</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-cente gap-1">
                                        <span className="">Humidity:</span>
                                        <span className=" font-bold">{weatherInfo.humidity}</span>
                                        <span className=" text-[13px]">%</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Description:</span>
                                        <span className=" font-bold">{weatherInfo.description}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Pressure:</span>
                                        <span className=" font-bold">{weatherInfo.pressure}</span>
                                        <span className=" text-[13px]">hPa</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Visibility:</span>
                                        <span className=" font-bold">{weatherInfo.visibility}</span>
                                        <span className=" text-[13px]">m</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Wind:</span>
                                        <span className=" font-bold">{weatherInfo.speed}</span>
                                        <span className=" text-[13px]">m/s</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Gust:</span>
                                        <span className=" font-bold">{weatherInfo.gust}</span>
                                        <span className=" text-[13px]">m/s</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-start items-center gap-1">
                                        <span>Cardinal directions:</span>
                                        <span className=" font-bold">{Compass.cardinalFromDegree(weatherInfo.visibility)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-[100%] min-h-[280px] flex items-center justify-center flex-col">
                        <div className=" w-full h-[30px] flex justify-start items-center gap-4 pl-5 text-[14px] font-oswald text-thems-defaultTextColorDark">
                            <div className=" w-[150px] h-[25px] flex items-center justify-center bg-thems-appThemeColorTertiary rounded-md overflow-hidden hover:bg-thems-appThemeColor hover:text-thems-defaultTextColor">
                                <NavLink
                                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    className={({ isActive }) => isActive ? "bg-thems-appThemeColor text-thems-defaultTextColor" : ""}
                                    to="TemperatureForecast">
                                    Temperature hours
                                </NavLink>
                            </div>
                            <div className=" w-[150px] h-[25px] flex items-center justify-center bg-thems-appThemeColorTertiary rounded-md overflow-hidden hover:bg-thems-appThemeColor hover:text-thems-defaultTextColor">
                                <NavLink
                                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    className={({ isActive }) => isActive ? "bg-thems-appThemeColor text-thems-defaultTextColor" : ""}
                                    to="TemperatureDayForecast">
                                    Temperature day
                                </NavLink>
                            </div>
                            <div className=" w-[150px] h-[25px] flex items-center justify-center bg-thems-appThemeColorTertiary rounded-md overflow-hidden hover:bg-thems-appThemeColor hover:text-thems-defaultTextColor">
                                <NavLink
                                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    className={({ isActive }) => isActive ? "bg-thems-appThemeColor text-thems-defaultTextColor" : ""}
                                    to="PressureForecast">
                                    Pressure
                                </NavLink>
                            </div>
                            <div className=" w-[150px] h-[25px] flex items-center justify-center bg-thems-appThemeColorTertiary rounded-md overflow-hidden hover:bg-thems-appThemeColor hover:text-thems-defaultTextColor">
                                <NavLink
                                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    className={({ isActive }) => isActive ? "bg-thems-appThemeColor text-thems-defaultTextColor" : ""}
                                    to="WindForecast">
                                    Wind
                                </NavLink>
                            </div>
                            <div className=" w-[150px] h-[25px] flex items-center justify-center bg-thems-appThemeColorTertiary rounded-md overflow-hidden hover:bg-thems-appThemeColor hover:text-thems-defaultTextColor">
                                <NavLink
                                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    className={({ isActive }) => isActive ? "bg-thems-appThemeColor text-thems-defaultTextColor" : ""}
                                    to="RainForecast">
                                    Rain
                                </NavLink>
                            </div>
                            <div className=" w-[150px] h-[25px] flex items-center justify-center bg-thems-appThemeColorTertiary rounded-md overflow-hidden hover:bg-thems-appThemeColor hover:text-thems-defaultTextColor">
                                <NavLink
                                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                                    className={({ isActive }) => isActive ? "bg-thems-appThemeColor text-thems-defaultTextColor" : ""}
                                    to="CloudsForecast">
                                    Clouds
                                </NavLink>
                            </div>
                        </div>
                        <div className=" w-[100%] h-[250px] ">
                            <Routes>
                                <Route
                                    path="TemperatureForecast"
                                    element={
                                        <WeatherTepmerature weatherForecastList={weatherForecastList} />
                                    } />
                                <Route
                                    path="TemperatureDayForecast"
                                    element={
                                        <WeatherDayTepmerature weatherForecastList={weatherForecastList} />
                                    } />
                                <Route
                                    path="PressureForecast"
                                    element={
                                        <WeatherPressure weatherForecastList={weatherForecastList} />
                                    } />
                                <Route
                                    path="WindForecast"
                                    element={
                                        <WeatherWind weatherForecastList={weatherForecastList} />
                                    } />
                                <Route
                                    path="RainForecast"
                                    element={
                                        <WeatherRain weatherForecastList={weatherForecastList} />
                                    } />
                                <Route
                                    path="CloudsForecast"
                                    element={
                                        <WeatherClouds weatherForecastList={weatherForecastList} />
                                    } />
                            </Routes>
                        </div>
                    </div>
                    <div className=" w-full h-full flex items-center justify-center ">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;