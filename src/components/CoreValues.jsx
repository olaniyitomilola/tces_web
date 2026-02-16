import React from "react";

export default function CoreValues() {
    const values = [
        {
            id: 1,
            title: "Partnership",
            description: "We are a delivery partner, not just a contractor — aligning with client goals, building trust through transparency, and focusing on long-term relationships over one-off projects."
        },
        {
            id: 2,
            title: "One Team",
            description: "Our success is built on a one-team culture that values support, accountability, and unity at every level of the organisation."
        },
        {
            id: 3,
            title: "Consistency",
            description: "We deliver consistently on our commitments. We stay professional, dependable, and our reputation is built on delivery, not promises."
        },
        {
            id: 4,
            title: "Resilience",
            description: "Rooted in where we work, we stay steady under pressure. Built for demanding conditions, we adapt, stay composed, and complete every task to the highest standard."
        },
        {
            id: 5,
            title: "No Excuses",
            description: "We own the outcome. We take responsibility for decisions, timelines, and delivery. When we commit, we deliver."
        }
    ];

    return (
        <section className="w-full py-12 md:py-20">
            <div className="max-w-[1500px] mx-auto ">
                {/* Main Container */}
                <div className="flex flex-col  lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side - Sticky Title */}
                    <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start">
                        <h2 className="text-3xl non-animated-gradient md:text-4xl lg:text-5xl font-bold  leading-tight">
                            Our Core Values.
                        </h2>
                    </div>

                    {/* Right Side - Scrolling Values */}
                    <div className="lg:w-3/5 space-y-16">
                        {values.map((value, index) => (
                            <div key={value.id} className="border-b border-gray-300 pb-12 last:border-b-0">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FF8C42] mb-6">
                                    {value.title}
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}