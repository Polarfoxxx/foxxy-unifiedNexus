import { Type_for_newMesssageFrom_DB } from "../..";

export type TypeForServicesFilterMessage = {
    findText: string;
    allMessages: Type_for_newMesssageFrom_DB[];
};

function servicesFilterMessage(props: TypeForServicesFilterMessage): Type_for_newMesssageFrom_DB[] {
    const { findText, allMessages } = props;
    if (findText) {
        const filteredMessages = allMessages.filter(item => {
            const jsonString = JSON.stringify(item);
            return jsonString.includes(findText);
        });
        console.log(filteredMessages);
        
        return filteredMessages;
    } else {
        return allMessages
    }


}

export default servicesFilterMessage;
