import React, { useState } from 'react';
import '../App.css';

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
        <nav className="NavBar">
            <h1 className="NavBar-Title">List of Women's World Cup players ranked by search interest from Google Trends, June-July 2019</h1>
            <div className="dark-mode__toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
};

export default NavBar;