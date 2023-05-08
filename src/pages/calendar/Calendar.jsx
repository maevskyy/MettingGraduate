import { useEffect, useState } from 'react';
import { navLinks } from '../../constanst';
import { nanoid } from '@reduxjs/toolkit';
const Calendar = () => {
  const longStyles = {
    block:
      ' w-[94%] rounded-md  bg-sky-500 border-2 border-black text-white flex justify-center items-center font-semibold absolute mx-1',
  };

  const date = new Date();
  const currMoth = date.getMonth();
  const currYear = date.getFullYear();
  const lastDayOfMonth = new Date(currYear, currMoth + 1, 0).getDate();

  const [block, setBlock] = useState({
    id: nanoid(),
    title: 'New event',
    day: '',
    fromTop: '',
    tillBottom: '',
  });

  const [columns, setColumns] = useState([
    { id: nanoid(), title: '1 Mon', cards: [] },
    { id: nanoid(), title: '2 Tue', cards: [] },
    { id: nanoid(), title: '3 Thu', cards: [] },
    { id: nanoid(), title: '4 Wen', cards: [] },
    { id: nanoid(), title: '5 Fri', cards: [] },
    { id: nanoid(), title: '6 Sat', cards: [] },
    { id: nanoid(), title: '7 Sun', cards: [] },
  ]);

  const createEventHander = () => {
    setColumns([...columns, columns[block.day].cards.push(block)]);
    setBlock({
      id: nanoid(),
      title: 'New event',
      day: '1 Mon',
      fromTop: '',
      tillBottom: '',
    });
  };

  return (
    <div className="bg-black/40 h-full">
      <header className="p-5 shadow-lg ">Some toggles</header>
      <main className="flex m-5 mx-7">
        <section className="mt-6 flex flex-col text-sm border-2">
          <div className=" h-[60px]">12:00</div>
          <div className=" h-[60px]">13:00</div>
          <div className=" h-[60px]">14:00</div>
          <div className=" h-[60px]">15:00</div>
          <div className=" h-[60px]">16:00</div>
          <div className=" h-[60px]">17:00</div>
          <div className=" h-[60px]">18:00</div>
          <div className="">19:00</div>
        </section>
        <section className="flex">
          <div className="w-[135px] border-red-400 text-center flex flex-col relative ">
            <h3>1 Mon</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[0].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
          <div className="w-[135px] border-red-400 text-center flex flex-col relative">
            <h3>2 Tue</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[1].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
          <div className="w-[135px] border-red-400 text-center flex flex-col relative ">
            <h3>3 Thu</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[2].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
          <div className="w-[135px] border-red-400 text-center flex flex-col relative">
            <h3>4 Wen</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[3].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
          <div className="w-[135px] border-red-400 text-center flex flex-col relative">
            <h3>5 Fri</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[4].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
          <div className="w-[135px] border-red-400 text-center flex flex-col relative">
            <h3>6 Sat</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[5].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
          <div className="w-[135px] border-red-400 text-center flex flex-col relative">
            <h3>7 Sun</h3>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            <div className="border-2 h-[60px]"></div>
            {columns[6].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  top: `${el.fromTop}`,
                  bottom: `${el.tillBottom}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))}
          </div>
        </section>
        <section className="mt-5 mx-5 text-center flex flex-col w-[8em] gap-2">
          <input
            type="text"
            className="w-full outline-none p-2"
            placeholder="Title"
            value={block.title}
            onChange={(e) => setBlock({ ...block, title: e.target.value })}
          />
          <select
            className="p-2 outline-none"
            defaultValue={-1}
            onChange={(e) => setBlock({ ...block, day: e.target.value })}
          >
            <option
              value=""
              disabled
            >
              Day
            </option>
            <option value="0">1 Mon</option>
            <option value="1">2 Tue</option>
            <option value="2">3 Thu</option>
            <option value="3">4 Wen</option>
            <option value="4">5 Fri</option>
            <option value="5">6 Sat</option>
            <option value="6">7 Sun</option>
          </select>
          <select
            className="p-2 outline-none"
            defaultValue={0}
            onChange={(event) =>
              setBlock({ ...block, fromTop: event.target.value })
            }
          >
            <option
              value=""
              disabled
            >
              From
            </option>
            <option value="26px">12:00</option>
            <option value="86px">13:00</option>
            <option value="146px">14:00</option>
            <option value="206px">15:00</option>
            <option value="266px">16:00</option>
            <option value="326px">17:00</option>
            <option value="386px">18:00</option>
          </select>
          <select
            className="p-2 outline-none"
            defaultValue={0}
            onChange={(event) =>
              setBlock({ ...block, tillBottom: event.target.value })
            }
          >
            <option
              value=""
              disabled
            >
              Till
            </option>
            <option value="422px">13:00</option>
            <option value="362px">14:00</option>
            <option value="302px">15:00</option>
            <option value="242px">16:00</option>
            <option value="182px">17:00</option>
            <option value="122px">18:00</option>
            <option value="62px">19:00</option>
          </select>
          <button
            className="bg-white p-2 hover:opacity-70"
            onClick={createEventHander}
          >
            Create
          </button>
        </section>
      </main>
    </div>
  );
};

// t - 0, 130, 260, 390
// h-  160, 290, 420, 550
export default Calendar;
