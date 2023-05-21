import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const TasksHeader = ({
  startWeekDay,
  endWeekDay,
  minusWeekHandler,
  plusWeekHandler,
  todayTableHandler,

}) => {
  return (
    <header className="shadow-md px-[2.2em] py-[1em] flex justify-between text-[12px]">
      <section className="flex justify-center items-center gap-[1em]">
        <button
          onClick={todayTableHandler}
          className="font-semibold text-[#EE3637] border-1 px-[.9em] py-[.5em] rounded-[4px] bg-[#ee363638]"
        >
          Today
        </button>
        <div className="flex gap-2  justify-center">
          <button
            className="p-1 rounded-full hover:bg-rose-200"
            onClick={minusWeekHandler}
          >
            <AiFillCaretLeft />
          </button>
          <h4 className=" w-[8em] justify-center flex">
            {startWeekDay.format('MMM DD')} - {endWeekDay.format('MMM DD')}
          </h4>
          <button
            className="p-1 rounded-full hover:bg-rose-200"
            onClick={plusWeekHandler}
          >
            <AiFillCaretRight />
          </button>
        </div>
      </section>
      <section>
      </section>
    </header>
  );
};

export default TasksHeader;