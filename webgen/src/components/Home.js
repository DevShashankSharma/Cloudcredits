import React from 'react';
import { Link } from 'react-router-dom';
import FeatureSection from './Home/FeatureSection';
import HeroSection from './Home/HeroSection';

function HomePage() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeatureSection />

            {/* Template Previews Section */}
            <section className="py-16 bg-gray-100 text-blue-700">
                <h2 className="text-4xl font-bold text-center mb-12">Choose a Template</h2>
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    <div className="w-full sm:w-1/3">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                            <img src="https://via.placeholder.com/300x200.png?text=Template+1" alt="Template 1" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">Template 1</h3>
                                <p className="text-gray-600">A modern and sleek template perfect for showcasing your content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                            <img src="https://via.placeholder.com/300x200.png?text=Template+2" alt="Template 2" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">Template 2</h3>
                                <p className="text-gray-600">A clean and minimal template for a professional look.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white text-blue-700">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    <div className="w-full sm:w-1/3 text-center">
                        <div className="p-8 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Doe" className="rounded-full w-16 h-16 mx-auto mb-4"/>
                            <p className="text-gray-600 italic">"WebGen made it so easy to create my website. I couldn't believe how quickly I was able to go live!"</p>
                            <h3 className="text-xl font-semibold mt-4">- Jane Doe</h3>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3 text-center">
                        <div className="p-8 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition">
                            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="John Smith" className="rounded-full w-16 h-16 mx-auto mb-4"/>
                            <p className="text-gray-600 italic">"I loved the real-time editing feature. It saved me so much time and hassle."</p>
                            <h3 className="text-xl font-semibold mt-4">- John Smith</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-teal-500 to-green-500 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Create Your Website?</h2>
                <Link to="/templates">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-teal-700 font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
                        Get Started Now
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default HomePage;
