import TableMonitor from './TableMonitor';
import TableItems from './TableItems';

import moment from 'moment';
import { useState } from 'react';

const Table = ({ setChosenState, chosenState }) => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  const prevTableHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'));
  };
  const nextTableHandler = () => {

    setToday((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <div
      className="rounded-md shadow-2xl bg-white p-3 w-fit flex flex-col gap-2 border-2"
    >
      <TableMonitor
        today={today}
        prevTableHandler={prevTableHandler}
        nextTableHandler={nextTableHandler}
      />
      <TableItems
        startDay={startDay}
        today={today}
        setChosenState={setChosenState}
        chosenState={chosenState}
      />
    </div>
  );
};

export default Table;
