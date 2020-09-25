import React from "react";

import usePokemon from "./usePokemon";

function Random() {
  const [pokemon, fetchPokemon] = usePokemon();

  return (
    <>
      <h1>Random</h1>
      {pokemon && (
        <>
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <button onClick={fetchPokemon}>Click for new</button>
        </>
      )}
    </>
  );
}

export default Random;
