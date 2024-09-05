/*    This component is responsible for rendering the Pokemon image.  */
"use client";

import Image from "next/image";

interface PokemonImageProps {
  normalImage: string;
  shinyImage: string;
  name: string; 
}

export function PokemonImage({ normalImage, shinyImage, name }: PokemonImageProps) {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <Image
        src={normalImage}
        alt={`Image of ${name}`}
        priority
        width={300}
        height={300}
        className="object-contain transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
      />
      <Image
        src={shinyImage}
        alt={`Shiny image of ${name}`}
        priority
        width={300}
        height={300}
        className="absolute top-0 left-0 object-contain transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
      />
    </div>
  );
}

