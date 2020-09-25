import { useState, useEffect } from "react";

const useGif = (type) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async function (type) {
    const res = await fetch(
      `https://totallyaccuratepokedex.herokuapp.com/api/v1/pokemon`
    );
    const { data } = await res.json();
    const randomPokemon = data[Math.floor(Math.random() * data.length)];
    setPokemon(randomPokemon);
  };

  useEffect(
    function (type) {
      fetchPokemon(type);
    },
    [type]
  );

  return [pokemon, fetchPokemon];
};

export default useGif;
