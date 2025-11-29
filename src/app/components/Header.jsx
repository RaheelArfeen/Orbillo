import Image from "next/image";
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="relative z-50 max-w-7xl mx-auto flex py-9 justify-between items-center w-full px-4">
            
            {/* Left Side: Logo */}
            <div className="relative z-10">
                <Image src={logo} alt="Logo" />
            </div>
            
            {/* Right Side: Button & Menu */}
            <div className="flex items-center gap-6 relative z-10">
                <button className="py-[14px] px-[28px] rounded-full border border-white outfit hover:bg-[#C9FF90] hover:border-[#C9FF90] hover:text-[#17241F] transition-colors">
                    Book A Free Strategy Call
                </button>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                    <path d="M4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H42C42.5304 10 43.0391 10.2107 43.4142 10.5858C43.7893 10.9609 44 11.4696 44 12C44 12.5304 43.7893 13.0391 43.4142 13.4142C43.0391 13.7893 42.5304 14 42 14H6C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12ZM4 24.064C4 23.5336 4.21071 23.0249 4.58579 22.6498C4.96086 22.2747 5.46957 22.064 6 22.064H42C42.5304 22.064 43.0391 22.2747 43.4142 22.6498C43.7893 23.0249 44 23.5336 44 24.064C44 24.5944 43.7893 25.1031 43.4142 25.4782C43.0391 25.8533 42.5304 26.064 42 26.064H6C5.46957 26.064 4.96086 25.8533 4.58579 25.4782C4.21071 25.1031 4 24.5944 4 24.064ZM6 34.13C5.46957 34.13 4.96086 34.3407 4.58579 34.7158C4.21071 35.0909 4 35.5996 4 36.13C4 36.6604 4.21071 37.1691 4.58579 37.5442C4.96086 37.9193 5.46957 38.13 6 38.13H42C42.5304 38.13 43.0391 37.9193 43.4142 37.5442C43.7893 37.1691 44 36.6604 44 36.13C44 35.5996 43.7893 35.0909 43.4142 34.7158C43.0391 34.3407 42.5304 34.13 42 34.13H6Z" fill="white" />
                </svg>
            </div>
        </div>
    );
};

export default Header;