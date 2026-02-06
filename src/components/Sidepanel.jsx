import React, { useState } from 'react';

export default function Sidepanel() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidepanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidepanel ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-btn" onClick={toggleSidepanel}>
                {isOpen ? '✕' : '☰'}
            </button>
            
            <nav className="sidepanel-nav">
                <ul>
                    <li><a href="#Expertise">Expertise</a></li>
                    <li><a href="#Industries">Industries</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#story">Our Story</a></li>
                    <li><a href="#news">News</a></li>

                    <li><a href="#contact">Get in Touch</a></li>

                </ul>
            </nav>
        </div>
    );
}