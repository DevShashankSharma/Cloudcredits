import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>© 2024 WebBasics. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link to="#" className="hover:text-gray-400">Privacy Policy</Link>
                    <Link to="#" className="hover:text-gray-400">Terms of Service</Link>
                    <Link to="#" className="hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
