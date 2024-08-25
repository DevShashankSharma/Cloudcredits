import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi"; // Importing search icon 
import { motion } from "framer-motion"; // For animations
import TemplateCard from "./TemplateCard";
import ComingSoonTemplates from "./CommingSoonTemplate";
import SpecificContentSection from "./SpecificContentSection";
import { allTemplates } from "./templates";

function TemplatePage({ darkMode }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [viewMore, setViewMore] = useState(false);

    // Filtering based on search query and selected category
    const filteredTemplates = allTemplates.filter((template) => {
        const matchesSearch = template.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesCategory =
            category === "All" || template.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div
            className={`min-h-screen p-8 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
                }`}
        >
            <div className="container mx-auto">
                {/* Header */}
                <section className={`py-10 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                    <div className="container mx-auto text-center">
                        <motion.h1
                            className={`text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Our Templates
                        </motion.h1>
                        <motion.p
                            className={`text-xl mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Discover the perfect template that suits your project needs.
                        </motion.p>
                        <motion.p
                            className={`text-md mt-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Choose from a wide range of creative, responsive, and optimized
                            templates to help you bring your ideas to life effortlessly.
                        </motion.p>
                    </div>
                </section>

                {/* Search Box and Filters */}
                <div className="flex flex-wrap justify-between items-center mt-8 mb-8 space-y-4 md:space-y-0">

                    {/* Search Box */}
                    <motion.div
                        className="relative w-full max-w-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`
                                w-full p-4 pl-12 pr-12 rounded-lg transition-all duration-300 shadow-lg 
                            focus:outline-none focus:ring-4 focus:${darkMode ? "ring-yellow-500" : "ring-blue-500"} 
                            ${darkMode ? "bg-gray-800 text-gray-200 placeholder-gray-400" : "bg-white text-gray-900 placeholder-gray-500"}  `
                            }
                        />
                        <FiSearch
                            className={`
                                absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors 
                                duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`
                            }
                        />

                        {/* Cross Icon to clear search query */}
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}  // Clear search input when clicked
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none"
                            >
                                <FiX className="w-5 h-5" />
                            </button>
                        )}
                    </motion.div>

                    {/* Filters */}
                    <motion.select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={`ml-0 md:ml-4 p-4 rounded-lg transition-all duration-300 shadow-lg 
                        focus:outline-none focus:ring-4 focus:${darkMode ? "ring-yellow-500" : "ring-blue-500"
                            } 
                        ${darkMode
                                ? "bg-gray-800 text-gray-200"
                                : "bg-white text-gray-900"
                            } 
                        hover:shadow-2xl hover:scale-105`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <option value="All">All Categories</option>
                        <option value="Personal">Personal</option>
                        <option value="Business">Business</option>
                        <option value="Creative">Creative</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                        <option value="Charity">Charity</option>
                        <option value="Event">Event</option>
                        <option value="Tech">Tech</option>
                    </motion.select>
                </div>

                {/* Template Cards */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {filteredTemplates.length === 0 ? (
                        <motion.div
                            className="flex flex-col items-center justify-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <svg
                                className="w-16 h-16 mb-4 text-gray-400 dark:text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M12 16h.01"
                                />
                            </svg>
                            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                No templates found
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Try adjusting your search criteria or filters.
                            </p>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTemplates
                                .slice(0, viewMore ? filteredTemplates.length : 6)
                                .map((template) => (
                                    <motion.div
                                        key={template.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <TemplateCard
                                            template={template}
                                            darkMode={darkMode}
                                        />
                                    </motion.div>
                                ))}
                        </div>
                    )}

                    {/* View More Button */}
                    {filteredTemplates.length > 6 && (
                        <div className="flex justify-center mt-12">
                            <motion.button
                                className={`px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 ${darkMode
                                    ? "bg-yellow-500 text-black"
                                    : "bg-blue-600 text-white"
                                    } hover:bg-opacity-75`}
                                onClick={() => setViewMore(!viewMore)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {viewMore ? "View Less" : "View More"}
                            </motion.button>
                        </div>
                    )}

                    {/* Coming Soon Templates Section */}
                    <ComingSoonTemplates darkMode={darkMode} />

                    {/* Specific Content Section */}
                    <SpecificContentSection darkMode={darkMode} />
                </motion.div>
            </div>
        </div>
    );
}

export default TemplatePage;
