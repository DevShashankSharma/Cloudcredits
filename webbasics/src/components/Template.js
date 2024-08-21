import React from 'react';

function TemplatePage({ darkMode }) {
    return (
        <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-all`}>
            <section className="container mx-auto text-center py-16">
                <h1 className="text-5xl font-bold">
                    Explore Our Website Templates
                </h1>
                <p className="text-xl mt-4">
                    Browse through our collection of high-quality templates to kickstart your web development journey.
                </p>
            </section>

            {/* Templates Grid */}
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Template 1 */}
                <div className={`p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <img src="https://via.placeholder.com/400x250" alt="Template 1" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-semibold mt-4">Business Portfolio</h3>
                    <p className="mt-2">
                        A modern, clean template ideal for showcasing your business and portfolio.
                    </p>
                    <button className={`mt-6 px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 ${darkMode ? 'bg-yellow-500 text-black' : 'bg-blue-600 text-white'}`}>
                        View Template
                    </button>
                </div>

                {/* Template 2 */}
                <div className={`p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <img src="https://via.placeholder.com/400x250" alt="Template 2" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-semibold mt-4">E-Commerce Site</h3>
                    <p className="mt-2">
                        A responsive e-commerce template designed to boost your online store's sales.
                    </p>
                    <button className={`mt-6 px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 ${darkMode ? 'bg-yellow-500 text-black' : 'bg-blue-600 text-white'}`}>
                        View Template
                    </button>
                </div>

                {/* Template 3 */}
                <div className={`p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <img src="https://via.placeholder.com/400x250" alt="Template 3" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-2xl font-semibold mt-4">Blog Template</h3>
                    <p className="mt-2">
                        Start your blog with this stylish template that focuses on readability and user experience.
                    </p>
                    <button className={`mt-6 px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 ${darkMode ? 'bg-yellow-500 text-black' : 'bg-blue-600 text-white'}`}>
                        View Template
                    </button>
                </div>

                {/* Add more templates as needed */}
            </section>

            {/* Call to Action */}
            <section className={`py-16 mt-16 text-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'}`}>
                <h2 className="text-4xl font-bold">Want to Customize a Template?</h2>
                <p className="text-xl mt-4">
                    Easily modify any template to suit your needs with our powerful editing tools.
                </p>
                <button className={`mt-8 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 ${darkMode ? 'bg-yellow-500 text-black' : 'bg-blue-600 text-white'}`}>
                    Start Customizing
                </button>
            </section>
        </div>
    );
}

export default TemplatePage;
