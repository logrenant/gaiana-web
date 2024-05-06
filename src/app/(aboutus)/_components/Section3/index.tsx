import Section from '@/components/Section';
import React from 'react'
import Marquee from "react-fast-marquee";


const marquees = ["SÏANNA", "LA FANTAISIE PARIS", "ETRE WELNESS", "GAÏANA", "BLACK SWAN PARIS"];

const TextComponent = ({ text }: { text: string }) => {
    return <p className="lg:text-3xl text-xl text-secondary px-5 py-3 border border-gray rounded-lg ml-4 font-semibold tracking-tighter  flex justify-center items-center">{text}</p>;
};

const Section3 = () => {
    return (
        <Section id="section3">
            <Marquee
                autoFill={true}
                pauseOnHover={true}
                gradient={false}
                speed={40}
            >
                {marquees.map((marquee, index) => (
                    <TextComponent key={index} text={marquee} />
                ))}
            </Marquee>
        </Section>
    )
}

export default Section3
