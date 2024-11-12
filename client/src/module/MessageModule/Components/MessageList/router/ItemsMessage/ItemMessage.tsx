import { Type_for_newMesssageFrom_DB } from "../../types";
import React from "react";
import { Type_for_ItemMessage, services_messageColorAlert } from "../";
import { deleteMessage_API, updateMessageData_API } from "../../../../../APIs/userDataCRUD_API";
import { setAllMessages, Type_RootState } from "../../../../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { LoadingFeedback } from "../../../../../Shared";



function ItemMessage(props: Type_for_ItemMessage): JSX.Element {
    const [itemMessageData, setItemMessageData] = React.useState<Type_for_newMesssageFrom_DB>();
    const [colorAlert, setColorAlert] = React.useState<React.CSSProperties>();
    const [colorUpdateAndDelete, setColorUpdateAndDelete] = React.useState<React.CSSProperties>();
    const userName = useSelector((state: Type_RootState) => state.userLogData.userName);
    const dispatch = useDispatch();
    const [loadingFeedbackStats, setLoadingFeedbackStats] = React.useState<{ respo_status: number, loadON: boolean }>({
        respo_status: 0,
        loadON: false
    });

    //!set item data...................
    React.useEffect(() => {
        if (props.itemData.content_message) {
            setItemMessageData({
                start_message: new Date(props.itemData.start_message),
                end_message: new Date(props.itemData.end_message),
                title_message: props.itemData.title_message,
                content_message: props.itemData.content_message,
                status: props.itemData.status
            });
        };
    }, [JSON.stringify(props.itemData)]);

    //!color alert in message item....................
    React.useEffect(() => {
        const updateColorAlert = (): void => {
            if (itemMessageData) {
                setColorAlert(services_messageColorAlert({ itemMessageData }))
            };
        };
        updateColorAlert();
        const intervalId = setInterval(updateColorAlert, 60000); //! polhodina 
        return () => clearInterval(intervalId);
    }, [itemMessageData?.end_message]);

    //!delete message item...........................
    async function handleClickDeleteItem(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
        const { itemData } = props;
        const loginUserName = userName;

        try {
            const deleteItem = await deleteMessage_API({ loginUserName, itemData });
            if (deleteItem?.status === 200) {
                setColorUpdateAndDelete({
                    backgroundColor: "red"
                });
                setTimeout(() => {
                    dispatch(setAllMessages({
                        data: deleteItem.updateMessages,
                        typeEvent: "setAll_message"
                    }))
                    setColorUpdateAndDelete({
                        backgroundColor: "var(--item_Background)"
                    });
                }, 2000);
            };
        }
        catch (error) {
            console.log(error);
        };
    };

    //!update, change to invalid.......................
    async function handleClickCompleteMessage() {
        const { itemData } = props;
        const loginUserName = userName;
        try {
            const update_Item = await updateMessageData_API({ loginUserName, itemData });
            if (update_Item?.status === 200) {
                setColorUpdateAndDelete({
                    backgroundColor: "green"
                })
                setTimeout(() => {
                    dispatch(setAllMessages({
                        data: update_Item.updateMessages,
                        typeEvent: "setAll_message"
                    }))
                }, 2000);
            };
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <div
            style={colorUpdateAndDelete}
            key={props.keyType}
            className=" w-[100%] h-[80px] min-h-[80px] flex justify-center items-center rounded-[5px] flex-row shadow-itemShadow
             bg-thems-item_Background border border-thems-appThemeColorFourth overflow-hidden">
            <div className=" w-[10%] min-w-[60px] min-h-[100%] flex justify-center items-center bg-thems-appThemeColor
                     text-thems-defaultTextColor font-bold text-[25px] font-oswald">
                <h2>
                    {props.keyType + 1}.
                </h2>
            </div>
            <div className=" w-[100%] h-[100%] flex items-center justify-center flex-col">
                {/* tittle */}
                <div className=" w-[100%] h-[30px] flex flex-row justify-start items-center font-oswald">
                    <div className="w-[100%] h-[100%] flex flex-row justify-center items-center text-[12px] gap-1">
                        <div className=" font-bold">
                            <h4>Created</h4>
                        </div>
                        <div>
                            <h2>
                                {itemMessageData?.start_message.toLocaleDateString()}
                            </h2>
                        </div>
                        <div>
                            <h2>
                                {itemMessageData?.start_message.toLocaleTimeString()}
                            </h2>
                        </div>
                    </div>
                    <div className="w-[60%] h-[100%] flex flex-row justify-center items-center text-[13px] gap-1">
                        <div className=" font-bold">
                            <h4>Type</h4>
                        </div>
                        <div>
                            <h2>
                                {itemMessageData?.title_message}
                            </h2>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px] p-2">
                    <div className=" w-full h-full flex justify-center items-center border rounded-[5px] bg-slate-100 font-libre text-red-500 font-bold">
                        <p>
                            {itemMessageData?.content_message}
                        </p>
                    </div>
                </div>
            </div>
            <div className=" w-[30%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[80%] flex items-center justify-center flex-row ">
                    <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                        <button
                            className=" w-[60px] h-[80%] bg-thems-appThemeColor text-thems-defaultTextColor hover:bg-red-500 text-[11px] flex justify-center items-center rounded-[5px]"
                            onClick={handleClickDeleteItem}>
                            Delete
                        </button>
                    </div>
                    {
                            itemMessageData?.status && 
                            <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                            <button
                            className=" w-[60px] h-[80%] bg-thems-appThemeColor text-thems-defaultTextColor hover:bg-green-500 text-[11px] flex justify-center items-center rounded-[5px]"
                            onClick={handleClickCompleteMessage}>
                            Complete
                        </button>
                    </div>
                        }
                </div>
                <div
                    style={colorAlert}
                    className=" w-[100%] h-[10px]">
                    {/* element color alert */}
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center font-oswald">
                    <div className=" w-[100%] h-[100%] flex-col flex items-center justify-center">
                        <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                            <h1 className="text-[14px]">
                                {itemMessageData?.end_message.toLocaleDateString()}
                            </h1>
                        </div>
                        <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                            <h1 className="text-[14px]">
                                {itemMessageData?.end_message.toLocaleTimeString()}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemMessage;