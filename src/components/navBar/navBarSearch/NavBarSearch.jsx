import { HiSearch } from 'react-icons/hi';
import { styles } from '../../../styles';
import { useDispatch } from 'react-redux';
import { toggleCondition } from './navBarSearch.slice';

const NavBarSearch = () => {
  const disptach = useDispatch();
  return (
    <li
      className={`${styles.navItemStyle} hover:cursor-pointer`}
      onClick={() => disptach(toggleCondition())}
    >
      <div className="flex items-center gap-[1em] px-[1.3em] py-[.5em]">
        <HiSearch className={`${styles.navIconShape}`} />
        <h3 className="text-[1.12em]  opacity-0 group-[:hover]:opacity-100  ease-in  duration-100  self-center">
          Search
        </h3>
      </div>
    </li>
  );
};

export default NavBarSearch;
