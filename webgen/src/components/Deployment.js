import React from 'react';
import { Link } from 'react-router-dom';

function Deployment() {
    return (
        <div className="p-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen text-white">
            <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn">Deploy Your Website</h2>
            <p className="text-lg text-center mb-8">Follow these steps to publish your website effortlessly.</p>

            {/* Deployment steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transition transform hover:scale-105 hover:shadow-xl animate-slideInUp">
                    <h3 className="text-2xl font-semibold mb-4">Step 1: Prepare Your Code</h3>
                    <p className="mb-4">Ensure your code is clean, free of errors, and ready for production. Optimize images and minify files.</p>
                    <img src="https://via.placeholder.com/150" alt="Prepare Code" className="w-full h-40 object-cover rounded-md mb-4" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transition transform hover:scale-105 hover:shadow-xl animate-slideInUp">
                    <h3 className="text-2xl font-semibold mb-4">Step 2: Choose a Hosting Platform</h3>
                    <p className="mb-4">Select a hosting provider that meets your needs. Consider factors like uptime, support, and pricing.</p>
                    <img src="https://via.placeholder.com/150" alt="Choose Hosting" className="w-full h-40 object-cover rounded-md mb-4" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transition transform hover:scale-105 hover:shadow-xl animate-slideInUp">
                    <h3 className="text-2xl font-semibold mb-4">Step 3: Deploy Your Website</h3>
                    <p className="mb-4">Upload your website files to the hosting server. Configure your domain and test the website.</p>
                    <img src="https://via.placeholder.com/150" alt="Deploy Website" className="w-full h-40 object-cover rounded-md mb-4" />
                </div>
            </div>

            {/* Additional Content */}
            <div className="mt-12 text-center">
                <h3 className="text-3xl font-bold mb-6 animate-fadeIn">Additional Resources</h3>
                <div className="space-y-4">
                    <p>For detailed guides on deployment, visit our <Link to="#" className="text-blue-200 underline hover:text-blue-300">documentation</Link>.</p>
                    <p>Need help? Contact our <Link to="#" className="text-blue-200 underline hover:text-blue-300">support team</Link>.</p>
                </div>
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
            `}</style>
        </div>
    );
}

export default Deployment;
