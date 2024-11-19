import React from "react";
import { NavigateBarInOpenApplication } from "../../Shared";
import { useSelector, useDispatch } from 'react-redux';
import { Type_RootState } from "../../../redux";
import { forecastWeatherAPI } from "../../APIs/openWeatherAPI";
import { NavLink, Routes, Route } from "react-router-dom";
import WeatherTepmerature from "./routes/Temperature/Tepmerature";
import { Type_for_weatherForecast } from "../../APIs/openWeatherAPI";


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
                    <h2 className="text-[33px] text-thems-defaultTextColorDark font-oswald ">
                        Weather
                    </h2>
                </div>
            </div>
            {/* content */}
            <div className=" w-full h-full flex flex-row justify-center items-center">
                <div className=' w-[100%] xl:w-[75px] h-full items-center justify-center '>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=" w-[100%] h-[100%] items-center justify-center flex flex-col">
                    <div className=" w-full h-[230px] flex items-center justify-center flex-row">
                        <div className=" w-full h-full flex items-center justify-start">
                            <div className=" w-[450px] h-full flex items-center justify-center flex-col">
                                <div className=" w-full min-h-[20%] h-[20%] flex items-center justify-center text-[20px] gap-3">
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
                                {/* empty block*/}
                            </div>
                            <div className=" w-full h-full flex justify-center items-start p-6">
                                <div className=" w-full h-[60%] flex justify-center items-center flex-col font-light text-[17px]">
                                    <div className=" w-full h-full flex justify-center items-center gap-2">
                                        <span>Feels like:</span>
                                        <span className=" font-bold"> {weatherInfo.feels_like}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-center items-cente gap-2">
                                        <span className="">Humidity:</span>
                                        <span className=" font-bold">{weatherInfo.humidity}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-center items-center gap-2">
                                        <span>Main:</span>
                                        <span className=" font-bold">{weatherInfo.main}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-center items-center gap-2">
                                        <span>Pressure:</span>
                                        <span className=" font-bold">{weatherInfo.pressure}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-[100%] min-h-[280px] flex items-center justify-center bg-slate-100 flex-col">
                        <div className=" w-full h-[30px] bg-slate-200">
                            <NavLink
                                to="Temperature">
                                temp
                            </NavLink>
                        </div>
                        <div className=" w-[100%] h-[250px]">
                            <Routes>
                                <Route
                                    path="Temperature"
                                    element={
                                        <WeatherTepmerature weatherForecastList = {weatherForecastList} />
                                    } />
                                <Route
                                    path="Temperature"
                                    element={
                                        <WeatherTepmerature weatherForecastList = {weatherForecastList} />
                                    } />
                            </Routes>
                        </div>
                    </div>
                    <div className=" w-full h-full flex items-center justify-center bg-slate-300">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;