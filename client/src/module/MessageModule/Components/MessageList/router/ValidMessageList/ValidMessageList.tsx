import React from "react";
import { Type_for_valid_and_invalidMessageList } from "../types";
import { ItemMessage } from "../ItemsMessage";
import { Type_for_newMesssageFrom_DB } from "../../types";


function ValidMessageList(props: Type_for_valid_and_invalidMessageList): JSX.Element {
    const [messageList, setMessageList] = React.useState<Type_for_newMesssageFrom_DB[]>([]);
    const [animationStyles, setAnimationStyles] = React.useState<React.CSSProperties[]>([]);

    React.useEffect(() => {
        if (props.allMessages.length > 0) {
            const INV_DATA = props.allMessages.filter((item) => {
                return item.status === true;
            });
            setMessageList(INV_DATA);
            applyAnimationEffect(INV_DATA);
        };
    }, [props.allMessages]);


    const applyAnimationEffect = async (list: Type_for_newMesssageFrom_DB[]) => {
        const NEW_ANIMATION: React.CSSProperties[] = [];
        await Promise.all(list.map(async (_, index) => {
            //! Delay each animation based on index
            await new Promise(resolve => setTimeout(resolve, (index + 1) * 100));
            //! Apply the animation styles
            NEW_ANIMATION.push({
                transition: "left 1s",
                position: "relative",
                left: "0px",
            });
            setAnimationStyles([...NEW_ANIMATION]); //! Update the animation styles
        }));
    };


    return (
        <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col">
            <div className="w-[100%] h-[7%] flex justify-between items-center pl-5 pr-5">
                <div className="w-[100%] h-[100%] flex justify-center items-center gap-4">
                    <h2 className=" font-bold">
                        Current message in the list:
                    </h2>
                    <span className="text-[25px] font-bold">
                        {messageList.length}
                    </span>
                </div>
            </div>
            <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col xl:p-6 pt-6 pb-6 pl-1 pr-1 relative overflow-y-scroll no-scrollbar">
                {
                    messageList.map((item, key) =>
                        <div
                            style={{
                               /*  borderRadius: key === 0 ? "10px 10px 0 0" : key === messageList.length - 1 ? "0 0 10px 10px" : "0px", */
                                ...animationStyles[key]
                            }} 
                            className="relative left-[100%] w-[90%] min-h-[70px] cursor-pointer overflow-hidden "
                            key={key}>
                            <ItemMessage
                                keyType={key}
                                itemData={item} />
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default ValidMessageList;