import type { Metadata } from "next";
import "../globals.css";

import ScrollObserver from "./useScroll";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
    title: "gaiana",
};


const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: 'variable',
    display: 'swap'
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} font-playfair`}>
                <ScrollObserver>
                    {children}
                </ScrollObserver>
            </body>
        </html>
    );
}