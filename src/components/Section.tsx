"use client";

import { useLayoutEffect, useRef, useState, useContext, useCallback } from "react";
import { ScrollContext } from "../app/(aboutus)/useScroll";

type SectionProps = {
    children: React.ReactNode;
    id: string;
    setOffsetTop?: (offsetTop: number) => void;
};

export default function Section({ children, id, setOffsetTop }: SectionProps) {
    const [windowSize, setWindowSize] = useState<{
        width: number;
        height: number;
    }>(() => {
        if (typeof window !== "undefined") {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        } else {
            return {
                width: 0,
                height: 0,
            };
        }
    });

    const [height, setHeight] = useState<number>(0);
    const [top, setTop] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = ref;

    if (elContainer) {
        if (
            scrollY >= top - windowSize.height &&
            scrollY <= top + height + windowSize.height
        ) {
            progress = Math.max(top - windowSize.height, scrollY);
        } else {
            progress = top - windowSize.height;
        }
    }

    const updateDimensions = useCallback(() => {
        if (ref.current) {
            setTop(ref.current.offsetTop);
            setHeight(ref.current.clientHeight);
            if (setOffsetTop) setOffsetTop(ref.current.offsetTop);
        }
    }, [setOffsetTop]);

    useLayoutEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, [updateDimensions]);

    return (
        <section
            ref={ref}
            style={{
                transform: `matrix(1, 0, 0, 1, 0, -${progress})`,
            }}
            id={id}
        >
            {children}
        </section>
    );
}
