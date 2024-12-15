import {
    LogOut,
    Clock,
    WeatherInfo,
    HeaderTittle
} from "../../HeaderModule";


function Header(): JSX.Element {
    return (
        <div className=" w-full h-full flex items-center justify-center bg-thems-littleComponent_Background border border-thems-littleComponent_border rounded-[10px]">
            <div className=" w-[100%] h-[100%] flex items-center justify-start">
                <div className="w-[15%] h-[100%] flex items-center justify-center ">
                    <LogOut />
                </div>
                <div className=" w-auto h-[100%] flex items-center justify-center ">
                    <WeatherInfo />
                </div>
            </div>
            <div className=" xl:w-[100%] w-0 h-[100%] xl:visible invisible flex items-center justify-center">
                <div className=" w-auto h-[100%] flex items-center justify-center ">
                    <HeaderTittle />
                </div>
            </div>
            <div className="xl:w-[100%] w-0 h-[100%] xl:visible invisible flex items-center justify-end ">
                <div className="w-[230px] h-[100%] flex items-center justify-center ">
                    <Clock />
                </div>
            </div>
        </div>
    );
};

export default Header;