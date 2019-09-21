import React from 'react';
import Toggle from "./Toggle";
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button type="button" className="btn1" onClick={darkMode.disable}>
        light
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle}/>
      <button type="button" className="btn2" onClick={darkMode.enable}>
        dark
      </button>
    </div>
  );
};

export default DarkModeToggle;