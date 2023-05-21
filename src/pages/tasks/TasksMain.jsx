import './TasksMain.css';
import TasksDays from './TasksDays';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { useRef } from 'react';

const TasksMain = ({ startWeekDay, endWeekDay }) => {
  const daysInWeek = [];
  const day = startWeekDay.clone();
  while (!day.isAfter(endWeekDay)) {
    daysInWeek.push(day.clone());
    day.add(1, 'day');
  }

  const [createEvent, setCreateEvent] = useState(false);

  const mainState = useSelector(state => state.scheduleReducer)




  const [isCurrent, setIsCurrent] = useState(false)

  const currentArr = []
  const currentMapFilter = mainState.map(obj => obj.todoCards.current.map(el => currentArr.push(el)))





  return (
    <div className=" w-[95%] h-[94%] p-3 flex gap-2 ">
      <article className="h-full">
        <div className="bg-gray-200  h-[97%] rounded-lg">
          <div className="w-[16em] p-4 flex flex-col gap-2">
            <article className="flex flex-col gap-1">
              <h2 className="font-bold">My task planner</h2>
              <div className="flex justify-between px-1 text-[10px]">
              <h3 className="hover:cursor-pointer font-semibold text-red-400">Completed (0)</h3>
              <h3 className="hover:cursor-pointer ">Current ({currentArr.length})</h3>
              <h3 className="hover:cursor-pointer ">Deleted (0)</h3>
              </div>
            </article>
            <button
              onClick={() => setCreateEvent(!createEvent)}
              className="text-xs flex justify-center items-center hover:bg-gray-300 p-2 rounded-md py-3 ease-in-out duration-200"
            >
              + Add task
            </button>
            <article>
              
            </article>
          </div>
        </div>
      </article>
      <article
        className="flex gap-2  h-full"
        id="scrollbar"
      >
        {daysInWeek.map((el) => (
          <TasksDays info={el} />
        ))}
      </article>
    </div>
  );
};

export default TasksMain;

{
  /* <section className="bg-gray-200  h-full rounded-lg">cdscsdcfdsdcsdprivet</section>; */
}
