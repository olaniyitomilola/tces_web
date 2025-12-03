export default function ProjectInfoCard({ clientName, date, surveyor, approved, location, projectId }) {
    return (
        <div className="flex flex-wrap gap-2 justify-start">
            <div className="min-w-[140px] flex-1 p-3 rounded-lg bg-white shadow text-center">
                <p className="text-xs font-medium text-orange-700 mb-1">Client</p>
                <span className="font-normal text-neutral-800">{clientName}</span>
            </div>
            <div className="min-w-[140px] flex-1 p-3 rounded-lg bg-white shadow text-center">
                <p className="text-xs font-medium text-orange-700 mb-1">Date</p>
                <span className="text-neutral-700">{date}</span>
            </div>
            <div className="min-w-[140px] flex-1 p-3 rounded-lg bg-white shadow text-center">
                <p className="text-xs font-medium text-orange-700 mb-1">Surveyor</p>
                <span className="text-neutral-700">{surveyor}</span>
            </div>
            <div className="min-w-[140px] flex-1 p-3 rounded-lg bg-white shadow text-center">
                <p className="text-xs font-medium text-orange-700 mb-1">Approved by</p>
                <span className="text-neutral-700">{approved}</span>
            </div>
            <div className="min-w-[140px] flex-1 p-3 rounded-lg bg-white shadow text-center">
                <p className="text-xs font-medium text-orange-700 mb-1">Location</p>
                <span className="text-neutral-700">{location}</span>
            </div>
            <div className="min-w-[140px] flex-1 p-3 rounded-lg bg-white shadow text-center">
                <p className="text-xs font-medium text-orange-700 mb-1">Project ID</p>
                <span className="text-neutral-700">{projectId}</span>
            </div>
        </div>
    );
}
