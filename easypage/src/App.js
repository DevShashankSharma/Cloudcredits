import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">EasyPage</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="p-4">
        <section className="container mx-auto">
          <h2 className="text-xl font-semibold mb-4">Welcome to EasyPage</h2>
          <p className="mb-4">
            This is a basic web page design using React and Tailwind CSS.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">About This Project</h3>
            <p>
              EasyPage demonstrates how to create a simple web page with responsive design, dark mode, and basic styling.
            </p>
          </div>
        </section>
      </main>
      <footer className="p-4 border-t">
        <p className="text-center text-sm">© 2024 EasyPage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
