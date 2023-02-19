import { ReactElement } from "react";
import { Pokemon } from "@/apollo/type/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonCardListProps {
  pokemons: Pokemon[];
}

export default function PokemonCardList({
  pokemons,
}: PokemonCardListProps): ReactElement {
  return (
      <ul
        className="flex mt-4 flex-wrap justify-center"
        data-testid="PokemonList"
      >
        {pokemons?.map((poke) => (
          <PokemonCard key={poke.name} pokemon={poke} />
        ))}
      </ul>
  );
}
