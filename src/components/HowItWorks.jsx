import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Send an Enquiry",
            description: "Fill in our online form with your project details."
        },
        {
            number: "2",
            title: "Have a Call with TCES",
            description: "A member of our expert team will discuss your requirements."
        },
        {
            number: "3",
            title: "Receive a Quotation",
            description: "A clear, transparent proposal with a tailored approach to your project needs."
        }
    ];

    return (
        <section className="w-full bg-[#f5f5f0] px-6 md:px-8 py-12 md:py-20">
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - CTA */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                            Need a trusted civil engineering partner?
                        </h2>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FF8C42] leading-tight">
                            Let's discuss your project requirements.
                        </p>
                    </div>

                    {/* Right Column - Process Steps */}
                    <div>
                        <p className="text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-6">
                            HOW IT WORKS
                        </p>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-8">
                            A Simple 3-Step Process
                        </h3>

                        {/* Steps */}
                        <div className="space-y-6 mb-8">
                            {steps.map((step) => (
                                <div key={step.number} className="flex gap-4">
                                    {/* Number Badge */}
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF8C42] flex items-center justify-center text-white font-bold text-sm">
                                        {step.number}
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-[#1a1a1a] mb-1">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                             {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="contact"
                            className="inline-block bg-[#FF8C42] hover:bg-[#ff7a28] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors shadow-lg hover:shadow-xl"
                        >
                            Submit Your Enquiry
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
}