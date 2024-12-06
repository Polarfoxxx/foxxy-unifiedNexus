import React from "react";
import { Type_forForecastGraphWeatherAndForecastIconWeather } from "../ForecastGraphWeather";

function ForecastIconWeather({
    weatherForecastList
}: Type_forForecastGraphWeatherAndForecastIconWeather): JSX.Element {

    return (
        <div className="relative w-[98%] h-full ">
            <div className="absolute top-0 left-0 w-full h-full flex flex-row gap-2 overflow-x-scroll pl-[15px] pr-[15px] justify-start items-center">
                {weatherForecastList.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[150px] h-[120px] border border-black flex flex-col items-center justify-center p-1 rounded-[5px] bg-slate-50">
                        <div className=" w-full h-full flex items-center justify-center">
                            <p className="text-[13px]">{new Date(item.dt_txt).toLocaleString()}</p>
                        </div>
                        <div className=" w-full h-full flex flex-row justify-center items-center">
                            <div className=" w-full h-full flex items-center justify-center">
                                <img src={`https://openweathermap.org/img/wn/${item.weather.icon}@2x.png`} alt="weather icon" />
                            </div>
                            <div className=" w-full h-full flex items-center justify-center text-[20px] font-oswald font-bold">
                                <span>
                                    <h1>{item.main.temp}</h1>
                                </span>
                                <span>
                                    °C
                                </span>
                            </div>
                        </div>
                        <div className=" w-full h-full">

                        </div>
                        <div className=" w-full h-full">

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastIconWeather;