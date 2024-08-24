import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                <section className="container mx-auto text-center py-20">
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

                </section>

                {/* Features Section */}
                <section className="container mx-auto mt-20">
                    <h2 className="text-4xl font-bold text-center">Core Features</h2>
                    <p className="text-lg text-center mt-4">
                        Explore the powerful tools that WebBasics offers to streamline your web development journey.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {/* Feature 1 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">Code Editor</h3>
                            <p className="mt-4">
                                Our powerful code editor is built with productivity in mind, offering features such as syntax highlighting, real-time code linting, and customizable themes to suit your style. Whether you're working with HTML, CSS, or JavaScript, the editor adapts to your needs.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Code Editor" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">Responsive Design Tools</h3>
                            <p className="mt-4">
                                Easily build websites that look stunning on any device. Our responsive design tools allow you to preview and fine-tune your layouts for various screen sizes, ensuring your website provides an optimal experience for all users.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Responsive Design Tools" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">CSS Frameworks</h3>
                            <p className="mt-4">
                                Get access to popular CSS frameworks such as Tailwind CSS and Bootstrap. These frameworks provide a solid foundation for styling your web projects efficiently, with a wide array of components and utilities that speed up development.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="CSS Frameworks" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Content Section */}
                <section className="container mx-auto mt-20">
                    <h2 className="text-4xl font-bold text-center">New Web Development Tools</h2>
                    <p className="text-lg text-center mt-4">
                        Check out our latest tools designed to enhance your workflow and make web development faster and more efficient.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        {/* Tool 1 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">Advanced Asset Management</h3>
                            <p className="mt-4">
                                Manage your web assets with ease. Our asset management system helps you organize, optimize, and deploy images, fonts, and other media efficiently, ensuring fast load times and better performance.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Asset Management" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>

                        {/* Tool 2 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">JavaScript Utilities</h3>
                            <p className="mt-4">
                                Access a wide range of JavaScript utilities to simplify your code. From deep cloning objects to generating unique IDs, our utilities help streamline development and ensure best practices.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="JavaScript Utilities" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Our Developers Say Section */}
                <section className="container mx-auto mt-20">
                    <h2 className="text-4xl font-bold text-center">What Our Developers Say</h2>
                    <p className="text-lg text-center mt-4">
                        Hear from developers who have transformed their workflow with WebBasics.
                    </p>

                    {/* Testimonial Slider */}
                    <div className="relative mt-12">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                                        <div className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
                                            <blockquote className="mt-4 text-lg italic">
                                                "{testimonial.quote}"
                                            </blockquote>
                                            <p className="mt-4 text-center font-semibold">
                                                - {testimonial.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Navigation buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 m-2"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 m-2"
                        >
                            &gt;
                        </button>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className={`py-20 mt-20 ${darkMode ? "bg-gradient-to-r from-yellow-500 to-pink-500 text-black" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"}`}>
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
                        <p className="text-lg mt-4">
                            Join thousands of developers who use WebBasics to enhance their web development experience.
                        </p>
                        <button className={`mt-8 px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 ${darkMode ? "bg-white text-yellow-500" : "bg-white text-blue-600"}`}>
                            Download WebBasics Now
                        </button>
                    </div>
                </section>

                {/* New Content Section */}
                <section className="container mx-auto mt-20">
                    <h2 className="text-4xl font-bold text-center">Advanced Features</h2>
                    <p className="text-lg text-center mt-4">
                        Discover our cutting-edge features that empower your web development process with modern tools and best practices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        {/* Feature 4 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">Automated Build Tools</h3>
                            <p className="mt-4">
                                Let us take care of the heavy lifting. Our automated build tools handle code bundling, minification, and optimization to ensure your projects are production-ready with minimal effort.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Build Tools" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className="text-2xl font-semibold">Testing Frameworks</h3>
                            <p className="mt-4">
                                Ensure your code is reliable and bug-free with integrated testing frameworks. Write and execute tests with ease using our preconfigured tools, so you can ship high-quality code with confidence.
                            </p>
                            <div className="mt-6">
                                <img src="https://via.placeholder.com/400x200" alt="Testing Frameworks" className="w-full h-40 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;

