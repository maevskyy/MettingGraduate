import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { FaTasks } from 'react-icons/fa';
import { styles } from '../../styles';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useSelector } from 'react-redux';
import './Calendar.css';
import CalendarCreateEvent from './schedule/CalendarCreateEvent';
import CalendarEvent from './schedule/CalendarEvent/CalendarEvent';
import moment from 'moment';
const Calendar = () => {
  const state = useSelector((el) => el.calendarReducer);


  // // moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = moment().startOf('week');
  const endDay = moment().endOf('week');

  const columnsArr = []
  let day = startDay.clone();

  while (!day.isAfter(endDay)) {
    columnsArr.push(day.clone().format('DD dd'));
    day.add(1, 'day');
  }

  const time = {
    '2023': {
      '0':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '1':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '2':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '3':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '4':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '5':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '6':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '7':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '8':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '9':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '10':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },
      '11':{
        '1w':[],
        '2w':[],
        '3w':[],
        '4w':[],
      },


    }
  }



  // console.log(startDay.format('YYYY-MM-DD'));
  // console.log(endDay.format('YYYY-MM-DD'));

  // const plusday = moment().add(1, 'month').format('YYYY-MM-DD')
  // console.log(plusday);

  const date = new Date();
  const currMoth = date.getMonth();
  const currYear = date.getFullYear();
  const lastDayOfMonth = new Date(currYear, currMoth + 1, 0).getDate();

  const days = [
    { hour: '12:00' },
    { hour: '13:00' },
    { hour: '14:00' },
    { hour: '15:00' },
    { hour: '16:00' },
    { hour: '17:00' },
    { hour: '18:00' },
    { hour: '19:00' },
    { hour: '20:00' },
    { hour: '21:00' },
    { hour: '22:00' },
    { hour: '23:00' },
    { hour: '00:00' },
    { hour: '01:00' },
    { hour: '02:00' },
    { hour: '03:00' },
    { hour: '04:00' },
    { hour: '05:00' },
    { hour: '06:00' },
    { hour: '07:00' },
    { hour: '08:00' },
    { hour: '09:00' },
    { hour: '10:00' },
    { hour: '11:00' },
  ];


  const [createEvent, setCreateEvent] = useState(false);
  const [isOpenEvent, setIsOpenEvent] = useState(false);

  const [block, setBlock] = useState({
    id: nanoid(),
    title: 'New event',
    day: '',
    fromTop: '',
    tillBottom: '',
  });

  const createEventHander = () => {
    setColumns([...columns, columns[block.day].cards.push(block)]);
    setBlock({
      id: nanoid(),
      title: 'New event',
      day: '1 Mon',
      fromTop: '',
      tillBottom: '',
    });
  };

  return (
    <div className="h-full w-full relative overflow-hidden ">
      <AnimatePresence>
        {createEvent && (
          <motion.div
          // initial={{ x: 500, }}
          // animate={{ x: 0 }}
          // exit={{ x: 500 }}
          // transition={{ duration: .5 }}
          >
            <CalendarCreateEvent
              createEvent={createEvent}
              setCreateEvent={setCreateEvent}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {isOpenEvent && (
        <CalendarEvent
          setIsOpenEvent={setIsOpenEvent}
          isOpenEvent={isOpenEvent}
        />
      )}

      <header className="shadow-md px-[2.2em] py-[1em] flex justify-between text-[12px] ">
        <div className="flex justify-center items-center gap-[.4em]">
          <button className=" font-semibold text-[#EE3637] border-1 px-[.9em] py-[.5em] rounded-[4px] bg-[#ee363638]">
            Today
          </button>
          <button className=" text-[12px] font-semibold text-[#EE3637] border-1 px-[.9em] py-[.5em] rounded-[4px] bg-[#ee363638]">
            Filters
          </button>
        </div>
        <div className="flex justify-center items-center gap-[1em]">
          <button
            onClick={() => setCreateEvent((prev) => !prev)}
            className="text-[#EE3637] font-semibold px-[.9em] py-[.5em] hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out"
          >
            Create Event
          </button>
          <div className="p-2 hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out hover:cursor-pointer">
            <FaTasks className={`${styles.navIconShape}`} />
          </div>
        </div>
      </header>
      <main className="flex  flex-col h-[90%] pt-[20px]  w-[95%] m-auto">
        <section className="flex ml-[30px]">
          {columnsArr.map((el) => (
            <div className="w-[160px]">{el}</div>
          ))}
        </section>
        <section
          className="flex"
          id="scrollbar"
        >
          <article className="flex flex-col">
            {days.map((el, index) => (
              <div
                className="text-[12px] pb-[27px] self-end"
                key={index}
              >
                {el.hour}
              </div>
            ))}
          </article>
          <article className="flex">
            {columnsArr.map((el, index) => (
              <div className="relative">
                {days.map((index) => (
                  <div
                    key={index}
                    className="w-[160px] h-[45px] border-gray-200 border-[1px]"
                  ></div>
                ))}

                {state[index].cards.map((el) => (
                  <article
                    key={el.id}
                    className="w-full absolute flex  justify-center z-20"
                    style={{
                      top: `${el.hourFrom}`,
                      bottom: `${el.hourTill}`,
                    }}
                  >
                    <div
                      onClick={() => setIsOpenEvent((prev) => !prev)}
                      className="bg-gray-100 w-[93%] text-gray-500 hover:cursor-pointer  justify-center flex items-center shadow-md p-1  rounded-md "
                    >
                      {el.title}
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </article>
        </section>
      </main>
    </div>
  );
};

// t - 0, 130, 260, 390
// h-  160, 290, 420, 550
export default Calendar;
