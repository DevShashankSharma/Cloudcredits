import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useLocation, useNavigate } from 'react-router-dom';
import DraggableComponent from './DraggableComponent';
import EditableComponent from './EditableComponent';
import StyleEditor from './StyleEditor';

const componentTypes = [
    { name: 'Text', type: 'text' },
    { name: 'Image', type: 'image' },
    { name: 'Button', type: 'button' },
    { name: 'Video', type: 'video' },
    { name: 'Section', type: 'section' },
    { name: 'Input', type: 'input' },
    { name: 'Link', type: 'link' }
];


function PageEditor({ isDarkMode, item, setItem, projects, setProjects }) {
    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [styleEditorVisible, setStyleEditorVisible] = useState(false);
    const [newProject, setNewProject] = useState({ title: "", description: "", content: "" });

    const location = useLocation();
    const template = location.state?.template || '';
    const index = location.state?.index;

    const navigate = useNavigate();

    const [title, setTitle] = useState(template.title || '');
    const [description, setDescription] = useState(template.description || '');

    useEffect(() => {
        let obj = document.getElementById('editor');
        obj.innerHTML = template.content || '';
    }, [template]);

    useEffect(() => {
        setNewProject({ title: title, description: description, content: '' });
    }, [title, description]);

    const [, drop] = useDrop({
        accept: componentTypes.map((component) => component.type),
        drop: (item, monitor) => {
            const didDrop = monitor.didDrop();
            if (didDrop) {
                return;
            }

            const offset = monitor.getClientOffset();
            const x = offset ? offset.x : 0;
            const y = offset ? offset.y : 0;
            addComponent(item, x, y);
        },
    });

    const addComponent = (component, x, y) => {
        setComponents((prevComponents) => [
            ...prevComponents,
            { ...component, id: Date.now(), x, y, styles: {}, children: [] }
        ]);
    };

    const handleComponentClick = (index, e) => {
        // console.log(e.target)
        setItem(e.target);
        setSelectedComponent(index);
        setStyleEditorVisible(true);
    };

    const handleStyleChange = (styles) => {
        const styleString = Object.entries(styles).reduce((acc, [key, value]) => {
            // Convert camelCase to kebab-case for CSS properties
            const kebabCaseKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            return `${acc}${kebabCaseKey}: ${value}; `;
        }, '');

        item.style.cssText = styleString;
        // console.log(item.style.cssText)
        if (item.name === "text" || item.name === "input") {
            item.value = styles['--content'] || '';
        }
        else if (item.name === "link") {
            item.href = styles['--content'] || '';
        }
        else if (item.name === "image") {
            item.src = styles['--content'] || '';
        }
        else if (item.name === "video") {
            const sourceElement = item.querySelector('source');
            sourceElement.src = styles['--content'] || '';
        }
        else if (item.name === "button") {
            item.textContent = styles['--content'] || '';
        }

    };

    const handleCloseStyleEditor = () => {
        setStyleEditorVisible(false);
    };

    const handleDropIntoSection = (item, monitor, sectionId) => {
        const offset = monitor.getClientOffset();
        const x = offset ? offset.x : 0;
        const y = offset ? offset.y : 0;

        setComponents((prevComponents) => {
            const updatedComponents = [...prevComponents];
            const sectionIndex = updatedComponents.findIndex(comp => comp.type === 'section' && comp.id === sectionId);
            if (sectionIndex !== -1) {
                const section = updatedComponents[sectionIndex];
                section.children = [...(section.children || []), { ...item, id: Date.now(), x, y }];
                updatedComponents[sectionIndex] = section;
            }
            return updatedComponents;
        });
    };

    const renderComponents = (componentsList) => {
        // console.log(componentsList)
        return componentsList.map((component, index) => (
            <EditableComponent
                key={component.id}
                component={component}
                onClick={(e) => handleComponentClick(index, e)}
                onDropIntoSection={(item, monitor) => handleDropIntoSection(item, monitor, component.id)}
            >
                {component.children && renderComponents(component.children)}
            </EditableComponent>
        ));
    };

    const handleAddProject = () => {
        let obj = document.getElementById('editor');
        newProject.content = obj.innerHTML;
        setProjects([...projects, newProject]);
        setNewProject({ title: "", description: "", content: "" });
        navigate("/dashboard");
    };

    const handleUpdateProject = () => {
        // Update existing project
        let obj = document.getElementById('editor');
        newProject.content = obj.innerHTML;
        const updatedProjects = [...projects];
        updatedProjects[index] = newProject;
        setProjects(updatedProjects);
        setNewProject({ title: "", description: "", content: "" });
        navigate("/dashboard");
    };

    const inputStyles = isDarkMode
        ? 'bg-gray-700 text-white border-gray-600'
        : 'bg-gray-100 text-gray-900 border-gray-300';

    return (
        <div className={`mt-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition duration-300 `}>
            <h2 className="text-5xl text-center font-bold mb-4">Page Editor</h2>
            <div className="flex justify-between">
                {/* Draggable components section */}
                <div className="md:w-1/4 w-[50px] pt-[5rem]  h-[500px] sticky top-4 bg-opacity-90">
                    <h3 className="font-semibold md:block hidden mb-2">Components</h3>
                    {componentTypes.map((component) => (
                        <DraggableComponent key={component.type} component={component} isDarkMode={isDarkMode} />
                    ))}
                </div>

                {/* Form and Editor section */}
                <div className="md:w-3/4 w-full p-4">
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
                            <label className="block text-sm font-medium mb-2" htmlFor="description">
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
                        <div className="flex space-x-4 flex-col gap-4 my-2 items-center sm:flex-row sm:justify-center mt-8">
                            <button
                                disabled={!title || !description}
                                type="button"
                                onClick={() => handleAddProject({ title, description })}
                                style={{
                                    opacity: title && description ? 1 : 0.5,
                                    cursor: title && description ? 'pointer' : 'not-allowed',
                                }}
                                className={`px-6 py-3 rounded-full ${isDarkMode
                                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-black'
                                    : 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                                    } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
                            >
                                Save
                            </button>
                            {index !== -1 && (
                                <button
                                    disabled={!title || !description}
                                    type="button"
                                    onClick={() => handleUpdateProject(index, { title, description })}
                                    style={{
                                        opacity: title && description ? 1 : 0.5,
                                        cursor: title && description ? 'pointer' : 'not-allowed',
                                    }}
                                    className={`px-6 py-3 rounded-full ${isDarkMode
                                        ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-black'
                                        : 'bg-gradient-to-r from-yellow-600 to-pink-600 text-white'
                                        } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
                                >
                                    Update
                                </button>
                            )}
                        </div>
                    </form>
                    <h1 className="font-semibold text-3xl mt-4 mb-2 text-center">Preview</h1>
                    <div
                        ref={drop}
                        className="w-full min-h-[70vh] p-4 border-2 border-dashed rounded relative bg-white"
                        id='editor'
                        onClick={(e) => handleComponentClick(index, e)}
                    >
                        {renderComponents(components)}
                    </div>
                </div>
            </div>
            {styleEditorVisible && selectedComponent !== null && (
                <StyleEditor
                    component={components[selectedComponent]}
                    onStyleChange={(newStyles) => handleStyleChange(newStyles)}
                    onClose={handleCloseStyleEditor}
                    item={item}
                    isDarkMode={isDarkMode}
                />
            )}
        </div>
    );

}

export default PageEditor;
