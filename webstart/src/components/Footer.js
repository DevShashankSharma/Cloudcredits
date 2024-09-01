import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ isDarkMode }) {
  return (
    <footer className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} transition duration-300`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 WebStart. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-blue-500 transition duration-300">Privacy Policy</Link>
          <Link to="#" className="hover:text-blue-500 transition duration-300">Terms of Service</Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-blue-500 transition duration-300"><i className="fab fa-facebook-f"></i></Link>
          <Link to="#" className="hover:text-blue-500 transition duration-300"><i className="fab fa-twitter"></i></Link>
          <Link to="#" className="hover:text-blue-500 transition duration-300"><i className="fab fa-linkedin-in"></i></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
