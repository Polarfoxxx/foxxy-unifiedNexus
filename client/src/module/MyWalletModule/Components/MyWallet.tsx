import NavigateBarInOpenApplication from './../../Shared/NavigateBarInOpenApplication/NavigateBarInOpenApplication';
import { PayOrIncomeList } from './PayOrIncomeList';
import { CurrentMoneyValue } from './CurrentMoneyValue';
import { MoneyGraph } from './MoneyGraph';
import { NewPaymentsOrIncomeForm } from './NewPaymentsOrIncomeForm';
import React from 'react';


function MyWallet(): JSX.Element {
    const [showNewValueForm, setShovNewValueForm] = React.useState(false);


    const handleNewValue = (): void => {
        setShovNewValueForm(!showNewValueForm)
    };


    return (
        <div className='w-full h-auto xl:h-full flex items-center justify-center flex-col bg-white'>
            {/* header */}
            <div className=" w-full h-[7%] flex justify-start items-start bg-thems-appThemeColor">
                <div className=" w-[100%] h-[100%] text-center flex justify-center items-center bg-thems-appThemeColorSecondary">
                    <h2 className="text-[33px] text-thems-defaultTextColorSec font-dancing ">
                        My Wallet
                    </h2>
                </div>
            </div>
            {/* content--------------------------------- */}
            <div className=' w-full h-full bg-slate-200 flex justify-center items-center'>
                <div className=' w-[100%] xl:w-[75px] xl:min-w-[75px] h-full items-center justify-center bg-slate-50'>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=' w-full h-full flex justify-center items-center flex-col'>
                    <div className=' w-full h-[60px] flex items-center justify-center bg-slate-100'>
                        <div className=' w-[100px] h-[20px] flex items-center justify-center bg-slate-300'>
                            <button>payments</button>
                        </div>
                        <div className=' w-[100px] h-[20px] flex items-center justify-center bg-slate-300'>
                            <button>income</button>
                        </div>
                    </div>
                    <div className=' w-full h-full flex justify-center items-center'>
                        <div className=' w-[30%] h-full flex item-center justify-center border relative flex-col'>
                            <div className=' w-full h-[40px]'>
                                <button onClick={handleNewValue}>new</button>
                            </div>
                            <div className=' w-full h-full relative bg-orange-300'>
                                {
                                    showNewValueForm && (
                                        <div className=' w-full h-full absolute top-0 left-0 bg-lime-200'>
                                            <NewPaymentsOrIncomeForm />
                                        </div>
                                    )
                                }
                                <div className=' w-full h-full'>
                                    <PayOrIncomeList />
                                </div>
                            </div>

                        </div>
                        <div className='w-full h-full flex justify-center items-center flex-col'>
                            <div className=' w-full h-full flex justify-center items-center border flex-row'>
                                <div className=' w-full h-full flex justify-center items-center border'>
d
                                </div>
                                <div className=' w-full h-full flex justify-center items-center border'>
                                <CurrentMoneyValue />
                                </div>
                            </div>
                            <div className=' w-full h-full flex justify-center items-center border'>
                                <MoneyGraph />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWallet;