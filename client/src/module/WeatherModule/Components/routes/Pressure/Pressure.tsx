import React from "react";
import PressureGraph from "./PressureGraph";
import { Type_forData_forPressure, Type_forWeatherPressure } from "./types";
import { services_changeDateToStringFormat } from "../Shared/services";


function WeatherPressure(props: Type_forWeatherPressure): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

    const weatherDataFor_pressure: Array<Type_forData_forPressure> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            const { dateString, dayString, timeString } = services_changeDateToStringFormat(item.dt_txt);

            return {
                name: `${dateString} ${dayString} ${timeString}`,
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