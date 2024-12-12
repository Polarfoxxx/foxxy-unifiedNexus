import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../APIs/cookie";
import { logOutUser_API } from "../../../APIs/authentificationAPI";
import { ButtonComponent } from 'foxxy-package';
import "foxxy-package/dist/foxxy_package_dis.css";
import { useSelector } from "react-redux";
import { Type_RootState } from "../../../../redux";

function LogOut(): JSX.Element {
    const navigate = useNavigate();
    const userFoto = useSelector((state: Type_RootState) => state.userLogData.userFoto);
    const [show, setShow] = React.useState(false);

    const handleUserImageFocus = (type: boolean): void => {
        setShow(type);
    };

    const handleClickLogOut = React.useCallback((): void => {
        deleteCookie();
        logOutUser_API();
        navigate("/LoginPage");
    }, [navigate]);

    return (
        <div className="w-full h-full flex items-start justify-start pl-[10px] relative ">
            <div
                className="w-[80px] inline-block overflow-hidden relative"
                style={show ? {height: "100px", transition:"0.3s"} : {height: "50px", transition:"0.3s"}}
                onMouseEnter={() => handleUserImageFocus(true)}
                onMouseLeave={() => handleUserImageFocus(false)}>
                <div className="w-full h-[50px] flex items-center justify-center">
                    <div className="w-[40px] h-[40px] overflow-hidden rounded-full cursor-pointer">
                        <img
                            className="w-full h-full object-cover"
                            src={userFoto}
                            alt="userFoto" />
                    </div>
                </div>
                <div className="bg-thems-littleComponent_Background shadow-lg rounded-br-md rounded-bl-md">
                    <ButtonComponent.ButtonBox>
                        <ButtonComponent.Button
                            sm_button
                            button_text='Logout'
                            variant_btn='alertButton'
                            onClick={handleClickLogOut} />
                    </ButtonComponent.ButtonBox>
                </div>
            </div>
        </div>
    );
};

export default LogOut;