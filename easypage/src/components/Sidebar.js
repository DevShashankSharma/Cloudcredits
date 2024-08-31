import React from 'react';

function Sidebar({ addElement }) {
  const elements = [
    { type: 'text', label: 'Text' },
    { type: 'image', label: 'Image' },
    { type: 'button', label: 'Button' },
    { type: 'section', label: 'Section' },
    { type: 'header', label: 'Header' },
    { type: 'subheader', label: 'Subheader' },
    { type: 'paragraph', label: 'Paragraph' },
    { type: 'link', label: 'Link' },
    { type: 'divider', label: 'Divider' },
    { type: 'card', label: 'Card' },
    { type: 'list', label: 'List' },
    { type: 'video', label: 'Video' },
    { type: 'icon', label: 'Icon' },
  ];

  return (
    <div className="w-64 p-4 bg-gray-200 h-screen sticky top-0 overflow-y-auto shadow-lg">
      <h3 className="text-lg font-bold mb-4">Add Elements</h3>
      <div className="flex flex-col space-y-2">
        {elements.map((el) => (
          <button
            key={el.type}
            onClick={() => addElement(el.type)}
            className="flex items-center p-3 border rounded-lg bg-gray-100 hover:bg-gray-300 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* Optional: Add icons here if desired */}
            <span className="text-sm font-medium">{el.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
