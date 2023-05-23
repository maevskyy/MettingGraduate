import { useState } from 'react';
import moment from 'moment';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { styles } from '../../styles';
import { CiViewList } from 'react-icons/ci';
import { BsCalendar } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import TodoNavElement from './TodoNavElement';

const TodoNav = () => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const plusDayHandler = () => {
    setToday((prev) => prev.clone().add(1, 'Day'));
  };
  const minusDayHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'Day'));
  };
  const todayTableHandler = () => {
    setToday(moment());
  };
  const daysEmoji = [
    { Monday: '📝' },
    { Tuesday: '🏃' },
    { Wednesday: '🧗' },
    { Thursday: '🙅' },
    { Friday: '🕺' },
    { Saturday: '🎊' },
    { Sunday: '🛌' },
  ];

  const mainState = useSelector((state) => state.scheduleReducer);

  const allCalendarEvent = mainState.filter(
    (obj) => obj.date === today.format('YYYY MM DD')
  );

  const [isActive, setIsActive] = useState(false);

  const rightEmoji = daysEmoji.filter(
    (obj) => Object.keys(obj) == today.format('dddd')
  );
  const result = rightEmoji[0];
  return (
    <section className="w-[26%] border-r-[1px] py-6 pl-6 pb-6">
      <header className="mr-6 flex justify-between select-none">
        <div className="flex gap-[6px]">
          <div className="text-[30px] w-[1.5em]">{Object.values(result)}</div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg flex">
              {today.format('dddd')}
            </h3>
            <div className="flex items-center text-xs font-semibold text-red-500">
              <AiOutlineLeft onClick={minusDayHandler} />
              <h4 className="w-[6.5em] select-none flex justify-center">
                {today.format('DD MMM YYYY')}
              </h4>
              <AiOutlineRight onClick={plusDayHandler} />
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 p-1 gap-1 items-center justify-end rounded-md">
          <div className="px-3 py-2 border-[1px] rounded-md bg-white shadow-md">
            <CiViewList className={`${styles.navIconShape}`} />
          </div>
          <div className="px-3 py-2 bg-gray-50 rounded-md border-[1px]">
            <BsCalendar className={`${styles.navIconShape}`} />
          </div>
        </div>
      </header>
      <main
        className="mt-6 flex flex-col gap-2 h-[90%]"
        id="scrollbar"
      >
        {allCalendarEvent.length ? (
          allCalendarEvent[0].calendarCards.map((el) => (
            <TodoNavElement
              key={el.id}
              title={el.title}
              hourFrom={el.hourFrom}
              hourTill={el.hourTill}
            />
          ))
        ) : (
          <div className="flex w-full items-center  ">
            <div className="h-[1px] w-[72%] border-[1px] "></div>
            <button
              onClick={todayTableHandler}
              className="text-xs w-[5em] hover:font-semibold"
            >
              Back to today
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default TodoNav;
