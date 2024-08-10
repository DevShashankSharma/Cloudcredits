import React from 'react';

function Editor() {
    return (
        <div className="p-8 pt-[8rem] bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen text-white">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 animate-bounce">
                Edit Your Website
            </h2>

            {/* Editor Toolbar */}
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-10 flex justify-between items-center">
                <div className="space-x-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition transform hover:scale-105">
                        Bold
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition transform hover:scale-105">
                        Italic
                    </button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition transform hover:scale-105">
                        Underline
                    </button>
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition transform hover:scale-105">
                        Link
                    </button>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition transform hover:scale-105">
                        Image
                    </button>
                </div>
                <div className="space-x-4">
                    <button className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition transform hover:scale-105">
                        Preview
                    </button>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition transform hover:scale-105">
                        Save
                    </button>
                </div>
            </div>

            {/* Editor Area */}
            <div className="bg-white p-10 rounded-xl shadow-2xl mb-12 text-gray-800">
                <h3 className="text-3xl font-semibold mb-6">Editable Content Area</h3>
                <p className="mb-6">Customize your content here. Use the toolbar above to format text, add images, and more.</p>
                <div className="bg-gray-200 p-8 rounded-xl shadow-inner transition transform hover:scale-105">
                    <div className="editable-content space-y-4">
                        <p className="text-lg">This is a sample text. You can start editing by clicking here.</p>
                        <img src="https://via.placeholder.com/200x100.png?text=Placeholder+Image" alt="Sample" className="rounded-lg shadow-lg mx-auto" />
                        <p className="text-lg">Add more content, images, links, and style them using the toolbar above.</p>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                            <p className="text-sm text-gray-600">Sub-section within the editable area.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Design Options */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-12 text-gray-100">
                <h3 className="text-3xl font-semibold mb-6 text-center">Design Options</h3>
                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
                        <img src="https://via.placeholder.com/150x150.png?text=Layout+1" alt="Layout 1" className="mb-4 mx-auto rounded-full border-4 border-blue-500" />
                        <p>Layout 1</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
                        <img src="https://via.placeholder.com/150x150.png?text=Layout+2" alt="Layout 2" className="mb-4 mx-auto rounded-full border-4 border-green-500" />
                        <p>Layout 2</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
                        <img src="https://via.placeholder.com/150x150.png?text=Layout+3" alt="Layout 3" className="mb-4 mx-auto rounded-full border-4 border-red-500" />
                        <p>Layout 3</p>
                    </div>
                </div>
            </div>

            {/* Live Preview */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-gray-100 mb-12">
                <h3 className="text-3xl font-semibold mb-6 text-center">Live Preview</h3>
                <div className="p-8 bg-gray-900 rounded-xl shadow-inner text-center transition transform hover:scale-105">
                    <img src="https://via.placeholder.com/400x250.png?text=Live+Preview" alt="Live Preview" className="mb-6 mx-auto rounded-lg" />
                    <p>This is a live preview of your website. Changes you make will appear here in real-time.</p>
                </div>
            </div>

            {/* Additional Content */}
            <div className="mt-12">
                <h3 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-600">
                    More Features Coming Soon
                </h3>
                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-gray-700 p-8 rounded-xl shadow-2xl text-center transition transform hover:scale-105">
                        <img src="https://via.placeholder.com/100x100.png?text=SEO" alt="SEO Tools" className="mb-4 mx-auto rounded-full border-4 border-yellow-500" />
                        <h4 className="text-2xl font-semibold mb-4">SEO Tools</h4>
                        <p>Optimize your website for search engines with our built-in tools.</p>
                    </div>
                    <div className="bg-gray-700 p-8 rounded-xl shadow-2xl text-center transition transform hover:scale-105">
                        <img src="https://via.placeholder.com/100x100.png?text=Themes" alt="Custom Themes" className="mb-4 mx-auto rounded-full border-4 border-purple-500" />
                        <h4 className="text-2xl font-semibold mb-4">Custom Themes</h4>
                        <p>Create and apply custom themes to match your brand.</p>
                    </div>
                    <div className="bg-gray-700 p-8 rounded-xl shadow-2xl text-center transition transform hover:scale-105">
                        <img src="https://via.placeholder.com/100x100.png?text=Analytics" alt="Analytics" className="mb-4 mx-auto rounded-full border-4 border-pink-500" />
                        <h4 className="text-2xl font-semibold mb-4">Analytics</h4>
                        <p>Track your website's performance with detailed analytics.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;
