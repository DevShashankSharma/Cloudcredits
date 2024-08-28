import React from 'react';
import { Link } from 'react-router-dom';

const TemplateCard = ({ template, darkMode }) => { 
    return (
        <div className={`xs:h-[400px]rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} ${darkMode ? "border-gray-600" : "border-gray-200"} border-2`}>
            <img src={template.image} alt={template.title} className="w-full h-48 object-cover" />
            <div className="p-2 xs:p-6 gap-2 vsm:gap-0 flex flex-col justify-between h-auto vsm:h-[calc(100%-192px)]">
                <h2 className={`text-xl xs:text-2xl font-bold mb-2 border-b-2 pb-2 ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                    {template.title}
                </h2>
                <div className="overflow-auto flex-grow vsm:mb-4" style={{ maxHeight: '100px' }}>
                    <p className={`text-xs xs:text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {template.description}
                    </p>
                </div>
                <div className="flex flex-col gap-2 vsm:flex-row vsm:items-center vsm:justify-between">
                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{template.tag}</span>
                    <Link
                        to={`/codeeditor`}
                        state = {{ template: template, index: -1 }}
                        className={`px-2 xs:px-6 py-2 rounded-lg text-center text-xs xs:text-sm font-semibold shadow-lg transition duration-300 ease-in-out ${darkMode ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"}`}
                    >
                        View Template
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;
