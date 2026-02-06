import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(prev => !prev);

    return (
        <div className="relative flex-1 flex items-center justify-end">
            <button
                className="md:hidden p-2 rounded-md text-xl"
                onClick={toggleNavbar}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <nav
                id="main-nav"
                className={`${isOpen ? 'block' : 'hidden'} w-full absolute left-0 right-0 mt-2 bg-white shadow-md rounded-md md:static md:block md:shadow-none md:bg-transparent md:w-auto`}
                aria-hidden={!isOpen && 'true'}
            >
                <ul className="flex flex-col gap-2 p-4 md:p-0 md:flex-row md:items-center justify-between">
                    <li><a className="hover:underline text-sm md:text-base" href="#expertise">Expertise</a></li>
                    <li><a className="hover:underline text-sm md:text-base" href="#industries">Industries</a></li>
                    <li><a className="hover:underline text-sm md:text-base" href="#projects">Projects</a></li>
                    <li><a className="hover:underline text-sm md:text-base" href="#story">Our Story</a></li>
                    <li><a className="hover:underline text-sm md:text-base" href="#news">News</a></li>
                    <li><a className="btn-primary text-sm md:text-base" href="#contact">Get in Touch</a></li>
                </ul>
            </nav>
        </div>
    );
}
