import { Type_for_weatherForecast } from "../../../../../APIs/openWeatherAPI";


export type Type_forWeatherTemperature = {
    weatherForecastList: Array<Type_for_weatherForecast>
};

export type Type_forData_forTemperatureGraph = {
    name: string;
    temperature: number;
    feels_like: number
};

export type Type_forTemperatureGraphProps = {
    weatherDataFor_temperature: Array<Type_forData_forTemperatureGraph>;
};