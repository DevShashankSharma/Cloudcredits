import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import template1 from '../assets/images/template1.jpg';
// import template2 from '../assets/images/template2.jpg';
// import template3 from '../assets/images/template3.jpg';

const templates = [
    { id: 1, name: 'Business Template', description: 'A sleek, professional template for businesses.', thumbnail: "template1" },
    { id: 2, name: 'Portfolio Template', description: 'Showcase your work with this creative portfolio template.', thumbnail: 'template2' },
    { id: 3, name: 'Blog Template', description: 'A clean, modern template for bloggers.', thumbnail: 'template3' },
];

function TemplateGallery({ isDarkMode }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTemplates = templates.filter(template =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition duration-300`}>
            <input
                type="text"
                placeholder="Search templates..."
                className={`mb-4 p-2 border rounded w-full ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} transition duration-300`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                {filteredTemplates.map((template) => (
                    <div key={template.id} className="rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                        <img className="w-full h-48 object-cover" src={template.thumbnail} alt={template.name} />
                        <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                            <p className="text-sm">{template.description}</p>
                        </div>
                        <div className={`p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                            <Link to="#" className={`text-blue-500 hover:underline ${isDarkMode ? 'text-blue-300' : 'text-blue-500'} transition duration-300`}>
                                Preview
                            </Link>
                            <Link to="#" className={`text-blue-500 hover:underline ${isDarkMode ? 'text-blue-300' : 'text-blue-500'} transition duration-300`}>
                                Select
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TemplateGallery;

