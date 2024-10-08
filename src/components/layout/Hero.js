import Image from "next/image";
import Right_Arrow from "../icons/Right_Arrow";

export default function Hero(){
    return (
        <section className="hero">
            <div className="py-10">
                <h1 className="text-5xl font-semibold">
                    Everything<br /> 
                    is better<br /> 
                    with&nbsp;
                    <span className="text-primary">
                        Boba
                    </span> 
                </h1>
                <p className="my-4 text-[#4a4a4a]">
                    Your local ATX boba shop, bringing premier flavors to everbody's favorite drinks.<br />
                    Explore our ever changing special menu based on seasonal availability. 
                    Grab a drink, play some games, get work done. 
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary rounded-full text-white px-4 py-2 flex gap-2 uppercase">
                        Order Now
                        <Right_Arrow />
                    </button>
                    <button className="flex gap-2 py-2 font-semibold text-[#717171]">
                        Learn More 
                        <Right_Arrow />
                    </button>
                </div>
            </div>

            <div className="relative">
                <Image src={'/images/austea_hero.jpeg'} layout={'fill'} objectFit={'cover'} alt={'hero-drinks'} />
            </div>
        </section>
    );
} 