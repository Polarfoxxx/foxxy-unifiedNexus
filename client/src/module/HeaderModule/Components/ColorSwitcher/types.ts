import { Type_for_data } from "../../../AuthentificationModule";

export type Type_for_saveDataTheme = {
    custom: {
        theme: string
    }
};

export type Type_for_colorSwitcher = {
    themedDivRef: React.MutableRefObject<HTMLDivElement | null>,
    appTheme: string,
    userName: string,
    setUserLogData: (data: Type_for_data) => void;
};