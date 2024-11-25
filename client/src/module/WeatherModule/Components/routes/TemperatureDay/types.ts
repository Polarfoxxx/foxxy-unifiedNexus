import { Type_for_weatherForecast } from "../../../../APIs/openWeatherAPI";


export type Type_forWeatherDayTemperature = {
    weatherForecastList: Array<Type_for_weatherForecast>
};

export type Type_forData_forTemperatureDayGraph = {
    name: string;
    temperature: number;
    feels_like: number
};


export type Type_forTemperatureDayGraphProps = {
    weatherDataFor_dayTemperature: Array<Type_forData_forTemperatureDayGraph>;
};