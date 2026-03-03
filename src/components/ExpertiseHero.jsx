import React from "react";
import heroImage from "../assets/project_header.png"; 

export default function ExpertiseHero() {
    return (
        <section className="w-full min-h-[30vh] md:min-h-[40vh]  relative overflow-hidden">
            <div className="max-w-[1500px] mx-auto  py-6 md:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center min-h-[60vh]">
                    {/* Left Side - Text Content */}
                    <div className="flex flex-col justify-center z-10">
                        <h1 className="text-5xl non-animated-gradient md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a1a] leading-tight mb-8">
                            Every civil engineering need, covered.
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-700 text-justify leading-relaxed max-w-xl">
                            With over 100 years' combined experience and expert team members across the UK, we've got the tried and tested know-how to solve any problem, in any place, at any scale, faster and smarter than you've seen before.
                        </p>
                    </div>

                    {/* Right Side - Image/3D Model */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-2xl">
                            <img
                                src={heroImage}
                                alt="Civil Engineering Solutions"
                                className="w-full h-auto rounded-lg object-contain animate-float"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C42]/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>
        </section>
    );
}