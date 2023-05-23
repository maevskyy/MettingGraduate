import { useState } from 'react';
const TodoNavElement = ({ title, hourFrom, hourTill }) => {
  const [active, setActive] = useState(false);

  return (
    <section
      onClick={()=>setActive(!active)}
      className={`${
        active && 'bg-red-50 border-red-400'
      } hover:cursor-pointer border-l-[4px] rounded-[3px]  items-center  flex justify-between p-3`}
    >
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <h4 className="text-xs">
          {hourFrom} - {hourTill}
        </h4>
      </div>
      <div className="text-sm">unactive</div>
    </section>
  );
};

export default TodoNavElement;
