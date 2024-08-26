import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

// Animated Logo Component
const AnimatedLogo = () => (
    <svg
        className="w-24 xxs:w-32 xs:w-36 md:w-40 lg:w-48 h-auto"
        viewBox="0 0 150 40"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF6F61', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FF9A8B', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feFlood floodColor="rgba(255, 105, 180, 0.8)" result="color" />
                <feComposite in2="SourceAlpha" operator="in" />
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feOffset dx="1" dy="1" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <text
            x="10"
            y="30"
            fontSize="24"
            fontWeight="bold"
            fill="url(#gradient)"
            filter="url(#glow)"
            style={{ animation: 'textAnimation 3s ease-in-out infinite' }}
        >
            WebBasics
        </text>
        <style>
            {`
                @keyframes textAnimation {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
            `}
        </style>
    </svg>
);

function Header({ darkMode, toggleDarkMode }) {
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <header
            className={`fixed top-0 w-screen z-50 p-4 shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-500 to-teal-400'} text-gray-800 dark:text-gray-200 flex justify-between items-center`}
        >
            {/* Logo */}
            <div className="flex items-center ">
                <AnimatedLogo />
            </div>

            {/* Dark Mode Toggle */}
            <div>
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full transition-transform duration-300 ${darkMode ? 'text-gray-300' : 'text-yellow-400'} hover:scale-110`}
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? (
                        <FiSun className="text-xl xs:text-3xl" />
                    ) : (
                        <FiMoon className="text-xl xs:text-3xl" />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
