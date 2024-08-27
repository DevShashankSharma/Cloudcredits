import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBookOpen, FiTool, FiInfo, FiLayers, FiTag, FiMoreHorizontal, FiEdit3 } from 'react-icons/fi';
import ProfilePopup from './ProfilePopUp';

const NavFooter = ({ darkMode, userDetails, isPopupOpen, openPopup, closePopup, setFormData }) => {
    const location = useLocation();
    const [showMore, setShowMore] = useState(false); 

    const toggleMore = () => setShowMore(!showMore); 

    return (
        <nav className={`fixed bottom-0 left-0 right-0 z-50 shadow-lg w-screen py-2 px-1
            ${darkMode
                ? 'bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white '
                : 'bg-gradient-to-r from-purple-300 via-white to-purple-300 text-gray-900'} 
            flex justify-around md:justify-between items-center`}>

            {/* Visible Links */}
            <div className="flex justify-between w-full xs:space-x-2 relative">
                {/* Profile Section */}
                <div className="relative flex items-center justify-center w-1/5 md:w-1/6 lg:w-1/8">
                    {/* Profile Picture */}
                    <button
                        onClick={openPopup}
                        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg sm:text-xl shadow-lg transition-transform transform hover:scale-110"
                    >
                        {userDetails.initials !== "" ? userDetails.initials : <FiUser/>}
                    </button> 
                </div>

                <Link
                    to="/"
                    className={`flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 w-1/5 md:w-1/6 lg:w-1/8 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/"
                            ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                            : darkMode
                                ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center justify-center`}
                >
                    <FiHome className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="text-xs sm:text-sm">Home</span>
                </Link>

                <Link
                    to="/templates"
                    className={`hidden vsm:flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 w-1/5 md:w-1/6 lg:w-1/8 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/templates"
                            ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                            : darkMode
                                ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center justify-center`}
                >
                    <FiLayers className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="text-xs sm:text-sm">Templates</span>
                </Link>

                <Link
                    to={`/codeeditor`}
                    className={`hidden xs:flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 w-1/5 md:w-1/6 lg:w-1/8 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/codeeditor"
                            ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                            : darkMode
                                ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center justify-center`}
                >
                    <FiEdit3 className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="text-xs sm:text-sm">Editor</span>
                </Link>

                {/* More Links Toggle Button */}
                <button
                    onClick={toggleMore}
                    className={`flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 w-1/5 md:w-1/6 lg:w-1/8 rounded-lg transition-all duration-300 ease-in-out 
                        ${darkMode
                            ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                            : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center justify-center`}
                >
                    <FiMoreHorizontal className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="text-xs sm:text-sm">More</span>
                </button>
            </div>

            {/* Hidden Links (slide-up animation on click) */}
            <div onClick={toggleMore} className={`absolute right-4 bottom-20 transform transition-transform duration-500 ${showMore ? "translate-y-0 opacity-100 z-10" : "translate-y-20 opacity-0 pointer-events-none"}`}>
                <div className={`flex flex-col gap-2 ${darkMode ? "bg-gray-900" : "bg-white"} text-white dark:text-gray-300 p-4 rounded-lg shadow-lg w-48`}>
                    <Link
                        to="/documentation"
                        className={`flex flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/documentation"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiBookOpen className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">Docs</span>
                    </Link>

                    <Link
                        to="/advanced-features"
                        className={`flex flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/advanced-features"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiTool className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">Features</span>
                    </Link>

                    <Link
                        to="/templates"
                        className={`flex vsm:hidden flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/templates"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiLayers className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">Templates</span>
                    </Link>

                    <Link
                        to={`/codeeditor`}
                        className={`flex xs:hidden flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/codeeditor"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiEdit3 className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">Editor</span>
                    </Link>

                    <Link
                        to="/about"
                        className={`flex flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/about"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiInfo className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">About</span>
                    </Link>

                    <Link
                        to="/pricing"
                        className={`flex flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/pricing"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiTag className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">Pricing</span>
                    </Link>
                </div>
            </div>

            {isPopupOpen && <ProfilePopup userDetails={userDetails} onClose={closePopup} isOpen={isPopupOpen} darkMode={darkMode} setFormData={setFormData} />}
        </nav>
    );
};

export default NavFooter;
