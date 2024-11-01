import { Calendar, dateFnsLocalizer, DateLocalizer, Event } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style/calendar_style.css"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import React from 'react'
import NewEvent from '../NewEvent/NewEvent';
import skSK from 'date-fns/locale/sk'; // Import slovenské lokalizace
import { Type_for_newEventFrom_DB } from '../NewEvent/type';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Holiday } from '../Holiday';
import { CalendarEvents } from '../CalendarEvents';
import { Type_RootState } from '../../../../redux';
import { NavigateBarInOpenApplication } from '../../../Shared';
import { useSelector, useDispatch } from 'react-redux';


interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

const locales = {
  'sk': skSK, // Použití slovenské lokalizace
};


let formats = {
  timeGutterFormat: 'HH:mm',
}

const localizer: DateLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events: MyEvent[] = [
  {
    title: "Important Appointment",
    start: new Date(2024, 2, 11, 14, 30), // 10. března 2024 v 14:30
    end: new Date(2024, 2, 14, 15, 30),   // 10. března 2024 v 15:30
  }
];

function CalendarMod(): JSX.Element {
  const [newEventContent, setNewEventContent] = React.useState<JSX.Element | null>(null);
  const [LocalAllEvent, setLocalAllEvent] = React.useState<Type_for_newEventFrom_DB[]>([]);
  //?redux
  const dispatch = useDispatch();
  const allEvents = useSelector((state: Type_RootState) => state.allEvents);
  const userName = useSelector((state: Type_RootState) => state.userLogData.userName);


  React.useEffect(() => {
    if (allEvents) {
      const TRANSLATE_DATA: Type_for_newEventFrom_DB[] = allEvents.map(item => {
        const START_DATE = new Date(item.start);
        const END_DATE = new Date(item.end);
        return {
          start: START_DATE,
          end: END_DATE,
          title: item.title,
          typeEvent: item.typeEvent
        };
      });
      setLocalAllEvent(TRANSLATE_DATA)
    };
  }, [JSON.stringify(allEvents)]);


  const handleEventClick = (event: MyEvent) => {
    console.log(event);
  };


  /* casove overovanie platnosti udalosti a alert */
  /*   React.useEffect(() => {
      let timeInterval = setInterval(() => {
        const ALL_EVENTS = appData.allEvents;
        const CURRENT_TIME = new Date();
  
        ALL_EVENTS.forEach((item) => {
          const START_EVENT = item.start
          if (START_EVENT.getFullYear() === CURRENT_TIME.getFullYear() &&
            START_EVENT.getMonth() === CURRENT_TIME.getMonth() &&
            START_EVENT.getDate() === CURRENT_TIME.getDate() &&
            START_EVENT.getHours() === CURRENT_TIME.getHours() &&
            START_EVENT.getMinutes() === CURRENT_TIME.getMinutes()) {
            toast(`Event time ${item.title} typeEvent ${item.typeEvent} at ${item.start.getHours()}`);
          };
        });
      }, 60000);
  
      return (() => {
        clearInterval(timeInterval)
      })
    }, [appData.allEvents.length]); */


  return (
    <div className=' w-full h-auto  xl:h-full flex flex-col xl:flex-row  items-center justify-center  bg-thems-appThemeColorTertiary'>
      <div className='xl:w-[75px] w-full h-[100px] xl:relative flex items-center justify-center xl:transform xl:rotate-[-90deg]'>
        <div className=' w-full h-full flex gap-1 justify-center items-center'>
          <span className=' w-auto h-[55px] bg-thems-appThemeColor rounded-[10px] text-thems-defaultTextColor font-oswald text-[45px] p-4 leading-[55px] flex items-center justify-center'>
            YOU
          </span>
          <h1 className=' text-[40px]'>
            calendar
          </h1>
        </div>
      </div>
      {/* event----------------------------------------------------------------------- */}
      <div className=' w-[100%] xl:order-1 order-2 xl:w-[60%] xl:h-full bg-thems-appThemeColorSecondary flex justify-center items-center flex-col xl:flex-row'>
        <div className=' w-[100%] xl:w-[15%] h-full  bg-thems-appThemeColor items-center justify-center'>
          <NavigateBarInOpenApplication />
        </div>
        <div className='w-full h-full bg-transparent flex justify-center items-center flex-col gap-1'>
          <div className=' w-full h-[70%]  overflow-hidden'>
            <NewEvent />
          </div>
          <div className=' w-full h-[20%] overflow-hidden'>
            <Holiday />
          </div>
          <div className=' w-full h-[40%] overflow-hidden'>
            <CalendarEvents
              allEvents={allEvents} />
          </div>
        </div>
      </div>
      {/* calendar--------------------------------------------------------------------- */}
      <div className='w-full xl:h-full order-1 xl:order-2 h-[500px] flex items-end justify-center p-4 '>
        <Calendar
          formats={formats}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={LocalAllEvent}
          style={{ height: "95%", width: "100%" }}
          className="hover-effect-calendar"
          onSelectEvent={handleEventClick} />
        {/* -------- */}
        {newEventContent}
        <ToastContainer
          position="top-right"
          autoClose={60000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
        {/* -------- */}
      </div>
    </div>
  )
};


export default CalendarMod;