import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Documentation from './components/Documentation';
import AdvancedFeatures from './components/AdvancedFeatures';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode globally
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-grow">
            <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <div className={`flex-1 transition-all ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/advanced-features" element={<AdvancedFeatures />} />
              </Routes>
              <Footer darkMode={darkMode} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
