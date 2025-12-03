import React, { useState, useEffect } from "react";
import trackGif from "../assets/trackmonitoring.gif";
import aerialGif from "../assets/aerial.gif";
import topographicalGif from "../assets/topo.gif";

const monitoringServices = [
  {
    id: 1,
    title: "Asset Monitoring",
    description: "Manual and Automated Monitoring Solutions for Construction and Civil Engineering Projects",
    image: trackGif,
  },
  {
    id: 2,
    title: "Aerial Survey",
    description: "Drone-based aerial surveys and high-resolution imaging for site inspection and mapping",
    image: aerialGif,
  },
  {
    id: 3,
    title: "Topographical Survey",
    description: "Precise topographical data collection and analysis for terrain and site planning",
    image: topographicalGif,
  },
];

export default function SurveyPage() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Preload assets on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = monitoringServices.map((service) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(service.id);
          img.onerror = () => reject(new Error(`Failed to load ${service.title} image`));
          img.src = service.image;
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log("All assets preloaded successfully");
      } catch (error) {
        console.warn("Asset preloading warning:", error);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % monitoringServices.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex-1 flex flex-col h-full">
      <div
        className="w-full h-64 md:h-96 lg:h-[40vh] bg-center bg-cover relative overflow-hidden"
  style={{ backgroundImage: `url(${monitoringServices[currentServiceIndex].image})`, backgroundColor: '#000' }}
      >
        {/* dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Animated content container */}
        <div
          key={currentServiceIndex}
          className="absolute inset-0 flex w-full h-full p-6 animate-fade-in"
        >
          <div className="text-white max-w-2xl relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-orange-400 underline decoration-5 underline-offset-4 decoration-orange-400">
              {monitoringServices[currentServiceIndex].title}
            </h2>
            <p className="text-sm md:text-lg opacity-90">
              {monitoringServices[currentServiceIndex].description}
            </p>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {monitoringServices.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentServiceIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentServiceIndex
                  ? "w-8 bg-orange-400"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
