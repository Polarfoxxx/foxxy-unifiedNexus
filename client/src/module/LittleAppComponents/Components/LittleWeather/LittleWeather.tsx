import React from "react";

function LittleWeather(): JSX.Element {

    
    return (
        <div className=" w-full h-full bg-thems-appThemeColor flex items-center justify-center">
            <div className=" w-[100%] h-full flex items-center justify-center">
                <h1 className=" text-[60px]  text-thems-defaultTextColor font-dancing">
                    Weather
                </h1>
            </div>
        </div>
    );
};

export default LittleWeather;
