import { Type_for_newMesssageFrom_DB } from "../../module/MessageModule";
import { Type_for_WeatherData } from "../../module/HeaderModule";
import { Type_for_dayAndHoliday } from "../../module/CalendarModule";
import { Type_for_newEventFrom_DB } from "../../module/CalendarModule";

//! types pre mapStateToProps pre ponuknutie stavu universalne------------
export type Type_RootState = {
  userLogData: {
    userName: string;
    appTheme: string;
  };
  allEvents: Type_for_newEventFrom_DB[],
  allMessages: Type_for_newMesssageFrom_DB[];
  weatherData: Type_for_WeatherData;
  allHoliday: Type_for_dayAndHoliday[]
};


//! types pre mapDispatchToProps pre nastavenie stavu-------------------
//! types pre userLoginData
export type Type_SetUserLogDataAction = {
  type: "setUser_userName";
  payload: {
    userName: string;
    appTheme: string;
  };
};

//! types pre userEvent
export type Type_SetEventDataAction = {
  type: "setAll_event";
  payload: Type_for_newEventFrom_DB[];
}

//! types pre userMessageList
export type Type_SetMessageDataAction = {
  type: "setAll_message";
  payload: Type_for_newMesssageFrom_DB[];
};

//! types pre weatherData
export type Type_SetWeatherDataAction = {
  type: "setWeatherData";
  payload: Type_for_WeatherData;
};

//! types pre holidays
export type Type_SetHolidayDataAction = {
  type: "setHoliday";
  payload: Type_for_dayAndHoliday[];
};