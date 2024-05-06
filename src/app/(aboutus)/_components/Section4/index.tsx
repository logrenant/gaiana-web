import Section from "@/components/Section";

const Section4 = () => {
    return (
        <Section id="section4">
            <div
                className="bg-primary flex flex-col my-9 lg:my-36 justify-between lg:text-4xl text-xl text-center py-8 px-4 lg:p-18">
                <div className="flex flex-col gap-8">
                    <div>
                        Our cosmetic and food production laboratories are fully compliant with good manufacturing practices (GMP). All staff take this as a starting point and are trained* in accordance with the requirements of ISO 22716:2007 to identify improvements and exceed ISO expectations.
                    </div>
                    <div>
                        Thanks to our remarkable research expertise, each of our formulations is meticulously designed to scrupulously comply with European Union and FDA regulatory standards, ensuring impeccable compliance and uncompromising excellence.
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Section4;
