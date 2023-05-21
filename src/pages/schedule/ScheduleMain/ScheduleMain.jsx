import moment from 'moment';
import ScheduleMainBlocks from './ScheduleMainBlocks';

const ScheduleMain = ({ setIsEventOpen, endWeekDay, startWeekDay, finalHourArr }) => {
  const daysInWeek = [];
  const day = startWeekDay.clone();
  while (!day.isAfter(endWeekDay)) {
    daysInWeek.push(day.clone());
    day.add(1, 'day');
  }


  return (
    <main className="flex flex-col h-[90%] pt-[20px]  w-[95%] m-auto">
      <section className="flex justify-end">
        {daysInWeek.map((el) => (
          <div
            className={`w-[160px] text-[14px] ${
              moment().format('YYYY MM DD') === el.format('YYYY MM DD')
                ? 'text-black font-bold'
                : 'text-gray-500'
            }`}
          >
            {el.format('DD dd')}
          </div>
        ))}
      </section>
      <ScheduleMainBlocks
        finalHourArr={finalHourArr}
        daysInWeek={daysInWeek}
        setIsEventOpen={setIsEventOpen}
      />
    </main>
  );
};

export default ScheduleMain;
