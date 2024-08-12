import React from 'react';

function TemplatePage() {
    return (
        <div className="p-8 bg-slate-700 min-h-screen pt-[6rem]">
            <h2 className="text-4xl font-bold mb-8 text-white text-center animate-fadeIn">Choose a Template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Template 1 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-slideInUp">
                    <img src="https://via.placeholder.com/400x250.png?text=Template+1" alt="Template 1" className="w-full h-56 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Modern Template</h3>
                        <p className="text-gray-600 mb-4">A sleek and modern template for professional websites.</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Preview</button>
                    </div>
                </div>

                {/* Template 2 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-slideInUp">
                    <img src="https://via.placeholder.com/400x250.png?text=Template+2" alt="Template 2" className="w-full h-56 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Minimalistic Template</h3>
                        <p className="text-gray-600 mb-4">A clean and minimalistic design for simple and effective websites.</p>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">Preview</button>
                    </div>
                </div>

                {/* Template 3 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-slideInUp">
                    <img src="https://via.placeholder.com/400x250.png?text=Template+3" alt="Template 3" className="w-full h-56 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Creative Template</h3>
                        <p className="text-gray-600 mb-4">A vibrant and creative design perfect for portfolios and blogs.</p>
                        <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition">Preview</button>
                    </div>
                </div>
            </div>

            {/* Additional Content: Sliding Carousel of Templates */}
            <div className="mt-12">
                <h3 className="text-3xl font-bold text-center mb-8 text-white">More Templates</h3>
                <div className="flex overflow-x-scroll no-scrollbar space-x-8 py-4">
                    {/* Template 4 */}
                    <div className="min-w-[300px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-slideInLeft">
                        <img src="https://via.placeholder.com/300x200.png?text=Template+4" alt="Template 4" className="w-full h-40 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">Business Template</h3>
                            <p className="text-gray-600">A professional template for businesses and startups.</p>
                        </div>
                    </div>

                    {/* Template 5 */}
                    <div className="min-w-[300px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-slideInLeft">
                        <img src="https://via.placeholder.com/300x200.png?text=Template+5" alt="Template 5" className="w-full h-40 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">Agency Template</h3>
                            <p className="text-gray-600">A stylish template perfect for agencies and freelancers.</p>
                        </div>
                    </div>

                    {/* Template 6 */}
                    <div className="min-w-[300px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-slideInLeft">
                        <img src="https://via.placeholder.com/300x200.png?text=Template+6" alt="Template 6" className="w-full h-40 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">E-commerce Template</h3>
                            <p className="text-gray-600">An e-commerce template with a sleek and modern design.</p>
                        </div>
                    </div>
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
                @keyframes slideInLeft {
                    0% { transform: translateX(-20px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}

export default TemplatePage;
