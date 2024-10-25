import { Type_forCalendarEvents } from "./types";
import React from "react";
import { ButtonComponent } from "foxxy-package/dist";


export type Type_for_CalEvents_for_display = {
    title: string,
    comment: string,
    start: {
        date: string,
        time: string
    },
    end: {
        date: string,
        time: string
    }
};



function CalendarEvents(
    props: Type_forCalendarEvents
): JSX.Element {
    const [allEventsForDisplay, setAllEventsForDisplay] = React.useState<Type_for_CalEvents_for_display[]>([]);

    React.useEffect(() => {
        const changeDateFormat: Type_for_CalEvents_for_display[] = props.allEvents.map((item) => {
            const date_start = new Date(item.start);
            const formattedDate_start = date_start.toLocaleDateString(); // Formátovaný dátum
            const formattedTime_start = date_start.toLocaleTimeString(); // Formátovaný čas

            const date_end = new Date(item.end);
            const formattedDate_end = date_end.toLocaleDateString(); // Formátovaný dátum
            const formattedTime_end = date_end.toLocaleTimeString(); // Formátovaný čas

            return {
                ...item,
                start: {
                    date: formattedDate_start,
                    time: formattedTime_start
                },
                end: {
                    date: formattedDate_end,
                    time: formattedTime_end
                },
            };
        });
        setAllEventsForDisplay(changeDateFormat)
    }, [props.allEvents]);


    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-transparent flex justify-start items-start flex-col shadow-maxShadow p-1">
                <div className=" w-[auto] h-[40px] min-h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-transparent items-center justify-start pl-4">
                    <div className=" w-[110px] text-thems-defaultTextColor flex items-center justify-center bg-thems-minBackg_content rounded-[2px] font-oswald">
                        <h6>
                            All events:
                        </h6>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1>

                        </h1>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1 className=" font-bold">
                        </h1>
                    </div>
                </div>
                <div className=" w-full h-auto flex items-start justify-start p-4 overflow-y-scroll">
                    <div className=" w-full h-[100%] flex flex-col justify-start gap-1 items-center ">
                        {
                            allEventsForDisplay.map((item, key) =>
                                <div key={key}
                                    className=" w-[90%] h-[60px] p-[5px] bg-thems-allEventsCalendarList rounded-xl flex items-start justify-around flex-row">
                                    <div className=" w-full h-full flex items-center justify-center flex-col">
                                        <div className=" w-full h-full bg-slate-200">
                                            <h1 className="">
                                                Event title
                                            </h1>
                                        </div>
                                        <div className=" w-full h-full bg-slate-300">
                                            <h1 className=" text-[15px]">
                                                {item.title}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className=" w-full h-full flex items-center justify-center flex-col">
                                        <div className=" w-full h-full bg-slate-500">
                                            <h1 className=" text-[15px]">
                                                Event start
                                            </h1>
                                        </div>
                                        <div className=" w-full h-full bg-slate-300">
                                            <div>
                                                <h1>
                                                    {item.start.date}
                                                </h1>
                                            </div>
                                            <div>
                                                {item.start.time}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-full h-full flex items-center justify-center flex-col">
                                        <div className=" w-full h-full bg-slate-500">
                                            <h1>
                                                Event end
                                            </h1>
                                        </div>
                                        <div className=" w-full h-full bg-slate-300">
                                            <div>
                                                <h1>
                                                    {item.end.date}
                                                </h1>
                                            </div>
                                            <div>
                                                {item.end.time}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-[50%] h-full flex items-center justify-center pr-[15px]">
                                    <ButtonComponent.ButtonBox>
                                            <ButtonComponent.Button
                                            button_text="delete" 
                                            variant_btn="alertButton"
                                            sm_button/>
                                        </ButtonComponent.ButtonBox>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarEvents;