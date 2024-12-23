import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showMenu ? "hidden" : "";
    }, [showMenu]);

    return (
        <>
            <div className="bg-white md:bg-opacity-40 md:backdrop-blur-3xl h-full  md:shadow-lg z-50 md:border-b md:border-white/20 w-full sticky top-0">
                <nav className="max-w-7xl mx-auto bg-white md:bg-transparent p-4 sticky top-0 flex justify-between items-center">
                    <Link
                        to="/"
                        activeClass="active"
                        span={true}
                        smooth={true}
                        className="cursor-pointer"
                    >
                        <span className="flex items-center font-primary gap-2">
                            <img src={"/assets/logo.svg"} alt="" />
                            <h3 className="font-bold text-black md:text-xl lg:text-2xl">
                                Jiandikie
                            </h3>
                        </span>
                    </Link>
                    <div className="hidden md:flex gap-6 items-center">
                        {[
                            "about us",
                            "What you can do",
                            "Price",
                            "Tutorial",
                            "Blog",
                        ]?.map((i, idx) => (
                            <Link
                                key={i + idx}
                                to={i?.split(" ").join("-").toLowerCase()}
                                activeClass="active"
                                span={true}
                                smooth={true}
                                className="capitalize cursor-pointer font-bold mr-4 text-lg lg:text-xl"
                            >
                                {i}
                            </Link>
                        ))}

                        <button className="inline-block text-[#116655] font-semibold py-2 px-4 rounded-full bg-white shadow-lg transition duration-300 md:text-lg md:px-6">
                            Get Started
                        </button>
                    </div>
                    <span
                        onClick={() => setShowMenu(!showMenu)}
                        className={`${
                            showMenu ? "rotate-90" : ""
                        } md:hidden  duration-300`}
                    >
                        <MdOutlineMenu size={30} />
                    </span>
                </nav>

                <div
                    className={`md:hidden md:relative w-full p-8 min-h-screen right-0 absolute transition-all delay-500  ease-in-out duration-700 bg-white ${
                        showMenu ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="self-end flex justify-end text-right flex-col items-end">
                        <ul>
                            {[
                                "about us",
                                "What you can do",
                                "Price",
                                "Tutorial",
                                "Blog",
                            ]?.map((i, idx) => (
                                <Link
                                    key={i + idx}
                                    onClick={() => setShowMenu(false)}
                                    to={i?.split(" ").join("-").toLowerCase()}
                                    activeClass="active"
                                    span={true}
                                    smooth={true}
                                    className="font-bold cursor-pointer block capitalize mb-3 text-xl"
                                >
                                    {i}
                                </Link>
                            ))}
                        </ul>
                        <button
                            href="#"
                            className="inline-block bg-gradient-to-r from-[#5ac1ac] to-[#116655] text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300 md:text-lg md:px-6"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
