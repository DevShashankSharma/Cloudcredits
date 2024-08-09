import React from 'react';

function TemplatePreviews() {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Choose a Template</h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                <div className="w-full sm:w-1/3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-purple-400 hover:via-pink-500 hover:to-red-500">
                        <img src="https://via.placeholder.com/300x200.png?text=Template+1" alt="Template 1" className="w-full h-48 object-cover transition duration-300 transform hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">Template 1</h3>
                            <p className="text-gray-600">A modern and sleek template perfect for showcasing your content.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-green-400 hover:via-blue-500 hover:to-indigo-500">
                        <img src="https://via.placeholder.com/300x200.png?text=Template+2" alt="Template 2" className="w-full h-48 object-cover transition duration-300 transform hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">Template 2</h3>
                            <p className="text-gray-600">A clean and minimal template for a professional look.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TemplatePreviews;
