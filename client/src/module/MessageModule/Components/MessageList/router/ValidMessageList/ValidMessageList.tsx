import React from "react";
import { Type_for_valid_and_invalidMessageList } from "../types";
import { ItemMessage } from "../ItemsMessage";
import { Type_for_newMesssageFrom_DB } from "../../types";
import { services_filterMessage } from "../services";


function ValidMessageList(props: Type_for_valid_and_invalidMessageList): JSX.Element {
    const [messageList, setMessageList] = React.useState<Type_for_newMesssageFrom_DB[]>([]);
    const [animationStyles, setAnimationStyles] = React.useState<React.CSSProperties[]>([]);

    React.useEffect(() => {
        if (props.allMessages.length > 0) {
            const INV_DATA = props.allMessages.filter((item) => {
                return item.status === true;
            });
            setMessageList(INV_DATA);
            // Apply animation effect when the list updates
            applyAnimationEffect(INV_DATA);
        };
    }, [props.allMessages]);


    const applyAnimationEffect = async (list: Type_for_newMesssageFrom_DB[]) => {
        const NEW_ANIMATION: React.CSSProperties[] = [];
        await Promise.all(list.map(async (_, index) => {
            //! Delay each animation based on index
            await new Promise(resolve => setTimeout(resolve, (index + 1) * 100));
            //! Apply the animation styles
            NEW_ANIMATION.push({  // Přidání nového objektu do pole NEW_ANIMATION
                transition: "left 1s",
                position: "relative",
                left: "0px",
            });
            setAnimationStyles([...NEW_ANIMATION]); //! Update the animation styles
        }));
    };


    const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const TYPE_FILTER = e.currentTarget.value as string;
        const MESSAGE_DATA = messageList;
        setMessageList(
            services_filterMessage({ TYPE_FILTER, MESSAGE_DATA })
        )
    }



    return (
        <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col">
            <div className="w-[100%] h-[7%] flex justify-end items-center pl-5 pr-5 gap-4">
                <div className="w-[600px] h-[100%]  flex justify-center items-center ">
                    <form
                        className="w-[100%] h-[100%]  flex justify-center items-center flex-row gap-5">
                        <div>
                            <input
                                placeholder="fff"
                                onChange={e => handleChangeFilter(e)}
                                name="filter"
                                className=""
                                type="text" />
                        </div>
                    </form>
                </div>
                <h2 className=" text-thems-defaultTextColor">
                    Current message in linst:
                </h2>
                <span className=" text-thems-defaultTextColor text-[25px]">
                    {messageList.length}
                </span>
            </div>
            <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col p-6 relative overflow-x-hidden overflow-y-scroll">
                {
                    messageList.map((item, key) =>
                        <div
                            style={{
                                borderRadius: key === 0 ? "10px 10px 0 0" : key === messageList.length - 1 ? "0 0 10px 10px" : "0px",
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