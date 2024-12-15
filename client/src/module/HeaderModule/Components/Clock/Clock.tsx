import React from "react";

function Clock(): JSX.Element {
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState("");

    React.useEffect(() => {
        setInterval(() => {
            const DATE = new Date();
            const YEARS = DATE.getFullYear().toString();
            const MONTH = (DATE.getMonth() + 1).toString();
            const DAY = DATE.getDate().toString();
            const HOURS = DATE.getHours().toString();
            const MIN = DATE.getMinutes().toString();
            const SEC = DATE.getSeconds().toString();

            const TIME_PROD = `${+HOURS < 10 ? 0 + HOURS : HOURS}:${+MIN < 10 ? 0 + MIN : MIN}:${+SEC < 10 ? 0 + SEC : SEC}`;
            const DATE_PROD = `${DAY}.${MONTH} ${YEARS} `;
            setTime(TIME_PROD);
            setDate(DATE_PROD);
        }, 1000);
    }, []);

    return (
        <div className="w-[200px] h-[80%] rounded-[10px] flex flex-row items-center justify-center text-thems-defaultTextColor overflow-hidden mr-3">
            <div className=" w-full h-full flex items-center justify-center bg-thems-appThemeColor">
                <h1 className="text-[20px] font-bold font-oswald">
                    {time}
                </h1>
            </div>
            <div className=" w-full h-full flex items-center justify-center bg-thems-background_content">
                <h1 className="text-[18px] font-light font-oswald text-thems-defaultTextColorSec">
                    {date}
                </h1>
            </div>
        </div>

    );

};

export default Clock;