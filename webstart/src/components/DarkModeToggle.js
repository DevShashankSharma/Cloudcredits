import React from 'react';

// SVG Icons for light and dark mode
const SunIcon = () => (
    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-8-8h1m16 0h1m-3.5-7.5l-.7.7m-9.6 9.6l-.7.7m0-10.6l.7.7m9.6 9.6l.7.7" />
    </svg>
);

const MoonIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.752 15.002A9.006 9.006 0 0112 21c-4.961 0-9-4.039-9-9 0-4.961 4.039-9 9-9 1.272 0 2.511.249 3.641.684a9.006 9.006 0 001.15 12.32z" />
    </svg>
);

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-yellow-200'} transition-colors duration-300`}
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </button>
    );
}

export default DarkModeToggle;
