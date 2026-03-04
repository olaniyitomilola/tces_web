import React from "react";

export default function CTASection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1500px] mx-auto md:px-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* CTA 1: See Our Work */}
                    <div className="group relative bg-gradient-to-br from-[#FF8C42] to-[#ff7a28] rounded-2xl p-8 md:p-12 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                See Our Work in Action
                            </h3>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed">
                                Interested in seeing how we deliver real results?
                            </p>
                            <a
                                href="/projects"
                                className="inline-flex items-center gap-3 bg-white text-[#FF8C42] font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg group-hover:scale-105"
                            >
                                Explore Our Projects
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* CTA 2: Let's Work Together */}
                    <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-8 md:p-12 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C42]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Let's Work Together
                            </h3>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Looking for a trusted partner to support your project? Let's discuss how our team can deliver results for you.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#FF8C42] hover:bg-[#ff7a28] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg group-hover:scale-105"
                            >
                                Contact TCES Today
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}