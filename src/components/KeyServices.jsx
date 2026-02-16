import React from "react";

export default function KeyServices() {
    const services = [
        {
            id: 1,
            title: "Rail and Infrastructure",
            description: "Track drainage, Masonry, and Equipment Foundations.",
            icon: "🚂" // You can replace with actual icons/images
        },
        {
            id: 2,
            title: "Structural & Civil Engineering",
            description: "Structural works, Walking Routes, and Access Solutions.",
            icon: "🏗️"
        },
        {
            id: 3,
            title: "Specialist Consultancy & Service Support",
            description: "Contract Services, Project Management, and Technical Expertise.",
            icon: "💼"
        }
    ];

    return (
        <section className="w-full bg-white px-6 md:px-8 py-12 md:py-20">
            <div className="max-w-[1500px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-4">
                        OUR EXPERTISE
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                        Key Services
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        We provide specialist engineering solutions across multiple industries, offering full project lifecycle support - from initial consultation to successful delivery - with a focus on quality, efficiency, and safety.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#f5f5f0] rounded-lg p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#FF8C42]"
                        >
                            {/* Icon placeholder - replace with actual icons */}
                            <div className="text-5xl mb-6">{service.icon}</div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}