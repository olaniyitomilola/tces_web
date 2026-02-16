import logo from '../assets/logo.svg';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between relative z-50 bg-white">
            <div className="flex items-center gap-4 w-full max-w-[1500px] mx-auto">
                <a href="/" className="flex-shrink-0">
                    <img src={logo} alt="TCES Logo" className="h-8 md:h-10 w-auto" />
                </a>
                <Navbar />
            </div>
        </header>
    );
}