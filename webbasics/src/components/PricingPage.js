import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PricingPage({ darkMode }) {
    return (
        <div className={`min-h-screen px-6 mt-4 py-16 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition-colors`}>
            <div className={`px-6 pb-11 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition-colors relative`}>

                {/* Page Title and Description */}
                <div className="relative text-center mb-12">
                    {/* Animated Title with Responsive Gradient Text */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 drop-shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Choose Your Perfect Plan
                    </motion.h1>

                    {/* Animated Description */}
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        We offer flexible pricing plans tailored for individuals, businesses, and students. Explore our options and find the best fit for your needs.
                    </motion.p>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col flex-grow`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex-grow">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Free</h3>
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm sm:text-base mb-4">Perfect for students and personal projects. Start exploring with no cost.</p>
                    </div>
                    <div className="flex-grow">
                        <ul className="mb-6 space-y-2 text-left">
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Basic Features</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Access to Templates</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Community Support</li>
                        </ul>
                    </div>
                    <Link
                        to="/signup"
                        className="mt-auto text-xs xs:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center block"
                    >
                        Get Started
                    </Link>
                </motion.div>

                {/* Standard Plan */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col flex-grow`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex-grow">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Standard</h3>
                    </div>
                    <div className='flex-grow'>
                        <p className="text-sm sm:text-base mb-4">Ideal for small businesses and freelancers seeking more features.</p>
                    </div>
                    <div className='flex-grow'>
                        <ul className="mb-6 space-y-2 text-left">
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> All Free Plan Features</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Premium Templates</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Email Support</li>
                        </ul>
                    </div>
                    <Link
                        to="/signup"
                        className="mt-auto px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center block"
                    >
                        Get Started
                    </Link>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col flex-grow`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex-grow">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Premium</h3>
                    </div>
                    <div className='flex-grow'>
                        <p className="text-sm sm:text-base mb-4">For professionals and enterprises needing advanced features and priority support.</p>
                    </div>
                    <div className='flex-grow'>
                        <ul className="mb-6 space-y-2 text-left">
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> All Standard Plan Features</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Priority Support</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom Integrations</li>
                        </ul>
                    </div>
                    <Link
                        to="/signup"
                        className="mt-auto px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-gradient-to-r from-red-500 to-red-600 text-white text-center block"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default PricingPage;
