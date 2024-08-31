import React from 'react';

function Canvas({ elements, setSelectedElement, theme }) {
  return (
    <div className={`flex-grow shadow-lg m-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {elements.map(el => (
        <div
          key={el.id}
          className="mb-4 p-4 border rounded-lg cursor-pointer hover:shadow-xl"
          style={{ ...el.styles, color: el.styles.color || 'inherit' }}
          onClick={() => setSelectedElement(el)}
        >
          {el.type === 'text' && (
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setSelectedElement({ ...el, content: e.target.innerText })}
            >
              {el.content}
            </p>
          )}
          {el.type === 'image' && (
            <div className="max-w-full h-auto">
              <img src={el.content} alt="User-provided" className="max-w-full h-auto" />
            </div>
          )}
          {el.type === 'button' && (
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              {el.content}
            </button>
          )}
          {el.type === 'section' && (
            <div className="bg-gray-200 p-4 rounded">
              {el.content}
            </div>
          )}
          {el.type === 'header' && (
            <h1>{el.content}</h1>
          )}
          {el.type === 'subheader' && (
            <h2>{el.content}</h2>
          )}
          {el.type === 'paragraph' && (
            <p>{el.content}</p>
          )}
          {el.type === 'link' && (
            <a
              href={el.href || '#'}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
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
            <hr />
          )}
          {el.type === 'card' && (
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">{el.content}</h3>
              <p>This is a card. You can customize its content.</p>
            </div>
          )}
          {el.type === 'list' && (
            <ul className="list-disc pl-5">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          )}
          {el.type === 'video' && (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={el.content}
                className="w-full h-full"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded Video"
              ></iframe>
            </div>
          )}
          {el.type === 'icon' && (
            <i className={`fas ${el.content} text-4xl`}></i>
          )}
        </div>
      ))}
    </div>
  );
}

export default Canvas;
