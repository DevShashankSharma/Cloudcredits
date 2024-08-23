import { Link } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Loading SVG
import { FaArrowLeft } from 'react-icons/fa';

function ComingSoon({ darkMode }) {
    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
            <div className="text-center">
                <AiOutlineLoading3Quarters className={`text-6xl ${darkMode ? 'text-gray-200' : 'text-gray-700'} animate-spin mb-4 w-full`} />
                <h1 className="text-2xl font-bold mb-2">Working on this page</h1>
                <p className="text-lg mb-6">We are currently working on the content for this page. Please check back later.</p>
                <p className="text-lg mb-6">Not enough data to display this template.</p>
                <Link
                    to="/templates"
                    className={`inline-flex items-center px-6 py-2 rounded-lg bg-gradient-to-r ${darkMode ? 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700' : 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'} text-white font-semibold shadow-lg transition-transform duration-300 ease-in-out`}
                >
                    <FaArrowLeft className="mr-2" /> Go Back
                </Link>
            </div>
        </div>
    );
}

export default ComingSoon;
