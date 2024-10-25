import services_changeStringToDateFormat from "../servicesChangeStringToDateFormat/services_chengeStringToDateFormat";
import { Type_for_newEventFor_API } from "../../CalendarModule";
import { Type_for_newMessageFor_API } from "../../MessageModule/Components/MessageList/types";

type Type_for_Constructor = {
    startDate_event?: string;
    endDate_event?: string;
    name_Event?: string;
    comment_Event?: string;
    startDate_message?: Date;
    title_message?: string;
    content_Message?: string;
    endDate_message?: string;
}

class NewRequest {
    startDate_event?: string;
    endDate_event?: string;
    name_Event?: string;
    comment_Event?: string;
    startDate_message?: Date;
    title_message?: string;
    content_Message?: string;
    endDate_message?: string;

    constructor(props: Type_for_Constructor) {
        Object.assign(this, props);
    }

    validate(type: string): boolean {
        if (type === "event") {
            const VALIDATE_DATE = services_changeStringToDateFormat(this.startDate_event!) < services_changeStringToDateFormat(this.endDate_event!);
            const VALIDATE_SET_EVENT = services_changeStringToDateFormat(this.startDate_event!) > new Date();
            const VALIDATE_STRING = this.name_Event!.length > 3 && this.comment_Event!.length > 3;

            if (VALIDATE_DATE && VALIDATE_STRING && VALIDATE_SET_EVENT) {
                return true;
            } else {
                return false;
            }
        } else {
            const VALIDATE_DATE = true
            const VALIDATE_SET_EVENT = true;
            const VALIDATE_STRING = this.content_Message!.length > 3 && this.title_message!.length > 3;

            if (VALIDATE_DATE && VALIDATE_STRING && VALIDATE_SET_EVENT) {
                return true;
            } else {
                return false;
            }
        }
    }

    create(): Type_for_newEventFor_API | Type_for_newMessageFor_API | string {
        if (this.startDate_event && this.endDate_event && this.name_Event && this.comment_Event) {
            if (this.validate("event")) {
                const RET_DATA: Type_for_newEventFor_API = {
                    event: {
                        start: services_changeStringToDateFormat(this.startDate_event),
                        end: services_changeStringToDateFormat(this.endDate_event),
                        title: this.name_Event,
                        comment: this.comment_Event
                    }
                };
                return RET_DATA;
            }
            return "The error the validate data";
        } else if (this.startDate_message && this.title_message && this.content_Message && this.endDate_message) {
            if (this.validate("message")) {
                const RET_DATA: Type_for_newMessageFor_API = {
                    message: {
                        start_message: (this.startDate_message),
                        end_message: services_changeStringToDateFormat(this.endDate_message),
                        title_message: this.title_message,
                        content_message: this.content_Message,
                        status: true
                    }
                };
                return RET_DATA;
            }
            return "The error the validate data";
        }
        return "";
    }
}

export default NewRequest;
