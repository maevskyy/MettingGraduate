import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskEvent } from '../../store/Schedule/Schedule.slice';
import {
  AiFillDelete,
  AiOutlineCheckSquare,
  AiFillCheckSquare,
} from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { styles } from '../../styles';
import { useState } from 'react';
import Table from '../../components/UI/Table/Table';
import { nanoid } from '@reduxjs/toolkit';

const TasksDays = ({ info }) => {
  const dispatch = useDispatch();

  const mainState = useSelector((state) => state.scheduleReducer);
  const today = moment();
  const isToday =
    info.format('YYYY MM DD') == today.clone().format('YYYY MM DD')
      ? 'text-blue-300'
      : '';

  const [showCreateScreen, setShowCreateScreen] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const [taskEvent, setTaskEvent] = useState({
    id: nanoid(),
    title: '',
    date: info.format('YYYY MM DD'),
    description: '',
  });

  const saveHandler = () => {
    dispatch(addTaskEvent(taskEvent));
    setTaskEvent({
      id: nanoid(),
      title: '',
      date: info.format('YYYY MM DD'),
      description: '',
    });
    setShowCreateScreen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100  h-full rounded-lg relative">
      <div className="w-[16em] p-4 flex flex-col gap-2">
        <article className="flex flex-col gap-1">
          <h2 className={`${isToday} font-bold`}>{info.format('dddd')}</h2>
          <h3 className={`${isToday} text-xs`}>{info.format('DD MMM')}</h3>
        </article>
        <button
          onClick={() => setShowCreateScreen(!showCreateScreen)}
          className="text-xs flex justify-center items-center hover:bg-gray-300 p-2 rounded-md py-3 ease-in-out duration-200"
        >
          + Add task
        </button>
        {showCreateScreen && (
          <div className="">
            <section className="flex flex-col gap-2 opacity-50">
              <div className="border-[1px] p-[6px] rounded-md text-xs bg-white ">
                <div className="px-[6px] py-[3px] border-l-2 border-red-300 flex flex-col gap-1 ">
                  <div className="flex gap-1 items-center">
                    <AiOutlineCheckSquare />
                    <input
                      type="text"
                      value={taskEvent.title}
                      onChange={(e) =>
                        setTaskEvent({ ...taskEvent, title: e.target.value })
                      }
                      placeholder="Title"
                      className=" outline-none"
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <BiMenu />
                    <input
                      type="text"
                      value={taskEvent.description}
                      onChange={(e) =>
                        setTaskEvent({
                          ...taskEvent,
                          description: e.target.value,
                        })
                      }
                      placeholder="Description"
                      className=" outline-none"
                    />
                  </div>

                  <div
                    className="flex gap-1 items-center hover:cursor-pointer"
                    onClick={() => setShowTable(!showTable)}
                  >
                    <MdDateRange />
                    <input
                      readOnly
                      type="text"
                      value={taskEvent.date}
                      placeholder="Due date"
                      className=" outline-none hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="text-xs flex gap-2 justify-end">
                <button
                  className=" px-3 py-1 rounded-md border-1 border-[1.5px]  hover:bg-red-300/30 duration-200 ease-in-out"
                  onClick={() => setShowCreateScreen(!showCreateScreen)}
                >
                  Cancel
                </button>
                <button
                  className="bg-gray-300 px-3 py-1 rounded-md border-1 border-[1.5px]"
                  onClick={saveHandler}
                >
                  Add task
                </button>
              </div>
            </section>
            {showTable && (
              <div className="absolute top-[12em]  opacity-100">
                <Table />
              </div>
            )}
          </div>
        )}
        <article className="flex flex-col gap-2 ">
          {mainState.map((dateObj) => {
            if (dateObj.date === info.format('YYYY MM DD')) {
              if (dateObj.todoCards.current.length !== 0) {
                return dateObj.todoCards.current.map((el, index) => (
                  <div
                    className="border-[1px] p-[6px] rounded-md text-xs bg-white hover:shadow-md duration-300 ease-in-out hover:cursor-pointer  hover:translate-y-1"
                    key={index}
                  >
                    <div className="p-[4px] border-l-2 border-red-300 flex justify-between">
                      <section className="flex items-start justify-center ">
                        <h3>{el.title}</h3>
                      </section>
                      <section className="flex flex-col gap-3">
                        <button>
                          <AiOutlineCheckSquare
                            className={`${styles.navIconShape}`}
                          />
                        </button>
                        <button>
                          <AiFillDelete className={`${styles.navIconShape}`} />
                        </button>
                      </section>
                    </div>
                  </div>
                ));
              }
            }
          })}
        </article>
      </div>
    </div>
  );
};

export default TasksDays;
