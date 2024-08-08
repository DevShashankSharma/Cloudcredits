import React from 'react';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to WebGen</h1>
            <p className="text-xl mb-8">Create dynamic websites easily.</p>
            <button className="bg-yellow-500 text-blue-500 px-4 py-2 rounded hover:bg-yellow-400">Get Started</button>
        </div>
    );
}

export default HomePage;
