import React from "react";
import { Type_forProvider } from "./types";
import { Provider } from 'react-redux';
import store from "../../../redux/store/store";


function Container({ children }: Type_forProvider): JSX.Element {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Container;