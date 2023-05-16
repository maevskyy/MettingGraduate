
import TableHeader from './TableHeader';
import TableMonitor from './TableMonitor';
import TableItems from './TableItems';

import moment from 'moment';

const Table = ({setSelectedDate}) => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');

  return (
    <div className="rounded-md shadow-2xl p-3 w-fit flex flex-col gap-2 border-2">
      <TableMonitor today={today} />
      <TableItems
        startDay={startDay}
        today={today}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Table;
