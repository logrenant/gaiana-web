import Section from "@/components/Section";
import Marquee from "react-fast-marquee";

const marquees = ["Organic Products", "Vegan", "Cruelty Free", "Made in France"];

const TextComponent = ({ text }: { text: string }) => {
    return <p className="text-3xl text-primary px-5 rounded-lg ml-4 font-semibold tracking-tighter h-[72px] flex justify-center items-center">{text}</p>;
};

const Section3 = () => {
    return (
        <Section id="section3">
            <div className="flex flex-col gap-12 py-3 my-6 bg-secondary">
                <div className="flex flex-col gap-4">
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
            </div>
        </Section>
    );
};

export default Section3;