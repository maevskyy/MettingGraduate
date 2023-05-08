import React, { useState } from 'react';
import NotesHeader from './NotesHeader';
import NotesMain from './NotesMain';
import NotesMainEmpty from './NotesMainEmpty';
import { useSelector } from 'react-redux';

const Notes = () => {
  const state = useSelector((e) => e.notesReducer);

  const [active, setActive] = useState(false)


  return (
    <div className={`${active && 'blur-[1.5px]'} h-full relative`}>
      {/* <div className="absolute z-20 border-2 w-full h-full bg-blue-200/20">vfdv</div> */}
      <NotesHeader />
      {state.length === 0 ? <NotesMainEmpty/> : <NotesMain/>}
    </div>
  );
};

export default Notes;
