import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold">WebBasics</Link>
                <nav className="space-x-4">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/documentation" className="hover:text-gray-400">Documentation</Link>
                    <Link to="/community" className="hover:text-gray-400">Community</Link>
                    <Link to="/download" className="hover:text-gray-400">Download</Link>
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
