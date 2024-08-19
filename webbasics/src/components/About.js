import React from 'react';

function About() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-gray-800">About WebBasics</h1>
                <p className="text-gray-600 mt-4">WebBasics is a project aimed at providing essential tools for web development. Our mission is to simplify the development process and make powerful tools accessible to everyone.</p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
                    <p className="text-gray-600 mt-2">Meet the developers and contributors behind WebBasics.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                    <p className="text-gray-600 mt-2">Need help or have feedback? Get in touch with our support team.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
