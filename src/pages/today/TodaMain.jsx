import { useState } from 'react';
import moment from 'moment';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import monday from '../../assets/today/monday.png';
import { styles } from '../../styles';
import { CiViewList } from 'react-icons/ci';
import { BsCalendar } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Logger } from '@syncfusion/ej2-react-grids';
import TodoNav from './TodoNav';
import NotesItem from '../notes/NotesItem'

const TodaMain = () => {
  return (
    <main className="w-full flex h-full ">
      <TodoNav/>
      <section className="w-[74%] bg-gray-100">
      </section>
    </main>
  );
};

export default TodaMain;
