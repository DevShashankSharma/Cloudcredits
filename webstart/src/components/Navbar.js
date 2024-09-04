import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar({ isDarkMode, toggleDarkMode }) {
    return (
        <nav className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'} transition duration-300`}>
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <Link to="/" className="text-2xl font-bold hover:underline">WebStart</Link>
                <div className="flex items-center space-x-6">
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <div className="flex flex-wrap space-x-6 mt-2 md:mt-0">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/templates" className="hover:underline">Templates</Link>
                        <Link to="/create" className="hover:underline">Editor</Link>
                        <Link to="/account" className="hover:underline">Account</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
