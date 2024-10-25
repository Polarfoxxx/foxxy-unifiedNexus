import {
    LogOut,
    ColorSwitcher,
    Clock,
    WeatherInfo
} from "../../HeaderModule";


function Header(): JSX.Element {


    return (
        <div className=" w-full h-full flex items-center justify-between bg-thems-littleComponent_Background shadow-miniApp border border-thems-littleComponent_border rounded-[10px] overflow-hidden">
            <div className=" w-[100%] h-[100%] flex items-center justify-start">
                <div className="w-auto h-[100%] flex items-center justify-center">
                    <LogOut />
                </div>
                <div className=" w-auto h-[100%] flex items-center justify-center ">
                    <WeatherInfo />
                </div>
            </div>
            <div className=" w-[100%] h-[100%] flex items-center justify-end gap-2">
                <div className=" w-auto h-[100%] flex items-center justify-center ">
                    <Clock />
                </div>
                <div className=" w-auto h-[100%] flex items-center justify-center ">
                    <ColorSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Header;