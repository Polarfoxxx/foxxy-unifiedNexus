import React from "react";
import "./style/content_style.css";
import { Routes, useNavigate, NavLink, Route } from "react-router-dom";
import { Calendar } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { ParentForOpenApplication } from "../../Shared";
import { readData_API } from "../../APIs/index.";
import { useDispatch, useSelector } from 'react-redux';
import { readExistingExpCookie } from "../../APIs/index.";
import { LittleCalendar, LittleMessage, LittleWeather } from "../../LittleAppComponents";
import { openWeatherAPI, dayAndHoliday } from "../../APIs/index.";
import { Weather } from "../../WeatherModule";
import { Header } from "../../HeaderModule";
import { Type_RootState } from "../../../redux";
import {
    setAllMessages,
    setUserLogData,
    setWeatherData,
    setAllHoliday,
    setAllEvent
} from "../../../redux";


function Content(): JSX.Element {
    const navigate = useNavigate();
    const USER_DATA = useSelector((state: Type_RootState) => state.userLogData);
    const dispatch = useDispatch();

    //! control validate cookie and JWT token........
    React.useEffect(() => {
        controlValidateJWTandCokie();
        async function controlValidateJWTandCokie() {
            const responseControlCookie = await readExistingExpCookie();
            if (responseControlCookie?.isValid !== true) {
                navigate("/LoginPage");
            };
        };
    }, [navigate]);


    //! read data and set user data..........
    React.useEffect(() => {
        readUserData();
        async function readUserData() {
            try {
                const load_userData = await readData_API();
                if (load_userData?.status === 200) {
                    dispatch(setUserLogData({
                        userName: load_userData.data.userData.userName,
                        appTheme: load_userData.data.userData.colorTheme
                    }));
                } else {
                    console.log("bad login and read userData", load_userData?.status);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    //! load message event data.............................
    React.useEffect(() => {
        loadDataAPI();
        async function loadDataAPI() {
            try {
                const load_data = await readData_API();
                if (load_data) {
                    dispatch(setAllMessages({
                        data: load_data.data.messages,
                        typeEvent: "setAll_message"
                    }));
                    dispatch(setAllEvent(load_data.data.events));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        };
    }, []);

    //! weather data..........................................
    React.useEffect(() => {
        loadWeathetAPI()
      const interval =  setInterval(() => {
        loadWeathetAPI();
        }, 1800000);
        const currentDateAndTime = new Date().toISOString()
        async function loadWeathetAPI() {
            try {
                const load_data = await openWeatherAPI();
                if (load_data) {
                    dispatch(setWeatherData({
                        weatherData: load_data,
                        timeUpdateWeatherData: currentDateAndTime
                    }));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        };
        return clearInterval(interval)
    }, [])


    //! dayHoliday...........................................
    React.useEffect(() => {
        loadDayHoliday();
        async function loadDayHoliday() {
            try {
                const data = await dayAndHoliday();
                if (data) {
                    dispatch(setAllHoliday(data));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní holiday:", error);
            }
        };
    }, [])

    return (
        <div
            data-theme={USER_DATA.appTheme}
            className=" w-full h-screen max-h-screen overflow-y-scroll no-scrollbar  flex flex-col justify-center items-center bg-thems-background_content ">
            <div className=" w-full h-screen max-h-screen ">
                <header className=" w-full h-[70px] min-h-[70px] flex items-center justify-center p-2 ">
                    <Header />
                </header>
                <nav className="w-full h-[auto] flex items-start justify-start p-3 ">
                    <div className="w-full flex items-start justify-center flex-wrap gap-3">
                        {/* calendar----------------------------------------------------------------- */}
                        <div className="w-[500px] h-[300px] rounded-[15px] border border-thems-littleComponent_border relative overflow-hidden shadow-miniApp">
                            <NavLink
                                className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]  hover:shadow-miniApp"
                                to="Calendar">
                            </NavLink>
                            <LittleCalendar />
                        </div>
                        {/* messageList------------------------------------------------------------------ */}
                        <div className="w-[500px] h-[300px] rounded-[15px] border border-thems-littleComponent_border relative  overflow-hidden">
                            <NavLink
                                className=" absolute w-full h-full bg-transparent cursor-pointer z-[60] hover:shadow-miniApp"
                                to="MessageList">
                            </NavLink>
                            <LittleMessage />
                        </div>
                        {/* weather--------------------------------------------------------------------- */}
                        <div className="w-[500px] h-[300px] flex flex-col justify-between items-center gap-3">
                            <div className="w-[100%] h-[145px] rounded-[15px] border border-thems-littleComponent_border relative overflow-hidden shadow-miniApp">
                                <NavLink
                                    className=" absolute w-full h-full bg-transparent cursor-pointer z-[60] hover:shadow-miniApp"
                                    to="Weather">
                                </NavLink>
                                <LittleWeather />
                            </div>
                            <div className="w-[100%] h-[145px] rounded-[15px] bg-white border border-black">

                            </div>
                        </div>
                        <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                        </div>
                        <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                        </div>
                        <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                        </div>
                        <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                        </div>
                        <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                        </div>
                    </div>
                </nav >
                <main className=" w-auto h-auto">
                    <Routes>
                        <Route
                            path="Calendar"
                            element={
                                <ParentForOpenApplication>
                                    <Calendar />
                                </ParentForOpenApplication>
                            } />
                        <Route
                            path="MessageList/*"
                            element={
                                <ParentForOpenApplication>
                                    <MessageList />
                                </ParentForOpenApplication>
                            } />
                        <Route
                            path="Weather/*"
                            element={
                                <ParentForOpenApplication>
                                    <Weather />
                                </ParentForOpenApplication>
                            } />
                    </Routes>
                </main>
                <footer className=" w-full h-[70px] min-h-[70px] flex items-center justify-center ">
                    my footer
                </footer>
            </div>

        </div >
    )
};

export default Content;






