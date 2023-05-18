import { useState } from 'react';
import moment from 'moment';
import { AnimatePresence, animate, motion } from 'framer-motion';

import ScheduleCreate from './ScheduleCreateEvent';
import ScheduleEvent from './ScheduleEvent';
import ScheduleHeader from './ScheduleHeader';
import ScheduleMain from './ScheduleMain/ScheduleMain';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

const Schedule = () => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startWeekDay = today.clone().startOf('week');
  const endWeekDay = today.clone().endOf('week');

  const plusWeekHandler = () => {
    setToday((prev) => prev.clone().add(1, 'week'));
  };
  const minusWeekHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'week'));
  };
  const todayTableHandler = () => {
    setToday(moment());
  };

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  //! delete
  const hours = [
    { hour: '12:00',},
    { hour: '13:00',},
    { hour: '14:00',},
    { hour: '15:00',},
    { hour: '16:00',},
    { hour: '17:00',},
    { hour: '18:00',},
    { hour: '19:00',},
    { hour: '20:00',},
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

  const topResultArr = [0]
  let item = 0
  for (let i = 1; i < hours.length; i++) {
      topResultArr.push(item += 45)  
  }

  const hoursWithTop = hours.map((el, index) => {
      return {
        ...el,
        top: topResultArr[index]
      }
  })


  const bottomResultArr = [550]
  let canIGetAHoyaaa = 550
  for (let i = 1; i < hours.length; i++) {
    bottomResultArr.push(canIGetAHoyaaa -= 45)
  }

  const finalHourArr = hoursWithTop.map((el, index) => {
    return {
      ...el,
      bottom: bottomResultArr[index]
    }
})

//! still delete
  return (
    <div className="h-full w-full relative overflow-hidden">
      <ScheduleHeader
        startWeekDay={startWeekDay}
        endWeekDay={endWeekDay}
        plusWeekHandler={plusWeekHandler}
        minusWeekHandler={minusWeekHandler}
        todayTableHandler={todayTableHandler}
        setIsCreateOpen={setIsCreateOpen}
      />
      <ScheduleMain
        today={today}
        startWeekDay={startWeekDay}
        endWeekDay={endWeekDay}
        finalHourArr={finalHourArr}
      />
      <AnimatePresence>
        {isCreateOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            // initial={{ x: 500 }}
            // animate={{ x: 0 }}
            // exit={{ x: 500 }}
            // transition={{ duration: 0.5 }}
          >
            <ScheduleCreate
              finalHourArr={finalHourArr}
              setIsCreateOpen={setIsCreateOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {false && <ScheduleEvent />}
    </div>
  );
};

export default Schedule;
