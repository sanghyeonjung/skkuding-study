import React from "react"
import {Link, useLocation, useParams} from "react-router-dom"
import {useState} from "react"
import type {Pokemon} from "../types"
import { artworkUrl /*, pokemonList */ } from "../data/pokemon";
export default function PokemonDetail(){
    const location = useLocation();
    const [pokemon, setPokemon] = useState(location.state?.pokemon);
    const rows: Array<[string, React.ReactNode]> = [
    ["Id", pokemon.id],
    ["Name", pokemon.name],
    ["Height", pokemon.height ?? "—"],
    ["Weight", pokemon.weight ?? "—"],
    ["Types", pokemon.types?.length ? pokemon.types.join(",") : "—"],
    ["Base-Experience", pokemon.baseExperience ?? "—"],
    ["Abilities", pokemon.abilities?.length ? pokemon.abilities.join(",") : "—"],
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
        <Link to="/" className="brand">Pokemon List</Link>
      </nav>

      <div className="detail-content">
        <div className="img-wrapper">
          <img
            src={artworkUrl(pokemon.id)}
            alt={pokemon.name}
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