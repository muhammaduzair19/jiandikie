import React from 'react'

const Tutorial = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto flex items-start flex-col py-6 px-4 md:flex-row md:items-center" id='tutorial'>
            <div data-aos='fade-up'  className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center'>
                <span className="flex justify-center flex-col items-center self-center md:self-start">
                    <h1 className="text-xl md:text-2xl font-bold mb-3 self-center">Tutorial</h1>
                    <span className="w-16 border-b-4 border-[#116655]"></span>
                </span>
                <p className="text-xl md:text-3xl font-bold text-center md:text-left my-5">Lorem Ipsum is simply dummy text of the printing </p>
                <p className="text-sm md:text-xl text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>

            </div>
            <div data-aos='fade-left'  className='w-full h-1/2 md:w-1/2 overflow-hidden object-cover object-center  rounded-md'>
                <img 
                className='w-full h-full object-cover'
                src="https://s3-alpha-sig.figma.com/img/a0fe/9140/fee34d6c5dfca4d396a05981378e1a24?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOvtnCLExNHHS2XGwwZ4fya096rt6n5l0Pboj3eDXfvXVj~SChYA9hvSNLU~~uU2LtNIPn2ooXvsbRbwlKHt4Yko-KrC9a4nijCFPs1tFAX1Cg7p8rYbSJxhNGP~kQYIYVsKTb7zwtLVUncXXnvrXI9YhfBGYG971q06AXWKTlrXB8WDU5TytvnWalzcTrG6XAWc6gK6E1EK6v2F82idmbBr19MJXu86sKk~H4i2P33N5v8Pw~-XGYfLRpZcp80VQT-w5CkaGpft4EKIv0R8gd~QLIUQgmZgYPAyEBV~hR8wvuFvVo831By6825bqgZxQGQv3-VlVfAH42r-pE6WCQ__" alt="" />
            </div>
        </div>
    )
}

export default Tutorial