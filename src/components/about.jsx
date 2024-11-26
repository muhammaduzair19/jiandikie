import { Pen, PenIcon } from "lucide-react";

const About = () => {
    return (
        <div
            className="max-w-7xl min-h-screen mx-auto flex items-start flex-col px-4 justify-center"
            id="about-us"
        >
            <span className="flex justify-center flex-col items-center self-center">
                <h1
                    data-aos="fade-up"
                    className="text-xl md:text-2xl font-bold mb-3 self-center "
                >
                    About
                </h1>
                <span className="self-center w-16 border-b-4 border-[#116655]"></span>
            </span>

            <p
                data-aos="fade-up"
                className="text-2xl md:text-3xl font-bold self-center my-5"
            >
                Why Us
            </p>
            <p data-aos="fade-up" className="text-sm md:text-xl text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,{" "}
            </p>

            <div
                data-aos="fade-up"
                className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5 place-items-center md:mt-20"
            >
                <Badge />
                <Badge />
                <Badge />
                <Badge />
            </div>
        </div>
    );
};

export default About;

const Badge = () => (
    <div data-aos="fade-up" className="flex gap-2 md:flex md:flex-col">
        <div className="block md:flex gap-2 items-center">
            <span className="flex justify-center items-center bg-gradient-to-br to-[#116655] from-[#5CC1AD] p-6 rounded-xl">
                <PenIcon color="#ffff" size={20} />
            </span>
            <h2 className="font-semibold hidden md:block text-xl">
                Lorem Ipsum is simply dummy{" "}
            </h2>
        </div>
        <span className="inline-block">
            <h2 className="font-semibold md:hidden">Lorem Ispum</h2>
            <p className="text-gray-600 text-xs md:text-lg md:mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
        </span>
    </div>
);
