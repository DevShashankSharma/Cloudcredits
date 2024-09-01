import React, { useState } from 'react';

function Canvas({ sections, setSelectedElement, updateElement, updateSection, theme }) {
  const [editingSectionId, setEditingSectionId] = useState(null);
  const [sectionTitle, setSectionTitle] = useState('');
  const [sectionStyles, setSectionStyles] = useState({});
  const [selectedElement, setSelectedElementState] = useState(null);

  // Handle changes to section title
  const handleSectionTitleChange = (id, newTitle) => {
    updateSection(id, { title: newTitle });
    setEditingSectionId(null);
  };

  // Handle changes to section styles
  const handleSectionStyleChange = (id, styles) => {
    updateSection(id, { styles });
    setSectionStyles({});
    setEditingSectionId(null);
  };

  // Handle changes to element content
  const handleElementContentChange = (el, newContent) => {
    updateElement(el.id, { content: newContent });
  };

  // Handle changes to element styles
  const handleElementStyleChange = (el, newStyles) => {
    updateElement(el.id, { styles: { ...el.styles, ...newStyles } });
  };

  return (
    <div className={`flex-grow shadow-lg m-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {sections.map(section => (
        <div
          key={section.id}
          className="mb-8 p-4 border rounded-lg relative"
          style={editingSectionId === section.id ? { ...section.styles, backgroundColor: '#f0f0f0' } : section.styles}
        >
          {editingSectionId === section.id ? (
            <div className="mb-4">
              <input
                type="text"
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter section title"
              />
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2">Section Styles</h4>
                <label className="block mb-2">
                  Background Color:
                  <input
                    type="color"
                    value={sectionStyles.backgroundColor || '#ffffff'}
                    onChange={(e) => setSectionStyles({ ...sectionStyles, backgroundColor: e.target.value })}
                    className="ml-2 border rounded"
                  />
                </label>
                <label className="block mb-2">
                  Padding:
                  <input
                    type="text"
                    value={sectionStyles.padding || '0'}
                    onChange={(e) => setSectionStyles({ ...sectionStyles, padding: e.target.value })}
                    className="ml-2 border rounded"
                    placeholder="e.g. 10px"
                  />
                </label>
                <label className="block mb-2">
                  Margin:
                  <input
                    type="text"
                    value={sectionStyles.margin || '0'}
                    onChange={(e) => setSectionStyles({ ...sectionStyles, margin: e.target.value })}
                    className="ml-2 border rounded"
                    placeholder="e.g. 10px"
                  />
                </label>
                <label className="block mb-2">
                  Border:
                  <input
                    type="text"
                    value={sectionStyles.border || 'none'}
                    onChange={(e) => setSectionStyles({ ...sectionStyles, border: e.target.value })}
                    className="ml-2 border rounded"
                    placeholder="e.g. 1px solid black"
                  />
                </label>
                <button
                  onClick={() => handleSectionStyleChange(section.id, sectionStyles)}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
                >
                  Save Styles
                </button>
              </div>
              <button
                onClick={() => handleSectionTitleChange(section.id, sectionTitle)}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 w-full"
              >
                Save Title
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                {section.title}
                <button
                  onClick={() => {
                    setEditingSectionId(section.id);
                    setSectionTitle(section.title);
                    setSectionStyles(section.styles);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
              </h2>
            </>
          )}
          {section.elements.map(el => (
            <div
              key={el.id}
              className="mb-4 p-4 border rounded-lg cursor-pointer hover:shadow-xl relative"
              style={{ ...el.styles, color: el.styles.color || 'inherit' }}
              onClick={() => {
                setSelectedElementState(el);
                setSelectedElement(el);
              }}
            >
              {selectedElement && selectedElement.id === el.id && (
                <div className="absolute top-0 right-0 p-2 bg-white shadow-lg rounded-lg">
                  <h4 className="text-md font-semibold mb-2">Element Styles</h4>
                  <label className="block mb-2">
                    Color:
                    <input
                      type="color"
                      value={el.styles.color || '#000000'}
                      onChange={(e) => handleElementStyleChange(el, { color: e.target.value })}
                      className="ml-2 border rounded"
                    />
                  </label>
                  <label className="block mb-2">
                    Background Color:
                    <input
                      type="color"
                      value={el.styles.backgroundColor || '#ffffff'}
                      onChange={(e) => handleElementStyleChange(el, { backgroundColor: e.target.value })}
                      className="ml-2 border rounded"
                    />
                  </label>
                  <label className="block mb-2">
                    Padding:
                    <input
                      type="text"
                      value={el.styles.padding || '0'}
                      onChange={(e) => handleElementStyleChange(el, { padding: e.target.value })}
                      className="ml-2 border rounded"
                      placeholder="e.g. 10px"
                    />
                  </label>
                  <label className="block mb-2">
                    Margin:
                    <input
                      type="text"
                      value={el.styles.margin || '0'}
                      onChange={(e) => handleElementStyleChange(el, { margin: e.target.value })}
                      className="ml-2 border rounded"
                      placeholder="e.g. 10px"
                    />
                  </label>
                  <label className="block mb-2">
                    Border:
                    <input
                      type="text"
                      value={el.styles.border || 'none'}
                      onChange={(e) => handleElementStyleChange(el, { border: e.target.value })}
                      className="ml-2 border rounded"
                      placeholder="e.g. 1px solid black"
                    />
                  </label>
                </div>
              )}
              {el.type === 'text' && (
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleElementContentChange(el, e.target.innerText)}
                  style={el.styles}
                >
                  {el.content}
                </p>
              )}
              {el.type === 'image' && (
                <div className="max-w-full h-auto">
                  <img src={el.content} alt="User-provided" className="max-w-full h-auto" style={el.styles} />
                </div>
              )}
              {el.type === 'button' && (
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  style={el.styles}
                >
                  {el.content}
                </button>
              )}
              {el.type === 'header' && (
                <h1 style={el.styles}>{el.content}</h1>
              )}
              {el.type === 'subheader' && (
                <h2 style={el.styles}>{el.content}</h2>
              )}
              {el.type === 'paragraph' && (
                <p style={el.styles}>{el.content}</p>
              )}
              {el.type === 'link' && (
                <a
                  href={el.href || '#'}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={el.styles}
                  onClick={(e) => {
                    if (!el.href) {
                      e.preventDefault();
                      alert('Please provide a valid URL for this link.');
                    }
                  }}
                >
                  {el.content}
                </a>
              )}
              {el.type === 'divider' && (
                <hr style={el.styles} />
              )}
              {el.type === 'card' && (
                <div className="border p-4 rounded-lg shadow-lg" style={el.styles}>
                  <h3 className="text-lg font-semibold mb-2">{el.content.title}</h3>
                  <p>{el.content.body}</p>
                </div>
              )}
              {el.type === 'form' && (
                <form style={el.styles}>
                  <input
                    type="text"
                    placeholder="Enter text"
                    className="mb-2 p-2 border rounded"
                  />
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                  </button>
                </form>
              )}
              {el.type === 'table' && (
                <table className="min-w-full border" style={el.styles}>
                  <thead>
                    <tr>
                      {el.content.headers.map((header, idx) => (
                        <th key={idx} className="border p-2">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {el.content.rows.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, idx) => (
                          <td key={idx} className="border p-2">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Canvas;
