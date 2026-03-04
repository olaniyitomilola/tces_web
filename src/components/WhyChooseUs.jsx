import React from "react";

export default function WhyChooseUs() {
    const reasons = [
        {
            id: 1,
            title: "Safety",
            description: "A culture of proactive risk management.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Efficiency",
            description: "Delivering projects on time and within budget.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Innovation",
            description: "Leveraging advanced technology and techniques.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8C42]/5 rounded-full blur-3xl"></div>

            <div className="max-w-[1500px] mx-auto px-6 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-12 h-1 bg-[#FF8C42]"></div>
                        <span className="text-sm font-semibold text-[#FF8C42] uppercase tracking-wider">
                            Our Commitment
                        </span>
                        <div className="w-12 h-1 bg-[#FF8C42]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our approach emphasises excellence in every aspect of project delivery.
                    </p>
                </div>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FF8C42]/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-[#FF8C42]/20 group-hover:bg-[#FF8C42] text-[#FF8C42] group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                                {reason.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
                        Supported by strategic partnerships and a commitment to exceptional results, we are equipped to handle projects of varying scales and complexities across Scotland and the UK with{" "}
                        <span className="text-[#FF8C42] font-semibold">unmatched expertise</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}