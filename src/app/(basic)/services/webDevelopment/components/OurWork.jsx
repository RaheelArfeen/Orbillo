import Image from 'next/image';
import OurWorkBg from '../../Image/OurWork.avif';
import work1 from '../../Image/OurWorkImages/1.avif'
import work2 from '../../Image/OurWorkImages/2.avif'
import work3 from '../../Image/OurWorkImages/3.avif'
import work4 from '../../Image/OurWorkImages/4.avif'
import work5 from '../../Image/OurWorkImages/5.avif'
import work6 from '../../Image/OurWorkImages/6.avif'
import Marquee from 'react-fast-marquee';

const OurWork = () => {
    return (
        <div className='relative w-full overflow-hidden'>
            <div className='absolute top inset-0 -z-10 overflow-hidden'>
                <Image
                    src={OurWorkBg}
                    alt="Background"
                    className='w-full h-full object-cover'
                />
            </div>

            <section className='max-w-[1380px] mx-auto px-4 py-12 md:py-25'>
                <div className='space-y-8 text-center w-full flex flex-col items-center mb-12'>
                    <p className='uppercase outfit text-sm font-bold text-[#E3E3E3]/55 tracking-[2.7px]'>
                        Featured Works
                    </p>
                    <h3 className='text-3xl md:text-[50px] font-medium max-w-[700px] bricolage text-white leading-tight tracking-tight'>
                        <p>Designs That <span className='playfair'>Speak Louder</span> Than Words</p>
                    </h3>
                </div>

                <div className='grid md:grid-cols-3 gap-6'>
                    <Image src={work1} className='w-full h-full rounded-lg' />
                    <Image src={work2} className='w-full h-full rounded-lg' />
                    <Image src={work3} className='w-full h-full rounded-lg' />
                    <Image src={work4} className='w-full h-full rounded-lg' />
                    <Image src={work5} className='w-full h-full rounded-lg' />
                    <Image src={work6} className='w-full h-full rounded-lg' />
                </div>

                <div className='flex items-center justify-center w-full mt-15'>
                    <button className='md:py-4 py-3 px-10 rounded-full bg-[#C9FF90] text-[#17241F] hover:bg-[#17241F] hover:text-[#C9FF90] transition duration-300 border-b border-[#C9FF90] hover:border-[#4d6641] outfit md:text-xl text-base  max-[350px]:text-xs cursor-pointer'>
                        <a href="https://calendly.com/teamorbillo/30min" target="_blank" rel="noopener noreferrer">Schedule A Meeting</a>
                    </button>
                </div>
            </section >

            <div className="w-full bg-[#5ba32b] py-6.5 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-[46px] font-medium mx-6 md:mx-10 tracking-tight bricolage">
                            Web Development
                        </span>
                        <span className="text-white text-5xl font-black">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.0749 12.1C4.94157 12.1 3.91657 11.8334 2.9999 11.3C2.08324 10.75 1.3499 10.025 0.799903 9.12502C0.266569 8.20836 -9.74834e-05 7.18336 -9.74834e-05 6.05002C-9.74834e-05 4.91669 0.266569 3.90002 0.799903 3.00002C1.3499 2.08336 2.08324 1.35836 2.9999 0.825023C3.91657 0.275024 4.94157 2.3663e-05 6.0749 2.3663e-05C7.19157 2.3663e-05 8.20824 0.275024 9.1249 0.825023C10.0416 1.35836 10.7666 2.08336 11.2999 3.00002C11.8332 3.90002 12.0999 4.91669 12.0999 6.05002C12.0999 7.18336 11.8332 8.20836 11.2999 9.12502C10.7666 10.025 10.0416 10.75 9.1249 11.3C8.20824 11.8334 7.19157 12.1 6.0749 12.1Z" fill="white" />
                            </svg>

                        </span>
                    </div>
                </Marquee>
            </div>
        </div >
    );
};

export default OurWork;