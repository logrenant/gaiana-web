import type { Metadata } from "next";
import "../globals.css";
import ScrollObserver from "../(aboutus)/useScroll";
import { Playfair_Display } from 'next/font/google';

export const metadata: Metadata = {
    title: "gaiana",
};

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: 'variable',
    display: 'swap'
})

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    return (
        <html lang={locale}>
            <body className={`${playfair.variable} font-playfair`}>
                <ScrollObserver>
                    {children}
                </ScrollObserver>
            </body>
        </html>
    );
}