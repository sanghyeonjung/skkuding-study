import React from "react"
import PokemonItem from "./PokemonItem"
import { POKEMONS } from "../data/pokemon"

export default function PokemonList(){
    return (
        <>
            <nav>
                <h1><a href = "/">Pokemon List</a></h1>
            </nav>

            <main>
                <section id="card-wrapper">
                    {POKEMONS.map((p)=>(
                        <PokemonItem key = {p.id} pokemon={p}/>
                    ))}
                </section>
            </main>
        </>
    );
}