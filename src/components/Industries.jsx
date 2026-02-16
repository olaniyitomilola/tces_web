import React, { useState } from "react";

// Import your industry images (add these to your assets folder)
import railImg from "../assets/rail.jpg";
import energyImg from "../assets/bess.png";
import roadImg from "../assets/trackmonitoring.gif";
import civilImg from "../assets/civil.jpg";

export default function Industries() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const industries = [
        {
            id: 1,
            title: "Rail",
            image: railImg,
            description: "Delivering precision engineering solutions for railway infrastructure and maintenance.",
            tags: ["Track Survey", "Monitoring", "Maintenance", "Vegetation Management", "Rock Netting"],
        },
        {
            id: 2,
            title: "Energy",
            image: energyImg,
            description: "Powering the future with innovative energy infrastructure solutions.",
            tags: ["Renewables", "Power Grid", "Solar & Wind", "BESS", "Hydro"],
        },
        {
            id: 3,
            title: "Road",
            image: roadImg,
            description: "Building safer, smarter road networks for modern transport needs.",
            tags: ["Highways", "Bridges", "Urban Roads"],
        },
        {
            id: 4,
            title: "Civil",
            image: civilImg,
            description: "Comprehensive civil engineering solutions for complex projects.",
            tags: ["Infrastructure", "Construction", "Development"],
        }
    ];

    return (
        <section className="w-full   py-6 md:py-8">
            <div className="max-w-[1500px] mx-auto">
                <h1 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold text-center py-12 non-animated-gradient !text-white">
                    Sectors we serve.                </h1>

                {/* Desktop Grid - 4 columns */}
                <div className="hidden md:grid md:grid-cols-4 gap-6">
                    {industries.map((industry) => (
                        <div
                            key={industry.id}
                            className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer"
                            onMouseEnter={() => setHoveredCard(industry.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${industry.image})` }}
                            ></div>

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-2xl font-bold mb-4">
                                    {industry.title}
                                </h3>

                                {/* Expanded Content on Hover */}
                                <div
                                    className={`transition-all duration-300 ease-in-out ${hoveredCard === industry.id
                                        ? "opacity-100 max-h-96 mb-4"
                                        : "opacity-0 max-h-0"
                                        } overflow-hidden`}
                                >
                                    <p className="text-sm mb-4 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {industry.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 text-xs border border-white/60 rounded-full hover:bg-white/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Explore Link */}
                                <a
                                    href={`#${industry.title.toLowerCase()}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all underline"
                                >
                                    Explore sector
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Grid - 1 column with bigger cards */}
                <div className="flex flex-col md:hidden gap-6">
                    {industries.map((industry) => (
                        <div
                            key={industry.id}
                            className="relative h-96 rounded-lg overflow-hidden"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${industry.image})` }}
                            ></div>

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-2xl font-bold mb-3">
                                    {industry.title}
                                </h3>

                                <p className="text-sm mb-4 leading-relaxed">
                                    {industry.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {industry.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 text-xs border border-white/60 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Explore Link */}
                                <a
                                    href={`#${industry.title.toLowerCase()}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium underline"
                                >
                                    Explore industry
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}