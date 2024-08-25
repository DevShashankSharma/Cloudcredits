import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ darkMode }) {
    // State to manage the current testimonial slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Testimonials data
    const testimonials = [
        {
            quote: "WebBasics has significantly improved my development workflow. The tools are intuitive and powerful.",
            name: "Alex J., Front-End Developer",
            image: "https://via.placeholder.com/100"
        },
        {
            quote: "The responsive design tools are fantastic. They save me so much time when building websites.",
            name: "Jessica L., UI/UX Designer",
            image: "https://via.placeholder.com/100"
        },
        {
            quote: "WebBasics provides everything I need in one place. It's my go-to toolkit for web development.",
            name: "Michael R., Full-Stack Developer",
            image: "https://via.placeholder.com/100"
        },
        {
            quote: "The code editor is a game-changer. It’s fast, customizable, and integrates seamlessly with my workflow.",
            name: "Taylor R., Web Designer",
            image: "https://via.placeholder.com/100"
        },
        {
            quote: "WebBasics' CSS frameworks integration is spot on. It makes styling my projects much easier.",
            name: "Sarah W., Front-End Engineer",
            image: "https://via.placeholder.com/100"
        },
    ];

    // Handle next and previous slide
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className={`transition-all min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} p-4`}>

                {/* Hero Section */}
                <motion.section
                    className="container mx-auto text-center py-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className={`text-5xl font-extrabold text-transparent bg-clip-text ${darkMode ? "bg-gradient-to-r from-yellow-500 to-pink-500" : "bg-gradient-to-r from-blue-600 to-purple-600"}`}>
                        WebBasics
                    </h1>
                    <p className="text-xl mt-4">
                        Your Essential Toolkit for Modern Web Development. WebBasics is designed to provide developers, both new and experienced, with a comprehensive set of tools for building responsive, dynamic, and efficient websites.
                    </p>
                    <Link
                        to="/pricing"
                        className={`block w-[200px] mx-auto mt-8 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 ${darkMode ? "bg-gradient-to-r from-yellow-500 to-pink-500 text-black" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"}`}
                    >
                        Get Started
                    </Link>
                </motion.section>

                {/* Features Section */}
                <motion.section
                    className="container mx-auto mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold text-center">Core Features</h2>
                    <p className="text-lg text-center mt-4">
                        Explore the powerful tools that WebBasics offers to streamline your web development journey.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {/* Feature 1 */}
                        <motion.div
                            className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold">Code Editor</h3>
                            <p className="mt-4">
                                Our powerful code editor is built with productivity in mind, offering features such as syntax highlighting, real-time code linting, and customizable themes to suit your style. Whether you're working with HTML, CSS, or JavaScript, the editor adapts to your needs.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Code Editor" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold">Responsive Design Tools</h3>
                            <p className="mt-4">
                                Easily build websites that look stunning on any device. Our responsive design tools allow you to preview and fine-tune your layouts for various screen sizes, ensuring your website provides an optimal experience for all users.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Responsive Design Tools" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-semibold">CSS Frameworks</h3>
                            <p className="mt-4">
                                Get access to popular CSS frameworks such as Tailwind CSS and Bootstrap. These frameworks provide a solid foundation for styling your web projects efficiently, with a wide array of components and utilities that speed up development.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="CSS Frameworks" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Additional Content Section */}
                <motion.section
                    className="container mx-auto mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold text-center">New Web Development Tools</h2>
                    <p className="text-lg text-center mt-4">
                        Check out our latest tools designed to enhance your workflow and make web development faster and more efficient.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        {/* Tool 1 */}
                        <motion.div
                            className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold">Advanced Asset Management</h3>
                            <p className="mt-4">
                                Manage your web assets with ease. Our asset management system helps you organize, optimize, and deploy images, fonts, and other media efficiently, ensuring fast load times and better performance.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Asset Management" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </motion.div>

                        {/* Tool 2 */}
                        <motion.div
                            className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold">Interactive Tutorials</h3>
                            <p className="mt-4">
                                Learn new techniques and best practices through our interactive tutorials. Whether you’re a beginner or an experienced developer, our tutorials provide step-by-step guidance to enhance your skills.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Interactive Tutorials" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Testimonials Section */}
                <motion.section
                    className="container mx-auto mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold">What Our Developers Say</h2>
                    <p className="text-lg mt-4">
                        Hear from our satisfied users about how WebBasics has helped them in their web development journey.
                    </p>

                    <div className="relative mt-12">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                        >
                            &gt;
                        </button>
                        <motion.div
                            className="flex items-center justify-center"
                            key={currentSlide}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                                <p className="text-lg italic">
                                    "{testimonials[currentSlide].quote}"
                                </p>
                                <div className="mt-4 flex items-center">
                                    <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="ml-4">
                                        <p className="font-semibold">{testimonials[currentSlide].name}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

export default Home;
