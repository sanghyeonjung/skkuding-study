import React, {useEffect, useState} from "react"
import PokemonItem from "./PokemonItem"
import { POKEMONS } from "../data/pokemon"
import axios from "axios"
import { Pokemon } from "../types";

export default function PokemonList(){
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() =>{
        async function fetchPokemons() {
            const promises = [];

            for(let i =1; i<=10; i++){
                promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
            }
            const results = await Promise.all(promises);
            const data = results.map( (res) =>{
                const p = res.data;
                console.log(p);
                return {
                        id: p.id,
                        name: p.name,
                        height: p.height,
                        weight: p.weight,
                        types: p.types.map((t: any) => t.type.name),
                } as Pokemon;
            });
            setPokemons(data);
        }
        fetchPokemons();
    },[]);
    return (
        <>
            <nav>
                <h1><a href = "/">Pokemon List</a></h1>
            </nav>

            <main>
                <section id="card-wrapper">
                    {pokemons.map((p)=>(
                        <PokemonItem key = {p.id} pokemon={p}/>
                    ))}
                </section>
            </main>
        </>
    );
}