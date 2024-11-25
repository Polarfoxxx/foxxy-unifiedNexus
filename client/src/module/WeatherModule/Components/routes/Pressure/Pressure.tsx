import React from "react";
import PressureGraph from "./PressureGraph";
import { Type_forData_forPressure, Type_forWeatherPressure } from "./types";


function WeatherPressure(props: Type_forWeatherPressure): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

    const weatherDataFor_pressure: Array<Type_forData_forPressure> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            return {
                name: item.dt_txt,
                pressure: item.main.pressure,
            };
        });
    }, [weatherForecastList]);

    return (
        <div className=" w-full h-full">
            <PressureGraph weatherDataFor_pressure={weatherDataFor_pressure} />
        </div>
    )
};

export default WeatherPressure;