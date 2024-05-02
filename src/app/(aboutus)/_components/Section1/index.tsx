import Image from "next/image";
import Section from "@/components/Section";
import { useContext } from "react";
import { ScrollContext } from "@/app/(aboutus)/useScroll";

const Section1 = () => {
    const { scrollY } = useContext(ScrollContext);
    return (
        <Section id="section1">
            <div
                style={{
                    transform: `translateY(${scrollY * 0.35}px) scale(${1 - scrollY * 0.00035
                        })
            `,
                }}
                className="h-screen bg-primary flex flex-col gap-6 justify-center items-center relative"
            >
                <div className='w-full h-screen relative overflow-hidden'>
                    <video
                        src='/serum.webm'
                        autoPlay
                        loop
                        muted
                        style={{ position: "fixed", width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
                    />
                </div>
                <span className="absolute top-[75%] left-1/2 -translate-y-1/2 -translate-x-1/2 animate-bounce">
                    <Image src="/downArrow.svg" width={14} height={17} alt="down arrow" />
                </span>
            </div>
        </Section>
    );
};

export default Section1;
