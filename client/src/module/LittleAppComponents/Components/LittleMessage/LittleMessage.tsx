import { Type_RootState } from "../../../../redux";
import { useSelector } from "react-redux";

function LittleMessage(): JSX.Element {
    const allMessages = useSelector((state: Type_RootState) => state.allMessages)

    return (
        <div className=" w-[100%] h-[100%] flex items-center justify-center flex-row bg-thems-appThemeColor">
            <div className="w-[100%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-full h-auto flex items-center justify-center">
                    <h1 className=" text-[50px]  text-thems-defaultTextColor font-oswald mb-[15px]">
                        YOU MESSAGE
                    </h1>
                </div>
                <div className="w-[200px] h-auto flex items-center justify-start gap-3">
                    <div>
                        <h3 className=" text-thems-defaultTextColor">
                            Your valid tasks:
                        </h3>
                    </div>
                    <div>
                        <h1 className=" text-thems-defaultTextColor text-[22px] font-oswald">
                            {allMessages.filter(item => item.status === true).length}
                        </h1>
                    </div>
                </div>
                <div className=" w-[200px] h-auto flex items-center justify-start gap-3">
                    <div>
                        <h3 className=" text-thems-defaultTextColor">
                            Your invalid tasks:
                        </h3>
                    </div>
                    <div className=" text-thems-defaultTextColor text-[22px] font-oswald">
                        {allMessages.filter(item => item.status === false).length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LittleMessage;

