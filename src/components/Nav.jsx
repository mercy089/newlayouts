import DarkMode from "./DarkMode";
import MenuBar from "./Menubar";
import NavLinks from './NavLinks';

const Nav = () => {
  return (
    <nav className="w-full h-[8%] md:h-[12%] flex items-center gap-5 ">
      <div className="left bg-white w-44 md:w-52 h-full relative  rounded-br-3xl"></div>
      {/* Add ml-auto here to push the next elements to the end */}
      <div className="ml-auto flex items-center justify-around gap-5">
      <NavLinks/>
      <DarkMode/>
      <MenuBar />
      </div>
    </nav>
  );
};

export default Nav;
