import React from "react";

export default function SurveyingServices() {
    const services = [
        {
            id: 1,
            title: "Surveys & Monitoring",
            description: "Delivered using GEDO, Amberg, and comprehensive monitoring plan systems. Advanced surveying and monitoring solutions providing real-time data collection, precise measurements, and continuous monitoring throughout project lifecycle for quality assurance and compliance.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Aerial Survey",
            description: "Professional aerial surveying using advanced drone technology and UAV systems. Capture large-scale site data efficiently, providing high-resolution imagery, terrain mapping, and volumetric analysis. Ideal for site progress monitoring, topographical surveys, and inaccessible area inspection.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Photogrammetry",
            description: "Advanced photogrammetry services creating accurate 3D models and digital twins from aerial and ground-based imagery. Generate detailed orthomosaics, point clouds, and digital elevation models for design, planning, and visualization. Precise measurements and volumetric calculations from processed photogrammetric data.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "LiDAR Scanning",
            description: "State-of-the-art LiDAR (Light Detection and Ranging) technology providing highly accurate 3D point cloud data. Terrestrial and airborne LiDAR solutions for detailed as-built surveys, infrastructure mapping, and clash detection. Millimetre-precision data capture for BIM integration, asset management, and construction verification.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            id: 5,
            title: "Underground Utility Surveying",
            description: "Comprehensive underground utility detection and mapping services using advanced technologies including GPR, electromagnetic detection, and precision location equipment. Accurate identification and plotting of existing underground services to prevent strikes and ensure safe excavation.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            id: 6,
            title: "CCTV Drainage Survey",
            description: "Professional CCTV drainage surveys providing detailed inspection and condition assessment of drainage systems. High-definition camera surveys identify defects, blockages, structural issues, and compliance with specifications. Comprehensive reporting with video footage and condition ratings for informed asset management decisions.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
                        <h2 className="text-4xl non-animated-gradient md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
                            Surveying Services
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                            Cutting-edge surveying solutions combining traditional expertise with the latest technology.
                        </p>
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
                                        <p className="text-base text-justify md:text-lg text-gray-700 leading-relaxed">
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