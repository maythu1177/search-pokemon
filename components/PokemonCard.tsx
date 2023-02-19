import { ReactElement } from 'react'
import { Pokemon } from '@/apollo/type/pokemon'

interface PokemonCardProps {
  pokemon: Pokemon
}

export default function PokemonCard({
  pokemon,
}: PokemonCardProps): ReactElement {
  return (
    <li className='w-60 mx-2 hover:transform hover:-translate-y-2 duration-150 ease-in-out' data-testid="pokemoncard">
      
        <a href={`/pokemon/${pokemon.id}?name=${pokemon.name}`} className='border p-4 border-gray my-2 capitalize flex items-center text-lg bg-white rounded-md flex-col shadow-md'>
          <img
            data-testid="image"
            className='w-20 h-20 mr-3'
            src={pokemon.image}
            alt={pokemon.name}
          />
          <div>
            <span className='mr-2 font-bold' data-testid="number">{pokemon.number}.</span>
            <span data-testid="pokemonName">{pokemon.name}</span>
          </div>
        </a>
        
    </li>
  )
}
