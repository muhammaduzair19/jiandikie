import React from "react";

const Tutorial = () => {
    return (
        <div
            className="max-w-7xl h-screen mx-auto flex items-start flex-col py-6 px-4 md:flex-row md:items-center"
            id="tutorial"
        >
            <div
                data-aos="fade-up"
                className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center"
            >
                <span className="flex justify-center flex-col items-center self-center md:self-start">
                    <h1 className="text-xl md:text-2xl font-bold mb-3 self-center">
                        Tutorial
                    </h1>
                    <span className="w-16 border-b-4 border-[#116655]"></span>
                </span>
                <p className="text-xl md:text-3xl font-bold text-center md:text-left my-5">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                </p>
                <p className="text-sm md:text-xl text-center md:text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,{" "}
                </p>
            </div>
            <div
                data-aos="fade-left"
                className="w-full h-1/2 md:w-1/2 overflow-hidden object-cover object-center  rounded-md"
            >
                <img
                    alt="Tutorial Image"
                    className="w-full h-full object-cover"
                    src="/assets/jiandkie.svg"
                />
            </div>
        </div>
    );
};

export default Tutorial;
