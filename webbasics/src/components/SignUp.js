import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ darkMode, toggleLogin, handleInputChange, handleSubmit, formData }) {
    const navigate = useNavigate();
    const handleSignUp = () =>{ 
        navigate('/')
    }
    return (
        <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} min-h-screen flex items-center justify-center transition duration-500`}>
            <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-2xl w-96 p-8 transform transition-all duration-500 hover:scale-105`}>
                <h1 className={`${darkMode ? "text-gray-200" : "text-gray-700"} text-xl xs:text-3xl font-bold text-center mb-4`}>
                    Signup to WebBasics
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className={`${darkMode ? "text-gray-300" : "text-gray-600"} block mb-2`}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"} w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105`}
                            required
                        />
                    </div>
                    <div>
                        <label className={`${darkMode ? "text-gray-300" : "text-gray-600"} block mb-2`}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"} w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105`}
                            required
                        />
                    </div>
                    <button
                        onClick={handleSignUp}
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

