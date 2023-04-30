import { useState } from 'react';
import { navLinks } from '../../constanst';

const Calendar = () => {





  const hours = {
    oneH: { hour: 1, top: '0' },
  };

  const [time, setTime] = useState({
    title: 'Event',
    from: 0,
    till: 0,
  });

  function name(firstVal = time.from, secondVal = time.till) {
    const heightMain = secondVal - firstVal;
    let top = null;
    let height = null;

    if (firstVal === 1) {
      top = 0;
    }
    if (firstVal >= 1) {
      for (let index = 1; index < firstVal; index++) {
        top += 130;
      }
    }
    if (heightMain >= 1) {
      height += 160;
      for (let index = 1; index < heightMain; index++) {
        height += 130;
      }
    }

    const finalHeight = `${height}px`;
    const finalTop = `${top}px`;
    return { finalHeight, finalTop };
  }


 const handlerFrom = (e) => {
  setTime({...time, from: Number(e.target.value)})
  name()
 } 

 const handlerTill = (e) => {
  setTime({...time, till: Number(e.target.value)})
  name()
 }

 console.log(name().finalTop);


  return (
    <div className="h-[100%] bg-black/50 flex justify-center items-center">
      <div className="h-[90%] w-[90%] bg-white/50 p-5 flex gap-2">
        <article className="flex flex-col border-2  justify-between">
          <div className="border-2">1pm</div>
          <div className="border-2">2pm</div>
          <div className="border-2">3pm</div>
          <div className="border-2">4pm</div>
          <div className="border-2">5pm</div>
        </article>
        <article className="border-2 w-[10em] relative">
          <div
            className={` border-2 border-red-400 absolute w-full flex justify-center items-center`}
            style={{
              height: name().finalHeight,
              top: name().finalTop,
            }}
          >
            {time.title}
          </div>
        </article>
        <article className='flex flex-col gap-2'>
          <input
            type="text"
            placeholder="Title"
            className=" outline-none p-1"
            value={time.title}
            onChange={(e) => setTime({...time, title: e.target.value})}
          />
          <input
            type="text"
            placeholder="from"
            className=" outline-none p-1 w-[4em]"
            value={time.from}
            onChange={handlerFrom}
          />
          <input
            type="text"
            placeholder="till"
            className=" outline-none p-1  w-[4em]"
            value={time.till}
            onChange={handlerTill}
          />
          <button onClick={() => setTime({...time, from: 0, till: 0})} className='border-2 p-2'>Reset</button>
        </article>
      </div>
    </div>
  );
};

// t - 0, 130, 260, 390
// h-  160, 290, 420, 550
export default Calendar;
