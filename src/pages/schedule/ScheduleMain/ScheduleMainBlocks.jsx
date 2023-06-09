import { useSelector } from 'react-redux';
import './ScheduleMainBlocks.css';

const ScheduleMainBlocks = ({setIsEventOpen, daysInWeek, finalHourArr }) => {


console.log(finalHourArr)
  
  const scheduleState = useSelector((state) => state.scheduleReducer);

  return (
    <section
      className="flex h-full w-full overflow-auto"
      id="scrollbar"
    >
      <article className="flex flex-col">
        <article className="flex flex-col">
          {finalHourArr.map((el, index) => (
            <div
              className="text-[12px] pb-[27px] self-end"
              key={index}
            >
              {el.hour}
            </div>
          ))}
        </article>
      </article>
      <article className="flex">
        {/* pain */}

        {daysInWeek.map((el) => (
          <div className="relative">
            
            {finalHourArr.map((_, index) => (
              <div
                key={index}
                className="w-[160px] h-[45px] border-gray-200 border-[1px]"
                
              ></div>
            ))}
            {scheduleState.map((obj) => {
              if (obj.date === el.format('YYYY MM DD')) {
                if (obj.calendarCards.length != 0) {
                  return obj.calendarCards.map((card) => (
                    <article
                      key={card.id}
                      className="w-full absolute flex  justify-center z-20"
                      style={{
                        top: `${card.hourFromPx}`,
                        bottom: `${card.hourTillPx}`,
                      }}
                    >
                      <div
                        onClick={() => setIsEventOpen({condition: true, info: card})}
                        className="bg-gray-100 w-[93%] text-gray-500 hover:cursor-pointer  justify-center flex items-center shadow-md p-1  rounded-md "
                      >
                        {card.title}
                      </div>
                    </article>
                  ));
                }
              }
            })}
          </div>
        ))}

        {/* pain */}
      </article>
    </section>
  );
};

export default ScheduleMainBlocks;


<div className=" w-full p-3 flex h-[92%] gap-2 ">
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
<div className=" w-[58em] border-2 flex gap-2" id='scrollbar'>
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
<div className="bg-gray-200 w-[15em] h-full rounded-lg"></div>
</div>


</div>
