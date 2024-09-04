import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction({ isDarkMode }) {
  return (
    <section className={`py-16 ${isDarkMode ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'} text-center`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Ready to Start Your Journey?</h2>
        <p className="mb-8 animate-fade-in-up delay-200">Join thousands of others using WebStart to build their online presence.</p>
        <Link to="/create" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition animate-fade-in-up delay-400">
          Get Started Now
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
