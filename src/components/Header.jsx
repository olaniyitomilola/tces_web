import logo from '../assets/logo.svg';
import Navbar from './Navbar';

export default function Header({ clientInfo }) {
    return (
        <header className="w-full  px-6 md:px-4 py-6 md:py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto max-w-[120px] object-contain" />
                <span className="text-sm md:text-base text-neutral-500">Survey</span>
                {!clientInfo && <Navbar />}

            </div>
            {clientInfo && (
                <div className="text-right">
                    <h1 className="text-xl md:text-2xl font-semibold tracking-tight">{clientInfo.projectName}</h1>
                    <p className="text-neutral-600 mt-1">{clientInfo.clientName}</p>
                </div>
            )}

        </header>
    );
}