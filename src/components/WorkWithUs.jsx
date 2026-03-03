export default function WorkWithUs() {
    return (
        <section className="w-full py-12 md:py-20 bg-grey">
            <div className="max-w-[1500px] mx-auto">
                {/* Main Container */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Left Side - Sticky Title */}
                    <div className="lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
                        <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold non-animated-gradient leading-tight mb-8 lg:mb-0">
                            Looking to Work With Us?
                        </h2>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <p className="text-lg md:text-lg lg:text-xl text-gray-700 text-justify leading-relaxed">
                            Whether you are planning a new project, requiring ongoing engineering support, or seeking a trusted partner for long-term collaboration, TCES is here to help. Our team are ready to discuss your needs, offer expert guidance, and deliver results you can rely on.
                        </p>

                        {/* Get in Touch Button */}
                        <a
                            href="/contact"
                            className="inline-block bg-[#FF8C42] hover:bg-[#ff7a28] text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-md transition-colors shadow-lg hover:shadow-xl"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}