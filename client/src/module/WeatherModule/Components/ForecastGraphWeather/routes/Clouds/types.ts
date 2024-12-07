import { Type_for_weatherForecast } from "../../../../../APIs/openWeatherAPI";

export type Type_forWeatherClouds = {
    weatherForecastList: Array<Type_for_weatherForecast>
};

export type Type_forData_forCloudsGraph = {
    name: string;
};

export type Type_forCloudsGraphProps = {
    weatherDataFor_clouds: Array<Type_forData_forCloudsGraph>;
};