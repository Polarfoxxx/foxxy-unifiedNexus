
export type Type_for_WeatherData = {
    clouds: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
    visibility: number;
    description: string;
    icon: string;
    main: string;
    deg: number;
    gust: number;
    speed: number;
    lon: number;
    lat: number;
    id: number;
    weather: string;
};

export type Type_for_weatherInfo = {
    weatherData: Type_for_WeatherData
};