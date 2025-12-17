import React from 'react';

const Challanges = () => {
    return (
        <div>
            <section className='max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 py-25 space-y-10'>
                <div>
                    <h1 className='text-[#373737] text-3xl md:text-4xl recoleta leading-[140%] -tracking-[1px] max-w-[650px] mb-9'>At Orbillo, we believe that every business challenge can be solved through the right design approach..</h1>
                    <h1 className='text-[#696969] text-xl md:text-2xl outfit leading-[140%] tracking-[1px] max-w-[800px] space-y-6'>
                        <p>We’re a team of experienced designers, developers, and marketers — each with over a decade of experience helping brands turn complexity into clarity and strategy into growth.</p>
                        <p>We’re a team of experienced designers, developers, and marketers — each with over a decade of experience</p>
                    </h1>
                </div>
                <div className='max-w-[620px]'>
                    <img src="https://i.ibb.co.com/5hY70cgJ/image.png" className='w-full h-full' alt="" />
                </div>
            </section>
        </div>
    );
};

export default Challanges;