
import { ReactElement } from 'react'

interface PokemonTypeProps {
    types: string[],
    name:string
  }
export default function PokemonType({
    types,
  }: PokemonTypeProps): ReactElement {
  return (
       <div data-testid="pokemontype">
       {types?.map((v, k) => (
                  <span data-testid="types"
                    key={k}
                    className={`${v.toLowerCase()} p-1 rounded reduce-shadow font-medium text-white ml-2`}
                  >
                    {v}{" "}
                    <img
                      className={` icon inline ${v.toLowerCase()}`}
                      src={`/icons/${v.toLowerCase() + ".svg"}`}
                    ></img>
                  </span>
                ))}
       </div>
       
  )
}
