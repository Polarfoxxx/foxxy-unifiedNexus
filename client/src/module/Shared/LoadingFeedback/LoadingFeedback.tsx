import React from "react";
import { servicesTypeResponseStatus, Type_for_LoadingFeedback } from "./";

function LoadingFeedback(props: Type_for_LoadingFeedback): JSX.Element {
    const { respo_status, loadON } = props.loadstatus;
    console.log(respo_status, loadON);
    
    const loadTimerRef = React.useRef<NodeJS.Timeout | undefined>(undefined);
    const [respoStatus, setRespoStatus] = React.useState<{ fontAwesome: null | JSX.Element, statusRespo: string, load_ON: boolean }>({
        fontAwesome: null,
        statusRespo: "",
        load_ON: false
    });

    React.useEffect(() => {
        if (loadON) {
            const { typeResponseText, fontAwensome } = servicesTypeResponseStatus({ respo_status });
            setRespoStatus({
                fontAwesome: fontAwensome,
                statusRespo: typeResponseText,
                load_ON: true
            });
            //! Zrušit předchozí časovač, pokud existuje.........
            if (loadTimerRef.current) {
                clearTimeout(loadTimerRef.current);
            }
            //! Vytvořit nový časovač..............................
            loadTimerRef.current = setTimeout(() => {
                setRespoStatus(prevState => ({
                    ...prevState,
                    load_ON: false
                }));
            }, 4000);
        } else {
            //! Pokud loadON není true, zrušit časovač, pokud existuje......................
            if (loadTimerRef.current) {
                clearTimeout(loadTimerRef.current);
            };
        };
        return () => {
            if (loadTimerRef.current) {
                clearTimeout(loadTimerRef.current);
            };
        };
    }, [props.loadstatus.respo_status]);

    return (
        <div className=" w-[220px] h-[100px] flex fixed items-center justify-center right-0">
            {
                <div className=" w-[100%] h-[60%] flex items-center justify-center overflow-hidden relative">
                    <div
                        className=" w-full h-full flex items-center justify-center flex-row bg-black rounded-xl absolute p-2"
                        style={respoStatus.load_ON ? { right: "0px", transition: "1s" } : { right: "-100%", transition: "1s" }}>
                        <div className=" w-[100%] h-full flex items-center justify-center">
                            <h1 className=" text-white text-[18px]">
                                {respoStatus.statusRespo}
                            </h1>
                        </div>
                        <div className=" text-white w-[50%] h-full flex items-center justify-center">
                            {respoStatus.fontAwesome}
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default LoadingFeedback;