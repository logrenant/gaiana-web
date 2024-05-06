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
                className="h-screen bg-primary flex flex-col gap-6 justify-center items-center relative px-4"
            >
                <h1 className="font-playfair text-black text-8xl lg:text-[128px] font-medium leading-[100px] tracking-tighter">
                    Contact
                </h1>
                <p className="text-regular lg:text-[22px] text-gray max-w-[650px] text-center font-normal leading-tight">
                    Communication is invaluable to us. In the past, we ve provided valuable information and solutions to numerous customers, visitors, and partners. We look forward to hearing from you and collaborating together.
                </p>
                <span className="absolute top-[75%] left-1/2 -translate-y-1/2 -translate-x-1/2 animate-bounce">
                    <Image src="/downArrow.svg" width={14} height={17} alt="down arrow" />
                </span>
            </div>
        </Section>
    );
};

export default Section1;