import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(prev => !prev);

    return (
        <div className="relative flex-1 flex items-center justify-end">
            <button
                className="md:hidden p-2 rounded-md text-xl text-gray-700 hover:text-[#FF8C42] transition-colors"
                onClick={toggleNavbar}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <nav
                id="main-nav"
                className={`${isOpen ? 'block' : 'hidden'} w-64 absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md z-50 md:static md:block md:shadow-none md:bg-transparent md:w-auto md:z-auto`}
                aria-hidden={!isOpen && 'true'}
            >
                <ul className="flex flex-col gap-1 p-4 md:p-0 md:flex-row md:items-center md:gap-8">
                    <li>
                        <a className="block py-2 px-3 rounded-md text-gray-700 hover:text-[#FF8C42] hover:bg-orange-50 md:hover:bg-transparent transition-colors md:p-0 whitespace-nowrap" href="expertise">
                            Expertise
                        </a>
                    </li>
                    <li>
                        <a className="block py-2 px-3 rounded-md text-gray-700 hover:text-[#FF8C42] hover:bg-orange-50 md:hover:bg-transparent transition-colors md:p-0 whitespace-nowrap" href="industries">
                            Industries
                        </a>
                    </li>
                    <li>
                        <a className="block py-2 px-3 rounded-md text-gray-700 hover:text-[#FF8C42] hover:bg-orange-50 md:hover:bg-transparent transition-colors md:p-0 whitespace-nowrap" href="projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="block py-2 px-3 rounded-md text-gray-700 hover:text-[#FF8C42] hover:bg-orange-50 md:hover:bg-transparent transition-colors md:p-0 whitespace-nowrap" href="about">
                            About Us
                        </a>
                    </li>
           
                    <li>
                        <a className="inline-block w-full md:w-auto text-center bg-[#FF8C42] hover:bg-[#ff7a28] text-white px-6 py-2.5 rounded-md transition-colors font-medium whitespace-nowrap" href="contact">
                            Get in Touch
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}