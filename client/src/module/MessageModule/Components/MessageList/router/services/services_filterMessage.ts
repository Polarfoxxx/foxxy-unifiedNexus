import { Type_for_newMesssageFrom_DB } from "../../types";

export type Type_for_servicesFilterMessage<T> = {
    TYPE_FILTER: string,
    MESSAGE_DATA: T[]
}

function services_filterMessage<T extends Type_for_newMesssageFrom_DB>(props: Type_for_servicesFilterMessage<T>): T[] {
    const { TYPE_FILTER, MESSAGE_DATA } = props;

    const filteredMessages = MESSAGE_DATA.filter(item => {
        const jsonString = JSON.stringify(item);
        return jsonString.includes(TYPE_FILTER);
    });

    return filteredMessages;
}

export default services_filterMessage;
