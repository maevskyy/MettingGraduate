import {GrClose} from 'react-icons/gr'
import { useSelector } from 'react-redux';

const ScheduleEvent = ({isEventOpen, setIsEventOpen}) => {

  const mainState = useSelector(state => state.scheduleReducer)


  return (
    <section className="absolute p-5 top-0 right-0 h-full bg-white z-40 w-[20em] shadow-xl flex flex-col gap-[1.5em]">
      <article className="flex justify-between items-center">
        <h3>{isEventOpen.info.title}</h3>
        <GrClose
          className="w-[.8em] h-[.8em] hover:cursor-pointer"
          onClick={() => setIsEventOpen((prev) => !prev)}
        />
      </article>
    </section>
  );
};

export default ScheduleEvent;
