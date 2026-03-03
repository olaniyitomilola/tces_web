import React, { useState } from "react";

// Import your certification images and PDFs
import risosImg from "../assets/accreditations/risqs.png";
import cirasImg from "../assets/accreditations/ciras.png";
import constructionlineImg from "../assets/accreditations/constructionline.png";
import socialValueImg from "../assets/accreditations/social-value.png";
import ssipImg from "../assets/accreditations/ssip.png";
import iso9001Img from "../assets/accreditations/iso9001.png";
import iso14001Img from "../assets/accreditations/iso14001.png";
import iso45001Img from "../assets/accreditations/iso45001.png";

// Import PDFs
import risosCertAudit from "../assets/accreditations/pdfs/9210-risqs-certificate-2025.pdf";
import risosCertVerification from "../assets/accreditations/pdfs/9210risqscertificate-2025-2026.pdf";
import cirasCert from "../assets/accreditations/pdfs/ciras-certificate-25-26.pdf";
import constructCert from "../assets/accreditations/pdfs/construction-line-gold.pdf";
import ssipCert from "../assets/accreditations/pdfs/ssip_acclaim.pdf";
import iso9001 from "../assets/accreditations/pdfs/track-civil-engineering-solutions-ltd-iso-9001-certificate.pdf";
import iso14001 from "../assets/accreditations/pdfs/track-civil-engineering-solutions-ltd-iso-14001-certificate.pdf";
import iso45001 from "../assets/accreditations/pdfs/track-civil-engineering-solutions-ltd-iso-45001-certificate.pdf";






export default function Accreditations() {
    const [selectedCert, setSelectedCert] = useState(null);

    const accreditations = [
        {
            id: 1,
            name: "RISQS",
            image: risosImg,
            certificates: [
                {
                    title: "Certificate of Audit",
                    file: risosCertAudit,
                    link: "View Certificate of Audit →"
                },
                {
                    title: "Certificate of Verification",
                    file: risosCertVerification,
                    link: "View Certificate of Verification →"
                }
            ]
        },
        {
            id: 2,
            name: "CIRAS",
            image: cirasImg,
            certificates: [
                {
                    title: "Certificate of Membership",
                    file: cirasCert,
                    link: "View Certificate of Membership →"
                }
            ]
        },
        {
            id: 3,
            name: "Constructionline Gold",
            image: constructionlineImg,
            certificates: [
                {
                    title: "Certificate of Membership",
                    file: constructCert,
                    link: "View Certificate of Membership →"
                }
            ]
        },
        {
            id: 4,
            name: "Social Value",
            image: socialValueImg,
            certificates: [
                {
                    title: "Certificate of Membership",
                    file: constructCert,
                    link: "View Certificate of Membership →"
                }
            ]
        },
        {
            id: 5,
            name: "SSIP",
            image: ssipImg,
            certificates: [
                {
                    title: "Certificate of Accreditation",
                    file: ssipCert,
                    link: "View Certificate of Accreditation →"
                }
            ]
        },
        {
            id: 6,
            name: "ISO 9001",
            image: iso9001Img,
            certificates: [
                {
                    title: "ISO 9001 Certificate",
                    file: iso9001,
                    link: "ISO 9001 →"
                }
            ]
        },
        {
            id: 7,
            name: "ISO 14001",
            image: iso14001Img,
            certificates: [
                {
                    title: "ISO 14001 Certificate",
                    file: iso14001,
                    link: "ISO 14001 →"
                }
            ]
        },
        {
            id: 8,
            name: "ISO 45001",
            image: iso45001Img,
            certificates: [
                {
                    title: "ISO 45001 Certificate",
                    file: iso45001,
                    link: "ISO 45001 →"
                }
            ]
        }
    ];

    const openCertificate = (cert) => {
        if (cert.file) {
            window.open(cert.file, '_blank');
        }
    };

    return (
        <section className="w-full py-16 md:py-24 bg-[#f5f5f0]">
            <div className="max-w-[1500px] mx-auto ">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF8C42] text-center mb-12 md:mb-16">
                    Accreditations
                </h2>

                {/* Accreditations Flex Container */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {accreditations.map((accreditation) => (
                        <div 
                            key={accreditation.id} 
                            className="flex flex-col w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] min-w-[180px] max-w-[240px]"
                        >
                            {/* Certificate Thumbnail */}
                            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 mb-4 aspect-square flex items-center justify-center">
                                <img
                                    src={accreditation.image}
                                    alt={accreditation.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Certificate Links */}
                            <div className="space-y-2">
                                {accreditation.certificates.map((cert, index) => (
                                    <button
                                        key={index}
                                        onClick={() => openCertificate(cert)}
                                        className="text-sm text-[#D4A574] hover:text-[#FF8C42] transition-colors flex items-center gap-1 group w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!cert.file}
                                    >
                                        <span className="text-left">{cert.link}</span>
                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}