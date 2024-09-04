import Intro from '../assets/intro.svg'
const WhatYouCanDo = () => {
    return (
        <div className="max-w-[88rem] min-h-screen mx-auto flex items-start flex-coljustify-center px-3 mb-20" id='what-you-can-do'>
            <div className="w-full h-full border border-gray-400 rounded-[50px] px-3 py-5">
                <span className="flex justify-center flex-col">
                    <h1 data-aos='fade-up' className="text-xl md:text-2xl font-bold mb-3 self-center ">What you can do</h1>
                    <span className="self-center w-16 border-b-4 border-[#116655]"></span>
                </span>

                <p data-aos='fade-up' className="text-xl md:text-3xl font-bold text-center my-5">What type of content you can generate with Jiandikie</p>
                <p data-aos='fade-up' className="text-sm md:text-xl text-center max-w-6xl self-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>

                <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
            </div>
        </div>
    )
}

export default WhatYouCanDo;



const Box = () => (
    <div data-aos='fade-up' className="w-fit min-h-14 p-1 flex items-center gap-2 border border-gray-300 rounded-lg">
        <span className="min-w-14 h-full bg-[#DCFFF8] flex justify-center items-center rounded-md">
            <img src={Intro} alt="" />
        </span>
        <p className='text-center w-full text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8'>
            Some text
        </p>
    </div>
)