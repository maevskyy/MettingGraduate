import { NavLink } from 'react-router-dom';
import { styles } from '../../styles';

const NavBarItem = ({ title, img, link}) => {

  return (
    <li>
    <NavLink
      to={link}
      className={`${styles.navItemStyle}`}
    >
      <div className="flex items-center gap-[1em] px-[1.3em] py-[.5em]">
        {img}
        <h3 className="text-[1.12em]  opacity-0 group-[:hover]:opacity-100  ease-in  duration-100  self-center">
          {title}
        </h3>
      </div>
    </NavLink>
    </li>
  );
};

export default NavBarItem;
