'use client';

import { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSe7mgXo7cVJGjyHBl6CxxqZvIuE_1hrBnawGdBmW1p-EPjfLQ/viewform');
    }, []);

    return (
        <div className="bg-white fixed inset-0 z-[9999] flex items-center justify-center"></div>
    );
};

export default Page;
