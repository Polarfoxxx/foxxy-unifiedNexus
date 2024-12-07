import React from "react";
import { Type_forCustomTooltip } from "./services";

function CustomTooltip({
    active,
    payload,
    label,
    weatherParameters,
    units,
    recalculate = 1,
    secWeatherParameters,
    secUnits,
    secRecalculate = 1
}: Type_forCustomTooltip): JSX.Element | null {
    console.log(payload);

    const [date, day, time]: Array<string> = React.useMemo(() => {
        if (label) {
            return label.split(" ");
        } else return ["", "", ""]
    }, [label]);

    const colorCell: string = React.useMemo(() => {
        if (payload && payload[0]) {
            return payload[0].payload.color
        } return ""
    }, [payload]);

    const colorCellSecondary: string = React.useMemo(() => {
        if (payload && payload[1]) {
            return payload[1].payload.secondaryColor
        } return ""
    }, [payload]);



    const secondaryWeatherParameterComponet: JSX.Element | undefined = React.useMemo(() => {
        if (payload && (payload[1] || secUnits)) {
            return (
                <div className="w-auto h-auto flex flex-row text-thems-defaultTextColor">
                    <div className="w-auto h-auto ">
                        <p>
                            {secWeatherParameters || ""}
                        </p>
                    </div>
                    <div className="w-auto h-auto flex justify-center items-center ml-1">
                        <p
                            style={{ color: colorCellSecondary }}
                            className="font-bold">
                            {payload[1]?.value || (payload[0]?.value ?
                                (payload[0].value * secRecalculate).toFixed(1) : "")}
                        </p>
                    </div>
                    <div className="w-auto h-auto mr-[5px] flex justify-center items-center ml-1">
                        <p className="text-[11px]">
                            {secUnits || units}
                        </p>
                    </div>
                </div>
            );
        }
    }, [payload,
        colorCellSecondary,
        secWeatherParameters,
        units,
        secUnits,
        secRecalculate])

    if (active && payload && payload.length) {
        return (
            <div className=" w-auto h-auto bg-thems-appThemeColorSecondary rounded-[5px] border border-black font-oswald">
                {/*  date and time---------------------------------------- */}
                <div className="w-auto h-auto flex flex-col p-[5px]">
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
                {/* value block------------------------------------------ */}
                <div className="w-auto h-auto p-[10px] text-thems-defaultTextColor flex flex-col bg-thems-appThemeColorFourth">
                    <div className="w-auto h-auto flex flex-row">
                        <div className="w-auto h-auto mr-[5px] ">
                            <p>
                                {weatherParameters}
                            </p>
                        </div>
                        <div className="w-auto h-auto">
                            <p
                                style={{ color: colorCell }}
                                className=" font-bold">
                                {(payload[0].value * recalculate).toFixed(1)}
                            </p>
                        </div>
                        <div className="w-auto h-auto flex justify-center items-center ml-1">
                            <p className=" text-[11px]">
                                {units}
                            </p>
                        </div>
                    </div>
                    {/* secondare value block------------------------------- */}
                    {secondaryWeatherParameterComponet && secondaryWeatherParameterComponet}
                </div>
            </div>
        );
    };
    return null;
};

export default CustomTooltip;