import React from 'react';

function ResponsivePreview({ sections, theme }) {
  return (
    <div className={`flex items-center space-x-2 p-4 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'}`}>
      <button className="px-2 py-1 border rounded-md border-gray-500">Mobile</button>
      <button className="px-2 py-1 border rounded-md border-gray-500">Tablet</button>
      <button className="px-2 py-1 border rounded-md border-gray-500">Desktop</button>
    </div>
  );
}

export default ResponsivePreview;
