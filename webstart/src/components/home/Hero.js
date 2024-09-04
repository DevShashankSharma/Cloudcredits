import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/lee-campbell-DtDlVpy-vvQ-unsplash.jpg' 

function Hero({ isDarkMode }) {
    return (
        <div className={`relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'} transition-all duration-500 ease-in-out`}>
            <div className="container mx-auto flex flex-col md:flex-row items-center py-20 px-4">
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
                        Build Your Website with Ease
                    </h1>
                    <p className="mb-8 text-lg md:text-xl animate-fade-in-up delay-200">
                        WebStart offers you the tools to create beautiful, responsive websites without any hassle.
                    </p>
                    <Link 
                        to="/create" 
                        className={`inline-block bg-white ${isDarkMode ? 'text-gray-900' : 'text-blue-600'} font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 animate-fade-in-up delay-400`}
                    >
                        Get Started
                    </Link>
                </div>
                <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-up delay-600">
                    <img 
                        src={img} 
                        alt="Hero" 
                        className="rounded-lg shadow-lg max-w-full h-auto transition-transform transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
