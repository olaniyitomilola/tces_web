import { useRef, useState, useEffect } from "react";
import track from "../assets/trackmonitoring.gif";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import us from "../assets/us.jpg";
import amco from "../assets/amco.jpg";
import babcock from "../assets/babcock.png";
import bear from "../assets/bear.jpg";
import ethical_power from "../assets/ethical_power.webp";
import belectric from "../assets/belectric.png";
import story from "../assets/story.jpeg";
import nhs from "../assets/nhs.jpg";
import cpms from "../assets/cpms.png";
import taziker from "../assets/taziker.jpg";
import ClientCarousel from "../components/ClientCarousel";
import Industries from "../components/Industries";
import HowItWorks from "../components/HowItWorks";
import FeaturedProjects from "../components/FeaturedProjects";
import KeyServices from "../components/KeyServices";

export default function Home() {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    const clients = [
        { id: 1, name: "Amco Giffen", src: amco },
        { id: 2, name: "Babcock", src: babcock },
        { id: 3, name: "Bear", src: bear },
        { id: 4, name: "Ethical Power", src: ethical_power },
        { id: 5, name: "Belectric", src: belectric },
        { id: 6, name: "Taziker", src: taziker },
        { id: 7, name: "CPMS", src: cpms },
        { id: 8, name: "NHS", src: nhs },
        { id: 9, name: "Story", src: story },
    ];

    const handleVideoCanPlayThrough = () => {
        // Video is fully loaded and can play through without buffering
        setVideoLoaded(true);
        setTimeout(() => {
            setShowVideo(true);
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 300); // Small delay for smooth transition
    };

    return (
        <>
            <section aria-label="Hero" className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                {/* Poster Image (shows until video is ready) */}
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
                        showVideo ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ backgroundImage: `url(${track})` }}
                >
                    {!videoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                    )}
                </div>

                {/* Video Background */}
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                        showVideo ? 'opacity-100' : 'opacity-0'
                    }`}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlayThrough={handleVideoCanPlayThrough}
                    poster={track}
                >
                    <source src={vid2} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

                {/* Content Container */}
                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Left Side - Multi-Sector Expertise */}
                        <div className="flex items-center md:items-start justify-center md:justify-start">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animated-gradient !text-white">
                                Multi-Sector Expertise,
                            </h1>
                        </div>

                        {/* Right Side - One Trusted Partner */}
                        <div className="flex items-center md:items-end justify-center md:justify-end">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-center md:text-right animated-gradient !text-white">
                                One Trusted Partner
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="animate-bounce">
                        <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </section>

            <section className="max-w-[1500px] mx-auto py-6 md:py-8 px-6 md:px-8">
                <h1 className="non-animated-gradient text-3xl md:text-4xl lg:text-5xl font-bold text-center py-12 text-[#1a1a1a]">
                    Engineering solution specialists across multiple sectors
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={us}
                            alt="Track Civil Engineering Solutions"
                            className="w-full h-auto rounded-lg shadow-lg"
                            loading="lazy"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <p className="text-lg leading-relaxed text-justify text-gray-700 mb-6">
                            Track Civil Engineering Solutions is a UK-based company providing expert engineering solutions across the rail, civil, and infrastructure sectors. Our skilled workforce delivers high-quality results with efficiency and safety at the core of every project.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-[#FF8C42] font-bold text-xl">✓</span>
                                <p className="text-gray-700">Combined experience of over 100 years</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#FF8C42] font-bold text-xl">✓</span>
                                <p className="text-gray-700">Fast response and project turnaround</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#FF8C42] font-bold text-xl">✓</span>
                                <p className="text-gray-700">Available 7 days a week to support your project requirements</p>
                            </div>
                        </div>

                        <a href="/about" className="mt-8 max-w-max inline-block px-6 py-3 bg-[#FF8C42] text-white font-semibold rounded-lg hover:bg-[#e67e30] transition-colors duration-300">
                            Learn More About Us.
                        </a>
                    </div>
                </div>
            </section>

            <Industries />
            {/* <KeyServices/> */}
            <FeaturedProjects/>
            <HowItWorks/>
            <ClientCarousel clients={clients} />
        </>
    );
}