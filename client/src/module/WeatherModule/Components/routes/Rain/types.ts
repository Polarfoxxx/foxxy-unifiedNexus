import { Type_for_weatherForecast } from "../../../../APIs/openWeatherAPI";

export type Type_forWeatherRain = {
    weatherForecastList: Array<Type_for_weatherForecast>
};

export type Type_forData_forRainGraph = {
    name: string;
};

export type Type_forRainGraphProps = {
    weatherDataFor_rain: Array<Type_forData_forRainGraph>;
};