import HeroImg from '../assets/hero.svg';



const Hero = () => {

    return (
        <>
            <div className="max-w-full h-screen bg-gradient-to-tl from-[#5CC1AD] via-[#5cc1ad84] to-white text-start curved-bottom ">
                <div className='w-full h-full flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto px-5  md:px-8 -mt-2  lg:-mt-20'>
                    <div data-aos='fade-left'  className='w-full flex justify-center md:w-1/2 h-1/2'>
                        <img src={HeroImg} alt="" className='w-full' />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h1 data-aos='fade-up'   className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
                            Jiandikie - The best AI Content Generator Tool
                        </h1>
                        <p data-aos='fade-up' className="text-gray-600 mb-8 text-sm md:text-lg lg:text-2xl">
                            Create content 12x faster with our artificial intelligence. Jiandikie helps you to create high-quality content, in just a few seconds.
                        </p>
                        <button data-aos='fade-up' className="inline-block bg-gradient-to-r from-[#5ac1ac] to-[#116655] text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300 md:text-lg md:px-6">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero