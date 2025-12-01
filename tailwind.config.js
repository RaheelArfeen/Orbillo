/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // 1. Add these Keyframes
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }, // Moves left
                },
            },
            // 2. Add the Animation utility
            animation: {
                marquee: 'marquee 25s linear infinite', // Adjust '25s' to make it faster/slower
            },
        },
    },
    plugins: [],
};