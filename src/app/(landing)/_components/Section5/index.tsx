import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/Section";

const TeamAccordion = () => {
    const [open, setOpen] = useState(items[0].id);
    return (
        <Section id="section5">
            <section className="p-4 lg:p-18 bg-primary">
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
                <span className="text-xl lg:text-3xl font-semibold">
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
                            className="lg:text-2xl font-normal text-secondary leading-7"
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
            "Skincare compliance entails navigating regulations to ensure public health, fair competition, and sector integrity. It requires vigilance, expertise, and adaptability to evolving rules while maintaining operational excellence. Key is accountability, transparency, and fostering stakeholder trust for sustainable growth and innovation.",
    },
    {
        id: 4,
        title: "Manufacturing",
        description:
            "Manufacturing is central to our operations, blending precision and innovation to create skincare products. Our advanced facilities use state-of-the-art technology and strict quality control to ensure high standards of efficacy and safety. Committed to sustainability and ethics, we aim for minimal environmental impact and optimal product performance, shaping a brighter future for skincare manufacturing.",
    },
    {
        id: 5,
        title: "Packaging",
        description:
            "In packaging, we merge creativity and functionality to protect products and boost brand identity. Our designers work closely with clients to craft designs that reflect their brand story and appeal to their audience. Whether sleek or vibrant, we tailor designs to enhance shelf appeal and consumer experience, prioritizing detail and innovation to set products apart",
    },
];