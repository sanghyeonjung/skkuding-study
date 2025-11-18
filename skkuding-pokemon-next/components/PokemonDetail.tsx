"use client";

import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "../types";
import { artworkUrl} from "../data/pokemon";
import {POKEMONS} from "@/data/pokemon"
import { getPokemonById } from "../data/pokemon";
type Props = {
  id: number; // 서버 컴포넌트에서 내려주는 id
};

export default function PokemonDetail({ id }: {id:number}) {
  const pokemon = getPokemonById(id);
  
  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  const rows: Array<[string, React.ReactNode]> = [
    ["Id", pokemon.id],
    ["Name", pokemon.name],
    ["Height", pokemon.height ?? "—"],
    ["Weight", pokemon.weight ?? "—"],
    ["Types", pokemon.types?.length ? pokemon.types.join(", ") : "—"],
    ["Base-Experience", pokemon.baseExperience ?? "—"],
    ["Abilities", pokemon.abilities?.length ? pokemon.abilities.join(", ") : "—"],
    ["Hp", pokemon.hp ?? "—"],
    ["Attack", pokemon.attack ?? "—"],
    ["Defense", pokemon.defense ?? "—"],
    ["Special-Attack", pokemon.specialAttack ?? "—"],
    ["Special-Defense", pokemon.specialDefense ?? "—"],
    ["Speed", pokemon.speed ?? "—"],
  ];

  return (
    <main className="detail-main">
      <nav className="top-nav">
        <Link href="/" className="brand">
          Pokemon List
        </Link>
      </nav>

      <div className="detail-content">
        <div className="img-wrapper">
          <Image
            src={artworkUrl(pokemon.id)}
            alt={pokemon.name}
            width={300}
            height={300}
            className="hero-img"
          />
        </div>

        <div className="table-card">
          <table>
            <tbody>
              {rows.map(([k, v]) => (
                <tr key={k}>
                  <td className="key">{k}</td>
                  <td className="val">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
