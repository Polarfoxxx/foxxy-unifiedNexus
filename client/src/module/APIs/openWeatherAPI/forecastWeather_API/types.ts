export type Type_for_weatherForecast = {
    dt_txt: string,
    id: number,
    name: string
    sunrise: number,
    sunset: number
    timezone: number
    clouds: number,
    main: {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_kf: number,
        temp_max: number
        temp_min: number
    },
    rain3h: number,
    visibility: number,
    weather: {
        description: string,
        icon: string,
        id: number
        main: string
    },
    wind: {
        deg: number,
        gust: number,
        speed: number
    }
};