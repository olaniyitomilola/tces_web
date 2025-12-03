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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}