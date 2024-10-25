import React from "react";
import { Type_RootState } from "../../../../redux";
import { Type_for_dayAndHoliday } from "./types";
import { findNextHoliday } from "./services";
import { useSelector } from "react-redux";


function Holiday(): JSX.Element {
    const [holiday, setHoliday] = React.useState<Type_for_dayAndHoliday>();
    const allHoliday = useSelector((state: Type_RootState) => state.allHoliday);

    React.useMemo(() => {
        const next_holiday = findNextHoliday(allHoliday);
        if (next_holiday !== null)
            setHoliday(next_holiday);
    }, []);

    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-transparent flex justify-start items-start flex-col  p-1">
                <div className=" w-[auto] h-[40px] min-h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-transparent items-center justify-start pl-4">
                    <div className=" w-[110px] text-thems-defaultTextColor  flex items-center justify-center bg-thems-appThemeColor rounded-[2px] font-oswald">
                        <h6>
                            Next holiday:
                        </h6>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h6>
                            {holiday && new Date(holiday.date).toLocaleDateString()}
                        </h6>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h6 className=" font-bold">
                            {holiday && holiday.day}
                        </h6>
                    </div>
                </div>
                <div className=" w-full h-auto flex items-start justify-start p-4">
                    <div>
                        <h6>
                            {holiday && holiday.name}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Holiday;
