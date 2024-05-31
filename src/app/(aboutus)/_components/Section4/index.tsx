import Section from "@/components/Section";

const Section4 = () => {
    return (
        <Section id="section4">
            <div
                className="bg-primary flex flex-col my-9 lg:my-36 justify-between lg:text-4xl text-xl text-center py-8 px-4 lg:p-18">
                <div className="flex flex-col gap-8">
                    {`Nos laboratoires de production cosmétique et alimentaire sont entièrement conformes aux bonnes pratiques de fabrication (BPF). Tout le personnel considère cela comme un point de départ et est formé conformément aux exigences des normes ISO 22716:2007 et ISO 22000 pour identifier les améliorations et dépasser les attentes de l'ISO.
                    Grâce à notre remarquable expertise en recherche, chacune de nos formulations est minutieusement conçue pour se conformer scrupuleusement aux normes réglementaires de l'Union européenne et de la FDA, garantissant une conformité impeccable et une excellence sans compromis.`}
                </div>
            </div>
        </Section>
    );
};

export default Section4;
