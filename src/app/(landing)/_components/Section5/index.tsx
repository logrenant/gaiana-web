import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/Section";

const TeamAccordion = () => {
    const [open, setOpen] = useState(items[0].id);
    return (
        <Section id="section5">
            <section className="p-18 bg-primary">
                <div className="flex flex-col h-fit w-full overflow-hidden">
                    {items.map((item) => {
                        return (
                            <Panel
                                key={item.id}
                                open={open}
                                setOpen={setOpen}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </section>
        </Section>
    );
};

interface PanelProps {
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
    id: number;
    title: string;
    description: string;
}

const Panel = ({
    open,
    setOpen,
    id,
    title,
    description,
}: PanelProps) => {
    const isOpen = open === id;

    return (
        <div
            onClick={() => setOpen(id)}
            className="border-b-[1.5px] first:border-t-[1.5px] border-gray py-8 w-full h-full group">

            <button className="flex justify-between w-full cursor-pointer">
                <span className="text-3xl font-semibold">
                    {title}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={panelVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="flex items-center"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="text-2xl font-normal text-secondary leading-7"
                        >
                            <p className="w-full">{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeamAccordion;

const panelVariants = {
    open: {
        width: "100%",
        height: "300px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.550,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        title: "Brand Creation",
        description:
            "Brand creation is the cornerstone of a company's identity, blending market insight, consumer understanding, and strategic planning to craft authentic, memorable brands. From defining values to designing visuals, every step aims to create a unique brand that resonates and engages with consumers, driving lasting connections and market success.",
    },
    {
        id: 2,
        title: "Formulation",
        description:
            "Formulation serves as the bedrock of product development, blending scientific precision with creative ingenuity to craft solutions that meet diverse consumer needs. It entails meticulous research, innovative ideation, and rigorous testing to ensure each formulation embodies excellence, efficacy, and safety, thereby enhancing consumer trust and loyalty."
    },
    {
        id: 3,
        title: "Regulation",
        description:
            "Ensuring adherence to legal standards, ethical guidelines, and safety protocols. It involves navigating a comprehensive framework of regulations established by governing bodies to protect public health, encourage fair competition, and maintain the integrity of the skincare sector. Navigating this regulatory landscape demands constant vigilance, specialized knowledge, and adaptability to keep pace with evolving regulations while ensuring operational excellence. Central to regulatory compliance is a dedication to accountability, transparency, and responsibility, fostering trust among stakeholders and cultivating an environment conducive to sustainable growth and innovation within the skincare laboratory.",
    },
    {
        id: 4,
        title: "Manufacturing",
        description:
            "Manufacturing lies at the heart of our operations, where precision meets innovation to bring skincare products to life. Our state-of-the-art facilities combine cutting-edge technology with stringent quality control measures to ensure every product meets the highest standards of efficacy and safety. With a commitment to sustainability and ethical practices, we strive to minimize environmental impact while maximizing product performance, forging a path towards a brighter, healthier future for skincare manufacturing.",
    },
    {
        id: 5,
        title: "Packaging",
        description:
            "Packaging is where creativity meets functionality, and at our facility, we excel in crafting packaging solutions that not only protect your products but also elevate your brand identity. Our team of skilled designers works closely with clients to understand their vision and requirements, ensuring that every packaging design reflects their unique brand story and resonates with their target audience. Whether it's sleek and minimalist or vibrant and eye-catching, we tailor our designs to meet your specific needs, offering a range of options to enhance shelf appeal and consumer experience. From concept to execution, we prioritize attention to detail and innovation to deliver packaging solutions that leave a lasting impression and set your products apart in the market.",
    },
];