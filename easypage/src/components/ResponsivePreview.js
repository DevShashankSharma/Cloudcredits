import React, { useState } from 'react';

function ResponsivePreview() {
  const [view, setView] = useState('desktop');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100">
      <div className="flex gap-4 mb-4">
        <button
          className={`py-2 px-4 rounded font-bold ${
            view === 'desktop' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
          }`}
          onClick={() => handleViewChange('desktop')}
        >
          Desktop
        </button>
        <button
          className={`py-2 px-4 rounded font-bold ${
            view === 'tablet' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
          }`}
          onClick={() => handleViewChange('tablet')}
        >
          Tablet
        </button>
        <button
          className={`py-2 px-4 rounded font-bold ${
            view === 'mobile' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
          }`}
          onClick={() => handleViewChange('mobile')}
        >
          Mobile
        </button>
      </div>

      <div
        className={`w-full ${view === 'desktop' ? 'max-w-screen-lg' : view === 'tablet' ? 'max-w-screen-md' : 'max-w-screen-sm'} p-4 bg-white border border-gray-200`}
      >
        {/* This is where you would render the preview of your content */}
        <p>Current view: {view}</p>
      </div>
    </div>
  );
}

export default ResponsivePreview;
