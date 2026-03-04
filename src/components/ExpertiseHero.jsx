import React, { useEffect, useState } from "react";
import heroImage from "../assets/project_header.png";

export default function ExpertiseHero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="w-full min-h-[30vh] md:min-h-[40vh] bg-[#f5f5f0] relative overflow-hidden">
            <div className="max-w-[1500px] mx-auto  py-16 md:py-24 px-6 md:px-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
                    {/* Left Side - Text Content */}
                    <div className={`flex flex-col justify-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8">
                            <span className="text-[#1a1a1a] block">Every civil engineering</span>
                            <span className="text-[#3d5a80] block">need, covered.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                            With over 100 years' combined experience and expert team members across the UK, we've got the tried and tested know-how to solve any problem, in any place, at any scale, faster and smarter than you've seen before.
                        </p>
                    </div>

                    {/* Right Side - Image in Gear Frame */}
                    <div className={`flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="relative w-full max-w-2xl">
                            {/* Rotating Gear Frame */}
                            <div className="relative aspect-square animate-spin-slow">
                                {/* Main Gear */}
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-full h-full"
                                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
                                >
                                    {/* Outer gear teeth */}
                                    <path
                                        d="M100,10 L105,20 L110,10 L115,20 L120,10 L125,20 L130,10 L135,20 L140,10 L145,20 L150,10 L155,20 L160,10 L165,20 L170,10 L175,20 L180,15 L185,25 L187,35 L185,45 L187,55 L185,65 L187,75 L185,85 L187,95 L185,105 L187,115 L185,125 L187,135 L185,145 L187,155 L185,165 L180,175 L175,180 L170,190 L165,180 L160,190 L155,180 L150,190 L145,180 L140,190 L135,180 L130,190 L125,180 L120,190 L115,180 L110,190 L105,180 L100,190 L95,180 L90,190 L85,180 L80,190 L75,180 L70,190 L65,180 L60,190 L55,180 L50,190 L45,180 L40,190 L35,180 L30,185 L25,175 L20,165 L15,155 L13,145 L15,135 L13,125 L15,115 L13,105 L15,95 L13,85 L15,75 L13,65 L15,55 L13,45 L15,35 L20,25 L25,15 L30,10 L35,20 L40,10 L45,20 L50,10 L55,20 L60,10 L65,20 L70,10 L75,20 L80,10 L85,20 L90,10 L95,20 Z"
                                        fill="#FF8C42"
                                        opacity="0.9"
                                    />
                                    {/* Inner circle */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="75"
                                        fill="#f5f5f0"
                                        stroke="#FF8C42"
                                        strokeWidth="3"
                                    />
                                    {/* Center hole */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="15"
                                        fill="#FF8C42"
                                    />
                                </svg>

                                {/* Image inside gear - non-rotating */}
                                <div className="absolute inset-0 flex items-center justify-center p-12 animate-spin-reverse">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-inner p-4">
                                        <img
                                            src={heroImage}
                                            alt="Civil Engineering Solutions"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Small decorative gears */}
                            <div className="absolute -bottom-8 -left-8 w-24 h-24 animate-spin opacity-70">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <path
                                        d="M100,20 L110,30 L120,20 L130,30 L140,20 L150,30 L160,30 L170,40 L180,50 L180,60 L180,70 L180,80 L180,90 L180,100 L180,110 L180,120 L180,130 L180,140 L170,150 L160,160 L150,170 L140,180 L130,170 L120,180 L110,170 L100,180 L90,170 L80,180 L70,170 L60,180 L50,170 L40,160 L30,150 L20,140 L20,130 L20,120 L20,110 L20,100 L20,90 L20,80 L20,70 L20,60 L30,50 L40,40 L50,30 L60,20 L70,30 L80,20 L90,30 Z"
                                        fill="#3d5a80"
                                    />
                                    <circle cx="100" cy="100" r="50" fill="#f5f5f0" />
                                    <circle cx="100" cy="100" r="10" fill="#3d5a80" />
                                </svg>
                            </div>

                            <div className="absolute -top-6 -right-6 w-20 h-20 animate-spin opacity-60">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <path
                                        d="M100,20 L110,30 L120,20 L130,30 L140,20 L150,30 L160,30 L170,40 L180,50 L180,60 L180,70 L180,80 L180,90 L180,100 L180,110 L180,120 L180,130 L180,140 L170,150 L160,160 L150,170 L140,180 L130,170 L120,180 L110,170 L100,180 L90,170 L80,180 L70,170 L60,180 L50,170 L40,160 L30,150 L20,140 L20,130 L20,120 L20,110 L20,100 L20,90 L20,80 L20,70 L20,60 L30,50 L40,40 L50,30 L60,20 L70,30 L80,20 L90,30 Z"
                                        fill="#FF8C42"
                                    />
                                    <circle cx="100" cy="100" r="50" fill="#f5f5f0" />
                                    <circle cx="100" cy="100" r="10" fill="#FF8C42" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </section>
    );
}