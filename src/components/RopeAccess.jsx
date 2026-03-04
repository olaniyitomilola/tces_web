import React from "react";

export default function RopeAccess() {
    const services = [
        {
            id: 1,
            title: "Rope Access & Tree Climbing Services",
            description: "Specialized rope access and tree climbing services for challenging environments and precise work. IRATA-qualified teams for vegetation clearance, masonry repairs, rock netting & anchor, catch fence installation, geotechnical services and confined space access in hard-to-reach environments. ",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
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
                            Rope Access & Specialist Civils
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                            Specialized rope access and tree climbing services for challenging environments and precise work.
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