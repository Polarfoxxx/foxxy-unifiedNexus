import { services_numberInWeekToDayName } from "../CustomToolTipForGraph";
import { Type_forServices_changeDateToStringFormat_returned } from "./types";


function services_changeDateToStringFormat(dateData: string): Type_forServices_changeDateToStringFormat_returned {
    const changeFormat = new Date(dateData);
    const dateString = changeFormat.toLocaleDateString().replace(/\s+/g, "");
    const dayString = services_numberInWeekToDayName(new Date(changeFormat).getDay());
    const timeString = changeFormat.toLocaleTimeString();
console.log(dateString);

    return {
        dateString,
        dayString,
        timeString
    };
};

export default services_changeDateToStringFormat;
