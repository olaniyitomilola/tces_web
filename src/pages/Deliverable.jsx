import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import sites from "../Data";
import ProjectInfoCard from "../components/ProjectInfoCard";
import { div } from "three/tsl";

export default function Deliverable() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const { setClientInfo } = useOutletContext();
    const project = sites[projectId];

    if (!project) {
        return (
            <div className="p-8 max-w-2xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Project not found</h1>
                <button className="px-6 py-2 rounded-lg bg-orange-400 text-white font-semibold shadow hover:bg-orange-500 transition-colors cursor-pointer" onClick={() => { setClientInfo(null); navigate("/"); }}>Go Back</button>
            </div>
        );
    }

    const { deliverables, date, surveyor, approved, location } = project;
    const deliverableLabels = {
        model: "3D Model",
        cad: "CAD Drawing",
        sheet: "Sheet"
    };

    return (
        <div className="flex-1 p-4 mx-auto w-full">
            <div className=" p-4  mx-auto">
            <div className="flex justify-start">
                <button className="px-6 py-2 rounded-lg  text-black font-semibold shadow  transition-colors cursor-pointer" onClick={() => { setClientInfo(null); navigate("/"); }}>Back</button>
            </div>
            <div className="flex-1 my-2">
                <ProjectInfoCard
                    clientName={project.clientName}
                    date={date}
                    surveyor={surveyor}
                    approved={approved}
                    location={location}
                    projectId={project.projectId}
                />
            </div>
            <h1 className="text-xl md:text-2xl font-bold my-4">Deliverables</h1>

            <ul className="space-y-4">
                {Object.entries(deliverables).map(([type, url]) => (
                    url ? (
                        <li key={type} className="p-4 min-w-[260px] rounded-xl bg-white shadow flex flex-col md:flex-row md:items-center gap-2">
                            <span className="font-semibold text-lg text-orange-700 w-32">{deliverableLabels[type] || type}</span>
                            <div className="flex gap-4">
                                {type === "model" ? (
                                    <div className="flex gap-4">
                                        <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors" onClick={() => navigate(`/${projectId}/deliverables/3d`)}>
                                            View
                                        </button>
                                        <a href={url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-orange-400 text-white font-semibold shadow hover:bg-orange-500 transition-colors">Download</a>
                                    </div>
                                ) : (
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-orange-400 text-white font-semibold shadow hover:bg-orange-500 transition-colors">Download</a>
                                )}
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
        </div>

        </div>
        
    );
}