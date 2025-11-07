import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonItem from './components/PokemonItem';
import PokemonList from './components/PokemonList';
import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<PokemonList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
