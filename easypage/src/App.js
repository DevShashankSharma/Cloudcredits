import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyPanel from './components/PropertyPanel';
import ResponsivePreview from './components/ResponsivePreview';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [theme, setTheme] = useState('light');

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: getDefaultContent(type),
      styles: {},
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  const updateElement = (id, updatedProperties) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updatedProperties } : el));
  };

  const removeElement = (id) => {
    setElements(elements.filter(el => el.id !== id));
    setSelectedElement(null);
  };

  const getDefaultContent = (type) => {
    switch (type) {
      case 'text': return 'Editable Text';
      case 'image': return 'https://via.placeholder.com/150';
      case 'button': return 'Click Me';
      case 'header': return 'Header Text';
      case 'subheader': return 'Subheader Text';
      case 'paragraph': return 'This is a paragraph. You can edit the text here.';
      case 'link': return 'Click Here';
      case 'card': return 'Card Title';
      case 'list': return 'List Item';
      case 'video': return 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video
      case 'icon': return 'fa-star'; // Example FontAwesome icon
      default: return '';
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col h-screen`}>
      <div className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-lg font-bold">EasyPage: Basic Web Page Design</h1>
        <ResponsivePreview elements={elements} theme={theme} />
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <div className="grid grid-cols-[1fr_4fr_1fr] ">
        <Sidebar addElement={addElement} theme={theme} />
        <Canvas
          elements={elements}
          setSelectedElement={setSelectedElement}
          updateElement={updateElement}
          removeElement={removeElement}
          theme={theme}
        />
        <PropertyPanel
          selectedElement={selectedElement}
          updateElement={updateElement}
          removeElement={removeElement}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;
