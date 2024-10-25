import React from "react";
import { Type_RootState } from "../../../../redux";
import { useSelector } from "react-redux";

function WeatherInfo(): JSX.Element {
    const weather = useSelector((state: Type_RootState) => state.weatherData);

    return (
        <div className=" w-full h-[80%] flex items-center justify-center  text-thems-defaultTextColorDark gap-2">
            <div className=" w-[100%] h-[100%] flex items-center justify-center">
                <h1 className=" text-[16px]">
                    {weather.name}
                </h1>
            </div>
            <div className=" w-[100%] h-[100%] flex items-center justify-end flex-row">
                <h1 className=" text-[18px] font-bold">
                    {weather.temp}
                </h1>
                <span className=" text-[20px]">
                    °C
                </span>
            </div>
            <div className=" w-[100%] h-[100%] flex items-center justify-start">
                <img
                    className=" w-[100%] h-[auto]"
                    src={weather.icon} alt="weather icon" />
            </div>
        </div>
    );
};


export default WeatherInfo;
