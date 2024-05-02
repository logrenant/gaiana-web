"use client";

import { useEffect, useRef } from "react";

import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1 from "../_components/Section1";
import Section2 from "../_components/Section2";
import Section3 from "../_components/Section3";
import Section4 from "../_components/Section4";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                document.body.style.height = `${containerRef.current.clientHeight}px`;
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        (
            async () => {
                // @ts-ignore
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <main ref={containerRef} className="fixed top-0 left-0 w-full">
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section id="footer">
                <Footer />
            </Section>
        </main>
    );
}