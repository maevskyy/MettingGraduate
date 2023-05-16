import {useState} from 'react';

const TableItems = ({ startDay, today, setSelectedDate }) => {


  const day = startDay.clone().subtract(1, 'day');

  const totalDays = 42;
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

  return (
    <div className="grid  text-[14px] grid-cols-7 grid-rows-6 w-[15em] ">
      {daysArray.map((el) => (
        <div
          key={el.format('DDMMYYYY')}
          className={`h-[2.5em] flex items-center justify-center hover:cursor-pointer hover:bg-blue-300/25 ${today.format('YYYY-MM-DD') === el.format('YYYY-MM-DD') ? 'bg-red-300/25': ''}`}
          onClick={() => setSelectedDate(el.format('YYYY-MM-DD')) }
        >
          {el.format('D')}
        </div>
      ))}
    </div>
  );
};

export default TableItems;
