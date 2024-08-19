import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBookOpen, FiTool, FiMoon, FiSun } from 'react-icons/fi';

function Sidebar({ toggleDarkMode, darkMode }) {
    return (
        <div className={`h-[100vh] w-64 py-8 px-4 ${darkMode? "bg-gray-700 text-white" : "bg-white text-black"} sticky top-0`}>
            <h2 className="text-2xl font-bold text-center">WebBasics</h2>

            <nav className="mt-10">
                <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded-md">
                    <FiHome className="mr-2" /> Home
                </Link>
                <Link to="/documentation" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded-md">
                    <FiBookOpen className="mr-2" /> Documentation
                </Link>
                <Link to="/advanced-features" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded-md">
                    <FiTool className="mr-2" /> Advanced Features
                </Link>
            </nav>

            <div className="mt-10">
                <button
                    onClick={toggleDarkMode}
                    className={`flex items-center justify-center py-2 px-4 w-full rounded-md shadow-lg hover:shadow-xl transition-transform ${darkMode? "bg-gray-800":"bg-gray-200"}`}>
                    {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
