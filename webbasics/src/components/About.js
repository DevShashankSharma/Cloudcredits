import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function AboutPage({ darkMode }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            alert('Your message has been sent!');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className={`p-4 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Hero Section */}
            <section className="py-16 px-4 text-center bg-gradient-to-r from-green-500 to-green-700 rounded-b-xl shadow-lg">
                <div className="max-w-4xl mx-auto  ">
                    <motion.h1
                        className="text-4xl font-extrabold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Learn more about our mission and how we strive to provide the best tools for web development.
                    </motion.p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
                    <motion.p
                        className="text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        At WebBasics, we are committed to making web development accessible to everyone. Our goal is to provide powerful yet easy-to-use tools that help developers and beginners alike create stunning, responsive websites with ease. We believe in continuous improvement and innovation to meet the evolving needs of our users.
                    </motion.p>
                    <motion.p
                        className="text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our team is passionate about delivering high-quality resources and support to empower our users. We value feedback and strive to create a community where everyone can share their knowledge and experiences. Join us in our mission to make web development more accessible and enjoyable for everyone.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'} rounded-t-xl`}>
                <div className="max-w-4xl mx-auto relative">
                    <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img src="https://via.placeholder.com/600x400?text=Contact+Illustration" alt="Contact Illustration" className="w-full max-w-lg h-auto opacity-50" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Contact Info */}
                        <motion.div
                            className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'} shadow-lg rounded-lg p-6 flex flex-col items-start`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                            <div className="flex items-center mb-4">
                                <FaPhoneAlt className="text-blue-500 text-2xl mr-3" />
                                <span className="text-lg">+1 (123) 456-7890</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="text-blue-500 text-2xl mr-3" />
                                <span className="text-lg">support@webbasics.com</span>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-500 text-2xl mr-3" />
                                <span className="text-lg">123 Web Basics St, Tech City, TX</span>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'} shadow-lg rounded-lg p-6`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-2 rounded-md font-semibold transition-all duration-300 transform ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
