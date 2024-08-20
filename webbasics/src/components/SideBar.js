import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBookOpen, FiTool, FiMoon, FiSun, FiInfo, FiGithub } from 'react-icons/fi';

function Sidebar({ toggleDarkMode, darkMode }) {
    return (
        <div className={`h-screen w-64 py-8 px-4 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"} sticky top-0 flex flex-col`}>
            <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                    WebBasics
                </h2>

                <nav>
                    <Link to="/" className="flex items-center py-3 px-5 rounded-md hover:bg-gray-700 transition-colors mb-2">
                        <FiHome className="mr-3 text-xl" /> Home
                    </Link>
                    <Link to="/documentation" className="flex items-center py-3 px-5 rounded-md hover:bg-gray-700 transition-colors mb-2">
                        <FiBookOpen className="mr-3 text-xl" /> Documentation
                    </Link>
                    <Link to="/advanced-features" className="flex items-center py-3 px-5 rounded-md hover:bg-gray-700 transition-colors mb-2">
                        <FiTool className="mr-3 text-xl" /> Advanced Features
                    </Link>
                    <Link to="/about" className="flex items-center py-3 px-5 rounded-md hover:bg-gray-700 transition-colors mb-2">
                        <FiInfo className="mr-3 text-xl" /> About
                    </Link>
                    <Link to="/contact" className="flex items-center py-3 px-5 rounded-md hover:bg-gray-700 transition-colors mb-2">
                        <FiGithub className="mr-3 text-xl" /> Contact
                    </Link>
                </nav>
            </div>

            <div className="mt-auto">
                <button
                    onClick={toggleDarkMode}
                    className={`flex items-center py-3 px-5 w-full rounded-md shadow-lg hover:shadow-xl transition-transform ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}>
                    {darkMode ? <FiSun className="mr-3 text-xl" /> : <FiMoon className="mr-3 text-xl" />}
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

                {/* User Profile Section */}
                <div className={`flex items-center py-4 px-1 mt-8 rounded-md ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-200 border-gray-300"} border transition-shadow hover:shadow-lg`}>
                    <img
                        src="https://via.placeholder.com/60"
                        alt="User"
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="ml-2 text-sm">
                        <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">John Doe</p>
                        <p className="text-gray-600 dark:text-gray-300">johndoe@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
