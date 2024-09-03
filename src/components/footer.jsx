import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";


const Footer = () => {
    return (
        <div className='w-full h-full bg-[#f1f1f1]'>
            <footer className='max-w-7xl mx-auto min-h-48 text-black bg-[#F1F1F1] relative px-5 font-primary'>
                <div className='w-[80%] mx-auto bg-[#116655] p-4 rounded-lg absolute -top-28 left-0 right-0 flex flex-col items-center gap-8'>
                    <p className='text-white text-2xl font-bold font-primary text-center'>So why are you waiting?</p>
                    <button className="inline-block bg-white text-[#5CC1AD] font-semibold py-2 px-4 rounded-full">
                        Get Started
                    </button>
                </div>
                <div className='py-20 flex gap-6 flex-col md:flex-row justify-between'>
                    <div>
                        <span className="flex justify-center flex-col">
                            <h1 className="text-xl md:text-2xl font-bold mb-3">WE ARE ALSO ON</h1>
                            <span className="w-16 border-b-4 border-black"></span>
                        </span>
                        <span className='flex gap-3 text-2xl mt-5 text-black'>
                            <FaInstagram />
                            <FaFacebook />
                            <GrTwitter />

                        </span>
                    </div>
                    <div className='flex flex-col gap-y-2 py-4'>
                        <h4 className='font-bold text-lg'>Don't miss out!</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <label htmlFor="newsletter" className='rounded-full bg-white flex overflow-hidden' >
                            <input type="text" placeholder='Enter your email here.' className='py-2 px-4 w-full' />
                            <button className="inline-block text-white bg-[#116655] font-semibold py-2 px-4 rounded-full">
                                Submit
                            </button>
                        </label>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>Pages</h4>
                        <p>Home</p>
                        <p>About</p>
                    </div>
                </div>

            </footer >
            <div className='border-t my-2 mx-20 bg-transparent border-black'>

            </div>
            <p className='text-center pb-3'>Copyright &copy; 2024 </p>

        </div>
    )
}

export default Footer