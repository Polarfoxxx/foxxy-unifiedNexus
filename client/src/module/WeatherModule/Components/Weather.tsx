import React from "react";
import { NavigateBarInOpenApplication } from "../../Shared";
import { useSelector, useDispatch } from 'react-redux';
import { Type_RootState } from "../../../redux";
import { forecastWeatherAPI } from "../../APIs/openWeatherAPI";



function Weather(): JSX.Element {
    const weatherInfo = useSelector((state: Type_RootState) => state.weatherData.weatherData);
    const timeUpdateweatherInfo = useSelector((state: Type_RootState) => state.weatherData.timeUpdateWeatherData);
    const dispatch = useDispatch();

    React.useEffect(() => {
       loadForecastWeather()
        console.log(weatherInfo);

    }, []);

    async function loadForecastWeather() {
        const coutryID = weatherInfo.id;
        const data = await forecastWeatherAPI(coutryID);
        console.log(data);
        
    };

    return (
        <div className=" w-[100%] h-[100%] bg-thems-appThemeColorSecondary flex justify-center items-center flex-col ">
            {/* header */}
            <div className=" w-full h-[7%] flex justify-start items-start bg-thems-appThemeColor">
                <div className=" w-[250px] h-[100%] text-center flex justify-center items-center bg-thems-appThemeColorSecondary">
                    <h2 className="text-[33px] text-thems-defaultTextColorDark font-oswald ">
                        Weather
                    </h2>
                </div>
            </div>
            {/* content */}
            <div className=" w-full h-full flex flex-row justify-center items-center">
                <div className=' w-[100%] xl:w-[75px] h-full items-center justify-center '>
                    <NavigateBarInOpenApplication />
                </div>
                <div className=" w-[100%] h-[100%] items-center justify-center flex flex-col">
                    <div className=" w-full h-full flex items-center justify-center bg-slate-200 flex-row">
                        <div className=" w-full h-full flex items-center justify-start bg-red-300">
                            <div className=" w-[450px] h-full flex items-center justify-center bg-slate-200 flex-col">
                                <div className=" w-full min-h-[20%] h-[20%] flex items-center justify-center bg-amber-200 text-[20px] gap-3">
                                    <div>
                                        <h3>{weatherInfo.name}</h3>
                                    </div>
                                    <div>
                                        <h3>{weatherInfo.country}</h3>
                                    </div>
                                    <div>
                                        <h3>{timeUpdateweatherInfo.toLocaleDateString()}</h3>
                                    </div>
                                    <div>
                                        <h3>{timeUpdateweatherInfo.toLocaleTimeString()}</h3>
                                    </div>
                                </div>
                                <div className=" w-full h-[100%] flex items-center justify-start overflow-hidden bg-amber-400">
                                    <div className=" h-full flex justify-center items-start border relative top-[-50px]">
                                        <img src={weatherInfo.icon} alt="weather icon" />
                                    </div>
                                    <div className=" text-[120px] h-full flex justify-center items-start border font-bold font-anta">
                                        <h1 className=" bg-slate-50 leading-[150px]">{weatherInfo.temp}</h1>
                                    </div>
                                    <div className=" h-full flex justify-center items-start border text-[40px] font-anta font-bold">
                                        <h1>°C</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" w-full h-full flex items-center justify-center bg-orange-400 flex-row">
                            <div className=" w-full h-full flex justify-center items-center bg-slate-700">
                                {/* empty block*/}
                            </div>
                            <div className=" w-full h-full flex justify-center items-start bg-slate-400 p-6">
                                <div className=" w-full h-[50%] flex justify-center items-center bg-slate-500 flex-col">
                                    <div className=" w-full h-full flex justify-center items-center bg-slate-200 gap-2">
                                        <span>Feels like:</span>
                                        <span>{weatherInfo.feels_like}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-center items-center bg-slate-200 gap-2">
                                        <span className="">Humidity:</span>
                                        <span className="">{weatherInfo.humidity}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-center items-center bg-slate-200 gap-2">
                                        <span>Main:</span>
                                        <span>{weatherInfo.main}</span>
                                    </div>
                                    <div className=" w-full h-full flex justify-center items-center bg-slate-200 gap-2">
                                        <span>Pressure:</span>
                                        <span>{weatherInfo.pressure}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-[90%] flex items-center justify-center bg-slate-100">

                    </div>
                    <div className=" w-full h-full flex items-center justify-center bg-slate-300">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;