import React from 'react';

function Testimonials({ isDarkMode }) {
    return (
        <section className={`py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition duration-300 ease-in-out`}>
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-12 animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className={`text-center p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in-up ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                        <p className="mb-4 text-lg leading-relaxed">"WebStart is a game-changer! I was able to create my business website in no time."</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-blue-500'}`}>- Jane Doe</p>
                    </div>
                    <div className={`text-center p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in-up delay-200 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                        <p className="mb-4 text-lg leading-relaxed">"The drag-and-drop feature makes it so easy to build pages. Highly recommend!"</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-blue-500'}`}>- John Smith</p>
                    </div>
                    <div className={`text-center p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in-up delay-400 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                        <p className="mb-4 text-lg leading-relaxed">"Beautiful templates and excellent customer support. WebStart is the best!"</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-blue-500'}`}>- Mary Johnson</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
