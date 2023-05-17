import { TaskAbortError, nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { addEvent } from '../calendar.slice';
import { GrClose } from 'react-icons/gr';
import { AnimatePresence, motion } from 'framer-motion';
import Table from '../../../components/UI/Table/Table';
import moment from 'moment';

const CalendarCreateEvent = ({ createEvent, setCreateEvent }) => {
  const state = useSelector((el) => el.calendarReducer);
  const disptach = useDispatch();

  // till 13:00 - 505px 14:00 - 460px + 45

  const [event, setEvent] = useState({
    id: nanoid(),
    title: 'Default Title',
    weekDay: '0',
    hourFrom: '0px',
    hourTill: '505px',
    guests: '',
    location: '',
    description: '',
  });

  const saveHandler = () => {
    disptach(addEvent(event));
    setCreateEvent((prev) => !prev);
    setEvent({
      id: nanoid(),
      title: 'Default Title',
      weekDay: '0',
      hourFrom: '0px',
      hourTill: '505px',
      guests: '',
      location: '',
      description: '',
    });
  };

  const [viewTable, setViewTable] = useState(false);
  const [tableDate, setTableDate] = useState(moment().format('YYYY-MM-DD'));

  return (
    <div
      className="absolute z-50 w-full h-[100vh]  flex justify-end"
      onClick={() => setCreateEvent((prev) => !prev)}
    >
      <AnimatePresence>
        {createEvent && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-white h-[100vh] z-50 w-[20em] shadow-lg `}
            >
              <div className="m-[1em] flex flex-col gap-[1.5em]">
                <article className="flex justify-between items-center">
                  <h3>Create Event</h3>
                  <GrClose
                    className="w-[.8em] h-[.8em] hover:cursor-pointer"
                    onClick={() => setCreateEvent((prev) => !prev)}
                  />
                </article>
                <article>
                  <input
                    type="text"
                    className="border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
                    placeholder="Add metting title"
                    value={event.title}
                    onChange={(e) =>
                      setEvent({ ...event, title: e.target.value })
                    }
                  />
                </article>
                <article className="flex flex-col relative">
                  <h4 className="text-[12px] mb-2">Tell us when?</h4>

                  <input
                    readOnly
                    type="text"
                    value={tableDate}
                    className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
                    onClick={() => setViewTable(!viewTable)}
                  />
                  {viewTable && (
                    <div
                      className="absolute z-[100] top-[3.5em]"
                    >
                      
                      <Table
                        className=""
                        setChosenState={setTableDate}
                        chosenState={tableDate}
                      />
                    </div>
                  )}

                  <div className="flex  gap-1">
                    <select
                      className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
                      onChange={(e) =>
                        setEvent({ ...event, hourFrom: e.target.value })
                      }
                    >
                      <option value="0px">12:00</option>
                      <option value="45px">13:00</option>
                      <option value="90px">14:00</option>
                      <option value="135px">15:00</option>
                      <option value="180px">16:00</option>
                      <option value="225px">17:00</option>
                      <option value="270px">18:00</option>
                      <option value="315px">19:00</option>
                      <option value="360px">20:00</option>
                      <option value="405px">21:00</option>
                      <option value="450px">22:00</option>
                      <option value="495px">23:00</option>
                      <option value="540px">00:00</option>
                      <option value="585px">01:00</option>
                      <option value="630px">02:00</option>
                      <option value="675px">03:00</option>
                      <option value="720px">04:00</option>
                      <option value="765px">05:00</option>
                      <option value="820px">06:00</option>
                      <option value="865px">07:00</option>
                      <option value="920px">08:00</option>
                      <option value="965px">09:00</option>
                      <option value="1020px">10:00</option>
                      <option value="1065px">11:00</option>
                    </select>
                    <select
                      className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
                      placeholder="Add metting title"
                      onChange={(e) =>
                        setEvent({ ...event, hourTill: e.target.value })
                      }
                    >
                      <option value="505px">13:00</option>
                      <option value="460px">14:00</option>460
                      <option value="415px">15:00</option>
                      <option value="370px">16:00</option>
                      <option value="325px">17:00</option>
                      <option value="280px">18:00</option>
                      <option value="235px">19:00</option>
                      <option value="190px">20:00</option>
                      <option value="145px">21:00</option>
                      <option value="100px">22:00</option>
                      <option value="55px">23:00</option>
                      <option value="10pxpx">00:00</option>
                      <option value="-35px">01:00</option>
                      <option value="-80px">02:00</option>
                      <option value="-125px">03:00</option>
                      <option value="-170px">04:00</option>
                      <option value="-215px">05:00</option>
                      <option value="-260px">06:00</option>
                      <option value="-305px">07:00</option>
                      <option value="-350px">08:00</option>
                      <option value="-395px">09:00</option>
                      <option value="-440px">10:00</option>
                      <option value="-485px">11:00</option>
                      <option value="-530px">12:00</option>
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
                    onChange={(e) =>
                      setEvent({ ...event, description: e.target.value })
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalendarCreateEvent;
