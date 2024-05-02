"use client"

import React, { useCallback, useEffect, useState } from "react";

type ScrollContextType = {
    scrollY: number;
};

export const ScrollContext = React.createContext<ScrollContextType>({
    scrollY: 0,
});

const ScrollObserver = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll, {
            passive: true,
        });
        return () => document.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollObserver;