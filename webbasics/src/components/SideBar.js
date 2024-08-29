import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBookOpen, FiTool, FiMoon, FiInfo, FiLayers, FiTag, FiUser, FiMenu, FiX, FiEdit3, FiFolder } from 'react-icons/fi';
import ProfilePopup from './ProfilePopUp';

function Sidebar({ toggleDarkMode, darkMode, sidebarOpen, toggleSidebar, userDetails, isPopupOpen, openPopup, closePopup, setFormData, setIsLoggedIn }) {
    const location = useLocation();

    const template =
    {
        tabs: [
            {
                id: 1,
                name: "index.html",
                language: 'html',
                code: `
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
            },
            {
                id: 2,
                name: 'style.css',
                language: 'css',
                code: `
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
        ]
    }

    return (
        <div className={`h-screen sticky top-0 overflow-y-auto custom-scrollbar  ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            {/* Sidebar */}
            <div
                className={`min-h-[660px] py-4 px-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} flex flex-col transition-all duration-300 ease-in-out`}
                style={{ height: 'min(100vh, 750px)' }}
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
                        to="/myprojects"
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-2 rounded-md transition-all duration-300 ease-in-out transform ${location.pathname === "/myprojects"
                            ? "bg-purple-500 text-white shadow-lg scale-105"
                            : darkMode
                                ? "hover:bg-gray-700 hover:text-purple-400"
                                : "hover:bg-gray-200 hover:text-purple-500"
                            }`}
                    >
                        <FiFolder className="text-2xl" />
                        {sidebarOpen && <span className="ml-3">My Projects</span>}
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
                        to={`/codeeditor`}
                        state={{ template: template, index: -1 }}
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
                        className={`flex items-center ${sidebarOpen ? 'justify-start px-2' : 'justify-center'} py-4 mt-8 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
                            }`}
                    >
                        <div className="flex items-center" onClick={openPopup}>
                            <div
                                className="relative flex items-center justify-center w-[4.5rem] xl:w-16 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-xl shadow-lg transition-transform transform hover:scale-110">
                                {userDetails.initials !== "" ? userDetails.initials : <FiUser className='w-6 h-6' />}
                            </div>
                            {sidebarOpen && (
                                <div className="flex flex-col ml-4 text-sm w-full overflow-hidden">
                                    <p className={`font-semibold text-lg ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                                        {userDetails.name !== "" ? userDetails.name : "Guest Mode"}
                                    </p>
                                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} truncate w-[6rem] xl:w-[8rem]`}>
                                        {userDetails.email !== "" ? userDetails.email : "guestmode123@example.com"}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <ProfilePopup userDetails={userDetails} onClose={closePopup} isOpen={isPopupOpen} darkMode={darkMode} setFormData={setFormData} setIsLoggedIn={setIsLoggedIn} />}
        </div>
    );
}

export default Sidebar;
