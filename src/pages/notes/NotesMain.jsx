import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { deleted } from './Notes.slice';

const NotesMain = () => {
  const state = useSelector((e) => e.notesReducer);
  const dispatch = useDispatch()

  return (
    <main className="mx-[5.5em] h-[80%] mt-[1.5em] flex flex-col gap-3">
      <section className="w-fit border-b-[1px]  font-semibold pb-1 border-black">
        {state[0].creationMonth}
      </section>
      <section className="flex gap-3 flex-col">
        {state.map((el, index) => (
          <div
            key={index}
            className="border-gray-300 border-[1px] rounded-[4px] w-full h-[4em] hover:shadow-md duration-300 ease-in-out hover:cursor-pointer  hover:translate-y-1"
          >
            <header className="flex justify-between">
              <article>
                <div className="text-[10px] mx-2 my-[.5em]  font-semibold">
                  {el.creationHours}
                </div>
              </article>
              <article>
                <button
                  className="p-[.3em] hover:bg-[#ee363638]  duration-300 ease-in-out hover:text-[#EE3637] rounded-sm"
                  onClick={() => dispatch(deleted(el))}
                >
                  <MdOutlineDeleteOutline className="" />
                </button>
              </article>
            </header>
            <main className="flex text-[14px]  font-Roboto text-gray-500 mx-[.6em]">
              {el.content.slice(0, 15)}{el.content.length >= 15 ? '...' : ''}
            </main>
          </div>
        ))}
      </section>
    </main>
  );
};

export default NotesMain;
