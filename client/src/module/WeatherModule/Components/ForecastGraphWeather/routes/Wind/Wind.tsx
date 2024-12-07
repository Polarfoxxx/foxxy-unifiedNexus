import React from "react";
import WindGraph from "./WindGraph";
import {
    Type_forData_forWindGraph,
    Type_forWeatherWind
} from "./types";
import { services_changeDateToStringFormat } from "../Shared/services";


function WeatherWind(props: Type_forWeatherWind): JSX.Element {
    const weatherForecastList = props.weatherForecastList;


    const weatherDataFor_wind: Array<Type_forData_forWindGraph> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            const { dateString, dayString, timeString } = services_changeDateToStringFormat(item.dt_txt);

            return {
                name: `${dateString} ${dayString} ${timeString}`,
                wind: item.wind.speed,
            };
        });
    }, [weatherForecastList]);


    return (
        <div className=" w-full h-full">
            <WindGraph weatherDataFor_wind={weatherDataFor_wind} />
        </div>
    )
};

export default WeatherWind;