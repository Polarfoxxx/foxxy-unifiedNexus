import React from "react";
import TemperatureGraph from "./TemperatureGraph";
import { Type_for_weatherForecast } from "../../../../APIs/openWeatherAPI";

type Type_forWeatherTemperature = {
    weatherForecastList: Array<Type_for_weatherForecast>
}

export type Type_forData_forTemperatureGraph = {
    temperature: number
}

function WeatherTepmerature(props: Type_forWeatherTemperature): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

    const weatherDataFor_temperature: Array<Type_forData_forTemperatureGraph> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            return {
                name: item.dt_txt,
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

export default WeatherTepmerature