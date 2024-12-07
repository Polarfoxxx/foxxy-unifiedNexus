import React from "react";
import RainGraph from "./RainGraph";
import {
     Type_forData_forRainGraph,
      Type_forWeatherRain 
    } from "./types";
import { services_changeDateToStringFormat } from "../Shared/services";


function WeatherRain(props: Type_forWeatherRain): JSX.Element {
    const weatherForecastList = props.weatherForecastList;


    const weatherDataFor_rain: Array<Type_forData_forRainGraph> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            const { dateString, dayString, timeString } = services_changeDateToStringFormat(item.dt_txt);

            return {
                name: `${dateString} ${dayString} ${timeString}`,
                rain: item.rain3h,
            };
        });
    }, [weatherForecastList]);


    return (
        <div className=" w-full h-full">
            <RainGraph weatherDataFor_rain={weatherDataFor_rain} />
        </div>
    )
};

export default WeatherRain;