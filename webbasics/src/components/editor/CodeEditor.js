import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@monaco-editor/react';
import { allTemplates } from '../template/templates';


function CodeEditor({ darkMode }) {
    const { id } = useParams(); 
    const templateId =  id || 0;
    const template = allTemplates.find(t => t.id === Number(templateId));
    const [tabs, setTabs] = useState([
        {
            id: 1,
            name: 'index.html',
            language: 'html',
            code: templateId !== 0 ? template.html : `
            <div class="template-card">
                <img src="https://s.tmimgcdn.com/scr/800x500/52500/music-band-responsive-website-template_52511-original.jpg" alt="Music Band Website Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Music Band Website</h3>
                    <p class="template-description">Design a vibrant music band website. Include sections for tour dates, music samples, and profiles of band members to engage fans and promote your music.</p>
                    <div class="tour-dates">
                        <h4 class="dates-title">Upcoming Tour Dates</h4>
                        <div class="tour-item">
                            <h5 class="tour-city">New York City</h5>
                            <p class="tour-date">September 25, 2024</p>
                        </div>
                        <div class="tour-item">
                            <h5 class="tour-city">Los Angeles</h5>
                            <p class="tour-date">October 5, 2024</p>
                        </div>
                    </div>
                    <button class="cta-button">Listen to Music</button>
                </div>
            </div>
        ` ,
            dependencies: []
        },
        {
            id: 2,
            name: 'style.css',
            language: 'css',
            code: templateId !== 0 ? template.css : `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .tour-dates {
                margin-top: 20px;
                text-align: left;
            }
            .dates-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .tour-item {
                margin-bottom: 15px;
            }
            .tour-city {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .tour-date {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #673ab7;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #5e35b1;
            }
        `,

            dependencies: []
        }
    ]);
    const [activeTab, setActiveTab] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const [htmlCode, setHtmlCode] = useState('');
    const [useTailwind, setUseTailwind] = useState(false);
    const [useBootstrap, setUseBootstrap] = useState(false);
    const [previewSize, setPreviewSize] = useState('desktop');

    useEffect(() => {
        const htmlTab = tabs.find(tab => tab.language === 'html');
        setHtmlCode(htmlTab ? htmlTab.code : '');
    }, [tabs, activeTab]);

    const getLanguage = (fileType) => {
        switch (fileType) {
            case 'html':
                return 'html';
            case 'css':
                return 'css';
            case 'js':
                return 'javascript';
            default:
                return 'plaintext';
        }
    };

    const addTab = (fileName) => {
        if (!fileName.trim()) return;

        const extension = fileName.split('.').pop();
        const newTab = {
            id: tabs.length + 1,
            name: fileName,
            language: getLanguage(extension),
            code: '',
            dependencies: [], // Initialize with no dependencies
        };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
        setIsAdding(false);
        setNewFileName('');
    };

    const removeTab = (id) => {
        const updatedTabs = tabs.filter(tab => tab.id !== id);
        setTabs(updatedTabs);
        setActiveTab(updatedTabs.length ? updatedTabs[0].id : null);
    };

    const generatePreviewContent = () => {
        const cssLinks = tabs
            .filter(tab => tab.language === 'css')
            .map(tab => `<style>${tab.code}</style>`)
            .join('\n');

        const bootstrapLink = useBootstrap
            ? '<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">'
            : '';
        const tailwindLink = useTailwind
            ? '<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">'
            : '';

        const getCodeWithDependencies = (code, dependencies) => {
            const dependencyCodes = tabs
                .filter(tab => dependencies.includes(tab.id))
                .map(tab => `<script>${tab.code}</script>`)
                .join('\n');

            return dependencyCodes + code;
        };

        const integratedHtml = getCodeWithDependencies(htmlCode, tabs.find(tab => tab.id === activeTab)?.dependencies || []);

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Preview</title>
                ${bootstrapLink}
                ${tailwindLink}
                ${cssLinks}
            </head>
            <body>
                ${integratedHtml}
            </body>
            </html>
        `;
    };

    const getPreviewSizeStyle = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 480) { // Mobile view
            switch (previewSize) {
                case 'tablet':
                    return { width: '70%', height: '600px' }; // Adjust width for mobile view
                case 'mobile':
                    return { width: '50%', height: '700px' }; // Adjust width for mobile view
                default:
                    return { width: '100%', height: '500px' }; // Default view for mobile
            }
        } else if (screenWidth <= 768) { // Tablet view
            switch (previewSize) {
                case 'tablet':
                    return { width: '500px', height: '1024px' }; // Fixed tablet size for tablet view
                case 'mobile':
                    return { width: '375px', height: '667px' }; // Fixed mobile size for tablet view
                default:
                    return { width: '768px', height: '800px' }; // Default view for desktop
            }
        } else { // Laptop/Desktop view
            switch (previewSize) {
                case 'tablet':
                    return { width: '768px', height: '1024px' }; // Fixed tablet size for desktop view
                case 'mobile':
                    return { width: '375px', height: '667px' }; // Fixed mobile size for desktop view
                default:
                    return { width: '1280px', height: '800px' }; // Default desktop size
            }
        }
    };



    return (
        <div className={`m-auto mt-20 flex flex-col min-h-screen w-150px xxs:w-[200px] xs:w-[300px] vvsm:w-[380px] vsm:w-[440px] ssm:w-[545px] sm:w-[630px] md:w-[750px] slg:w-[940px] lg:w-[800px] xl:w-[980px] ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Utility Selection */}
            <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex flex-col xs:flex-row items-center gap-1 xs:space-x-4`}>
                <button
                    className={`px-4 py-2 w-full xs:w-28 rounded transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 
                    ${useTailwind
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : darkMode
                                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
                        }`}
                    onClick={() => setUseTailwind(!useTailwind)}
                >
                    <span>Tailwind</span>
                </button>

                <button
                    className={`px-4 py-2 w-full xs:w-28 rounded transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 
                    ${useBootstrap
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : darkMode
                                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
                        }`}
                    onClick={() => setUseBootstrap(!useBootstrap)}
                >
                    <span>Bootstrap</span>
                </button>
            </div>

            {/* Tab Bar */}
            <div className="grid gap-1 grid-cols-1 xs:grid-cols-2 vvsm:grid-cols-3 vsm:grid-cols-4 ssm:grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 items-center p-2 border-b bg-gray-100 dark:bg-gray-800">
                {tabs.map((tab) => (
                    <div key={tab.id} className="relative flex items-center">
                        <button
                            className={`px-4 w-full py-2 rounded-t-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500 hover:text-white ${activeTab === tab.id ? 'bg-cyan-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                        <button
                            className="absolute right-0 top-0 px-2 py-1 text-red-500 hover:text-red-700 dark:hover:text-red-300 transition-all duration-300"
                            onClick={() => removeTab(tab.id)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
                <button
                    className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 transition-all duration-300 xs:ml-4"
                    onClick={() => setIsAdding(true)}
                >
                    ＋
                </button>
                {isAdding && (
                    <input
                        type="text"
                        value={newFileName}
                        onChange={(e) => setNewFileName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addTab(newFileName);
                            }
                        }}
                        onBlur={() => addTab(newFileName)}
                        className="ml-4 px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white border-gray-600 bg-gray-200 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                        placeholder="Enter filename..."
                        autoFocus
                    />
                )}
            </div>


            {/* Editor and Preview Area */}
            <div className="flex-1 flex flex-col">
                {/* Editor Section */}
                <div className="flex-1 overflow-hidden">
                    {tabs.map((tab) => (
                        <div key={tab.id} className={activeTab === tab.id ? 'h-[500px]' : 'hidden'}>
                            <Editor
                                height="100%"
                                language={tab.language}
                                value={tab.code}
                                theme={darkMode ? 'vs-dark' : 'vs-light'}
                                onChange={(value) => {
                                    const updatedTabs = tabs.map(t => t.id === tab.id ? { ...t, code: value } : t);
                                    setTabs(updatedTabs);
                                }}
                                options={{
                                    automaticLayout: true,
                                }}
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>

                {/* Preview Options and Title */}
                <div className="p-4 mt-10">
                    <div className="text-center mb-4">
                        <span className={`text-xl xs:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Preview
                        </span>
                    </div>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setPreviewSize('desktop')}
                            className={`flex items-center space-x-2 px-1 vsm:px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 
                            ${previewSize === 'desktop' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className={`${darkMode ? 'text-white' : 'text-gray-900'} rounded-xl`}>
                                <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5.5H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='hidden vvsm:block'>Desktop</span>
                        </button>
                        <button
                            onClick={() => setPreviewSize('tablet')}
                            className={`flex items-center space-x-2 px-1 vsm:px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 
                            ${previewSize === 'tablet' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className={`${darkMode ? 'text-white' : 'text-gray-900'} rounded-xl`}>
                                <path d="M14.5 2H9.5C6.67157 2 5.25736 2 4.37868 2.87868C3.5 3.75736 3.5 5.17157 3.5 8V16C3.5 18.8284 3.5 20.2426 4.37868 21.1213C5.25736 22 6.67157 22 9.5 22H14.5C17.3284 22 18.7426 22 19.6213 21.1213C20.5 20.2426 20.5 18.8284 20.5 16V8C20.5 5.17157 20.5 3.75736 19.6213 2.87868C18.7426 2 17.3284 2 14.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 4.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M11.9998 19H12.0098" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className='hidden vvsm:block'>Tablet</span>
                        </button>
                        <button
                            onClick={() => setPreviewSize('mobile')}
                            className={`flex items-center space-x-2 px-1 vsm:px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 
                            ${previewSize === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className={`${darkMode ? 'text-white' : 'text-gray-900'} rounded-xl`}>
                                <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M11 19H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <span className='hidden vvsm:block'>Mobile</span>
                        </button>
                    </div>
                </div>

                {/* Preview Section */}
                <div className={`flex-1 flex justify-center items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <iframe
                        srcDoc={generatePreviewContent()}
                        className="border-0"
                        title="Preview"
                        style={{ ...getPreviewSizeStyle(), backgroundColor: 'white', overflow: 'hidden' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CodeEditor;
