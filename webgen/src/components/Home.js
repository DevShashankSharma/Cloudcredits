import React from 'react';
import { Link } from 'react-router-dom';
import FeatureSection from './Home/FeatureSection';
import HeroSection from './Home/HeroSection';
import TemplatePreviews from './Home/TemplatePreviewSection';
import Testimonials from './Home/TestimonialSection';

function HomePage() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeatureSection />

            {/* Template Previews Section */}
            <TemplatePreviews />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-teal-500 to-green-500 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Create Your Website?</h2>
                <Link to="/templates">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-teal-700 font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
                        Get Started Now
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default HomePage;
