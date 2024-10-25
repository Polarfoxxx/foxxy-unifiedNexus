import { Type_for_newMesssageFrom_DB } from "../../types";

// Definice vstupního typu pro funkci
export type Type_for_servicesFilterMessage<T> = {
    TYPE_FILTER: string,
    MESSAGE_DATA: T[]
}

// Funkce pro filtrování zpráv
function services_filterMessage<T extends Type_for_newMesssageFrom_DB>(props: Type_for_servicesFilterMessage<T>): T[] | any {
    // Extrahování dat z props
    const { TYPE_FILTER, MESSAGE_DATA } = props;

    // Mapování zpráv a filtrování podle TYPE_FILTER
    const filteredMessages = MESSAGE_DATA.filter(item => {
        // Převedení zprávy na JSON řetězec pro vyhledání výskytu TYPE_FILTER
        const jsonString = JSON.stringify(item);
        // Pokud JSON řetězec obsahuje TYPE_FILTER, vrátíme zprávu
        return jsonString.includes(TYPE_FILTER);
    });

    // Vrácení filtrovaných zpráv
    return filteredMessages;
}

// Exportování funkce
export default services_filterMessage;
