import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropleft } from 'react-icons/io';
import { daysInWeek, monthInYear } from '../../constanst';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './Notes.slice';
import { nanoid } from '@reduxjs/toolkit';

const NotesCreateNote = ({ title, style }) => {
  const date = new Date();
  const weekDay = date.getDay();
  const monthDay = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const result = `${daysInWeek[weekDay]}, ${monthDay} ${
    monthInYear[month]
  } ${year}, ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  const state = useSelector((e) => e.notesReducer);
  const dispatch = useDispatch();

  const [textArea, setTextArea] = useState({
    id: nanoid(),
    popUp: false,
    content: '',
    creationMonth: `${monthDay} ${monthInYear[month]}`,
    creationHours: `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }`,
  });

  const createNoteandler = () => {
    dispatch(add(textArea));
    setTextArea({
      id: nanoid(),
      popUp: false,
      content: '',
      creationMonth: `${monthDay} ${monthInYear[month]}`,
      creationHours: `${hours}:${minutes}`,
    });
  };
  return (
    <Link
      to={`/Notes/${textArea.id}`}
      onClick={createNoteandler}
      className={`${style}`}
    >
      {title}
    </Link>
  );
};

export default NotesCreateNote;

// const NotesCreateNote = () => {
//   const date = new Date();
//   const weekDay = date.getDay();
//   const monthDay = date.getDate();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const result = `${daysInWeek[weekDay]}, ${monthDay} ${
//     monthInYear[month]
//   } ${year}, ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

//   const state = useSelector((e) => e.notesReducer);
//   const dispatch = useDispatch();

//   const [textArea, setTextArea] = useState({
//     id: nanoid(),
//     popUp: false,
//     content: '',
//     creationMonth: `${monthDay} ${monthInYear[month]}`,
//     creationHours: `${hours < 10 ? '0' + hours : hours}:${
//       minutes < 10 ? '0' + minutes : minutes
//     }`,
//   });

//   const createNoteandler = () => {
//     dispatch(add(textArea));
//     setTextArea({
//       id: nanoid(),
//       popUp: false,
//       content: '',
//       creationMonth: `${monthDay} ${monthInYear[month]}`,
//       creationHours: `${hours}:${minutes}`,
//     });
//   };

//   return (
//     <div className="h-full">
//       <header className="shadow-md px-[2.2em] py-[1em] flex justify-between text-[12px]">
//         <div className="flex justify-center items-center gap-[0.3em]">
//           <button
//             onClick={createNoteandler}
//             className="text-[#EE3637] font-semibold px-[.7em] py-[.5em] hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out flex gap-[0.3em] justify-center items-center hover:cursor-pointer"
//           >
//             <IoMdArrowDropleft />
//             <Link to="/Notes">Back</Link>
//           </button>
//           <div className="border-l-[1px] h-full "></div>
//           <div className="text-[10px] px-[.7em] py-[.5em] h-[2.5em] text-black/60 flex flex-col justify-center  ">
//             <div className=" font-bold text-[12px]  text-black">{textArea.content.slice(0, 15)}{textArea.content.length >= 15 ? '...' : ''}</div>
//             <div className=""> {result}</div>
//           </div>
//         </div>
//       </header>
//       <main className="mx-[1.6em] h-[83%] border-gray-300 border-[1px]  rounded-lg bg-gray-100 mt-[1.5em] flex flex-col justify-between">
//         <section className="border-b-[1px] p-2">toggles</section>
//         <textarea
//           className="h-full outline-none resize-none bg-gray-100 px-2 py-1 text-[12px]"
//           placeholder="Start typing"
//           value={textArea.content}
//           name="content"
//           onChange={(e) =>
//             setTextArea({ ...textArea, content: e.target.value })
//           }
//         ></textarea>
//         <section className="border-t-[1px] p-2">toggles</section>
//       </main>
//     </div>
//   );
// };

// export default NotesCreateNote;
