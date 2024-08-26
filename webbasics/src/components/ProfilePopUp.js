import React from 'react';
import { IoClose } from 'react-icons/io5';

const ProfilePopup = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

            {/* Popup Container */}
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-6 rounded-lg shadow-lg relative w-[90vw] xm:w-52 vsm:w-64 sm:w-80 md:w-96 lg:w-1/3">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-900 dark:text-gray-300"
                >
                    <IoClose className="text-xl xs:text-2xl" />
                </button>

                {/* Profile Info */}
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 xs:w-16 xs:h-16 bg-green-500 text-white font-bold text-xl rounded-full flex items-center justify-center">
                        {user.initials}
                    </div>
                    <div className="mt-4 text-center">
                        <h2 className="text-base xs:text-lg font-semibold">{user.name}</h2>
                        <p className="text-xs xs:text-sm overflow-hidden">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;
