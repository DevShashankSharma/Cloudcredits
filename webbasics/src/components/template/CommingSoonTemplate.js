import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiInfo } from 'react-icons/fi';
import { RiStarSmileLine, RiGift2Line } from 'react-icons/ri';

function ComingSoonSection() {
    return (
        <div className="relative my-16 py-16 px-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-blue-600 to-pink-600 opacity-20"></div>

            <div className="max-w-6xl mx-auto text-center text-white relative z-10">
                <h2 className="text-2xl vsm:text-4xl font-bold mb-4">Coming Soon</h2>
                <p className="text-base xs:text-lg mb-8">
                    We're working on some exciting new templates that will be available soon. Stay tuned for more updates!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Feature 1 */}
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="text-2xl vsm:text-4xl mb-4">
                            <RiStarSmileLine />
                        </div>
                        <h3 className="text-xl xs:text-2xl font-semibold mb-3">Innovative Designs</h3>
                        <p className='text-sm xs:text-lg'>Explore templates with modern, innovative designs that are crafted to impress and engage.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="text-2xl vsm:text-4xl mb-4">
                            <RiGift2Line />
                        </div>
                        <h3 className="text-xl xs:text-2xl font-semibold mb-3">Exclusive Offers</h3>
                        <p className='text-sm xs:text-lg'>Take advantage of exclusive offers and discounts on premium templates for early adopters.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="text-2xl vsm:text-4xl mb-4">
                            <FiInfo />
                        </div>
                        <h3 className="text-xl xs:text-2xl font-semibold mb-3">Detailed Documentation</h3>
                        <p className='text-sm xs:text-lg'>Each template will come with detailed documentation to help you get started quickly and efficiently.</p>
                    </div>
                </div>

                <Link
                    to="*"
                    className="inline-flex items-center px-2 xs:px-3 vsm:px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-colors"
                >
                    <span className="mr-2 text-base xs:text-lg">See More Updates</span>
                    <FiArrowRight />
                </Link>
            </div>
        </div>
    );
}

export default ComingSoonSection;
