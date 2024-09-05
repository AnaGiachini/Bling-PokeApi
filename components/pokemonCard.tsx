/**
* This component is used to display a card for each pokemon in the list of pokemon
*/
import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  name: string;
  id: string;
  imageUrl: string;
}

export function PokemonCard({ name, id, imageUrl }: PokemonCardProps) {
  return (
    <div className="flex flex-wrap justify-center">
      <Link
        href={name}
        className="group rounded-lg border bg-black bg-opacity-85 text-rose-200 border-black w-full md:w-80 h-20 m-1 px-4 py-0 transition-colors hover:border-black hover:text-black hover:bg-white"
        key={name + "card"}
      >
        <div className="flex items-center mb-2">
          <Image
            src={imageUrl}
            alt={name}
            width={80}
            height={80}
            className="mr-10"
          />
          <h2 className="text-xl font-light">
            {id + ". "}
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
        </div>
      </Link>
    </div>
  );
}  
