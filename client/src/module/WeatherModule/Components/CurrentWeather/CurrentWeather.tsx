import React from "react";
import { Type_for_WeatherData } from "../../../HeaderModule";
const Compass = require("cardinal-direction");

function CurrentWeather({
    weatherData,
    timeUpdateWeatherData
}: Type_for_WeatherData): JSX.Element {

    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-[80%] h-full flex items-center justify-start">
                <div className=" w-[450px] h-full flex items-center justify-center flex-col">
                    <div className=" w-full min-h-[20%] h-[20%] flex items-center justify-center text-[20px] gap-3 font-oswald font-bold">
                        <div>
                            <h3>{weatherData.name}</h3>
                        </div>
                        <div>
                            <h3>{weatherData.country}</h3>
                        </div>
                        <div>
                            <h3>{timeUpdateWeatherData}</h3>
                        </div>
                    </div>
                    <div className=" w-full h-[100%] flex items-center justify-start overflow-hidden">
                        <div className=" h-full flex justify-center items-start relative top-[-50px]">
                            <img src={weatherData.icon} alt="weather icon" />
                        </div>
                        <div className=" text-[120px] h-full flex justify-center items-start font-bold font-anta">
                            <h1 className="leading-[150px]">{weatherData.temp}</h1>
                        </div>
                        <div className=" h-full flex justify-center items-start text-[40px] font-anta font-bold">
                            <h1>°C</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-full flex items-center justify-center flex-row">
                <div className=" w-[30%] h-full flex justify-center items-center ">
                    {/* empty block---------------------------*/}
                </div>
                <div className=" w-full h-full flex justify-center items-center p-2">
                    <div className=" w-full h-[60%] flex justify-center items-center flex-row font-light text-[17px]">
                        <div className=" w-full h-full flex flex-col justify-center items-center">
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Feels like:</span>
                                <span className=" font-bold"> {weatherData.feels_like}</span>
                                <span className=" text-[13px]">°C</span>
                            </div>
                            <div className=" w-full h-full flex justify-start items-cente gap-1">
                                <span className="">Humidity:</span>
                                <span className=" font-bold">{weatherData.humidity}</span>
                                <span className=" text-[13px]">%</span>
                            </div>
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Description:</span>
                                <span className=" font-bold">{weatherData.description}</span>
                            </div>
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Pressure:</span>
                                <span className=" font-bold">{weatherData.pressure}</span>
                                <span className=" text-[13px]">hPa</span>
                            </div>
                        </div>
                        <div className=" w-full h-full flex flex-col justify-center items-center">
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Wind:</span>
                                <span className=" font-bold">{weatherData.speed}</span>
                                <span className=" text-[13px]">m/s</span>
                            </div>
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Gust:</span>
                                <span className=" font-bold">{weatherData.gust}</span>
                                <span className=" text-[13px]">m/s</span>
                            </div>
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Cardinal directions:</span>
                                <span className=" font-bold">{Compass.cardinalFromDegree(weatherData.visibility)}</span>
                            </div>
                            <div className=" w-full h-full flex justify-start items-center gap-1">
                                <span>Visibility:</span>
                                <span className=" font-bold">{weatherData.visibility}</span>
                                <span className=" text-[13px]">m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;