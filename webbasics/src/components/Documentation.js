import { motion } from 'framer-motion';
import Template from '../image/Template.png'
import TemplateEdit from '../image/TemplateEdit.png'
import Responsive from '../image/Responsive.png'
import CodeEditor from '../image/CodeEditor.png'
import FeatureEditor from '../image/FeatureEditor.png'
import AdvancedFeature from '../image/AdvacedFeature.png'

const Documentation = ({ darkMode }) => (
    <motion.div
        className={`p-4 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        {/* Introduction Section */}
        <motion.section
            className="container mx-auto text-center py-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-5xl font-extrabold">
                Documentation
            </h1>
            <p className="text-xl mt-4">
                Welcome to the WebBasics documentation. Below you'll find comprehensive guides on how to use our code editor and templates effectively.
            </p>
        </motion.section>

        {/* Code Editor Usage */}
        <motion.section
            className="container mx-auto mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-center">Using the Code Editor</h2>
            <p className="text-lg text-center mt-4">
                Our code editor is a powerful tool for writing and managing your code. Follow these steps to get started:
            </p>

            {/* Setup Code Editor */}
            <div className="mt-12">
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold">1. Setting Up Your Editor</h3>
                    <p className="mt-4">
                        Start by opening the WebBasics application and navigating to the <strong>Code Editor</strong> section. You can access it from the main dashboard or by selecting the 'Code Editor' option from the side menu.
                    </p>
                    <img src={CodeEditor} alt="Code Editor Setup" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>

                {/* Basic Features */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} mt-8 transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold">2. Basic Features</h3>
                    <p className="mt-4">
                        The editor supports syntax highlighting for HTML, CSS, and JavaScript. You can also customize the editor's appearance and behavior by accessing the settings menu.
                    </p>
                    <img src={FeatureEditor} alt="Code Editor Features" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>

                {/* Advanced Usage */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} mt-8 transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold">3. Advanced Usage</h3>
                    <p className="mt-4">
                        Utilize advanced features like real-time linting, code snippets, and custom themes to enhance your coding experience. You can find these options in the editor's settings.
                    </p>
                    <img src={AdvancedFeature} alt="Code Editor Advanced Usage" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>
            </div>
        </motion.section>

        {/* Template Usage */}
        <motion.section
            className="container mx-auto mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-center">Using Templates</h2>
            <p className="text-lg text-center mt-4">
                Templates make it easy to start with pre-designed layouts. Here’s how you can use and customize them:
            </p>

            {/* Accessing Templates */}
            <div className="mt-12">
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold">1. Accessing Templates</h3>
                    <p className="mt-4">
                        Go to the <strong>Templates</strong> section from the main dashboard. Browse through the available templates and select one that suits your project needs.
                    </p>
                    <img src={Template} alt="Template Selection" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>

                {/* Customizing Templates */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} mt-8 transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold">2. Customizing Templates</h3>
                    <p className="mt-4">
                        After selecting a template, you can customize it using the Code Editor. Modify the HTML, CSS, and JavaScript files to match your project’s requirements.
                    </p>
                    <img src={TemplateEdit} alt="Template Customization" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>

                {/* Saving and Previewing */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} mt-8 transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold">3. Saving and Previewing</h3>
                    <p className="mt-4">
                        Save your changes and preview your template to see how it looks in a live environment. Use the preview feature to make adjustments as needed.
                    </p>
                    <img src="https://via.placeholder.com/1200x600?text=Template+Preview" alt="Template Preview" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>
            </div>
        </motion.section>

        {/* Additional Concepts */}
        <motion.section
            className="container mx-auto mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-center">Additional Concepts</h2>
            <p className="text-lg text-center mt-4">
                Learn about additional concepts that enhance your experience with WebBasics.
            </p>

            {/* Responsive Design */}
            <div className="mt-12">
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold">1. Responsive Design</h3>
                    <p className="mt-4">
                        Ensure your templates are responsive by using our built-in responsive design features. Test your design on various screen sizes to guarantee a smooth user experience.
                    </p>
                    <img src={Responsive} alt="Responsive Design" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>

                {/* SEO Optimization */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} mt-8 transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold">2. SEO Optimization</h3>
                    <p className="mt-4">
                        Optimize your site for search engines by following our SEO best practices. Ensure your content is indexed properly and ranks well in search results.
                    </p>
                    <img src="https://via.placeholder.com/1200x600?text=SEO+Optimization" alt="SEO Optimization" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>

                {/* Performance Tips */}
                <motion.div
                    className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} mt-8 transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold">3. Performance Tips</h3>
                    <p className="mt-4">
                        Improve your site’s performance by following our optimization tips. Reduce load times, enhance speed, and provide a better user experience.
                    </p>
                    <img src="https://via.placeholder.com/1200x600?text=Performance+Tips" alt="Performance Tips" className="mt-4 w-full rounded-lg shadow-lg" />
                </motion.div>
            </div>
        </motion.section>
    </motion.div>
);

export default Documentation;
