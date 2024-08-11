import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const controlHeader = () => {
            if (window.scrollY > scrollPosition) {
                headerRef.current.style.transform = 'translateY(-100%)';
            } else {
                headerRef.current.style.transform = 'translateY(0)';
            }
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', controlHeader);
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [scrollPosition]);  // No need to add controlHeader as it's defined inside useEffect

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6 flex justify-between items-center shadow-lg transition-transform duration-300 opacity-85"
            style={{ fontFamily: '"Poppins", sans-serif' }}
        >
            <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                WebGen
            </div>
            <nav className="space-x-8 text-lg md:text-xl">
                <Link
                    to="/"
                    className={`hover:text-yellow-400 ${location.pathname === '/' ? 'border-b-2 border-yellow-400' : ''
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/templates"
                    className={`hover:text-yellow-400 ${location.pathname === '/templates' ? 'border-b-2 border-yellow-400' : ''
                        }`}
                >
                    Templates
                </Link>
                <Link
                    to="/editor"
                    className={`hover:text-yellow-400 ${location.pathname === '/editor' ? 'border-b-2 border-yellow-400' : ''
                        }`}
                >
                    Editor
                </Link>
                <Link
                    to="/deployment"
                    className={`hover:text-yellow-400 ${location.pathname === '/deployment' ? 'border-b-2 border-yellow-400' : ''
                        }`}
                >
                    Deployment
                </Link>
                <Link
                    to="/documentation"
                    className={`hover:text-yellow-400 ${location.pathname === '/documentation' ? 'border-b-2 border-yellow-400' : ''
                        }`}
                >
                    Documentation
                </Link>
            </nav>
        </header>
    );
}

export default Header;
