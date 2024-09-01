import React from 'react';
import {
  FaTextWidth,
  FaImage,
  FaRegDotCircle,
  FaHeading,
  FaParagraph,
  FaLink,
  FaListUl,
  FaClipboardList, // Alternative for form
  FaRegEdit,      // Alternative for input
  FaFileAlt,      // Alternative for textarea
  FaVideo,
  FaAudioDescription
} from 'react-icons/fa';

function Sidebar({ addSection, addElementToSection, sections, theme }) {
  const htmlTags = [
    { type: 'text', label: 'Text', icon: <FaTextWidth /> },
    { type: 'image', label: 'Image', icon: <FaImage /> },
    { type: 'button', label: 'Button', icon: <FaRegDotCircle /> },
    { type: 'header', label: 'Header', icon: <FaHeading /> },
    { type: 'paragraph', label: 'Paragraph', icon: <FaParagraph /> },
    { type: 'link', label: 'Link', icon: <FaLink /> },
    { type: 'list', label: 'List', icon: <FaListUl /> },
    { type: 'form', label: 'Form', icon: <FaClipboardList /> },
    { type: 'input', label: 'Input', icon: <FaRegEdit /> },
    { type: 'textarea', label: 'Textarea', icon: <FaFileAlt /> },
    { type: 'table', label: 'Table', icon: <FaListUl /> },
    { type: 'video', label: 'Video', icon: <FaVideo /> },
    { type: 'audio', label: 'Audio', icon: <FaAudioDescription /> }
  ];

  return (
    <div className={`w-full md:w-64 p-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 border-r border-gray-300 dark:border-gray-700`}>
      <h2 className="text-lg font-bold mb-4">Sidebar</h2>

      <button
        onClick={addSection}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 w-full transition ease-in-out duration-300 transform hover:scale-105 flex items-center justify-center"
      >
        <span className="mr-2">+ Add Section</span>
      </button>

      <h3 className="text-md font-semibold mb-2">Add Element to Section</h3>
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <h4 className="text-sm font-medium mb-2">Section {section.id}</h4>
          {htmlTags.map((tag) => (
            <button
              key={tag.type}
              onClick={() => addElementToSection(section.id, tag.type)}
              className="bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded mb-2 w-full flex items-center transition ease-in-out duration-300 transform hover:scale-105"
            >
              <span className="mr-2 text-lg">{tag.icon}</span>
              <span>{tag.label}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
