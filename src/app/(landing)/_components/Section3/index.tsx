import Section from "@/components/Section";
import Marquee from "react-fast-marquee";

const marquees = ["Organic Products", "Vegan", "Cruelty Free", "Made in France"];

const TextComponent = ({ text }: { text: string }) => {
    return <p className="text-xl lg:text-3xl text-primary px-5 rounded-lg ml-4 font-semibold tracking-tighter lg:h-[72px] flex justify-center items-center">{text}</p>;
};

const Section3 = () => {
    return (
        <Section id="section3">
            <div className="flex flex-col py-2 lg:py-4 gap-4 bg-secondary">
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
            </div>
        </Section>
    );
};

export default Section3;