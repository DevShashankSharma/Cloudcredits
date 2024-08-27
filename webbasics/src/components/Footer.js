import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`mx-4 mb-20 sm:mx-6 w-auto py-6 mt-2 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-900"}`}>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                
                {/* Site Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/documentation" className="text-blue-500 hover:text-blue-700 transition-colors">
                                Documentation
                            </Link>
                        </li>
                        <li>
                            <Link to="/advanced-features" className="text-blue-500 hover:text-blue-700 transition-colors">
                                Advanced Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-blue-500 hover:text-blue-700 transition-colors">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="grid grid-cols-2 items-center gap-3 xs:flex justify-center md:justify-start xs:space-x-4">
                        <Link to="https://facebook.com" className="text-gray-600 flex items-center justify-center hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={24} />
                        </Link>
                        <Link to="https://twitter.com" className="text-gray-600 flex items-center justify-center hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </Link>
                        <Link to="https://linkedin.com" className="text-gray-600 flex items-center justify-center hover:text-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link to="https://github.com" className="text-gray-600 flex items-center justify-center hover:text-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400 text-sm xs:text-lg">support@web-basics.com</p>
                    <p className="text-gray-400 text-sm xs:text-lg">+1 (555) 123-4567</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 border-t pt-4 border-gray-300">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} WebBasics. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
