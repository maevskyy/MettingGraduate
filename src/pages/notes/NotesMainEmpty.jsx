import React from 'react';
import { Link } from 'react-router-dom';
import NotesCreateNote from './NotesCreateNote';

const NotesMainEmpty = () => {
  return (
    <main className=" mx-[1.6em] h-[80%] mt-[1.5em] flex justify-center items-center">
      <NotesCreateNote
        title={'Create a new note'}
        style={
          'text-[#EE3637] font-semibold px-[.9em] py-[.5em] hover:bg-[#ee363638] rounded-[4px] duration-300 ease-in-out'
        }
      />
    </main>
  );
};

export default NotesMainEmpty;
