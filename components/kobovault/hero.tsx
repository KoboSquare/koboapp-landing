import Image from "next/image";
import heroImg from "@/assets/images/koboVaultApp.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";

export default function Hero() {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 py-4 md:py-6 px-4 relative z-10'>
            <div className='col-span-2 max-w-2xl  py-10 text-white'>
                <div>
                    <h1 className='text-2xl md:text-5xl font-bold leading-[1.25]'>
                        Banking Without Walls <br />
                        Security Without <br />
                        Compromise
                    </h1>

                    <p className='my-6 text-sm md:text-base'>
                        We built Kobo Vault to bring financial freedom closer to everyone.
                        With advanced money transfer options, automated payments,
                        and smart virtual cards, you can transact safely and confidently.
                    </p>
                </div>

                <div className='flex gap-5 pt-4'>
                    <Image src={appStoreSvg} alt='app-store' width={150} height={150} />
                    <Image
                        src={playStoreSvg}
                        alt='play-store'
                        width={150}
                        height={150}

                        className='object-contain'
                    />
                </div>
            </div>
            <div className='col-span-1'>
                <Image src={heroImg} alt='hero-img' width={500} height={500} priority />
            </div>
        </div>
    );
}
