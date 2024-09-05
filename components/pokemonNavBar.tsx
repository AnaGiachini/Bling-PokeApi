/** 
 *  This component is a simple navigation bar that will be displayed at the top of the page.  
 */ 
"use client";

import Link from "next/link";

export function PokemonNavBar() {
  return (
    <nav className="fixed top-0 left-0 bg-black w-full flex flex-col md:flex-row justify-center items-center p-4 z-50">
      <Link href="/">
        <h2 className="flex justify-center w-full text-xl md:text-2xl lg:text-3xl font-bold font-sans text-rose-200">
          APIKEMON
        </h2>
      </Link>
    </nav>
  );
}