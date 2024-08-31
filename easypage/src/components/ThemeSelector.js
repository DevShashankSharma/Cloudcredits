import React from 'react';

function ThemeSelector({ setTheme }) {
  return (
    <div className="w-64 p-4 bg-gray-100 text-gray-900">
      <h3 className="text-lg font-bold mb-4">Choose Theme</h3>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" onClick={() => setTheme('default')}>Default</button>
      <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mb-2" onClick={() => setTheme('dark')}>Dark</button>
      <button className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mb-2" onClick={() => setTheme('light')}>Light</button>
    </div>
  );
}

export default ThemeSelector;
