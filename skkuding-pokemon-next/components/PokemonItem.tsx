"use client";

import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "../types";
import { artworkUrl } from "@/data/pokemon";

type Props = { pokemon: Pokemon };

export default function PokemonItem({ pokemon }: Props) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="card">
      <div className="img-wrapper">
        <Image
          src={artworkUrl(pokemon.id)}
          alt={pokemon.name}
          width={150}
          height={150}
        />
      </div>

      <div className="info-wrapper">
        <h2>{pokemon.name}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types.join(", ")}</p>
      </div>
    </Link>
  );
}
