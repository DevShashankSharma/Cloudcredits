import React from 'react';

function Community() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-gray-800">Community</h1>
                <p className="text-gray-600 mt-4">Join the WebBasics community to share ideas, ask questions, and contribute.</p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Forums</h2>
                    <p className="text-gray-600 mt-2">Engage with other developers in our community forums.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Contribute</h2>
                    <p className="text-gray-600 mt-2">Learn how you can contribute to the WebBasics project.</p>
                </div>
            </div>
        </section>
    );
}

export default Community;
