import React from 'react';
// import { ReactComponent as FeatureIcon1 } from '../assets/icons/feature1.svg';
// import { ReactComponent as FeatureIcon2 } from '../assets/icons/feature2.svg';
// import { ReactComponent as FeatureIcon3 } from '../assets/icons/feature3.svg';

function Features({ isDarkMode }) {
  return (
    <section className={`py-12 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} transition duration-300`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up">
            {/* <FeatureIcon1 className="w-16 h-16 mx-auto mb-4 text-blue-500" /> */}
            <h3 className="text-xl font-semibold mb-2">Easy Drag-and-Drop</h3>
            <p>Build your pages effortlessly with our drag-and-drop editor.</p>
          </div>
          <div className="text-center animate-fade-in-up delay-200">
            {/* <FeatureIcon2 className="w-16 h-16 mx-auto mb-4 text-blue-500" /> */}
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Your website will look great on any device, automatically.</p>
          </div>
          <div className="text-center animate-fade-in-up delay-400">
            {/* <FeatureIcon3 className="w-16 h-16 mx-auto mb-4 text-blue-500" /> */}
            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
            <p>Choose from a variety of pre-designed templates to get started quickly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
