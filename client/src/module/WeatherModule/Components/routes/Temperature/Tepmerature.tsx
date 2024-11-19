import React from "react";
import TemperatureGraph from "./TemperatureGraph";
import { Type_for_weatherForecast } from "../../../../APIs/openWeatherAPI";

type Type_forWeatherTemperature = {
    weatherForecastList: Array<Type_for_weatherForecast>
}

function WeatherTepmerature(props: Type_forWeatherTemperature): JSX.Element {
    const weatherForecastList = props.weatherForecastList;

   const weatherDataFor_temperature : Array<any> = React.useMemo(()=> {
return weatherForecastList.map(item => {
return {
    temperature: item.main.temp
}
})
   },[weatherForecastList])

    return (
        <div className=" w-full h-full">
            <TemperatureGraph weatherDataFor_temperature = {weatherDataFor_temperature}/>
        </div>
    )
};

export default WeatherTepmerature