import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <h4 className="text-lg font-semibold">WebGen</h4>
                        <p className="text-gray-400">© 2024 WebGen. All rights reserved.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link to="#" className="hover:text-teal-400">Facebook</Link>
                            <Link to="#" className="hover:text-teal-400">Twitter</Link>
                            <Link to="#" className="hover:text-teal-400">LinkedIn</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <p className="text-gray-400">Email: support@webgen.com</p>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
