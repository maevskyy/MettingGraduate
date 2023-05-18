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

