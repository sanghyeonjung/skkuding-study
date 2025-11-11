import React, {useEffect, useState} from "react"
import { Pokemon } from "../types"
import axios from "axios";
import { artworkUrl } from "../data/pokemon"
import {Link} from "react-router-dom"

type Props = {pokemon: Pokemon}

export default function PokemonItem({pokemon}: Props){
    
    console.log(pokemon)
    return (
        <Link to = {'/pokemon/${pokemon.id}'} state = {{pokemon}}className = "card">
            <img src = {artworkUrl(pokemon.id)} alt={pokemon.name}/>
            <div className = "info-wrapper">
                <h2>{pokemon.name}</h2>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Types: {pokemon.types.join(", ")}</p>
            </div>
        </Link>
    );
}