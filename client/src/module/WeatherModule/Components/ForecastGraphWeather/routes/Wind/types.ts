import { Type_for_weatherForecast } from "../../../../../APIs/openWeatherAPI";

export type Type_forWeatherWind = {
    weatherForecastList: Array<Type_for_weatherForecast>
};

export type Type_forData_forWindGraph = {
    name: string;
};

export type Type_forWindGraphProps = {
    weatherDataFor_wind: Array<Type_forData_forWindGraph>;
};