import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center shadow">
            <div className="text-lg font-bold">WebGen</div>
            <nav className="space-x-4">
                <Link to="/" className="hover:text-yellow-500">Home</Link>
                <Link to="/templates" className="hover:text-yellow-500">Templates</Link>
                <Link to="/editor" className="hover:text-yellow-500">Editor</Link>
                <Link to="/deployment" className="hover:text-yellow-500">Deployment</Link>
            </nav>
        </header>
    );
}

export default Header;
