import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
            {/* Background Carousel */}
            <div className="absolute inset-0 w-full h-full opacity-60">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    transitionTime={1000}
                    className="w-full h-full"
                >
                    <div>
                        <img src="https://unsplash.com/photos/CuFYW1c97w8/download?force=true"
                            alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fHww" alt="Slide 2" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1521810794802-50135d944e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVybiUyMHRlY2hub2xvZ2llc3xlbnwwfDB8MHx8fDA%3D" alt="Slide 3" />
                    </div>
                </Carousel>
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn opacity-0" style={{ animation: 'fadeIn 2s forwards' }}>
                    Create Dynamic Websites with Ease
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mt-6 mx-auto animate-slideIn opacity-0" style={{ animation: 'slideIn 2s forwards' }}>
                    Empower your creativity with WebGen. Build responsive, user-friendly websites in minutes without any hassle. No coding skills required!
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 mb-8 mt-6">
                    <Link to="/templates">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-700 font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 animate-bounce mb-4 md:mb-0">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
                            Learn More
                        </button>
                    </Link>
                </div>

                {/* Additional Content */}
                <div className="mt-12 text-center animate-fadeIn opacity-0" style={{ animation: 'fadeIn 3s forwards' }}>
                    <p className="text-lg mb-4">Trusted by leading brands and thousands of developers worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723075200&semt=ais_hybrid" alt="Facebook" className="w-12 h-auto opacity-75 rounded-full hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-lkijlO0g1F6MHKlfo2erxZ-z8FSlzTHRA&s" alt="Twitter" className="w-12 h-auto opacity-75 rounded-full hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj-MM_UyJqsvN2GeGKQKLEHNaL-cfeoLa-Q&s" alt="Google" className="w-12 h-auto opacity-75 rounded-full hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIr5WW7vtFBwAUwptaRNkOThkxKXZEfjbAA&s" alt="LinkedIn" className="w-12 h-auto opacity-75 rounded-full hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYVvZ8tyM6iQZPi_TBNXwgRJ7hTQ9kryJqkTR8E3n93ogxjnk8ms_EIMB4nl0nuq8Rl4&usqp=CAU" alt="Instagram" className="w-12 h-auto opacity-75 rounded-full hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQ7WGNDT9mt2WRz9wjNvB0jXqVSuJAFldfA&s" alt="YouTube" className="w-12 h-auto opacity-75 rounded-full hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-[7rem] animate-bounce">
                <svg className="w-8 h-8 m-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <p className="text-sm">Scroll Down</p>
            </div>

            {/* Custom Animations */}
            <style>
                {`
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes slideIn {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                `}
            </style>
        </section>
    );
}

export default HeroSection;
