import React from "react";
import TemperatureGraph from "./TemperatureDayGraph";
import { Type_forData_forTemperatureDayGraph, Type_forWeatherDayTemperature } from "./types";


function WeatherDayTepmerature(props: Type_forWeatherDayTemperature): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

    const weatherDataFor_dayTemperature: Array<Type_forData_forTemperatureDayGraph> = React.useMemo(() => {
        const dayForecast = weatherForecastList.filter(item => new Date(item.dt_txt).getHours() === 12);
        
        return dayForecast.map(item => {
            return {
                name: item.dt_txt,
                temperature: item.main.temp,
                feels_like: item.main.feels_like
            };
        });
    }, [weatherForecastList]);
    

    return (
        <div className=" w-full h-full">
            <TemperatureGraph weatherDataFor_dayTemperature={weatherDataFor_dayTemperature} />
        </div>
    )
};

export default WeatherDayTepmerature;