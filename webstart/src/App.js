import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Templates from './components/TemplateGallary';
import PageEditor from './components/canvas/PageEditor';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [item, setItem] = useState(null);
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("Projects");
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  // Load projects from local storage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem("Projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Projects", JSON.stringify(projects));
  }, [projects]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-white'} relative`}>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <div className={`min-h-screen relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} `}>
            <div className={`container h-full mx-auto p-4 transition duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
              <Routes>
                <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                <Route path="/templates" element={<Templates isDarkMode={isDarkMode} />} />
                <Route path="/create" element={<PageEditor isDarkMode={isDarkMode} item={item} setItem={setItem} projects={projects} setProjects={setProjects} />} />
                <Route path="/dashboard" element={<Dashboard darkMode={isDarkMode} projects={projects} />} />
              </Routes>
            </div>
          </div>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </DndProvider>
    </Router>
  );
}

export default App;
