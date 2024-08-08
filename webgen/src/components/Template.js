import React from 'react';

function TemplatePage() {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Choose a Template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Template items here */}
                <div className="bg-white border rounded p-4 shadow hover:shadow-lg transition">
                    <p>Template 1</p>
                </div>
                <div className="bg-white border rounded p-4 shadow hover:shadow-lg transition">
                    <p>Template 2</p>
                </div>
            </div>
        </div>
    );
}

export default TemplatePage;
