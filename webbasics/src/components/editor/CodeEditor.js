import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Editor } from '@monaco-editor/react';


function CodeEditor({ darkMode, projects, setProjects }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { template, index } = location.state || {}; 
    const [tabs, setTabs] = useState(template.tabs||[]);
    // console.log(template)
    const [activeTab, setActiveTab] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const [htmlCode, setHtmlCode] = useState('');
    const [useTailwind, setUseTailwind] = useState(false);
    const [useBootstrap, setUseBootstrap] = useState(false);
    const [previewSize, setPreviewSize] = useState('desktop');
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [newProject, setNewProject] = useState({ title: "", description: "", tag: "", tabs: [] });


    useEffect(() => {
        const htmlTab = tabs.find(tab => tab.language === 'html');
        setHtmlCode(htmlTab ? htmlTab.code : '');
        setNewProject({ title: title, description: description, tag: tag, tabs: tabs });
    }, [tabs, activeTab, title, description, tag]);

    useEffect(() => {
        setTitle(template.title || '');
        setDescription(template.description || '');
        setTag(template.tag || '');
    }, [template]);

    useEffect(() => {
        if (!location.state) {
            navigate("/templates");
        }
    }, [location.state, navigate]);



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
                    return { width: '70%', height: '600px' };
                case 'mobile':
                    return { width: '50%', height: '700px' };
                default:
                    return { width: '100%', height: '500px' };
            }
        } else if (screenWidth <= 768) { // Tablet view
            switch (previewSize) {
                case 'tablet':
                    return { width: '500px', height: '1024px' };
                case 'mobile':
                    return { width: '375px', height: '667px' };
                default:
                    return { width: '768px', height: '800px' };
            }
        } else { // Laptop/Desktop view
            switch (previewSize) {
                case 'tablet':
                    return { width: '768px', height: '1024px' };
                case 'mobile':
                    return { width: '375px', height: '667px' };
                default:
                    return { width: '1280px', height: '800px' };
            }
        }
    };

    const handleUpdateProject = () => {
        // Update existing project
        const updatedProjects = [...projects];
        updatedProjects[index] = newProject;
        setProjects(updatedProjects);
        setNewProject({title: "", description:"", tag: "", tabs: []});
        navigate("/myprojects");
    };

    const handleAddProject = () => {
        setProjects([...projects, newProject]);
        setNewProject({title: "", description:"", tag: "", tabs: []}); 
        navigate("/myprojects");
    };

    const containerStyles = darkMode
        ? "bg-gray-800 text-white"
        : "bg-white text-gray-900";
    const inputStyles = darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-gray-100 text-gray-900 border-gray-300";



    return (
        <div className={`m-auto mt-20 flex flex-col min-h-screen w-150px xxs:w-[200px] xs:w-[300px] vvsm:w-[380px] vsm:w-[440px] ssm:w-[545px] sm:w-[630px] md:w-[750px] slg:w-[940px] lg:w-[800px] xl:w-[980px] ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div
                className={`flex items-center justify-center p-8 ${containerStyles} transition-colors duration-500 mb-3`}
            >
                <div className="w-full max-w-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {index !== -1 ? "Update Project" : "Create New Project"}
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                className={`w-full px-4 py-2 rounded-lg border ${inputStyles} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter project title"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-2"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                className={`w-full px-4 py-2 rounded-lg border ${inputStyles} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter project description"
                                rows="4"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="tag">
                                Tag
                            </label>
                            <input
                                id="tag"
                                type="text"
                                className={`w-full px-4 py-2 rounded-lg border ${inputStyles} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                                placeholder="Enter project tag"
                                required
                            />
                        </div>
                        <div className="flex space-x-4 justify-center mt-8">
                            <button
                                disabled={!title && !description && !tag}
                                type="button"
                                onClick={handleAddProject}
                                style={{
                                    opacity: title && description && tag ? 1 : 0.5,
                                    cursor: title && description && tag ? 'pointer' : 'not-allowed',
                                }}
                                className={`px-6 py-3 rounded-full ${darkMode
                                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-black"
                                    : "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                                    } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
                            >
                                Save
                            </button>
                            {index !== -1 && (
                                <button
                                    disabled={!title && !description && !tag}
                                    type="button"
                                    onClick={handleUpdateProject}
                                    style={{
                                        opacity: title && description && tag ? 1 : 0.5,
                                        cursor: title && description && tag ? 'pointer' : 'not-allowed',
                                    }}
                                    className={`px-6 py-3 rounded-full ${darkMode
                                        ? "bg-gradient-to-r from-yellow-400 to-pink-500 text-black"
                                        : "bg-gradient-to-r from-yellow-600 to-pink-600 text-white"
                                        } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
                                >
                                    Update
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
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
                <div className={`p-4 mt-10 ${containerStyles}`}>
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
