'use client';

import { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        window.location.replace('https://forms.gle/7WozrpBFHZG9vMSu6');
    }, []);

    return (
        <div className="bg-white fixed inset-0 z-[9999] flex items-center justify-center"></div>
    );
};

export default Page;
