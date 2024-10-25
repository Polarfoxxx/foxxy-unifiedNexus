import React from "react";

function LittleWeather(): JSX.Element {

    
    return (
        <div className=" w-full h-full bg-thems-littleComponent_Background flex items-center justify-center  shadow-miniApp">
            <div className=" w-[100%] h-full flex items-center justify-center">
                <h1 className=" text-[45px]  text-thems-defaultTextColorDark">
                    Weather
                </h1>
            </div>
            <div className=" w-full h-auto">
                <img
                    className=" w-[100%]"
                    src="image/weather.png"
                    alt="weather" />
            </div>
        </div>
    );
};

export default LittleWeather;
