import { Type_for_newMesssageFrom_DB } from "../../types";
import React from "react";
import { Type_for_ItemMessage, services_messageColorAlert } from "../";
import { deleteData_API, updateData_API } from "../../../../../APIs/index.";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setAllMessages, Type_forSetAllMessage, Type_RootState } from "../../../../../../redux";


function ItemMessage(props: any & Type_for_ItemMessage): JSX.Element {
    const [itemMessageData, setItemMessageData] = React.useState<Type_for_newMesssageFrom_DB>();
    const [colorAlert, setColorAlert] = React.useState<React.CSSProperties>();
    const [colorUpdateAndDelete, setColorUpdateAndDelete] = React.useState<React.CSSProperties>();
    const { userName, setAllMessages } = props;

    //set item data
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

    //color alert in message item
    React.useEffect(() => {
        const updateColorAlert = (): void => {
            if (itemMessageData) {
                setColorAlert(services_messageColorAlert({ itemMessageData }))
            };
        };
        updateColorAlert();
        const intervalId = setInterval(updateColorAlert, 60000); /* polhodina */
        return () => clearInterval(intervalId);
    }, [itemMessageData?.end_message]);

    //delete message item
    const handleClickDeleteItem = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        const { itemData } = props;
        const loginUserName = userName;

        try {
            const deleteItem = await deleteData_API({ loginUserName, itemData });
            if (deleteItem?.updateMessages) {
                setColorUpdateAndDelete({
                    backgroundColor: "red"
                })
                setTimeout(() => {
                    setAllMessages({
                        data: deleteItem.updateMessages,
                        typeEvent: "setAll_message"
                    })
                    setColorUpdateAndDelete({
                        backgroundColor: "rgba(218, 218, 218, 0.679)"
                    })
                }, 2000);
            };
        }
        catch (error) {
            console.log(error);
        };
    };

    //update, change to invalid
    const handleClickCompleteMessage = async () => {
        const { itemData } = props;
        const loginUserName = userName;
        try {
            const update_Item = await updateData_API({ loginUserName, itemData });
            if (update_Item?.updateMessages) {
                setColorUpdateAndDelete({
                    backgroundColor: "green"
                })
                setTimeout(() => {
                    setAllMessages({
                        data: update_Item.updateMessages,
                        typeEvent: "setAll_message"
                    }) //natavenie redux
                    setColorUpdateAndDelete({
                        backgroundColor: "rgba(218, 218, 218, 0.679)"
                    })
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
            className=" w-[100%] h-[100px] max-h-[70px] flex justify-center items-center flex-row  bg-thems-item_Background  ">
            <div className=" w-[100%] h-[100%] flex items-center justify-center flex-col">
                {/* tittle */}
                <div className=" w-[100%] h-[30%] flex flex-row justify-start items-center">
                    <div className="w-[10%] h-[100%] flex flex-row justify-center items-center text-[16px]">
                        <h2>
                            {props.keyType + 1}
                        </h2>
                    </div>
                    <div className="w-[30%] h-[100%] flex flex-row justify-center items-center text-[14px]">
                        <h2>
                            {itemMessageData?.start_message.toLocaleString()}
                        </h2>
                    </div>
                    <div className="w-[100%] h-[100%] flex flex-row justify-center items-center text-[14px]">
                        <h2>
                            {itemMessageData?.title_message}
                        </h2>
                    </div>
                </div>
                {/* content */}
                <div className=" w-[100%] h-[100%] text-[14px] p-3">
                    <p>
                        {itemMessageData?.content_message}
                    </p>
                </div>
            </div>
            <div className=" w-[20%] h-[100%] flex items-center justify-center flex-col">

                <div className=" w-[100%] h-[80%] flex items-center justify-center flex-row ">
                    <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                        <button
                            className=" w-[80%] h-[80%] bg-slate-100 rounded-lg hover:bg-red-500"
                            onClick={handleClickDeleteItem}>
                            delete
                        </button>
                    </div>
                    <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                        <button
                            className=" w-[80%] h-[80%] bg-slate-100 rounded-lg hover:bg-green-500"
                            onClick={handleClickCompleteMessage}>
                            complete
                        </button>
                    </div>
                </div>
                <div
                    style={colorAlert}
                    className=" w-[100%] h-[10px]">
                    {/* element color alert */}
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center ">
                    <div className=" w-[100%] h-[100%] flex items-center justify-center ">
                        <div
                            className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                            <h1 className="text-[14px]">
                                {itemMessageData?.end_message.toLocaleDateString()}
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const mapStateToProps = (state: Type_RootState) => ({
    allMessages: state.allMessages,
    userName: state.userLogData.userName,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAllMessages: (props: Type_forSetAllMessage) => dispatch(
        setAllMessages({
            data: props.data,
            typeEvent: props.typeEvent
        })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemMessage);