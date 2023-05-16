import navLogo from '../../assets/navbar/logo.svg';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { styles } from '../../styles';
import { navLinks } from '../../constanst';
import NavBarItem from './NavBarItem';
import NavBarSearch from './navBarSearch/NavBarSearch';

const Navbar = () => {
  return (
    <nav className="bg-[#333269] text-[16px] fixed h-[100%] w-[4em] hover:w-[14em] group easy duration-500  z-50">
      <div className="flex flex-col gap-[3.75em] h-[100%]">
        <a
          href="/"
          className="flex gap-[1em] mt-[2.8em] ml-[1.3em] items-center "
        >
          <div className=" min-w-[1.6em] min-h-[2.25em] max-w-[1.6em] max-h-[2.25em] ">
            <img
              src={navLogo}
              alt=""
              className=" "
            />
          </div>
          <h1 className=" opacity-0 group-[:hover]:opacity-100  duration-[1s] ease-[cubic-bezier(0,0,0,100)]  font-semibold text-[1.7em] text-[#C0BEFF]">
            OnPhase
          </h1>
        </a>
        <ul className="font-Roboto flex flex-col gap-[1em] h-[100%]">
          {navLinks.map((el) => (
            <NavBarItem
              title={el.title}
              img={el.img}
              link={el.link}
              key={el.id}
            />
          ))}
          <NavBarSearch />
        </ul>

        <NavLink
          to="/User"
          className={`${styles.navItemStyle} mb-[2.8em]`}
        >
          <div className="flex items-center gap-[1em] ml-[1.2em] py-[.5em]">
            <FaUserCircle className="min-h-[1.5em] min-w-[1.5em] max-w-[2em] max-h-[2em]" />
            <div className="flex flex-col opacity-0 group-[:hover]:opacity-100  ease-in  duration-100">
              <h3 className="text-[.8em]">Dimitry Maevsky</h3>
              <p className="text-[.5em] text-[#90A0B7]">
                maevskijdimitrij@gmail.com
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
