import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const MyProjects = ({ darkMode }) => {
  // Hardcoded projects for demonstration
  const projects = [
    { 
      title: "Project 1",
      desc: "This is a description for Project 1.",
      tag: "Portfolio",
      html: "<h1>Hello World</h1>",
      css: "h1 { color: red; }",
      js: "console.log('Hello World');",
    },
    { 
      title: "Project 2",
      tag: "Portfolio",
      desc: "This is a description for Project 2.",
      html: "<p>Sample text</p>",
      css: "p { font-size: 16px; }",
      js: "alert('Sample Project');",
    },
    { 
      title: "Project 3",
      tag: "Portfolio",
      desc: "This is a description for Project 3.",
      html: "<div>Another Project</div>",
      css: "div { padding: 10px; }",
      js: "console.log('Another Project');",
    },
  ];

  const projectCardStyles = darkMode
    ? "bg-gray-800 text-white shadow-lg"
    : "bg-white text-gray-900 shadow-md";

  return (
    <div
      className={`min-h-screen mt-14 px-4 py-8 xs:p-8 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
    >
      <h1
        className={`text-2xl xs:text-4xl font-extrabold mb-8 tracking-wide text-center ${darkMode ? "text-white" : "text-gray-900"
          }`}
      >
        My Projects
      </h1>
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p
            className={`text-xl ${darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
          >
            No projects found. Start by adding a new project!
          </p>
          <Link
            to={"/codeeditor"}
            state={{ template: {} }}
            className={`flex items-center text-sm xs:text-lg px-3 xs:px-6 py-3 rounded-full ${darkMode
              ? "bg-gradient-to-r from-yellow-500 to-pink-500 text-black"
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
          >
            <FaPlus className="mr-2" />
            Add New Project
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative px-3 py-6 xs:p-6 rounded-lg overflow-hidden ${projectCardStyles} transition-transform duration-300 transform hover:scale-105 group`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <h2 className="text-xl xs:text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-sm mb-6">{project.desc}</p>
              <Link
                to={`/codeeditor`}
                state={{ template: project, index: index }}
                className={`px-4 py-2 text-sm xxs:text-base xs:text-lg rounded-full inline-block ${darkMode
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-black"
                  : "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                  } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110`}
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      )}
      {projects.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Link
            to={"/codeeditor"}
            state={{ template: {} }}
            className={`flex items-center text-sm xs:text-lg px-3 xs:px-6 py-3 rounded-full ${darkMode
              ? "bg-gradient-to-r from-yellow-500 to-pink-500 text-black"
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
          >
            <FaPlus className="mr-2" />
            Add New Project
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
