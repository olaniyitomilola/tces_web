import React from "react";

export default function PreconstructionServices() {
    const services = [
        {
            id: 1,
            title: "Topographical and LIDAR Surveys",
            description: "Advanced surveying solutions using drone technology,  and LIDAR systems to capture accurate site data and detailed topographical information for informed project planning and design.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Site and Ground Investigations (SI/GI)",
            description: "Comprehensive site and ground investigation services to assess soil conditions, geological features, and subsurface characteristics, ensuring your project is built on solid foundations with complete understanding of ground conditions.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Material and Ground Testing",
            description: "Rigorous testing services including concrete cube strength testing, Plate Load Test (PLT), California Bearing Ratio (CBR), and Light Weight Deflectometer (LWD) testing to verify material quality and ground bearing capacity for safe and compliant construction.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },
        {
            id: 4,
            title: "De-Vegetation Works",
            description: "Professional site clearance and de-vegetation services to prepare construction sites, removing trees, vegetation, and organic matter while ensuring environmental compliance and proper site preparation for development.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 5,
            title: "Non-Destructive Vacuum Excavation",
            description: "Safe, low-risk method to expose underground services with minimal disruption. Our vacuum excavation technology allows precise excavation around existing utilities, reducing the risk of damage and ensuring project safety.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            id: 6,
            title: "Early Temporary Works Engagement",
            description: "Proactive temporary works planning and coordination from the earliest project stages, ensuring construction methodology, safety considerations, and temporary structures are designed and approved efficiently to avoid delays.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 7,
            title: "Design Interface & Temporary Works Coordination",
            description: "In-house expertise in Design Interface (DI) and Temporary Works Coordination (TWC) to streamline early-stage construction readiness. We bridge the gap between design and construction, ensuring seamless integration and efficient project delivery.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1500px] mx-auto px-6 md:px-1">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side - Sticky Title */}
                    <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-1 bg-[#FF8C42]"></div>
                            <span className="text-sm font-semibold text-[#FF8C42] uppercase tracking-wider">
                                Our Services
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold non-animated-gradient leading-tight">
                            Preconstruction Services
                        </h2>
                    </div>

                    {/* Right Side - Scrolling Services */}
                    <div className="lg:w-3/5 space-y-10">
                        {services.map((service) => (
                            <div key={service.id} className="group border-b border-gray-200 pb-8 last:border-b-0 last:pb-0 hover:border-[#FF8C42] transition-colors">
                                <div className="flex items-start gap-5">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-14 h-14 bg-[#FF8C42]/10 group-hover:bg-[#FF8C42] text-[#FF8C42] group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#FF8C42] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}