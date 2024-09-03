import { useState } from "react";
import "./Menu.css";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden pr-5 my-3">
      <div className="dropdown">
        <label className="toggle">
          <input type="checkbox" checked={isMenuOpen} onChange={handleToggle} />
          <div>
            <div>
              <span></span>
              <span></span>
            </div>
            <svg>
              <use xlinkHref="#path"></use>
            </svg>
            <svg>
              <use xlinkHref="#path"></use>
            </svg>
          </div>
        </label>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            id="path"
          >
            <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
          </symbol>
        </svg>

        {/* Show dropdown content based on menu state */}
        <div className={`dropdown-content ${isMenuOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#project">Project</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
