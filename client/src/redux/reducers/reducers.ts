import { combineReducers } from 'redux';
import {
  Type_SetUserLogDataAction,
  Type_SetMessageDataAction,
  Type_SetWeatherDataAction,
  Type_SetHolidayDataAction,
  Type_SetEventDataAction
} from '..';
import {
  defaultValueforUserData,
  defaultValueforMessage,
  defaultWeatherData,
  defaultAllHolidayData,
  defaultValueForCalendarEvent
} from './defaultValue';

//! REDUKOR FOR CONTROL APP.................
const reducer_CONTROL_APP = (state = defaultValueforUserData, action: Type_SetUserLogDataAction) => {
  switch (action.type) {
    case 'setUser_userName':
      return {
        userName: action.payload.userName,
        appTheme: action.payload.appTheme,
      };
    default:
      return state;
  };
};


//! Reduktor for login user.................
const userLogDataReducer = (state = defaultValueforUserData, action: Type_SetUserLogDataAction) => {
  switch (action.type) {
    case 'setUser_userName':
      return {
        userName: action.payload.userName,
        appTheme: action.payload.appTheme,
      };
    default:
      return state;
  };
};


//! Reduktor for calendar...................
const allEventsReducer = (state = defaultValueForCalendarEvent, action: Type_SetEventDataAction) => {
  switch (action.type) {
    case 'setAll_event':
      return action.payload;
    default:
      return state;
  }
};

//! Reduktor for message.....................
const allMessagesReducer = (state = defaultValueforMessage, action: Type_SetMessageDataAction) => {
  switch (action.type) {
    case 'setAll_message':
      return action.payload;
    default:
      return state;
  }
};

//! Reduktor foor weather.....................
const weatherReducer = (state = defaultWeatherData, action: Type_SetWeatherDataAction) => {
  switch (action.type) {
    case 'setWeatherData':
      return action.payload;
    default:
      return state;
  }
};

//! Reduktor for holiday.....................
const holidayReducer = (state = defaultAllHolidayData, action: Type_SetHolidayDataAction) => {
  switch (action.type) {
    case 'setHoliday':
      return action.payload;
    default:
      return state;
  }
};


//! all reducers...............................
const rootReducer = combineReducers({
  userLogData: userLogDataReducer,
  allEvents: allEventsReducer,
  allMessages: allMessagesReducer,
  weatherData: weatherReducer,
  allHoliday: holidayReducer
});

export default rootReducer;
