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

  const top = {
    12: '26px',
    13: '86px',
    14: '146px',
    15: '206px',
    16: '266px',
    17: '326px',
    18: '386px',
    19: '446px',
  };

  const height = {
    1: '56px',
    2: '116px',
    3: '176px',
    4: '236px',
    5: '296px',
    6: '356px',
    7: '416px',
    8: '476px',
  };

  const [block, setBlock] = useState({
    id: nanoid(),
    title: 'New event',
    day: '1 Mon',
    fromTop: '',
    tllHeight: '',
  });

  const [columns, setColumns] = useState([
    {
      id: nanoid(),
      title: '1 Mon',
      cards: [
        // 56px -1h, 116px -2h, 176px -3h
        // + 60px for top
      ],
    },
    {
      id: nanoid(),
      title: '2 Tue',
      cards: [],
    },
    { id: nanoid(), title: '3 Thu', cards: [] },
    { id: nanoid(), title: '4 Wen', cards: [] },
    { id: nanoid(), title: '5 Fri', cards: [] },
    { id: nanoid(), title: '6 Sat', cards: [] },
    { id: nanoid(), title: '7 Sun', cards: [] },
  ]);

  const topFunc = (topVal) => {
    let final = 26;
    if (topVal === 12) {
      return '26px';
    }
    for (let i = 12; i < topVal; i++) {
      final += 60;
    }
    return `${final}px`;
  };

  const [interTop, setInterTop] = useState('');
  const [interHeight, setInterHeight] = useState('');

  const heightFunc = (heightVal = interHeight, topVal = interTop) => {
    const height = heightVal - topVal;
    let final = 56;
    if (height === 1) {
      return `${final}px`;
    }
    for (let i = 1; i < height; i++) {
      final += 60;
    }
    console.log(`${topVal}-topval ${heightVal}-heightVal`);
    return `${final}px`;
    
  };

  const tillSelectHandler = (event) => {
    setBlock({ ...block, tllHeight: heightFunc(event.target.value) });
    };

  const topSelectHandler = (event) => {
    setBlock({
      ...block,
      fromTop: topFunc(event.target.value),
      tllHeight: heightFunc(interHeight),
    });
    setInterTop(event.target.value);
  };

  const createBlockHandler = () => {
    setColumns([...columns, columns[0].cards.push(block)]);
    setBlock({
      id: nanoid(),
      title: 'New event',
      day: '1 Mon',
      fromTop: '',
      tllHeight: '',
      });
  };

  // console.log(`${block.fromTop}-fromtop, ${block.tllHeight}-tllheight`);

  return (
    <div className="bg-black/40 h-[200em] w-[200em]">
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
            <div
                className={`${longStyles.block}`}
                style={{
                  top: `26px`,
                  bottom: '2px'
                }}
              >
                title
              </div>
            {/* {columns[0].cards.map((el) => (
              <div
                className={`${longStyles.block}`}
                style={{
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
                }}
                key={el.id}
              >
                {el.title}
              </div>
            ))} */}
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
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
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
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
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
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
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
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
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
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
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
                  height: `${el.tllHeight}`,
                  top: `${el.fromTop}`,
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
            id="title"
            className="w-full outline-none p-2"
            placeholder="Title"
          />
          <select className="p-2 outline-none">
            <option
              value=""
              disabled
              selected
            >
              Day
            </option>
            <option value="">1 Mon</option>
            <option value="">2 Tue</option>
            <option value="">3 Thu</option>
            <option value="">4 Wen</option>
            <option value="">5 Fri</option>
            <option value="">6 Sat</option>
            <option value="">7 Sun</option>
          </select>
          <select
            className="p-2 outline-none"
            onChange={topSelectHandler}
          >
            <option
              value="1"
              disabled
              selected
            >
              From
            </option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
          </select>
          <select
            className="p-2 outline-none"
            onChange={tillSelectHandler}
          >
            <option
              value="1"
              disabled
              selected
            >
              Till
            </option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
          </select>
          <button
            className="bg-white p-2 hover:opacity-70"
            onClick={createBlockHandler}
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
