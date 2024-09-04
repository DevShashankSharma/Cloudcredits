import React from 'react';

function Features({ isDarkMode }) {
  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition duration-300`}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">Our Standout Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className={`text-center p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} transform hover:scale-105 transition duration-500 animate-fade-in-up`}>
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h4l3 9l4-18l3 9h4"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Easy Drag-and-Drop</h3>
            <p>Build your pages effortlessly with our intuitive drag-and-drop editor.</p>
          </div>

          <div className={`text-center p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} transform hover:scale-105 transition duration-500 animate-fade-in-up delay-200`}>
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Responsive Design</h3>
            <p>Your website will look great on any device, automatically adapting to all screen sizes.</p>
          </div>

          <div className={`text-center p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} transform hover:scale-105 transition duration-500 animate-fade-in-up delay-400`}>
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Customizable Templates</h3>
            <p>Choose from a variety of pre-designed templates to get started quickly and easily.</p>
          </div>

          <div className={`text-center p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} transform hover:scale-105 transition duration-500 animate-fade-in-up delay-600`}>
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 7v-8"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Powerful Integrations</h3>
            <p>Seamlessly integrate with popular tools and services to enhance your website's functionality.</p>
          </div>

          <div className={`text-center p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} transform hover:scale-105 transition duration-500 animate-fade-in-up delay-800`}>
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Advanced SEO</h3>
            <p>Optimize your website for search engines and improve your online visibility.</p>
          </div>

          <div className={`text-center p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} transform hover:scale-105 transition duration-500 animate-fade-in-up delay-1000`}>
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h6l7 7v11h-6V10H3V3z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Continuous Updates</h3>
            <p>Stay ahead with regular updates and new features that keep your website up to date.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
