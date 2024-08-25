import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';


function CodeEditor({ darkMode }) {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            name: 'index.html',
            language: 'html',
            code: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Card Component</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="card">
            <img class="card-image" src="https://via.placeholder.com/400" alt="Placeholder Image">
            <div class="card-content">
                <div class="card-title">Card Title</div>
                <p class="card-description">
                    This is a simple card component created using plain HTML and CSS.
                </p>
            </div>
            <div class="card-tags">
                <span class="tag">#Tag1</span>
                <span class="tag">#Tag2</span>
                <span class="tag">#Tag3</span>
            </div>
        </div>
    </body>
    </html>`,
            dependencies: []
        },
        {
            id: 2,
            name: 'style.css',
            language: 'css',
            code: `/* Basic reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    .card {
        max-width: 400px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
    }
    
    .card-image {
        width: 100%;
        display: block;
    }
    
    .card-content {
        padding: 16px;
    }
    
    .card-title {
        font-size: 1.25rem;
        font-weight: bold;
        color: #333333;
        margin-bottom: 8px;
    }
    
    .card-description {
        font-size: 1rem;
        color: #666666;
    }
    
    .card-tags {
        padding: 16px;
        border-top: 1px solid #e0e0e0;
    }
    
    .tag {
        display: inline-block;
        background-color: #e0e0e0;
        border-radius: 12px;
        padding: 8px 12px;
        font-size: 0.875rem;
        font-weight: 600;
        color: #333333;
        margin-right: 8px;
        margin-bottom: 8px;
        text-transform: uppercase;
    }`,

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
        switch (previewSize) {
            case 'tablet':
                return { width: '768px', height: '1024px' };
            case 'mobile':
                return { width: '375px', height: '667px' };
            default:
                return { width: '100%', height: '600px' };
        }
    };

    return (
        <div className={`m-auto flex flex-col min-h-screen w-[1100px] ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Utility Selection */}
            <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center space-x-4`}>
                <button
                    className={`px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 
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
                    className={`px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 
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
            <div className="flex items-center p-2 border-b bg-gray-100 dark:bg-gray-800">
                {tabs.map((tab) => (
                    <div key={tab.id} className="relative flex items-center">
                        <button
                            className={`px-4 w-28 py-2 rounded-t-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500 hover:text-white ${activeTab === tab.id ? 'bg-cyan-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
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
                    className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 transition-all duration-300 ml-4"
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
                <div className="p-4">
                    <div className="text-center mb-4">
                        <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Preview
                        </span>
                    </div>
                    <div className="flex space-x-4 justify-center">
                        <button
                            onClick={() => setPreviewSize('desktop')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 
                            ${previewSize === 'desktop' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-300">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 4H20V20H4V4ZM2 2H22V22H2V2Z" fill="currentColor" />
                            </svg>
                            <span>Desktop</span>
                        </button>
                        <button
                            onClick={() => setPreviewSize('tablet')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 
                            ${previewSize === 'tablet' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-300">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2H18V22H6V2ZM4 4V20H20V4H4Z" fill="currentColor" />
                            </svg>
                            <span>Tablet</span>
                        </button>
                        <button
                            onClick={() => setPreviewSize('mobile')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 
                            ${previewSize === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-300">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 2H16V22H8V2ZM6 4V20H18V4H6Z" fill="currentColor" />
                            </svg>
                            <span>Mobile</span>
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
