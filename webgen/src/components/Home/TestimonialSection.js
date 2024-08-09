import React from 'react';

function Testimonials() {
    return (
        <section className="py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="animate-bg-animate bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-full w-full"></div>
            </div>
            <h2 className="relative text-4xl font-bold text-center mb-12 z-10">What Our Users Say</h2>
            <div className="relative flex flex-wrap justify-center gap-8 px-4 z-10">
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:bg-opacity-100">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Doe" className="rounded-full w-16 h-16 mx-auto mb-4"/>
                        <p className="text-blue-700 italic">"WebGen made it so easy to create my website. I couldn't believe how quickly I was able to go live!"</p>
                        <h3 className="text-xl font-semibold mt-4 text-blue-900">- Jane Doe</h3>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:bg-opacity-100">
                        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="John Smith" className="rounded-full w-16 h-16 mx-auto mb-4"/>
                        <p className="text-blue-700 italic">"I loved the real-time editing feature. It saved me so much time and hassle."</p>
                        <h3 className="text-xl font-semibold mt-4 text-blue-900">- John Smith</h3>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>
                {`
                @keyframes bg-animate {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-bg-animate {
                    background-size: 200% 200%;
                    animation: bg-animate 10s ease infinite;
                }
                `}
            </style>
        </section>
    );
}

export default Testimonials;
