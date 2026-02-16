import { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";

export default function Layout() {
    const [clientInfo, setClientInfo] = useState(null);
    const [modelUrl, setModelUrl] = useState(null);

    return (
        <div className="min-h-screen w-full bg-neutral-50 text-neutral-900 flex flex-col items-center">
            <Header  />
            <div className="flex-1 flex flex-col w-full justify-center items-center px-6">
                <Body  />
            </div>
            <footer className="bg-black text-white py-4 text-center w-full">
                &copy; {new Date().getFullYear()} Track Civil Engineering Solutions Ltd. All rights reserved.
            </footer>
        </div>
    )
}