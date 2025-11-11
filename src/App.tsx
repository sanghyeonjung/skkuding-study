import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonItem from './components/PokemonItem';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<PokemonList/>}/>
        <Route path = "/pokemon/:id" element = {<PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
