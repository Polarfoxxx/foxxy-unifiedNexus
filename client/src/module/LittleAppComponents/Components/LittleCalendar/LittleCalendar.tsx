import React from "react";
import { Calendar, dateFnsLocalizer, DateLocalizer, Event } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import skSK from 'date-fns/locale/sk'; // Import slovenské lokalizace
import { miniContentStyle } from "./services";


function LittleCalendar(): JSX.Element {
    const [currentDate, setCurrentDate] = React.useState("");

    React.useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const dateFormat = `${day}. ${month}. ${year}`;
        setCurrentDate(dateFormat);
    }, [])


    const locales = {
        'sk': skSK, // Použití slovenské lokalizace
    };
    const localizer: DateLocalizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    //! mini style 
    React.useEffect(() => {
        miniContentStyle()
    }, [])



    return (
        <div className=" w-full h-full bg-thems-littleComponent_Background flex items-center justify-center flex-col shadow-miniAp">
            <div className=" w-full h-[20%] flex items-center justify-center">
                <h1 className=" text-[23px]  text-thems-minBackg_content font-bold">
                    YOU CALENDAR EVENT
                </h1>
            </div>
            <div className=" w-full h-[20%] flex items-center justify-center flex-row">
                <div className=" w-full h-full flex items-center justify-center">

                </div>
                <div className=" w-full h-full flex items-center justify-center">
                    <h2 className="  text-thems-defaultTextColorDark font-bold text-[20px] font-oswald">
                        {currentDate}
                    </h2>
                </div>
            </div>
            <div className=" w-full h-[100%] flex items-center justify-center">
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "100%", width: "100%" }}
                    className="miniCalendar">
                </Calendar>
            </div>
        </div>
    );
};



export default LittleCalendar;