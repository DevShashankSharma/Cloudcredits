import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Templates from './components/TemplateGallary';
import CreatePage from './components/canvas/PageEditor';
import Account from './components/Profile';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`container mx-auto p-4 transition duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/templates" element={<Templates isDarkMode={isDarkMode} />} />
            <Route path="/create" element={<CreatePage isDarkMode={isDarkMode} />} />
            <Route path="/account" element={<Account isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
        <Footer isDarkMode={isDarkMode} />
      </DndProvider>
    </Router>
  );
}

export default App;
