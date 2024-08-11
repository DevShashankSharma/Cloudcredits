import React from 'react';
import { Link } from 'react-router-dom';

function Documentation() {
    return (
        <div className="p-8 pt-[8rem] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 min-h-screen text-white">
            <h2 className="text-5xl font-bold mb-8 text-center animate-fadeIn">Documentation</h2>
            <p className="text-lg text-center mb-12">
                Welcome to the comprehensive guide for WebGen. Here you will find all the information you need to master the platform.
            </p>

            <div className="flex flex-col md:flex-row">
                {/* Table of Contents */}
                <nav className="md:w-1/4 bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8">
                    <h3 className="text-3xl font-semibold mb-6">Table of Contents</h3>
                    <ul className="space-y-4">
                        <li><a href="#introduction" className="text-blue-300 hover:underline">Introduction</a></li>
                        <li><a href="#features" className="text-blue-300 hover:underline">Key Features</a></li>
                        <li><a href="#getting-started" className="text-blue-300 hover:underline">Getting Started</a></li>
                        <li><a href="#resources" className="text-blue-300 hover:underline">Additional Resources</a></li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="md:w-3/4">
                    {/* Introduction Section */}
                    <section id="introduction" className="mb-16">
                        <h3 className="text-4xl font-semibold mb-6 animate-slideInUp">Introduction</h3>
                        <p className="text-lg mb-6">
                            WebGen is a powerful tool for creating and managing dynamic websites effortlessly. This documentation will guide you through all the features and functionalities to help you get the most out of the platform.
                        </p>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/006/129/553/non_2x/introduction-word-on-metal-pointer-free-photo.jpg"
                            alt="Introduction"
                            className="w-full h-80 object-cover rounded-lg shadow-lg mb-8 animate-fadeIn"
                        />
                    </section>

                    {/* Features Section */}
                    <section id="features" className="mb-16">
                        <h3 className="text-4xl font-semibold mb-6 animate-slideInLeft">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200 transition-transform transform hover:scale-105 animate-slideInUp">
                                <h4 className="text-2xl font-semibold mb-4">Dynamic Templates</h4>
                                <p>Create dynamic templates that can be customized easily to fit your needs. Save time with pre-built designs and modify them as needed.</p>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjJ1IGg4iyG3KHGUA3cw74rrDfjevxWdAIg&s"
                                    alt="Dynamic Templates"
                                    className="w-full h-40 object-cover rounded-md mt-4"
                                />
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200 transition-transform transform hover:scale-105 animate-slideInUp">
                                <h4 className="text-2xl font-semibold mb-4">User-Friendly Editor</h4>
                                <p>Edit your website with a powerful yet easy-to-use editor. Drag and drop elements, customize styles, and preview changes in real-time.</p>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XTdsEKGekdsb3b_83OgUr21jG2RfrLSmwQ&s"
                                    alt="User-Friendly Editor"
                                    className="w-full h-40 object-cover rounded-md mt-4"
                                />
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200 transition-transform transform hover:scale-105 animate-slideInUp">
                                <h4 className="text-2xl font-semibold mb-4">Seamless Deployment</h4>
                                <p>Easily deploy your website to various hosting platforms. Our integration with popular services ensures a smooth deployment process.</p>
                                <img
                                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/06/What-is-Continuous-Deployment.png"
                                    alt="Seamless Deployment"
                                    className="w-full h-40 object-cover rounded-md mt-4"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Getting Started Section */}
                    <section id="getting-started" className="mb-16">
                        <h3 className="text-4xl font-semibold mb-6 animate-slideInRight">Getting Started</h3>
                        <p className="text-lg mb-6">
                            Follow these steps to get started with WebGen:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mb-6 text-lg">
                            <li>Sign up for an account on WebGen's website.</li>
                            <li>Select a template or start from scratch to build your website.</li>
                            <li>Use the editor to customize your site and add your content.</li>
                            <li>Preview your site to make sure everything looks right.</li>
                            <li>Publish your website with a single click.</li>
                        </ol>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1J8TqDOB6DoYacMLwDthTmdSKVdi2Y6qeA&s"
                            alt="Getting Started"
                            className="w-full h-[34rem] object-cover rounded-lg shadow-lg mb-8 animate-fadeIn"
                        />
                    </section>

                    {/* Additional Resources Section */}
                    <section id="resources" className="mb-16 text-center">
                        <h3 className="text-4xl font-bold mb-6 animate-fadeIn">Additional Resources</h3>
                        <div className="space-y-4 text-lg">
                            <p>For in-depth guides and tutorials, check out our <Link to="#" className="text-blue-300 underline hover:text-blue-400">official documentation</Link>.</p>
                            <p>If you need help, reach out to our <Link to="#" className="text-blue-300 underline hover:text-blue-400">support team</Link>.</p>
                            <p>Join our <Link to="#" className="text-blue-300 underline hover:text-blue-400">community forum</Link> to connect with other users and share your experiences.</p>
                        </div>
                    </section>
                </main>
            </div>

            {/* Custom Animations */}
            <style>{`
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes slideInUp {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideInLeft {
                    0% { transform: translateX(-20px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideInRight {
                    0% { transform: translateX(20px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
}

export default Documentation;
