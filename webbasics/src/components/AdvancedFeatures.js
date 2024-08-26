import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion'; // For animations

const features = [
    {
        id: 1,
        icon: <FiCheckCircle />,
        title: 'Customizable Templates',
        description: 'Choose from a variety of customizable templates to kickstart your project. Each template is designed to be easy to modify and adapt to your needs.',
    },
    {
        id: 2,
        icon: <FiCheckCircle />,
        title: 'Responsive Design',
        description: 'Ensure your website looks great on all devices with responsive design features. Adjust layouts seamlessly for desktop, tablet, and mobile views.',
    },
    {
        id: 3,
        icon: <FiCheckCircle />,
        title: 'Interactive Elements',
        description: 'Add interactive elements like sliders, tabs, and modals to enhance user engagement. Our built-in components make it easy to add interactivity to your site.',
    },
    {
        id: 4,
        icon: <FiCheckCircle />,
        title: 'SEO Optimization',
        description: 'Optimize your site for search engines with built-in SEO tools. Improve visibility and ranking with easy-to-configure SEO settings and meta tags.',
    },
    {
        id: 5,
        icon: <FiCheckCircle />,
        title: 'Advanced Analytics',
        description: 'Track your site’s performance with advanced analytics. Get insights into visitor behavior, traffic sources, and more to make data-driven decisions.',
    },
];

function AdvancedFeaturesPage({ darkMode }) {
    return (
        <div className={`min-h-screen px-2 py-6 xs:p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Hero Section */}
            <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-b-xl shadow-lg">
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                        font-extrabold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Advanced Features
                    </motion.h1>
                    <motion.p
                        className="text-base xs:text-xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Discover the powerful and advanced features that make WebBasics stand out. From dynamic content to interactive elements, we've got you covered.
                    </motion.p>
                    <Link
                        to="/codeeditor"
                        className={`inline-block px-6 py-3 rounded-md font-semibold transition-all duration-300 transform ${darkMode ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'} shadow-md hover:shadow-lg`}
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl 
                        font-bold mb-12 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                className={`bg-white shadow-lg rounded-lg p-6 ${darkMode ? 'dark:bg-gray-800 dark:shadow-gray-700' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-blue-500 text-2xl xs:text-3xl sm:text-4xl   mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg xs:text-3xl sm:text-4xl font-semibold mb-2">{feature.title}</h3>
                                <p className='text-sm xs:text-base sm:text-xl '>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 bg-blue-500 text-white text-center rounded-t-xl shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-xl xs:text-3xl sm:text-4xl 
                        font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Explore More?
                    </motion.h2>
                    <motion.p
                        className="text-sm xs:text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Start using WebBasics to leverage all these advanced features and more. Build modern, responsive websites with ease.
                    </motion.p>
                    <Link
                        to="/about"
                        className={`inline-block px-6 py-3 rounded-md font-semibold transition-all duration-300 transform ${darkMode ? 'bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:from-blue-800 hover:to-blue-900' : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'} shadow-md hover:shadow-lg`}
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default AdvancedFeaturesPage;
