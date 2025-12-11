import React from 'react';

const GRID_DATA = [
    {
        Text: '15',
        description: 'Average Team Experience',
        BgColor: '#07302C',
        TextColor: '#6BBE46'
    },
    {
        Image: 'https://i.ibb.co.com/9kpfSscc/image.png'
    },
    {
        Text: '120',
        description: 'Projects Completed Globally',
        BgColor: '#07302C',
        TextColor: '#6BBE46'
    },
    {
        Image: 'https://i.ibb.co.com/wb5fcy2/image.png'
    },
    {
        Text: '10',
        description: 'Industries Served',
        BgColor: '#6BBE46',
        TextColor: '#07302C'
    },
    {
        Image: 'https://i.ibb.co.com/0L8qrqj/image.png'
    },
]

const OurCollaboration = () => {
    return (
        <div>
            <section className="max-w-[1320px] mx-auto py-25 px-4">
                <h1 className="reloceta max-w-[720px] text-[#696969] text-center mx-auto text-3xl md:text-4xl leading-[130%] md:leading-[140%] -tracking-[1px">
                    We’ve proudly <span className="text-[#040404] underline decoration-[#040404] decoration-3 underline-offset-5">collaborated</span> with
                    <br />
                    <span className="text-[#040404] underline decoration-[#040404] decoration-3 underline-offset-5">businesses</span> that believe in the <span className="text-[#040404] underline decoration-[#040404] decoration-3 underline-offset-5">power of design</span>
                </h1>

                {/* text-white reloceta text-3xl md:text-4xl leading-[130%] md:leading-[140%] -tracking-[1px */}

                {/* Grid Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    {GRID_DATA.map((item, index) => (
                        <div key={index} className="flex items-center justify-center h-[350px] rounded-2xl overflow-hidden"
                            style={{ backgroundColor: item.BgColor || 'transparent' }}
                        >
                            {item.Image ? (
                                <img
                                    src={item.Image}
                                    alt="collab"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="text-center flex items-center justify-center" style={{ color: item.TextColor || 'white' }}>
                                    <div className=''>
                                        <p className="reloceta text-[175px] flex justify-center  text-center leading-46 -tracking-[2px]">{item.Text} <span>+</span></p>
                                        <p className="spartan text-3xl font-medium">{item.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default OurCollaboration;
