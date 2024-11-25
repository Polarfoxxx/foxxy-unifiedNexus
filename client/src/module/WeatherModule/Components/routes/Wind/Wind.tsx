import React from "react";
import TemperatureGraph from "./WindGraph";
import { Type_forData_forWindGraph, Type_forWeatherWind } from "./types";


function WeatherWind(props: Type_forWeatherWind): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

    const weatherDataFor_wind: Array<Type_forData_forWindGraph> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            return {
                name: item.dt_txt,
                wind: item.wind.speed,
            };
        });
    }, [weatherForecastList]);


    return (
        <div className=" w-full h-full">
            <TemperatureGraph weatherDataFor_wind={weatherDataFor_wind} />
        </div>
    )
};

export default WeatherWind;