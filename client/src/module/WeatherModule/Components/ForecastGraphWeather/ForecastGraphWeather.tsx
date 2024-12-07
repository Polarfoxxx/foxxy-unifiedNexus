import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import {
    WeatherPressure,
    WeatherTepmerature,
    WeatherDayTepmerature,
    WeatherWind,
    WeatherClouds,
    WeatherRain
} from "./routes";
import { Type_forForecastGraphWeatherAndForecastIconWeather } from "./types";

function ForecastGraphWeather({ weatherForecastList }: Type_forForecastGraphWeatherAndForecastIconWeather): JSX.Element {

    return (
        <div className=" w-full h-full">
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
    );
};

export default ForecastGraphWeather;