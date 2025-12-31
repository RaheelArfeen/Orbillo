import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton = () => {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=8801711252085&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center 
                       w-12 h-12 bg-[#25D366] rounded-full shadow-lg 
                       hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 
                       group active:scale-95"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp size={28} className="text-white drop-shadow-md" />

            <span className="absolute right-16 scale-0 transition-all rounded bg-gray-800 
                             p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
                Chat with us!
            </span>
        </a>
    );
};

export default FloatingButton;