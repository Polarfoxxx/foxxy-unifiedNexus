
export type Type_for_LoginUser = {
    userNames: string,
    password: string
};

export type Type_for_data = {
    userName: string,
    appTheme: string,
    userFoto: string
};

export type Type_for_loginPage = {
    setUserLogData: (data: Type_for_data) => void
};
