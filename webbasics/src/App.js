import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Documentation from './components/Documentation';
import AdvancedFeatures from './components/AdvancedFeatures';
import Sidebar from './components/SideBar';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import TemplatePage from './components/template/Template';
import ViewTemplate from './components/template/ViewTemplate';
import PricingPage from './components/PricingPage';
import CodeEditorPage from './components/editor/CodeEditor';
import About from './components/About';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Toggle dark mode globally
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} flex items-center justify-center w-full`}>
      <Router>
        <div className="min-h-screen" style={{ width: 'min(1400px, 100vw)' }}>
          <div className={`flex w-full`}>
            <div className={`${sidebarOpen ? 'w-[18%]' : 'w-[5%]'}`}>
              <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className={`transition-all ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} ${sidebarOpen ? 'w-[82%]' : 'w-[95%]'}`}>
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/documentation" element={<Documentation darkMode={darkMode} />} />
                <Route path="/advanced-features" element={<AdvancedFeatures darkMode={darkMode} />} />
                <Route path="/templates" element={<TemplatePage darkMode={darkMode} />} />
                <Route path="/templates/:id" element={<ViewTemplate darkMode={darkMode} />} />
                <Route path="*" element={<ComingSoon darkMode={darkMode} />} />
                <Route path="/pricing" element={<PricingPage darkMode={darkMode} />} />
                <Route path="/codeeditor" element={<CodeEditorPage darkMode={darkMode} />} />
                <Route path="/about" element={<About darkMode={darkMode} />} />
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
