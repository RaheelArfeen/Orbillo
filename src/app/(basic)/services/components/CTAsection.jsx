import React from 'react';

const CTAsection = () => {
    return (
        <div className='relative w-full bg-white py-30'>

            <section className='relative z-10 max-w-[1380px] mx-auto flex flex-col items-center justify-center py-24 rounded-lg overflow-hidden'>
                <div className='absolute inset-0 z-0 px-4'>
                    <img
                        className='w-full h-full object-cover pointer-events-none'
                        src="https://i.ibb.co.com/qMz37BpZ/image.png"
                        alt="Background"
                    />
                </div>

                {/* Content Container - Added 'relative' and 'z-10' to pull text above image */}
                <div className='z-0 flex flex-col items-center'>
                    <h1 className='text-4xl bricolage font-semibold text-[#0C2E24] max-w-[600px] text-center mb-8'>
                        Not get your Answer yet?Not get your Answer yet?
                    </h1>
                    <button className='bg-[#02403A] py-3 px-6 text-[#C9FF90] text-xl outfit rounded-full hover:bg-[#035a52] transition-colors'>
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CTAsection;