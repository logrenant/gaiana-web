import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/Section";
import { useWindowSize } from "./useWindowSize";

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
    const { width } = useWindowSize();
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
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
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
                            className="lg:text-2xl text-sm font-normal text-secondary leading-7"
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

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "480px",
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
        title: "Brief de Marketing",
        description:
            "Nous débutons chaque collaboration en vous écoutant attentivement afin de comprendre vos besoins spécifiques et ceux de vos clients. Cette étape fondamentale guide la création d'une stratégie solide pour le développement de votre produit cosmétique.",
    },
    {
        id: 2,
        title: "Gestion de Projet",
        description:
            "Notre équipe expérimentée prend en charge la gestion complète de votre projet, de sa conception à sa réalisation. Nous nous engageons à respecter les délais et le budget convenus, tout en assurant une communication transparente à chaque étape."
    },
    {
        id: 3,
        title: "R&D Formulation",
        description:
            " Notre laboratoire de recherche et développement crée des formulations innovantes et performantes, en s'appuyant sur les dernières avancées scientifiques et technologiques. Nous concevons des produits sur mesure en phase avec vos exigences et les tendances du marché.",
    },
    {
        id: 4,
        title: "Étude Réglementaire",
        description:
            "Pour chaque formulation, nous effectuons une analyse réglementaire exhaustive, couvrant la compatibilité des ingrédients, la concentration des principes actifs et la présence éventuelle d'allergènes. Cette analyse inclut également l'évaluation des matières premières fournies par nos partenaires. Ensuite, nous compilons toutes les informations réglementaires nécessaires dans un Dossier d’Information Produit (DIP), un document exhaustif et obligatoire. Parallèlement, nous concevons des étiquettes conformes à la réglementation, fournissant aux consommateurs toutes les informations pertinentes sur le produit. Enfin, nous assurons la conformité réglementaire et la sécurité des produits en effectuant une notification sur le portail CPNP (Cosmetic Products Notification Portal) avant leur mise sur le marché.",
    },
    {
        id: 5,
        title: "Fabrication et Conditionnement",
        description:
            "Nous veillons à ce que le processus de fabrication soit conforme aux normes de qualité les plus élevées, garantissant ainsi la cohérence et la fiabilité de chaque lot de production. De plus, nous nous engageons à respecter les délais convenus pour la livraison, assurant ainsi que vos produits sont disponibles lorsque vous en avez besoin. En fin de compte, notre objectif est de vous fournir des produits finis qui répondent à vos attentes et qui se distinguent sur le marché.",
    },
];