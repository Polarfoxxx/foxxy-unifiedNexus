import { Type_for_weatherForecast } from "../../../../APIs/openWeatherAPI";

export type Type_forWeatherPressure = {
    weatherForecastList: Array<Type_for_weatherForecast>
};

export type Type_forData_forPressure = {
    name: string;
    pressure: number;
};

export type Type_forPressueGraphProps = {
    weatherDataFor_pressure: Array<Type_forData_forPressure>;
};