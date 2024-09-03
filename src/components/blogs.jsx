import { FaArrowRight } from "react-icons/fa6";

const Blogs = () => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto flex items-start flex-col  px-4 py-8 mb-20 pb-20 md:pb-0">
            <h1 data-aos='fade-up'  className="text-xl md:text-2xl font-bold mb-3 self-center md:self-start">Blogs</h1>
            <p data-aos='fade-up'  className="text-sm md:text-xl text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
            <div data-aos='fade-down'  className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    )
}

export default Blogs


const Blog = () => (
    <div className='flex flex-col'>
        <span className='h-28 sm:h-36 md:h-48 rounded-md overflow-hidden'>
            <img
                className='w-full h-full object-fit overflow-hidden'
                src='https://s3-alpha-sig.figma.com/img/a0fe/9140/fee34d6c5dfca4d396a05981378e1a24?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOvtnCLExNHHS2XGwwZ4fya096rt6n5l0Pboj3eDXfvXVj~SChYA9hvSNLU~~uU2LtNIPn2ooXvsbRbwlKHt4Yko-KrC9a4nijCFPs1tFAX1Cg7p8rYbSJxhNGP~kQYIYVsKTb7zwtLVUncXXnvrXI9YhfBGYG971q06AXWKTlrXB8WDU5TytvnWalzcTrG6XAWc6gK6E1EK6v2F82idmbBr19MJXu86sKk~H4i2P33N5v8Pw~-XGYfLRpZcp80VQT-w5CkaGpft4EKIv0R8gd~QLIUQgmZgYPAyEBV~hR8wvuFvVo831By6825bqgZxQGQv3-VlVfAH42r-pE6WCQ__' alt="" />
        </span>
        <span className='p-2 flex flex-col gap-2'>
            <h3 className='font-bold text-base md:text-lg lg:text-xl'>Blog Title</h3>
            <p className='text-sm text-justify leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan venenatis lectus et bibendum. </p>
            <span className='text-xs md:text-sm flex items-center justify-between'>
                <span>May 23, 2022</span>
                <span className="hover:translate-x-full duration-300 transition-all">
                    <FaArrowRight />
                </span>
            </span>
        </span>
    </div>
)