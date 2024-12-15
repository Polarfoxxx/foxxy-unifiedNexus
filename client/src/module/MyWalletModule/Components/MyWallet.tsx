
import NavigateBarInOpenApplication from './../../Shared/NavigateBarInOpenApplication/NavigateBarInOpenApplication';
import { NavLink, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Payments, Income } from './routes';


function MyWallet(): JSX.Element {
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
                            <NavLink
                                className=" w-full h-full bg-transparent cursor-pointer z-[60]  hover:shadow-miniApp"
                                to="Income">
                                Income 
                            </NavLink>
                        </div>
                        <div className=' w-[100px] h-[20px] flex items-center justify-center bg-slate-300'>
                            <NavLink
                                className=" w-full h-full bg-transparent cursor-pointer z-[60]  hover:shadow-miniApp"
                                to="Payments">
                                Payments
                            </NavLink>
                        </div>
                    </div>
                    <div className=' w-full h-full flex justify-center items-center bg-slate-600'>
                        <Routes>
                            <Route
                                path="Payments"
                                element={
                                    <Payments />
                                } />
                                 <Route
                                path="Income"
                                element={
                                    <Income />
                                } />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWallet;