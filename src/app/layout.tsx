import type { Metadata } from "next";
import "./globals.css";
import ScrollObserver from "./(aboutus)/useScroll";
import { CardProvider } from "./(landing)/_store/cardContext";


export const metadata: Metadata = {
  title: "gaiana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ScrollObserver>
        <CardProvider>{children}</CardProvider>
      </ScrollObserver>
    </html>
  );
}