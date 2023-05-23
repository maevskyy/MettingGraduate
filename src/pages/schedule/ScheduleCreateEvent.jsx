import { GrClose } from 'react-icons/gr';

import Table from '../../components/UI/Table/Table';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCalendarEvent } from '../../store/Schedule/Schedule.slice';
import moment from 'moment';

const ScheduleCreate = ({ setIsCreateOpen, finalHourArr }) => {
  const mainState = useSelector((state) => state.scheduleReducer);
  const dispatch = useDispatch();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [deleteSnipet, setDeleteSnipet] = useState(
    moment().format('YYYY MM DD')
  );

  const [calendarEvent, setCalendarEvent] = useState({
    id: nanoid(),
    title: 'Default Title',
    date: moment().format('YYYY MM DD'),
    hourFrom: '12:00',
    hourTill: '13:00',
    hourFromPx: '0px',
    hourTillPx: '505px',
    guests: [],
    location: '',
    description: '',
  });

  const tableDateHandler = (date) => {
    setCalendarEvent({ ...calendarEvent, date: date });
  };

  const saveHandler = () => {
    dispatch(addCalendarEvent(calendarEvent));
    setCalendarEvent({
      id: nanoid(),
      title: 'Default Title',
      date: moment().format('YYYY MM DD'),
      hourFrom: '12:00',
      hourTill: '13:00',
      hourFromPx: '0px',
      hourTillPx: '505px',
      guests: [],
      location: '',
      description: '',
    });
    setIsCreateOpen((prev) => !prev);
  };

console.log(calendarEvent)


  return (
    <section className="absolute p-5 top-0 right-0 h-full bg-white z-40 w-[20em] shadow-xl flex flex-col gap-[1.5em]">
      <article className="flex justify-between items-center">
        <h3>Create Event</h3>
        <GrClose
          className="w-[.8em] h-[.8em] hover:cursor-pointer"
          onClick={() => setIsCreateOpen((prev) => !prev)}
        />
      </article>
      <article>
        <input
          type="text"
          className="border-gray-300 border-[1px] w-full outline-none rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
          placeholder="Add metting title"
          value={calendarEvent.title}
          onChange={(e) =>
            setCalendarEvent({ ...calendarEvent, title: e.target.value })
          }
        />
      </article>
      <article className="flex flex-col relative">
        <h4 className="text-[12px] mb-2">Tell us when?</h4>

        <input
          readOnly
          type="text"
          value={calendarEvent.date}
          className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        />
        {isCalendarOpen && (
          <div className="absolute z-[100] top-[3.5em]">
            <Table
              className=""
              setChosenState={tableDateHandler}
              chosenState={calendarEvent.day}
            />
          </div>
        )}
        <div className="flex  gap-1">
          <select
            className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
            onChange={(e) =>
              setCalendarEvent({ ...calendarEvent, hourFromPx: e.target.value.slice(0,6).trim(), hourFrom: e.target.value.slice(6,13).trim() })
            }
          >
            {finalHourArr.map((el) => (
              <option
                value={`${el.top}px  ${el.hour}`}
                key={el.hour}
              >
                {el.hour}
              </option>
            ))}
          </select>
          <select
            className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
            onChange={(e) =>
              setCalendarEvent({ ...calendarEvent, hourTillPx: e.target.value.slice(0,6).trim(), hourTill: e.target.value.slice(6,13).trim() })
            }
          >
            {finalHourArr.slice(1, 24).map((el) => (
              <option
              value={`${el.bottom}px  ${el.hour}`}
              key={el.hour}
              >
                {el.hour}
              </option>
            ))}
          </select>
        </div>
      </article>
      <article>
        <h4 className="text-[12px] mb-2">Add guests</h4>
        <input
          type="text"
          className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
          placeholder="Add metting title"
        />
      </article>
      <article>
        <h4 className="text-[12px] mb-2">Location</h4>
        <input
          type="text"
          className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
          placeholder="Add metting title"
        />
      </article>
      <article>
        <h4 className="text-[12px] mb-2">Description</h4>
        <textarea
          className="outline-none h-[10em] resize-none mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
          placeholder="Add description"
          value={calendarEvent.description}
          onChange={(e) =>
            setCalendarEvent({ ...calendarEvent, description: e.target.value })
          }
        />
      </article>
      <article className="flex ">
        <button
          className="px-3 py-1 rounded-md text-[12px] bg-gray-300"
          onClick={saveHandler}
        >
          Save
        </button>
      </article>
    </section>
  );
};

export default ScheduleCreate;
