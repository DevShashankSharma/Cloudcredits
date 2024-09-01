import React, { useState, useEffect } from 'react';

function PropertyPanel({ selectedElement, updateElement, deleteElement }) {
  const [newContent, setNewContent] = useState(selectedElement?.content || '');
  const [styles, setStyles] = useState(selectedElement?.styles || {});
  const [href, setHref] = useState(selectedElement?.href || '');

  useEffect(() => {
    setNewContent(selectedElement?.content || '');
    setStyles(selectedElement?.styles || {});
    setHref(selectedElement?.href || '');
  }, [selectedElement]);

  if (!selectedElement) return <div className="w-full md:w-64 p-4 bg-gray-100 text-gray-900 sticky top-0">Select an element to edit</div>;

  const updateStyles = (newStyles) => {
    setStyles((prevStyles) => {
      const updatedStyles = { ...prevStyles, ...newStyles };
      updateElement(selectedElement.id, { styles: updatedStyles });
      return updatedStyles;
    });
  };

  const updateContent = () => {
    updateElement(selectedElement.id, { content: newContent });
  };

  const updateHrefValue = () => {
    updateElement(selectedElement.id, { href });
  };

  const handleDeleteElement = () => {
    deleteElement(selectedElement.id);
  };

  return (
    <div className="w-full md:w-64 p-4 bg-gray-100 text-gray-900 sticky top-0 overflow-y-auto h-screen">
      <h3 className="text-lg font-bold mb-4">Edit Element</h3>

      <label className="block text-sm font-medium text-gray-700">Content:</label>
      {selectedElement.type === 'image' ? (
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter image URL"
        />
      ) : (
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows="3"
        />
      )}
      <button
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mb-4 w-full"
        onClick={updateContent}
      >
        Save Content
      </button>

      {selectedElement.type === 'link' && (
        <>
          <label className="block text-sm font-medium text-gray-700">URL (href):</label>
          <input
            type="url"
            value={href}
            onChange={(e) => setHref(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="https://example.com"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 w-full"
            onClick={updateHrefValue}
          >
            Save URL
          </button>
        </>
      )}

      <h4 className="text-md font-bold mb-2">Styles:</h4>

      <label className="block text-sm font-medium text-gray-700">Font Size:</label>
      <input
        type="number"
        value={parseInt(styles.fontSize) || ''}
        onChange={(e) => updateStyles({ fontSize: `${e.target.value}px` })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 16"
      />

      <label className="block text-sm font-medium text-gray-700">Width:</label>
      <input
        type="number"
        value={parseInt(styles.width) || ''}
        onChange={(e) => updateStyles({ width: `${e.target.value}px` })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 100"
      />

      <label className="block text-sm font-medium text-gray-700">Height:</label>
      <input
        type="number"
        value={parseInt(styles.height) || ''}
        onChange={(e) => updateStyles({ height: `${e.target.value}px` })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 100"
      />

      <label className="block text-sm font-medium text-gray-700">Color:</label>
      <input
        type="color"
        value={styles.color || '#000000'}
        onChange={(e) => updateStyles({ color: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block text-sm font-medium text-gray-700">Background Color:</label>
      <input
        type="color"
        value={styles.backgroundColor || '#ffffff'}
        onChange={(e) => updateStyles({ backgroundColor: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block text-sm font-medium text-gray-700">Flex:</label>
      <select
        value={styles.display === 'flex' ? 'flex' : 'none'}
        onChange={(e) => updateStyles({ display: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="none">None</option>
        <option value="flex">Flex</option>
      </select>

      {styles.display === 'flex' && (
        <>
          <label className="block text-sm font-medium text-gray-700">Flex Direction:</label>
          <select
            value={styles.flexDirection || 'row'}
            onChange={(e) => updateStyles({ flexDirection: e.target.value })}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
          </select>

          <label className="block text-sm font-medium text-gray-700">Justify Content:</label>
          <select
            value={styles.justifyContent || 'flex-start'}
            onChange={(e) => updateStyles({ justifyContent: e.target.value })}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="flex-start">Start</option>
            <option value="center">Center</option>
            <option value="flex-end">End</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
          </select>

          <label className="block text-sm font-medium text-gray-700">Align Items:</label>
          <select
            value={styles.alignItems || 'stretch'}
            onChange={(e) => updateStyles({ alignItems: e.target.value })}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="stretch">Stretch</option>
            <option value="flex-start">Start</option>
            <option value="center">Center</option>
            <option value="flex-end">End</option>
          </select>
        </>
      )}

      <label className="block text-sm font-medium text-gray-700">Grid:</label>
      <select
        value={styles.display === 'grid' ? 'grid' : 'none'}
        onChange={(e) => updateStyles({ display: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="none">None</option>
        <option value="grid">Grid</option>
      </select>

      {styles.display === 'grid' && (
        <>
          <label className="block text-sm font-medium text-gray-700">Grid Template Columns:</label>
          <input
            type="text"
            value={styles.gridTemplateColumns || ''}
            onChange={(e) => updateStyles({ gridTemplateColumns: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            placeholder="e.g., repeat(auto-fill, minmax(100px, 1fr))"
          />

          <label className="block text-sm font-medium text-gray-700">Grid Template Rows:</label>
          <input
            type="text"
            value={styles.gridTemplateRows || ''}
            onChange={(e) => updateStyles({ gridTemplateRows: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            placeholder="e.g., auto"
          />

          <label className="block text-sm font-medium text-gray-700">Grid Gap:</label>
          <input
            type="text"
            value={styles.gridGap || ''}
            onChange={(e) => updateStyles({ gridGap: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            placeholder="e.g., 10px"
          />
        </>
      )}

      <button
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
        onClick={handleDeleteElement}
      >
        Delete Element
      </button>
    </div>
  );
}

export default PropertyPanel;
