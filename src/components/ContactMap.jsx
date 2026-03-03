import React from "react";

export default function ContactMap() {
    const officeAddress = {
        name: "TCES Head Office",
        street: "Moorfield",
        city: "Kilmarnock",
        county: "East Ayrshire",
        postcode: "KA1 2RW",
        phone: "+44 (0)1563 606 224",
        email: "office@tces.ai",
        coordinates: {
            lat: 55.600812, 
            lng: -4.531653  
        }
    };

    return (
        <section className="w-full py-16 md:py-24 ">
            <div className="max-w-[1500px] mx-auto 
        ">
                {/* Section Header */}
                <div className="text-center mb-12">
                 
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-left font-bold non-animated-gradient">
                        Visit Our Office
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Map Section */}
                    <div className="order-2 lg:order-1">
                        <div className="w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-1 hover:border-[#FF8C42]/40 transition-all duration-300">
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.123456789!2d${officeAddress.coordinates.lng}!3d${officeAddress.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM2JzAyLjkiTiA0wrAzMSc1NC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="TCES Office Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Office Details Section */}
                    <div className="order-1 lg:order-2 flex flex-col">
                        {/* Office Name Badge */}
                        <div className="inline-flex items-center gap-2 mb-6 w-fit">
                            <div className="w-3 h-3 bg-[#FF8C42] rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                Kilmarnock Office
                            </span>
                        </div>

                        {/* Address Card */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 border border-gray-200">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF8C42] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                        Address
                                    </h3>
                                    <address className="not-italic text-lg text-gray-800 leading-relaxed font-medium">
                                        {officeAddress.street}<br />
                                        {officeAddress.city}<br />
                                        {officeAddress.county}<br />
                                        <span className="text-[#FF8C42] font-bold">{officeAddress.postcode}</span>
                                    </address>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {/* Phone Card */}
                            <a
                                href={`tel:${officeAddress.phone.replace(/\s/g, '')}`}
                                className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#FF8C42] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FF8C42] transition-colors">
                                        <svg
                                            className="w-5 h-5 text-[#FF8C42] group-hover:text-white transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                        Phone
                                    </span>
                                </div>
                                <p className="text-sm md:text-base text-gray-800 font-semibold group-hover:text-[#FF8C42] transition-colors">
                                    {officeAddress.phone}
                                </p>
                            </a>

                            {/* Email Card */}
                            <a
                                href={`mailto:${officeAddress.email}`}
                                className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#FF8C42] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FF8C42] transition-colors">
                                        <svg
                                            className="w-5 h-5 text-[#FF8C42] group-hover:text-white transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                        Email
                                    </span>
                                </div>
                                <p className="text-sm md:text-base text-gray-800 font-semibold group-hover:text-[#FF8C42] transition-colors break-all">
                                    {officeAddress.email}
                                </p>
                            </a>
                        </div>

                        {/* Get Directions Button */}
                            <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${officeAddress.coordinates.lat},${officeAddress.coordinates.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 bg-[#FF8C42] hover:bg-[#ff7a28] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <svg
                                className="w-6 h-6 group-hover:rotate-12 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                            </svg>
                            Get Directions
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
        </section>
    );
}