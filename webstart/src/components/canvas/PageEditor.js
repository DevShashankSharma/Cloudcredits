import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import DraggableComponent from './DraggableComponent';
import EditableComponent from './EditableComponent';
import StyleEditor from './StyleEditor';

// Component types for drag-and-drop
const componentTypes = [
    { name: 'Text', type: 'text' },
    { name: 'Image', type: 'image' },
    { name: 'Button', type: 'button' },
    { name: 'Video', type: 'video' },
    { name: 'Section', type: 'section' }
];

function PageEditor({ isDarkMode }) {
    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [styleEditorVisible, setStyleEditorVisible] = useState(false);

    const [, drop] = useDrop(() => ({
        accept: componentTypes.map((component) => component.type),
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            const x = offset ? offset.x : 0;
            const y = offset ? offset.y : 0;
            addComponent(item, x, y);
        },
    }));

    const addComponent = (component, x, y) => {
        setComponents((prevComponents) => [
            ...prevComponents,
            { ...component, x, y, styles: {}, children: [] }
        ]);
    };

    const handleComponentClick = (index) => {
        setSelectedComponent(index);
        setStyleEditorVisible(true);
    };

    const handleStyleChange = useCallback((index, newStyles) => {
        setComponents((prevComponents) => {
            const updatedComponents = [...prevComponents];
            updatedComponents[index] = { ...updatedComponents[index], styles: newStyles };
            return updatedComponents;
        });
    }, []);

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
                section.children = [...(section.children || []), { ...item, x, y }];
                updatedComponents[sectionIndex] = section;
            }
            return updatedComponents;
        });
    };

    const renderComponents = (componentsList) => {
        console.log(componentsList)
        return componentsList.map((component, index) => (
            <EditableComponent 
                key={index}
                component={component}
                onClick={() => handleComponentClick(index)}
                onDropIntoSection={(item, monitor) => handleDropIntoSection(item, monitor, component.id)}
                styles={component.styles}
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
                    className="w-2/3 h-fit p-4 border-2 border-dashed rounded relative"
                >
                    <h3 className="font-semibold mb-2">Your Page</h3>
                    {renderComponents(components)}
                </div>
            </div>
            {styleEditorVisible && selectedComponent !== null && (
                <StyleEditor
                    component={components[selectedComponent]}
                    onStyleChange={(newStyles) => handleStyleChange(selectedComponent, newStyles)}
                    onClose={handleCloseStyleEditor}
                />
            )}
        </div>
    );
}

export default PageEditor;
