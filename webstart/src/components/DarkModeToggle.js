import React from 'react';

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-yellow-400'} transition duration-300`}
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
}

export default DarkModeToggle;
