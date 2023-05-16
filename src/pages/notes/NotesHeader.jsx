import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { styles } from '../../styles';
import { Link } from 'react-router-dom';
import NotesCreateNote from './NotesCreateNote';

const NotesHeader = () => {
  return (
    <header className="shadow-md px-[2.2em] py-[1em] flex justify-between text-[12px]">
      <div className="flex justify-center items-center gap-[.4em]">
        <button className=" font-semibold text-[#EE3637] border-1 px-[.9em] py-[.5em] rounded-[4px] bg-[#ee363638]">
          Today
        </button>
        <button className=" text-[12px] font-semibold text-[#EE3637] border-1 px-[.9em] py-[.5em] rounded-[4px] bg-[#ee363638]">
          Filters
        </button>
      </div>
      <div className="flex justify-center items-center gap-[1em]">
        <NotesCreateNote
          title="Create Note"
          style={`text-[#EE3637] font-semibold px-[.9em] py-[.5em] hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out`}
        />
        <div className="p-2 hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out hover:cursor-pointer">
          <FaTasks className={`${styles.navIconShape}`} />
        </div>
        <div className="p-2 hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out hover:cursor-pointer">
          <FaTasks className={`${styles.navIconShape}`} />
        </div>
      </div>
    </header>
  );
};

export default NotesHeader;
