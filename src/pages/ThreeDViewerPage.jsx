import { useParams, useNavigate } from "react-router-dom";
import sites from "../Data";
import ThreeDViewer from "../components/ThreeDViewer";

export default function ThreeDViewerPage() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = sites[projectId];
    const modelUrl = project?.deliverables?.model;

    if (!project || !modelUrl) {
        return (
            <div className="p-4 mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Model not found</h1>
                <button className="px-6 py-2 rounded-lg bg-orange-400 text-white font-semibold shadow hover:bg-orange-500 transition-colors cursor-pointer" onClick={() => navigate(`/${projectId}/deliverables`)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="p-4">
            <div className="mb-2 flex justify-start">
                <button className="px-6 py-2 rounded-lg text-black font-semibold shadow  cursor-pointer" onClick={() => navigate(`/${projectId}/deliverables`)}>   {"<- Back to Deliverables"} </button>
            </div>
            <ThreeDViewer fileInfo={modelUrl} />
        </div>
    );
}
