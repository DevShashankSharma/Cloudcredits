import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import Template from './components/Template';
import Editor from './components/Editor';
import Deployment from './components/Deployment';
import Documentation from './components/Documentation';
import './index.css';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header /> 
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>} /> 
                        <Route path="/templates" element={<Template/>} />
                        <Route path="/editor" element={<Editor/>} />
                        <Route path="/deployment" element={<Deployment/>} />
                        <Route path="/documentation" element={<Documentation/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
