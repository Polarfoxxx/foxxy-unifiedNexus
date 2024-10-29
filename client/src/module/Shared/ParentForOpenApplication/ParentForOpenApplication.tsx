import { useNavigate } from "react-router-dom";
import React from "react";
import { ButtonComponent } from 'foxxy-package';
import "foxxy-package/dist/foxxy_package_dis.css"

export type Type_for_ParentAllMiniContent = {
    children: JSX.Element
};


function ParentForOpenApplication(props: Type_for_ParentAllMiniContent): JSX.Element {
    const NAVIGATE = useNavigate();

    const handleClickHomePage = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
            NAVIGATE("/Content");
        };
    };

    return (
        <div
            onClick={handleClickHomePage}
            className=' fixed bg-thems-parentComponentBackg left-0 top-0 bottom-0 right-0 z-[998] flex items-center justify-center'>
            <div className="xl:w-[80%] w-full h-full xl:h-[75%] overflow-y-scroll lg:overflow-hidden rounded-none xl:rounded-[20px] relative">
                <div className=" w-auto h-auto absolute right-[5px] top-[0px]">
                    <ButtonComponent.ButtonBox>
                        <ButtonComponent.Button
                            sm_button
                            button_text='close'
                            variant_btn='alertButton'
                            onClick={handleClickHomePage} />
                    </ButtonComponent.ButtonBox>
                </div>
                {
                    props.children
                }
            </div>
        </div>
    )
};

export default ParentForOpenApplication;