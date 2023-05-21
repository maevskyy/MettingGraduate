import moment from 'moment';
import { useState } from 'react';

import TasksEvent from './TasksEvent';
import TasksHeader from './TasksHeader';
import TasksMain from './TasksMain';

const Tasks = () => {
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

  return (
    <div className=" w-full h-full">
      <TasksHeader
        startWeekDay={startWeekDay}
        endWeekDay={endWeekDay}
        plusWeekHandler={plusWeekHandler}
        minusWeekHandler={minusWeekHandler}
        todayTableHandler={todayTableHandler}
      />
      <TasksMain startWeekDay={startWeekDay} endWeekDay={endWeekDay} />
      {false && <TasksEvent />}
    </div>
  );
};

export default Tasks;
