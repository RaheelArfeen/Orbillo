import Image from 'next/image';
import OurWorkBg from '../Image/OurWork.avif';
import work1 from '../Image/OurWorkImages/1.avif'
import work2 from '../Image/OurWorkImages/2.avif'
import work3 from '../Image/OurWorkImages/3.avif'
import work4 from '../Image/OurWorkImages/4.avif'
import work5 from '../Image/OurWorkImages/5.avif'
import work6 from '../Image/OurWorkImages/6.avif'

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
        </div >
    );
};

export default OurWork;