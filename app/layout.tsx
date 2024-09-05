/** 
 *  Code: Layout for the entire application
 */
import { PokemonNavBar } from "@/components/pokemonNavBar";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "APIKEMON",
  description: "Pokemon Api",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-rose-100">
        <PokemonNavBar />
        <main className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
