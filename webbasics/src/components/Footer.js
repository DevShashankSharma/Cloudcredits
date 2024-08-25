import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`mx-4 w-full py-6 mt-auto ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-900"}`}>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Site Links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                        <li><Link to="/documentation" className="hover:text-blue-500 transition-colors">Documentation</Link></li>
                        <li><Link to="/advanced-features" className="hover:text-blue-500 transition-colors">Advanced Features</Link></li>
                        <li><Link to="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link to="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={24} />
                        </Link>
                        <Link to="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </Link>
                        <Link to="https://linkedin.com" className="text-gray-600 hover:text-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link to="https://github.com" className="text-gray-600 hover:text-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                    <p className="text-gray-400">support@webbasics.com</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
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
