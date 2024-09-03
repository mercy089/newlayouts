import { useState } from 'react';
import './dark.css';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="my-3 md:pr-5">
      <div className="ml-auto md:ml-1 flex justify-center items-center h-[60px] w-[60px] rounded-full border-none bg-[#4caf50] hover:bg-[#3f8f41]">
        <button
          title="Toggle Theme"
          onClick={() => setIsDark(!isDark)}
          className={`app ${isDark ? 'dark' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Moon */}
            <path
              pathLength="1"
              className={`moon-icon ${isDark ? 'visible' : 'invisible'}`}
              d="M21 12.79A9 9 0 1 1 10.21 3 7 7 0 0 0 21 12.79z"
            />
            {/* Sun */}
            <circle
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              cx="12"
              cy="12"
              r="5"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="12"
              y1="1"
              x2="12"
              y2="3"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="12"
              y1="21"
              x2="12"
              y2="23"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="1"
              y1="12"
              x2="3"
              y2="12"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="21"
              y1="12"
              x2="23"
              y2="12"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
            />
            <line
              pathLength="1"
              className={`sun-icon ${isDark ? 'invisible' : 'visible'}`}
              x1="18.36"
              y1="5.64"
              x2="19.78"
              y2="4.22"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DarkMode;
