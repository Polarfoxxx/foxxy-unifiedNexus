export type type_for_loginUser_API = {
    userNames: string,
    password: string
};

export type type_from_loginUser_API_returned = {
    userName: string,
    status: number,
    jwt: string,
    theme: string
};