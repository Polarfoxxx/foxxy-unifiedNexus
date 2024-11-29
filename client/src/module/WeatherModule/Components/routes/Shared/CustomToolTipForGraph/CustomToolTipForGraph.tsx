import React from "react";
import { Type_forCustomTooltip } from "./services";

function CustomTooltip({
    active,
    payload,
    label,
    weatherParameters,
    units,
    recalculate,
    secWeatherParameters,
    secUnits,
    secRecalculate
}: Type_forCustomTooltip): JSX.Element | null {

    const [date, day, time] = React.useMemo(() => {
        if (label) {
            return label.split(" ");
        } else return ["", "", ""]
    }, [label]);

    if (active && payload && payload.length) {
        return (
            <div className=" w-auto h-auto bg-thems-appThemeColorSecondary p-[11px] rounded-[5px] border border-black font-oswald">
                <div className="w-auto h-auto flex flex-col">
                    <div className=" w-auto h-auto flex flex-row gap-1">
                        <div className="w-auto h-auto flex justify-center items-center">
                            <p className=" font-bold">
                                {date}
                            </p>
                        </div>
                        <div className="w-auto h-auto flex justify-center items-center">
                            <p className=" font-bold">
                                {day}
                            </p>
                        </div>
                    </div>
                    <div className="w-auto h-auto flex justify-center items-center">
                        <p className=" text-[13px]">
                            {time}
                        </p>
                    </div>
                </div>
                {/* value block----------------------------------------- */}
                <div className="w-auto h-auto bg-thems-appThemeColor p-1 rounded text-thems-defaultTextColor flex flex-col">
                    <div className="w-auto h-auto flex-row">
                        <div className="w-auto h-auto mr-[5px]">
                            <p>
                                {weatherParameters}
                            </p>
                        </div>
                        <div className="w-auto h-auto">
                            <p className=" font-bold">
                                {payload[0].value}
                            </p>
                        </div>
                        <div className="w-auto h-auto flex justify-center items-center ml-1">
                            <p className=" text-[13px]">
                                {units}
                            </p>
                        </div>
                    </div>
                    {
                        payload[1] !== undefined &&
                        <div className=" w-auto h-auto flex flex-row">
                            <div className="w-auto h-auto mr-[5px]">
                                <p>
                                    {secWeatherParameters}
                                </p>
                            </div>
                            <div className="w-auto h-auto">
                                <p className=" font-bold">
                                    {payload[1].value}
                                </p>
                            </div>
                            <div className="w-auto h-auto mr-[5px] flex justify-center items-center ml-1">
                                <p className="text-[13px]">
                                    {units}
                                </p>
                            </div>
                        </div>
                    }
                    {
                        secUnits && secRecalculate
                        &&
                        <div className=" w-auto h-auto flex  flex-row">
                            <div className=" w-auto h-auto">
                                <p className=" font-bold">
                                    {(payload[0].value * secRecalculate).toFixed(1)}
                                </p>
                            </div>
                            <div className="w-auto h-auto mr-[5px] flex justify-center items-center ml-1">
                                <p className="text-[13px]">
                                    {secUnits}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    };
    return null;
};

export default CustomTooltip;