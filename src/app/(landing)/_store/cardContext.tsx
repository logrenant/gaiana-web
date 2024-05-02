"use client";

import { createContext, useState } from "react";

export type CardContextType = {
    isCardOpen: string | null;
    setIsCardOpen: (value: string | null) => void;
};

export const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [isCardOpen, setIsCardOpen] = useState<string | null>(null);

    return (
        <CardContext.Provider value={{ isCardOpen, setIsCardOpen }}>
            {children}
        </CardContext.Provider>
    );
};
