import Navbar from '@/components/Navbar';
import Image from 'next/image';
import MePhoto from '@/assets/images/common/me.jpg';

export default function FirstScreen() {
    return (
        <section className="h-screen ld:max-h-[80vw] min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex flex-col justify-center">
            <div className="flex items-center justify-between mt-auto pt-5 -mb-5">
                <div>
                    <span className="text-5xl font-bold text-primary-accent">еще в работе (:</span>
                    <h1 className="text-7xl md:text-8xl 2xl:text-9xl font-bold text-primary-base mt-4 mb-6">
                        Богдан<br />Пирожок
                    </h1>
                    <span className="text-3xl 2xl:text-4xl text-gray-200">Fullstack web developer</span>
                </div>

                <Image
                    src={ MePhoto }
                    alt="It`s me"
                    className="w-1/3 object-cover rounded-xl hidden md:block max-h-[95%]"
                />
            </div>
            <Navbar />
        </section>
    );
}
