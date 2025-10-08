import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import sites from "../Data";

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
        <div className="p-8 max-w-2xl mx-auto">
            <div className="mb-4 flex justify-start">
                <button className="px-6 py-2 rounded-lg  text-black font-semibold shadow  transition-colors cursor-pointer" onClick={() => { setClientInfo(null); navigate("/"); }}>Back</button>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Project Deliverables</h1>
            <div className="mb-8 p-6 rounded-xl bg-orange-100 shadow flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                    <p className="text-lg font-semibold mb-2 text-orange-700">Client: <span className="font-normal text-neutral-800">{project.clientName}</span></p>
                    <p className="mb-1 text-neutral-700"><span className="font-medium">Date:</span> {date}</p>
                    <p className="mb-1 text-neutral-700"><span className="font-medium">Surveyor:</span> {surveyor}</p>
                    <p className="mb-1 text-neutral-700"><span className="font-medium">Approved by:</span> {approved}</p>
                    <p className="mb-1 text-neutral-700"><span className="font-medium">Location:</span> {location}</p>
                    <p className="mb-1 text-neutral-700"><span className="font-medium">Project ID:</span> {project.projectId}</p>
                </div>
            </div>
            <ul className="space-y-6">
                {Object.entries(deliverables).map(([type, url]) => (
                    url ? (
                        <li key={type} className="p-6 rounded-xl bg-white shadow flex flex-col md:flex-row md:items-center gap-4">
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
    );
}