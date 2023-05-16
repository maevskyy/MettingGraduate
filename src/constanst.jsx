//Icons
import { HiTemplate } from 'react-icons/hi';
import { AiFillCalendar } from 'react-icons/ai';
import { RiStickyNoteFill, RiSettings5Fill } from 'react-icons/ri';
import { FaTasks } from 'react-icons/fa';

//other stuff
import { styles } from './styles';

export const navLinks = [
  {
    id: 1,
    title: 'Today',
    link: '/',
    img: <HiTemplate className={`${styles.navIconShape}`} />,
  },
  {
    id: 2,
    title: 'Calendar',
    link: '/Calendar',
    img: <AiFillCalendar className={`${styles.navIconShape}`} />,
  },
  {
    id: 3,
    title: 'Notes',
    link: '/Notes',
    img: <RiStickyNoteFill className={`${styles.navIconShape}`} />,
  },
  {
    id: 4,
    title: 'Tasks',
    link: '/Tasks',
    img: <FaTasks className={`${styles.navIconShape}`} />,
  },
  {
    id: 5,
    title: 'Settings',
    link: '/Settings',
    img: <RiSettings5Fill className={`${styles.navIconShape}`} />,
  },
];

export const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',

];
export const monthInYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
