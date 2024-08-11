import React from 'react';
import { Link } from 'react-router-dom';

function Deployment() {
    return (
        <div className="p-8 pt-[8rem] bg-gradient-to-r from-indigo-900 via-purple-900 to-black min-h-screen text-white">
            <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn">Deploy Your Website</h2>
            <p className="text-lg text-center mb-12">Follow these steps to publish your website seamlessly and effectively.</p>

            {/* Deployment steps */}
            <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center animate-slideInLeft">
                    <div className="md:w-1/2 md:order-2">
                        <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="Prepare Code" className="w-full h-[500px] rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pr-12">
                        <h3 className="text-3xl font-semibold mb-4">Step 1: Prepare Your Code</h3>
                        <p className="mb-4">Ensure your code is optimized, clean, and production-ready. This includes minifying CSS/JS files, compressing images, and fixing any errors.</p>
                        <p>Consider using tools like Webpack, Babel, and image compressors to make your code lighter and faster.</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center animate-slideInRight">
                    <div className="md:w-1/2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qlsl-0GJy2pbH-CX4OZlYNwkqbdebm2KvQ&s" alt="Choose Hosting" className="w-full h-[500px] rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h3 className="text-3xl font-semibold mb-4">Step 2: Choose a Hosting Platform</h3>
                        <p className="mb-4">Select a reliable hosting provider that suits your website's needs. Look for features like scalability, security, and customer support.</p>
                        <p>Popular options include AWS, Netlify, and Vercel. Each offers unique advantages depending on your project requirements.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center animate-slideInLeft">
                    <div className="md:w-1/2 md:order-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTtERu9_PAe008tDsMA09T63m-unqWphsfQ&s" alt="Deploy Website" className="w-full h-[500px] rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pr-12">
                        <h3 className="text-3xl font-semibold mb-4">Step 3: Deploy Your Website</h3>
                        <p className="mb-4">Upload your website files to your chosen hosting platform. Set up your domain, configure SSL, and ensure everything is working smoothly.</p>
                        <p>Test your website on multiple devices and browsers to confirm a consistent user experience.</p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center animate-slideInRight">
                    <div className="md:w-1/2">
                        <img src="https://www.shutterstock.com/image-vector/laptop-showing-charts-graph-analysis-600nw-2174534981.jpg" alt="Monitor Performance" className="w-full h-[500px] rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h3 className="text-3xl font-semibold mb-4">Step 4: Monitor and Optimize</h3>
                        <p className="mb-4">After deployment, regularly monitor your website's performance. Use tools like Google Analytics and Lighthouse to track key metrics.</p>
                        <p>Optimize your content and server configurations to maintain a fast, secure, and user-friendly website.</p>
                    </div>
                </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-16 text-center">
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
                @keyframes slideInLeft {
                    0% { transform: translateX(-20px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideInRight {
                    0% { transform: translateX(20px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
}

export default Deployment;
