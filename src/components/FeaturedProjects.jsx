import React from "react";

// Import your project images
import project1 from "../assets/projects/cofferdam.jpg";
import project2 from "../assets/projects/flood.jpg";
import project3 from "../assets/projects/road.jpg";

export default function FeaturedProjects() {
    const projects = [
        {
            id: 1,
            title: "Cofferdam Installation",
            subtitle: "Interceptor Tank & Pump Station Works",
            image: project1,
            link: "#project1"
        },
        {
            id: 2,
            title: "Road Crossing & Utility",
            subtitle: "Coordination Project",
            image: project3,
            link: "#project2"
        },
        {
            id: 3,
            title: "WHL Flood Study",
            subtitle: "",
            image: project2,
            link: "#project3"
        }
    ];

    return (
        <section className="w-full py-12 md:py-20">
            <div className="max-w-[1500px] mx-auto">
                {/* Section Header */}
                <div className="text-left mb-12">
                
                    <h2 className="text-3xl non-animated-gradient md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                        Our Work in Action
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl ">
                        We've successfully delivered a wide range of civil and infrastructure projects, working with key partners across the UK.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative h-80 md:h-96 rounded-lg overflow-hidden group cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl md:text-2xl font-bold mb-1 uppercase tracking-wide ">
                                    {project.title}
                                </h3>
                                {project.subtitle && (
                                    <p className="text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
                                        {project.subtitle}
                                    </p>
                                )}

                                {/* Case Study Button - appears on hover */}
                                
                                  <a  href={project.link}
                                    className="inline-flex items-center gap-2 text-sm font-medium border border-white/60 rounded-full px-4 py-2 hover:bg-white/20 transition-colors w-fit opacity-0 group-hover:opacity-100 duration-300"
                                >
                                    Case study
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

                {/* Explore More Link */}
                <div className="text-right">
                    <a
                        href="#all-projects"
                        className="inline-flex items-center gap-2 text-[#FF8C42] font-semibold text-lg hover:gap-3 transition-all"
                    >
                        Explore more projects
                        <svg
                            className="w-5 h-5"
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
        </section>
    );
}