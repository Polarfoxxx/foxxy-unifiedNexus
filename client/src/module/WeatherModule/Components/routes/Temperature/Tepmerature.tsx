import React from "react";
import TemperatureGraph from "./TemperatureGraph";
import { Type_forWeatherTemperature, Type_forData_forTemperatureGraph } from "./types";
import { services_changeDateToStringFormat } from "../Shared/services";


function WeatherTepmerature(props: Type_forWeatherTemperature): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

    const weatherDataFor_temperature: Array<Type_forData_forTemperatureGraph> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            const { dateString, dayString, timeString } = services_changeDateToStringFormat(item.dt_txt);

            return {
                name: `${dateString} ${dayString} ${timeString}`,
                temperature: item.main.temp,
                feels_like: item.main.feels_like
            };
        });
    }, [weatherForecastList]);

    return (
        <div className=" w-full h-full">
            <TemperatureGraph weatherDataFor_temperature={weatherDataFor_temperature} />
        </div>
    )
};

export default WeatherTepmerature;