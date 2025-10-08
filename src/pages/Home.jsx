import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import sites from "../Data";

export default function Home() {
    const [projectId, setProjectId] = useState("");
    const [error, setError] = useState("");
    const { setClientInfo } = useOutletContext();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setProjectId(e.target.value);
        setError(""); 
    };
    const handleContinue = () => {
        if (!projectId.trim()) {
            setError("Please enter a Project ID");
            return;
        }
        const site = sites[projectId.trim().toLowerCase()];
        if (!site) {
            setError("Project not found");
            setClientInfo(null);
        } else {
            setError("");
            setClientInfo(site);
            navigate(`/${projectId.trim().toLowerCase()}/deliverables`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-8 mt-35 md:mt-50">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 animated-gradient text-center">
                Multi-Sector Expertise, One Trusted Partner
            </h2>            
            <p className="text-base md:text-xl text-blue-400 text-center">Project Delivery Platform, enter Project ID to continue</p>
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <input
                    type="text"
                    placeholder="Enter Project ID"
                    value={projectId}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                />
                <button
                    className="px-6 py-2 rounded-lg bg-orange-400 text-white font-semibold shadow hover:bg-orange-500 transition-colors cursor-pointer"
                    onClick={handleContinue}
                >
                    Continue
                </button>
            </div>
            {error && (
                <div className="text-red-500 text-sm mt-2 text-center w-full md:w-auto">{error}</div>
            )}
        </div>
    )
}