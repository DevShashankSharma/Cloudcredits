import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
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
    { name: 'Select', type: 'select' },
    { name: 'Link', type: 'link' }
];


function PageEditor({ isDarkMode, item, setItem }) {
    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [styleEditorVisible, setStyleEditorVisible] = useState(false); 

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
        if(item.name === "text" || item.name === "input"){
            item.value = styles['--content'] || '';
        }
        else if(item.name === "link"){
            item.href = styles['--content'] || '';
        }
        else if(item.name === "image"){
            item.src = styles['--content'] || '';
        }
        else if(item.name === "video"){
            const sourceElement = item.querySelector('source');
            sourceElement.src = styles['--content'] || '';
        }
        else if(item.name === "button"){
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

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition duration-300`}>
            <h2 className="text-2xl font-bold mb-4">Page Editor</h2>
            <div className="flex">
                <div className="w-1/3">
                    <h3 className="font-semibold mb-2">Available Components</h3>
                    {componentTypes.map((component) => (
                        <DraggableComponent key={component.type} component={component} />
                    ))}
                </div>
                <div
                    ref={drop}
                    className="w-2/3 min-h-500px p-4 border-2 border-dashed rounded relative"
                >
                    <h3 className="font-semibold mb-2">Your Page</h3>
                    {renderComponents(components)}
                </div>
            </div>
            {styleEditorVisible && selectedComponent !== null && (
                <StyleEditor
                    component={components[selectedComponent]}
                    onStyleChange={(newStyles) => handleStyleChange(newStyles)}
                    onClose={handleCloseStyleEditor} 
                    item={item}
                />
            )}
        </div>
    );
}

export default PageEditor;
