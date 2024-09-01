import React from 'react';
import { Link } from 'react-router-dom';
// import heroImage from '../assets/images/hero-image.jpg';

function Hero({ isDarkMode }) {
    return (
        <div className={`relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'} transition duration-300`}>
            <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Build Your Website with Ease</h1>
                    <p className="mb-6 text-lg animate-fade-in-up delay-200">WebStart offers you the tools to create beautiful, responsive websites without any hassle.</p>
                    <Link to="/create" className={`bg-white ${isDarkMode ? 'text-gray-800' : 'text-blue-600'} font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition animate-fade-in-up delay-400`}>
                        Get Started
                    </Link>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in-up delay-600">
                    {/* <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg" /> */}
                </div>
            </div>
        </div>
    );
}

export default Hero;
