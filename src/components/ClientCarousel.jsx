import React from "react";

export default function ClientCarousel({ clients = [] }) {
    if (!clients || clients.length === 0) return null;

    return (
        <section className="w-full py-4 md:py-6 lg:py-8 bg-gray-50">
                <div className="max-w-[1500px] mx-auto ">
                    <h1 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold text-center py-8 non-animated-gradient !text-white">
                    Our trusted clients.               </h1>

                    {/* Carousel Container */}
                    <div className="relative w-full overflow-hidden">
                        {/* Track */}
                        <div className="flex w-max carousel-track">

                            {/* First set */}
                            {clients.map((client) => (
                                <div
                                    key={client.id}
                                    className="flex-shrink-0 h-16 md:h-20 lg:h-24 flex items-center justify-center px-6"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.name}
                                        className="max-h-full max-w-[160px] object-contain"
                                    />
                                </div>
                            ))}

                            {/* Duplicate set */}
                            {clients.map((client) => (
                                <div
                                    key={`dup-${client.id}`}
                                    className="flex-shrink-0 h-16 md:h-20 lg:h-24 flex items-center justify-center px-6"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.name}
                                        className="max-h-full max-w-[160px] object-contain"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>


                </div>
            </section>
    );
}
