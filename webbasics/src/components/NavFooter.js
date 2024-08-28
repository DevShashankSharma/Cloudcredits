import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBookOpen, FiTool, FiInfo, FiLayers, FiTag, FiMoreHorizontal, FiEdit3, FiFolder } from 'react-icons/fi';
import ProfilePopup from './ProfilePopUp';

const NavFooter = ({ darkMode, userDetails, isPopupOpen, openPopup, closePopup, setFormData }) => {
    const location = useLocation();
    const [showMore, setShowMore] = useState(false);

    const template = {
        html: `
            <div class="template-card">
                <img src="https://s.tmimgcdn.com/scr/800x500/52500/music-band-responsive-website-template_52511-original.jpg" alt="Music Band Website Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Music Band Website</h3>
                    <p class="template-description">Design a vibrant music band website. Include sections for tour dates, music samples, and profiles of band members to engage fans and promote your music.</p>
                    <div class="tour-dates">
                        <h4 class="dates-title">Upcoming Tour Dates</h4>
                        <div class="tour-item">
                            <h5 class="tour-city">New York City</h5>
                            <p class="tour-date">September 25, 2024</p>
                        </div>
                        <div class="tour-item">
                            <h5 class="tour-city">Los Angeles</h5>
                            <p class="tour-date">October 5, 2024</p>
                        </div>
                    </div>
                    <button class="cta-button">Listen to Music</button>
                </div>
            </div>
        ` ,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .tour-dates {
                margin-top: 20px;
                text-align: left;
            }
            .dates-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .tour-item {
                margin-bottom: 15px;
            }
            .tour-city {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .tour-date {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #673ab7;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #5e35b1;
            }
        `
    }

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
                        {userDetails.initials !== "" ? userDetails.initials : <FiUser />}
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
                    to="/myprojects"
                    className={`hidden xs:flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 w-1/5 md:w-1/6 lg:w-1/8 rounded-lg transition-all duration-300 ease-in-out 
                        ${location.pathname === "/myprojects"
                            ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                            : darkMode
                                ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center justify-center`}
                >
                    <FiFolder className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="text-xs sm:text-sm">Projects</span>
                </Link>

                <Link
                    to={`/codeeditor`}
                    state={{ template: template, index: -1 }}
                    className={`hidden vsm:flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 w-1/5 md:w-1/6 lg:w-1/8 rounded-lg transition-all duration-300 ease-in-out 
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
                        className={`flex flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
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
                        to="/myprojects"
                        className={`flex xs:hidden flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out
                        ${location.pathname === "/myprojects"
                                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transform scale-105"
                                : darkMode
                                    ? "bg-gray-800 text-purple-300 hover:bg-gray-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"} 
                        flex items-center`}
                    >
                        <FiFolder className="text-xl sm:text-2xl md:text-3xl" />
                        <span className="text-xs sm:text-sm md:text-base">Projects</span>
                    </Link>

                    <Link
                        to={`/codeeditor`}
                        state={{ template: template, index: -1 }}
                        className={`flex vsm:hidden flex-row w-full justify-start gap-4 items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ease-in-out 
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
