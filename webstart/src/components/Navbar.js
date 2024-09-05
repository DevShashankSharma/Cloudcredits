import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar({ isDarkMode, toggleDarkMode }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // To detect active link

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close menu when a link is clicked
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`p-4 fixed flex justify-between w-full transition-transform duration-300 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'} ${isVisible ? 'translate-y-0' : '-translate-y-full'} z-10`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">WebStart</Link>
                <div className="flex items-center space-x-6">
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    
                    {/* Hamburger Menu Button */}
                    <button
                        className="block md:hidden text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Slide-out menu for mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-64 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-20 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
                <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={() => setIsMenuOpen(false)}
                >
                    &times;
                </button>
                <div className={`mt-16 flex flex-col space-y-4 px-4 ${isDarkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-gray-200'}`}>
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className={`px-2 py-2 rounded-md transition-colors ${isActive('/') ? 'bg-yellow-400 text-gray-900' : ''} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/templates"
                        onClick={handleLinkClick}
                        className={`px-2 py-2 rounded-md transition-colors ${isActive('/templates') ? 'bg-yellow-400 text-gray-900' : ''} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                    >
                        Templates
                    </Link>
                    <Link
                        to="/create"
                        onClick={handleLinkClick}
                        className={`px-2 py-2 rounded-md transition-colors ${isActive('/create') ? 'bg-yellow-400 text-gray-900' : ''} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                    >
                        Editor
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={handleLinkClick}
                        className={`px-2 py-2 rounded-md transition-colors ${isActive('/dashboard') ? 'bg-yellow-400 text-gray-900' : ''} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                    >
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Links for larger screens */}
            <div className={`hidden md:flex ml-6 items-center space-x-6 ${isDarkMode ? 'text-white bg-gray-700' : 'text-gray-900 '}`}>
                <Link
                    to="/"
                    className={`p-2 hover:underline ${isActive('/') ? 'bg-yellow-400 text-gray-900' : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/templates"
                    className={`p-2 hover:underline ${isActive('/templates') ? 'bg-yellow-400 text-gray-900' : ''}`}
                >
                    Templates
                </Link>
                <Link
                    to="/create"
                    className={`p-2 hover:underline ${isActive('/create') ? 'bg-yellow-400 text-gray-900' : ''}`}
                >
                    Editor
                </Link>
                <Link
                    to="/dashboard"
                    className={`p-2 hover:underline ${isActive('/dashboard') ? 'bg-yellow-400 text-gray-900' : ''}`}
                >
                    Dashboard
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
