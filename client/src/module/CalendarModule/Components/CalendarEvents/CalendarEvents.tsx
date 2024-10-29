import { Type_forCalendarEvents } from "./types";
import React from "react";
import { ButtonComponent } from "foxxy-package/dist";
import { Type_for_CalEvents_for_display } from "./types";
import { deleteEvent_API } from "../../../APIs/userDataCRUD_API";
import { Type_RootState } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { setAllEvent } from "../../../../redux";



function CalendarEvents(props: Type_forCalendarEvents): JSX.Element {
    const user = useSelector((state: Type_RootState) => state.userLogData.userName);
    const allEvents = useSelector((state: Type_RootState) => state.allEvents);
    const dispatch = useDispatch();

    const allEventsForDisplay: Type_for_CalEvents_for_display[] = React.useMemo(() => {
        return props.allEvents.map((item) => {
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
    }, [props.allEvents]);


    const handleDeleteEvent = (e: React.MouseEvent<HTMLButtonElement>, item: Type_for_CalEvents_for_display): void => {
        const itemData = {
            title: item.title,
            typeEvent: item.typeEvent
        };

        deleteEvent();
        async function deleteEvent() {
            try {
                const response = await deleteEvent_API({ user, itemData })
                if (response?.status === 201) {
                    const updateEvent = response.updateEvent;
                    dispatch(setAllEvent(updateEvent))
                }
            } catch (error) {
                console.log("error delete event", error);
            };
        };
    };

    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-transparent flex justify-start items-start flex-col  p-1">
                <div className=" w-[auto] h-[40px] min-h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-transparent items-center justify-start pl-4">
                    <div className=" w-[110px] text-thems-defaultTextColor flex items-center justify-center bg-thems-appThemeColor rounded-[2px] font-oswald">
                        <h6>All events:</h6>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1> </h1>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1 className=" font-bold"> </h1>
                    </div>
                </div>
                <div className=" w-full h-auto flex items-start justify-start p-4 overflow-y-scroll no-scrollbar">
                    <div className=" w-full h-[100%] flex flex-col justify-start gap-1 items-center ">
                        {
                            allEventsForDisplay.map((item, key) =>
                                <div key={key}
                                    className=" w-[100%] h-[60px] min-h-[60px] bg-thems-appThemeColor text-thems-defaultTextColor rounded-[10px] flex items-start justify-around flex-row border overflow-hidden">
                                    <div className=" w-[50%] h-full flex items-center justify-center flex-col bg-thems-allEventOpossiteBackground">
                                        <div className=" w-full  h-[60%] flex justify-center items-center text-[12px] text-center font-bold">
                                            <h1>Type</h1>
                                        </div>
                                        <div className=" w-full h-full flex justify-center items-center text-[10px] text-center">
                                            <p>{item.typeEvent}</p>
                                        </div>
                                    </div>
                                    <div className=" w-[100%] h-full flex items-center justify-center flex-col">
                                        <div className=" w-full h-[60%] flex justify-center items-center text-[12px] bg-thems-allEventOpossiteBackground">
                                            <h1 className="">Event</h1>
                                        </div>
                                        <div className=" w-full h-full flex justify-center items-center">
                                            <h1 className=" text-[10px]">{item.title}</h1>
                                        </div>
                                    </div>
                                    <div className=" w-[50%] h-full flex items-center justify-center flex-col">
                                        <div className=" w-full  h-[60%] text-[10px] flex justify-center items-center bg-thems-allEventOpossiteBackground">
                                            <p>Start start</p>
                                        </div>
                                        <div className=" w-full h-full">
                                            <div className="text-[10px] flex justify-center items-center">
                                                <p>{item.start.date} </p>
                                            </div>
                                            <div className="text-[10px] flex justify-center items-center">
                                                <p>{item.start.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-[50%] h-full flex items-center justify-center flex-col  ">
                                        <div className=" w-full  h-[60%] text-[10px] flex justify-center items-center bg-thems-allEventOpossiteBackground rounded-br-[10px]">
                                            <p> Event end</p>
                                        </div>
                                        <div className=" w-full h-full">
                                            <div className="text-[10px] flex justify-center items-center">
                                                <p>{item.end.date}</p>
                                            </div>
                                            <div className="text-[10px] flex justify-center items-center">
                                                <p>{item.end.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-[50%] h-full flex items-center justify-center">
                                        <ButtonComponent.ButtonBox>
                                            <ButtonComponent.Button
                                                onClick={(e) => { handleDeleteEvent(e, item) }}
                                                button_text="Delete"
                                                variant_btn="alertButton"
                                                sm_button />
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