import React from "react";
import companyImage from "../assets/company-image.jpg"; // Add your company image

export default function Company() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1500px] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]">
                            <img
                                src={companyImage}
                                alt="Track Civil Engineering Solutions"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-1 bg-[#FF8C42]"></div>
                            <span className="text-sm font-semibold text-[#FF8C42] uppercase tracking-wider">
                                About TCES
                            </span>
                        </div>

                 

                        <div className="space-y-6 text-base md:text-lg text-gray-700 text-justify leading-relaxed">
                            <p>
                                Track Civil Engineering Solutions (TCES) is a family-owned, multi-disciplinary civil engineering contractor based in Kilmarnock and operating across the UK. With a proven track record in delivering high-quality projects across multiple sectors, we pride ourselves on our responsive service, trusted partnerships, and a strong commitment to health and safety, quality, and innovation.
                            </p>
                            
                            <p>
                                Founded with a vision to provide smart, reliable civil engineering solutions, TCES offers clients a one-stop partner for project delivery — from start to completion. Our national coverage, expert team, and adaptable working model mean we can respond quickly to client needs and deliver results efficiently and safely.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <div className="text-3xl md:text-4xl font-bold text-[#FF8C42] mb-2">
                                    100+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    Years Combined Experience
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="text-3xl md:text-4xl font-bold text-[#FF8C42] mb-2">
                                    UK-Wide
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    National Coverage
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="text-3xl md:text-4xl font-bold text-[#FF8C42] mb-2">
                                    24/7
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    Support Available
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="text-3xl md:text-4xl font-bold text-[#FF8C42] mb-2">
                                    Multi-Sector
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    Expertise
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}