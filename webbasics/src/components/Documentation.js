import React from 'react';

function Documentation() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-gray-800">Documentation</h1>
                <p className="text-gray-600 mt-4">Get started with WebBasics by following our detailed guides and tutorials.</p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Getting Started</h2>
                    <p className="text-gray-600 mt-2">Learn how to install WebBasics and create your first project.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Tools and Features</h2>
                    <p className="text-gray-600 mt-2">Explore the core tools and features that WebBasics offers.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Advanced Topics</h2>
                    <p className="text-gray-600 mt-2">Dive deeper into customization and advanced workflows.</p>
                </div>
            </div>
        </section>
    );
}

export default Documentation;
