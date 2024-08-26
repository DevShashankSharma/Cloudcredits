import React from 'react';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';

const SpecificContentSection = ({ darkMode }) => {
    return (
        <section className={`py-12 px-2 xs:px-6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-900"} mt-8`}>
            <div className="container mx-auto text-center">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fadeIn">Explore More Features</h2>
                <p className="text-base xs:text-lg mb-10 animate-fadeIn">Unlock more possibilities with our exclusive templates and features, tailored to meet your creative needs.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className={`rounded-lg shadow-lg p-6 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}>
                        <FiCode className={`w-9 h-9 xs:w-12 xs:h-12 mb-4 mx-auto animate-bounce ${darkMode ? "text-yellow-400" : "text-yellow-500"}`} />
                        <h3 className="text-xl xs:text-2xl font-semibold mb-4">Code Integration</h3>
                        <p className="text-sm xs:text-base">Easily integrate your custom code and bring your ideas to life with our highly adaptable templates.</p>
                    </div>

                    <div className={`rounded-lg shadow-lg p-6 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}>
                        <FiLayers className={`w-9 h-9 xs:w-12 xs:h-12 mb-4 mx-auto animate-bounce ${darkMode ? "text-blue-400" : "text-blue-500"}`} />
                        <h3 className="text-xl xs:text-2xl font-semibold mb-4">Layered Design</h3>
                        <p className="text-sm xs:text-base">Build complex structures with simple drag-and-drop layered designs that streamline the development process.</p>
                    </div>

                    <div className={`rounded-lg shadow-lg p-6 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}>
                        <FiZap className={`w-9 h-9 xs:w-12 xs:h-12 mb-4 mx-auto animate-bounce ${darkMode ? "text-green-400" : "text-green-500"}`} />
                        <h3 className="text-xl xs:text-2xl font-semibold mb-4">Fast & Efficient</h3>
                        <p className="text-sm xs:text-base">Our templates are optimized for speed, ensuring your website runs smoothly and efficiently at all times.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecificContentSection;
