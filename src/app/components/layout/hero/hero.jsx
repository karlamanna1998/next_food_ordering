import Image from "next/image";
import RightIcon from "../../icons/rightIcon";

export default function Hero(){
    return (
        <section className="hero_container">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">Everything <br/>is better <br/> with a <span className="text-primary">pizza</span></h1>
            <p className="my-4 text-gray-500">Pizza is the missing piece that mkes every day complete, a simple yet delicious joy in life.</p>
            <div className="flex gap-3">
                <button className="bg-primary uppercase text-sm items-center text-white px-6 py-3 rounded-full flex gap-2">
                    Order now  <RightIcon/>
                </button>
                <button className="flex items-center gap-2 font-semibold text-gray-600">Learn more <RightIcon/></button>
            </div>
            </div>
            <div className="relative">
           <Image src={'/pizza.png'} layout="fill" objectFit="contain"/>
            </div>
        </section>
    )
}