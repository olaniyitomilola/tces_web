import React, { useState } from "react";

// Import team member images
import image from "../assets/team/user.jpg";

export default function CorporateLeadership() {
    const [expandedMember, setExpandedMember] = useState(null);

    const toggleExpand = (id) => {
        setExpandedMember(expandedMember === id ? null : id);
    };

    const leadership = [
        {
            id: 1,
            name: "Altin Staka",
            qualifications: ["MBA", "LLM (Construction Law)", "CEM", "Strategic Business Analyst", "Change Management Leader", "MSc Finance & Accounting (Ongoing)"],
            title: "Managing Director",
            image: image,
            bio: "As Managing Director of TCES, Altin Staka brings a unique blend of practical and engineering knowledge, business strategy, and financial leadership. Since launching the business, Altin has spearheaded initiatives that exceeded financial targets within the first two years, establishing TCES as a growing force in the civil engineering sector. \nAltin's strategic mindset, paired with his deep expertise in change management and risk mitigation, enables the business to deliver solutions that are both scalable and sustainable. Currently pursuing an MSc in Accounting and Finance, Altin continues to strengthen TCES's commercial foundation while ensuring high standards of compliance, safety, and innovation across all projects.\nIn his dual capacity as Designated Project Engineer, Altin provides technical leadership and engineering assurance on Network Rail projects, ensuring compliance with standards and safety regulations. By coordinating multi-disciplinary design and construction activities, manage engineering risk, and act as key interface between contractors, designers, and Network Rail. His role ensures safe, integrated delivery and handback of railway assets"
        },
        {
            id: 2,
            name: "Malcolm McGowan",
            qualifications: ["ChPP", "MAPM", "MCiOB"],
            title: "Operations Director",
            image: image,
            bio: "Chartered Project Professional with over 25 years' experience delivering major civil and rail infrastructure projects across Scotland. Proven in managing station developments, bridge replacements, and route upgrades with a focus on governance, contract management, and stakeholder engagement. A results-driven leader recognised for delivering safe, efficient, and on-budget outcomes. Skilled in building collaborative relationships across clients, contractors, and regulators. Chartered with both APM (ChPP) and CIOB (MCIOB), demonstrating commitment to excellence and continuous improvement."
        },
        {
            id: 3,
            name: "Kieran Bain",
            qualifications: [],
            title: "Contracts Manager",
            image: image,
            bio: "Results-driven rail and civil infrastructure professional with 20 years of international experience across the UK, Australia, and the Middle East. Proven track record in leading complex, multidisciplinary rail projects through roles including Program Director, Project Manager, and Engineering Manager. Expertise in track engineering, construction management, and project governance, with strong commercial acumen and stakeholder engagement skills. Recognised for delivering large-scale infrastructure programs safely, efficiently, and to the highest technical standards."
        },
        {
            id: 4,
            name: "Bill Taggerty",
            qualifications: [],
            title: "Commercial Manager",
            image: image,
            bio: "Accomplished Commercial and Contracts professional with over 25 years' experience in rail and civil engineering. Proven in leading national frameworks worth over £3.5 billion across Building, Civils, Slabtrack, and Structural Examination. Skilled in NEC contracts, procurement, tendering, and cost management, with strong strategic and financial insight. Combines client- and contractor-side experience with collaborative leadership that drives performance, integrity, and value. Holds a BSc in Quantity Surveying, MSc in Construction Management, and Network Rail Senior Leaders and LEAN certifications."
        }
    ];

    return (
        <section className="w-full py-12 md:py-20">
            <div className="max-w-[1500px] mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold non-animated-gradient mb-6">
                   Leadership Team.
                </h2>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                    Together, our experienced leadership team oversees all technical and operational activities, ensuring every project is delivered with precision, integrity, and care.
                </p>

                {/* Leadership Flex Container - Centered */}
                <div className="flex flex-wrap justify-center gap-12">
                    {leadership.map((member) => (
                        <React.Fragment key={member.id}>
                            {/* Member Card */}
                            <div className="flex-shrink-0 w-full sm:w-[280px] md:w-[300px]">
                                <div className="flex flex-col">
                                    {/* Image */}
                                    <div className="bg-gray-200 aspect-square mb-4 overflow-hidden rounded-full">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Title */}
                                    <p className="text-sm font-semibold text-gray-600 uppercase mb-2">
                                        {member.title}
                                    </p>

                                    {/* Name */}
                                    <h3 className="text-xl md:text-2xl font-bold text-[#FF8C42] mb-2">
                                        {member.name}
                                    </h3>

                                    {/* Qualifications */}
                                    {member.qualifications && member.qualifications.length > 0 && (
                                        <p className="text-xs text-gray-500 mb-4 italic">
                                            {member.qualifications.join(", ")}
                                        </p>
                                    )}

                                    {/* Read More Button */}
                                    <button
                                        onClick={() => toggleExpand(member.id)}
                                        className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md transition-colors w-fit mt-auto"
                                    >
                                        {expandedMember === member.id ? 'Read less' : 'Read more'}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${
                                                expandedMember === member.id ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Expanded Bio - Full Width Row Below */}
                            {expandedMember === member.id && (
                                <div className="w-full">
                                    <div className="bg-gray-50 border-l-4 border-[#FF8C42] p-6 md:p-8 rounded-lg animate-fadeIn max-w-4xl mx-auto">
                                        {/* Split bio by newlines and render as paragraphs */}
                                        {member.bio.split('\n').map((paragraph, index) => (
                                            paragraph.trim() && (
                                                <p key={index} className="text-sm text-justify md:text-base text-gray-700 leading-relaxed mb-4 last:mb-0">
                                                    {paragraph}
                                                </p>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}