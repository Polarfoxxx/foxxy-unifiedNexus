import { Type_for_newMesssageFrom_DB } from "../../module/MessageModule";
import { Type_for_newEventFrom_DB } from "../../module/CalendarModule";

export const defaultValueforUserData = {
    userName: '',
    appTheme: ''
};

export const defaultValueForCalendarEvent: Type_for_newEventFrom_DB[] = [];

export const defaultValueforMessage: Type_for_newMesssageFrom_DB[] = [];

export const defaultWeatherData = {
    clouds: 0,
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    name: "",
    country: "",
    sunrise: 0,
    sunset: 0,
    timezone: 0,
    visibility: 0,
    description: "",
    icon: "",
    main: "",
    deg: 0,
    gust: 0,
    speed: 0,
    lon: 0,
    lat: 0,
    id: 0,
    weather: ""
};

export const defaultAllHolidayData = {
    country: "",
    date: "",
    day: "",
    name: ""
}
