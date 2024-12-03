import React from "react";
import CloudsGraph from "./CloudsGraph";
import {
     Type_forData_forCloudsGraph,
      Type_forWeatherClouds 
    } from "./types";
import { services_changeDateToStringFormat } from "../Shared/services";


function WeatherClouds(props: Type_forWeatherClouds): JSX.Element {
    const weatherForecastList = props.weatherForecastList;


    const weatherDataFor_clouds: Array<Type_forData_forCloudsGraph> = React.useMemo(() => {
        return weatherForecastList.map(item => {
            const { dateString, dayString, timeString } = services_changeDateToStringFormat(item.dt_txt);

            return {
                name: `${dateString} ${dayString} ${timeString}`,
                wind: item.clouds,
            };
        });
    }, [weatherForecastList]);


    return (
        <div className=" w-full h-full">
            <CloudsGraph weatherDataFor_clouds={weatherDataFor_clouds} />
        </div>
    )
};

export default WeatherClouds;