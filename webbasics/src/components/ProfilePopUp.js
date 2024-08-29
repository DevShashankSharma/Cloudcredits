import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePopup = ({ isOpen, onClose, userDetails, darkMode, setFormData, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear localStorage and reset userDetails
        localStorage.removeItem("user");
        setFormData({ name: "", email: "" })
        onClose(); // Close the popup
        setIsLoggedIn(false);
        navigate('/signup');
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <motion.div
                className="absolute inset-0 bg-black opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Popup Container */}
            <motion.div
                className={`relative z-50 p-8 rounded-lg shadow-lg w-[90vw] xm:w-52 vsm:w-64 sm:w-80 md:w-96 lg:w-1/3 
                ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'} transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105`}
                initial={{ y: "-50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "50%", opacity: 0 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-2 right-2 ${darkMode ? 'text-gray-300' : 'text-gray-900'} p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition`}
                >
                    <IoClose className="text-2xl" />
                </button>

                {/* Profile Info */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 xs:w-32 xs:h-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-lg">
                        {userDetails.initials !== "" ? userDetails.initials : <FiUser className="text-3xl" />}
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-xl xs:text-2xl font-semibold mb-2">
                            {userDetails.name !== "" ? userDetails.name : "Guest Mode"}
                        </h2>
                        <p className="text-sm xs:text-base overflow-hidden">
                            {userDetails.email !== "" ? userDetails.email : "guestmode123@example.com"}
                        </p>
                    </div>
                </div>

                {/* Signup or Logout Button */}
                <div className="mt-6 text-center">
                    {userDetails.name !== "" ? (
                        <button
                            onClick={handleLogout}
                            className={`px-6 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 
                                ${darkMode ? "bg-red-600 text-white" : "bg-blue-600 text-white"}`}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/signup"
                            onClick={onClose} // Close the popup when navigating
                            className={`px-6 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 
                                ${darkMode ? "bg-green-600 text-white" : "bg-blue-600 text-white"}`}
                        >
                            Signup
                        </Link>
                    )}
                </div>
            </motion.div>
        </div>,
        document.getElementById('popup-root') // Ensure the popup is rendered outside of the main component hierarchy
    );
};

export default ProfilePopup;
