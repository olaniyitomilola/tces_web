import { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";

export default function Layout() {
    const [clientInfo, setClientInfo] = useState(null);
    const [modelUrl, setModelUrl] = useState(null);
    const handleSetClientInfo = (info) => {
        setClientInfo(info);
        setModelUrl(info?.modelUrl || null);
    };
    return (
        <div className="min-h-screen w-full bg-neutral-50 text-neutral-900 flex flex-col items-center">
            <Header clientInfo={clientInfo} />
            <div className="flex-1 flex flex-col w-full justify-center items-center px-6">
                <Body setClientInfo={handleSetClientInfo} modelUrl={modelUrl} />
            </div>
            <footer className="bg-black text-white py-4 text-center w-full">
                &copy; {new Date().getFullYear()} Track Civil Enginnering Solutions Ltd. All rights reserved.
            </footer>
        </div>
    )
}