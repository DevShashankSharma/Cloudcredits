import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBookOpen, FiTool, FiMoon, FiInfo, FiLayers, FiTag, FiUser, FiMenu, FiX, FiEdit3 } from 'react-icons/fi';

function Sidebar({ toggleDarkMode, darkMode, sidebarOpen, toggleSidebar, user }) {
    const location = useLocation(); // Get current path for active link styling


    // user details for testing purposes
    // const user = {
    //     name: 'John Doe',
    //     email: 'W7H9H@example.com',
    // };
    return (
        <div className="max-h-screen sticky top-0 overflow-y-auto custom-scrollbar">
            {/* Sidebar */}
            <div
                className={`h-screen py-4 px-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} flex flex-col transition-all duration-300 ease-in-out`}
                style={{ height: 'max(100vh, 700px)' }}
            >
                <div className={`items-center ${sidebarOpen ? 'justify-between' : 'justify-center'} mb-8  flex`}>
                    {/* Hamburger Menu Button */}
                    <button
                        className={`text-3xl ${darkMode ? "hover:bg-gray-700 hover:text-purple-400"
                            : "hover:bg-gray-200 hover:text-purple-500"}`}
                        onClick={toggleSidebar}
                        aria-label="Toggle Sidebar"
                    >
                        {sidebarOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Website Name - only visible when sidebar is open */}
                    {sidebarOpen && (
                        <h2 className="text-2xl font-bold text-center tracking-wider">
                            WebBasics
                        </h2>
                    )}
                </div>

                <nav className="space-y-2">
                    <Link
                        to="/"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiHome className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">Home</span>}
                    </Link>

                    <Link
                        to="/templates"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/templates"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiLayers className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">Templates</span>}
                    </Link>

                    <Link
                        to="/pricing"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/pricing"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiTag className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">Pricing</span>}
                    </Link>

                    <Link
                        to="/codeeditor"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/codeeditor"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiEdit3 className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">Code Editor</span>}
                    </Link>

                    <Link
                        to="/documentation"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/documentation"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiBookOpen className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">Documentation</span>}
                    </Link>

                    <Link
                        to="/advanced-features"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/advanced-features"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiTool className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">Advanced Features</span>}
                    </Link>

                    <Link
                        to="/about"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/about"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiInfo className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">About</span>}
                    </Link>
                </nav>

                <div className="mt-auto">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-3 w-full rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 ${darkMode
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        <FiMoon className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">{darkMode ? "Light Mode" : "Dark Mode"}</span>}
                    </button>

                    {/* User Profile Section */}
                    <div
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-4 mt-8 rounded-md shadow-lg transition-transform transform hover:scale-105 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
                            }`}
                    >
                        {user ? (
                            <>
                                <img
                                    src="https://via.placeholder.com/60"
                                    alt="User"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                                />
                                {sidebarOpen && (
                                    <div className="flex flex-col ml-4 text-sm overflow-hidden">
                                        <p className={`font-semibold text-lg ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                                            {user.name}
                                        </p>
                                        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} truncate max-w-[10rem]`}>
                                            {user.email}
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className={`flex gap-4`}>
                                <FiUser className="text-2xl" />
                                {sidebarOpen && (
                                    <div>
                                        <p className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-800"}`}>Guest Mode</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
