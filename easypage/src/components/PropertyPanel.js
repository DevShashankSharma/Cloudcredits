import React, { useState, useEffect } from 'react';

function PropertyPanel({ selectedElement, updateElement }) {
  const [newContent, setNewContent] = useState(selectedElement?.content || '');
  const [styles, setStyles] = useState(selectedElement?.styles || {});
  const [href, setHref] = useState(selectedElement?.href || '');

  useEffect(() => {
    setNewContent(selectedElement?.content || '');
    setStyles(selectedElement?.styles || {});
    setHref(selectedElement?.href || '');
  }, [selectedElement]);

  if (!selectedElement) return <div className="w-64 p-4 bg-gray-100 text-gray-900 sticky top-0">Select an element to edit</div>;


  const updateStyles = (newStyles) => {
    setStyles(prevStyles => {
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

  return (
    <div className="w-64 p-4 bg-gray-100 text-gray-900 sticky top-0 overflow-y-auto h-screen">
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

      <label className="block text-sm font-medium text-gray-700">Font Weight:</label>
      <select
        value={styles.fontWeight || 'normal'}
        onChange={(e) => updateStyles({ fontWeight: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        <option value="lighter">Lighter</option>
      </select>

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

      <label className="block text-sm font-medium text-gray-700">Text Align:</label>
      <select
        value={styles.textAlign || 'left'}
        onChange={(e) => updateStyles({ textAlign: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
        <option value="justify">Justify</option>
      </select>

      <label className="block text-sm font-medium text-gray-700">Text Transform:</label>
      <select
        value={styles.textTransform || 'none'}
        onChange={(e) => updateStyles({ textTransform: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="none">None</option>
        <option value="capitalize">Capitalize</option>
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
      </select>

      <label className="block text-sm font-medium text-gray-700">Padding:</label>
      <input
        type="number"
        value={parseInt(styles.padding) || ''}
        onChange={(e) => updateStyles({ padding: `${e.target.value}px` })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 10"
      />

      <label className="block text-sm font-medium text-gray-700">Margin:</label>
      <input
        type="number"
        value={parseInt(styles.margin) || ''}
        onChange={(e) => updateStyles({ margin: `${e.target.value}px` })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 10"
      />

      <label className="block text-sm font-medium text-gray-700">Border Radius:</label>
      <input
        type="number"
        value={parseInt(styles.borderRadius) || ''}
        onChange={(e) => updateStyles({ borderRadius: `${e.target.value}px` })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 5"
      />

      <label className="block text-sm font-medium text-gray-700">Box Shadow:</label>
      <input
        type="text"
        value={styles.boxShadow || 'none'}
        onChange={(e) => updateStyles({ boxShadow: e.target.value })}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 0px 4px 6px #000000"
      />

      {/* New Width and Height Inputs */}
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
    </div>
  );
}

export default PropertyPanel;
