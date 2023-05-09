import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addEvent} from '../calendar.slice'
import { GrClose } from 'react-icons/gr';

const CalendarCreateEvent = ({ createEvent, setCreateEvent }) => {

  const state = useSelector(el => el.calendarReducer)
  const disptach = useDispatch()



  const [event, setEvent] = useState({
    id: nanoid(),
    title: '',
    weekDay: '',
    hourFrom: '',
    houtTill: '',
    guests: '',
    location: '',
    description: '',
  });


  const saveHandler = () => {
    
    setCreateEvent(prev => !prev)
    setEvent({
      id: nanoid(),
      title: '',
      weekDay: '',
      hoursFrom: '',
      houtsTill: '',
      guests: '',
      location: '',
      description: '',
    })
  }
  return (
    <div
      className="absolute z-20 w-full h-[100vh] flex justify-end"
      onClick={() => setCreateEvent((prev) => !prev)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-[20em] shadow-lg `}
      >
        <div className="m-[1em] flex flex-col gap-[1.5em]">
          <article className="flex justify-between items-center">
            <h3>Create Event</h3>
            <GrClose
              className="w-[.8em] h-[.8em] hover:cursor-pointer"
              onClick={() => setCreateEvent(prev => !prev)}
            />
          </article>
          <article>
            <input
              type="text"
              className="border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
              placeholder="Add metting title"
              value={event.title}
              onChange={(e) => setEvent({...event, title: e.target.value})}
            />
          </article>
          <article className="flex flex-col">
            <h4 className="text-[12px] mb-2">Tell us when?</h4>
            <select
              className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
              onChange={(e) => setEvent({...event, weekDay: e.target.value})}
            >
              <option value="0">08 Mon</option>
              <option value="1">09 Tue</option>
              <option value="2">10 Wen</option>
              <option value="3">11 Thu</option>
              <option value="4">12 Fri</option>
              <option value="5">13 Sat</option>
              <option value="6">14 Sun</option>
            </select>
            <div className="flex gap-1">
            <select
              className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
              placeholder="Add metting title"
            >
              <option value="0">08 Mon</option>
              <option value="1">09 Tue</option>
              <option value="2">10 Wen</option>
              <option value="3">11 Thu</option>
              <option value="4">12 Fri</option>
              <option value="5">13 Sat</option>
              <option value="6">14 Sun</option>
            </select>
            <select
              className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
              placeholder="Add metting title"
            >
              <option value="0">08 Mon</option>
              <option value="1">09 Tue</option>
              <option value="2">10 Wen</option>
              <option value="3">11 Thu</option>
              <option value="4">12 Fri</option>
              <option value="5">13 Sat</option>
              <option value="6">14 Sun</option>
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
              className="h-[10em] resize-none mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
              placeholder="Add description"
              value={event.description}
              onChange={(e) => setEvent({...event, description: e.target.value})}
            />
          </article>
          <article className='flex justify-end'>
            <button className='px-3 py-1 rounded-md text-[12px] bg-gray-300' onClick={saveHandler}>Save</button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CalendarCreateEvent;
