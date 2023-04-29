import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="px-[2.5em] py-[1.2em] bg-white flex justify-between">
      <div className="flex items-center gap-[1em]">
        <IoSearch className="text-[#5855D6]" />
        <input
          type="text"
          placeholder="Trying to search something? Just start typing"
          className="w-[50em]   group-[:hover]:placeholder:hover:opacity-0 "
        />
      </div>
      <div className="">
        privet
      </div>
    </header>
  );
};

export default Header;
