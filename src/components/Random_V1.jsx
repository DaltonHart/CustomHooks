import React, { useEffect, useState } from "react";

function Random() {
  useEffect(function () {
    const fetchPokemon = async function () {
      const res = await fetch(
        "https://totallyaccuratepokedex.herokuapp.com/api/v1/pokemon"
      );
      const { data } = await res.json();
      console.log(data);
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Random</h1>
    </>
  );
}

export default Random;
