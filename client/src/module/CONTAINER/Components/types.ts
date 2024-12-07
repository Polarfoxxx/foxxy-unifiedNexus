import { Type_for_newEventFrom_DB } from "../../CalendarModule";
import { Type_for_newMesssageFrom_DB } from "../../MessageModule";

export type Type_forProvider = {
    children: JSX.Element | JSX.Element[]
};

export type Type_for_appDataFromProvider = {
    userLogData: {
        userName: string,
        appTheme: string
    },
    allEvents: Type_for_newEventFrom_DB[],
    allMessage: Type_for_newMesssageFrom_DB[]
};

export type Type_forContext = {
    appData: Type_for_appDataFromProvider,
    setAppData: React.Dispatch<React.SetStateAction<Type_for_appDataFromProvider>>
};

