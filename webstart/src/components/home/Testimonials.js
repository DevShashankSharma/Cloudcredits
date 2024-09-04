import React from 'react';

function Testimonials({ isDarkMode }) {
    return (
        <section className={`py-12 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} transition duration-300 ease-in-out`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 animate-fade-in-up">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 animate-fade-in-up">
                        <p className="mb-4 text-lg leading-relaxed">"WebStart is a game-changer! I was able to create my business website in no time."</p>
                        <p className="font-semibold text-blue-500">- Jane Doe</p>
                    </div>
                    <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 animate-fade-in-up delay-200">
                        <p className="mb-4 text-lg leading-relaxed">"The drag-and-drop feature makes it so easy to build pages. Highly recommend!"</p>
                        <p className="font-semibold text-blue-500">- John Smith</p>
                    </div>
                    <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 animate-fade-in-up delay-400">
                        <p className="mb-4 text-lg leading-relaxed">"Beautiful templates and excellent customer support. WebStart is the best!"</p>
                        <p className="font-semibold text-blue-500">- Mary Johnson</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
