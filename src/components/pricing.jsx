import { FaCheck } from "react-icons/fa";

const Packages = [
    {
        name: 'Plan 1',
        tagline: 'For individuals looking to get started.',
        price: 6,
        features:
            [
                '25K Words', 'Unlimited Projects', 'Active Custom Support', 'All 12+ Content Types', 'Multiple Languages', 'Powerful Algorithm'
            ]
    },
    {
        name: 'Plan 2',
        tagline: 'For bloggers, freelancers & small teams.',
        price: 12,
        features:
            [
                '60K Words', 'Unlimited Projects', 'Active Custom Support', 'All 12+ Content Types', 'Multiple Languages', 'Powerful Algorithm'
            ]
    },
    {
        name: 'Plan 3',
        tagline: 'For professionals & marketing teams.',
        price: 25,
        features:
            [
                'Unlimited Words', 'Unlimited Projects', 'Active Custom Support', 'All 12+ Content Types', 'Multiple Languages', 'Powerful Algorithm'
            ]
    },
];


const Pricing = () => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto px-4" id="price">
            <span className="flex justify-center flex-col items-center self-center">
                <h1 data-aos='fade-up' className="text-xl md:text-2xl font-bold mb-3 self-center ">Pricing</h1>
                <span className="self-center w-16 border-b-4 border-[#116655]"></span>
            </span>
            <p data-aos='fade-up' className="text-2xl md:text-3xl font-bold my-5 text-center">Unbelievable Pricing</p>
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-12">
                {
                    Packages?.map((pack) => <PricingColumn key={pack?.name} {...pack} />)
                }
            </div>
        </div>
    )
}

export default Pricing;


const PricingColumn = ({ name, tagline, price, features }) => (
    <div data-aos={name == 'Plan 1' ? 'fade-right' : name === 'Plan 2' ? 'fade-up' : 'fade-left'} className={`w-full min-h-80 md:h-full flex items-center flex-col py-6 px-2 md:px-12 md:py-12 rounded-xl ${name === 'Plan 2' ? "bg-[#5CC1AD] text-white" : "bg-[#F6F6F6] text-black"} `}>
        <span className="flex flex-col items-center mb-5 gap-2">
            <h2 className="font-bold text-lg md:text-3xl lg:text-4xl">{name}</h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center ">{tagline}</p>
        </span>

        <p className="text-4xl md:text-6xl lg:text-9xl font-bold mb-5">
            <sup className="text-xs md:text-sm lg:text-base font-bold">$</sup>
            {price}
            <sup className="text-xs md:text-sm lg:text-base font-bold -mb-20">/ month</sup>
        </p>
        <div className="flex flex-col items-start w-full mb-5">
            {
                features?.map((i) => (
                    <span className="font-bold flex items-center gap-2 mb-2 text-xs sm:text-base lg:text-lg md:gap-3">
                        <FaCheck />
                        {i}
                    </span>
                ))
            }
        </div>
        <button className={`px-8 py-1.5 md:py-3 md:px-12 text-sm font-bold rounded-md text-white ${name === 'Plan 2' ? "bg-black" : "bg-[#0BC1E9]"}`}>
            Select
        </button>
    </div>
)