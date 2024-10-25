import { HTTPResponseText, Type_for_servicesTypeRespoStatus } from "..";

function servicesTypeResponseStatus(
    props: Type_for_servicesTypeRespoStatus
): { typeResponseText: string, fontAwensome: JSX.Element | null } {
    const { respo_status } = props;
    console.log(respo_status);
    
    const status = respo_status as keyof typeof HTTPResponseText;

    if (HTTPResponseText.hasOwnProperty(status)) {
        return {
            typeResponseText: HTTPResponseText[status].text,
            fontAwensome: HTTPResponseText[status].jsx
        };
    } else {
        return {
            typeResponseText: "",
            fontAwensome: null
        };
    };
};
export default servicesTypeResponseStatus;

