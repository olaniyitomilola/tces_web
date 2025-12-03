import React, { useState } from 'react';
import SidePanel from '../components/Sidepanel';
import MainPanel from '../components/MainPanel';

// Dashboard.jsx

export default function Dashboard() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="dashboard">
            <SidePanel onSelectProject={setSelectedProject} />
            <MainPanel selectedProject={selectedProject} />
        </div>
    );
}