"use client";

import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";
import type { Pokemon } from "../types";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const promises = [];

      for (let i = 1; i <= 10; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }

      const responses = await Promise.all(promises);

      const dataPromises = responses.map((res) => res.json());
      const results = await Promise.all(dataPromises);

      const data = results.map((p) => ({
        id: p.id,
        name: p.name,
        height: p.height,
        weight: p.weight,
        types: p.types.map((t: any) => t.type.name),
        baseExperience: p.base_experience ?? 0,
        abilities: p.abilities?.map((a: any) => a.ability.name),
        hp: p.stats.find((s: any) => s.stat.name === "hp")?.base_stat,
        attack: p.stats.find((s: any) => s.stat.name === "attack")?.base_stat,
        defense: p.stats.find((s: any) => s.stat.name === "defense")?.base_stat,
        specialAttack: p.stats.find((s: any) => s.stat.name === "special-attack")?.base_stat,
        specialDefense: p.stats.find((s: any) => s.stat.name === "special-defense")?.base_stat,
        speed: p.stats.find((s: any) => s.stat.name === "speed")?.base_stat,
      }));

      setPokemons(data);
    }

    fetchPokemons();
  }, []);

  return (
    <>
      <nav>
        <h1>
          <a href="/">Pokemon List</a>
        </h1>
      </nav>

      <main>
        <section id="card-wrapper">
          {pokemons.map((p) => (
            <PokemonItem key={p.id} pokemon={p} />
          ))}
        </section>
      </main>
    </>
  );
}
