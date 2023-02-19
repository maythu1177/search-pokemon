import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React, { ReactElement, useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { Pokemon } from '@/apollo/type/pokemon'
import { client } from '@/apollo/apollo-client'
import Layout from '@/components/Layout'
import Scroll from '@/components/Scroll'
import PokemonCardList from '@/components/PokemonCardLists'


interface Props {
  pokemons: Pokemon[];
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function Home( {pokemons}: Props) {

  const [pokemonsValue, setPokemonsValue] = useState<Pokemon[]>(pokemons);

  const searchPokemonByName = (e:InputEvent):void =>{
    let searchValue = e.target.value;
    const _pokemon = pokemons.filter(val => val.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    console.log({_pokemon})
    setPokemonsValue(_pokemon);

  }
 return (
  <Layout title='Pokedex'>
     <div className="flex flex-wrap justify-center ">
        <input
          name="searchInput"
          data-testid="SearchInput"
          className="ml-2 p-2 h-9 shadow-md rounded-lg w-80"
          type="text"
          placeholder="Pikachu"
          onChange={(e) =>
            searchPokemonByName(e)
          }
        />
      </div>
      <PokemonCardList pokemons={pokemonsValue} />
  </Layout>
 )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps:GetStaticProps =async() =>{
  interface PokemonQueryResult {
    pokemons: Pokemon[]
  }
  try {
    let first:Number = -1;
    const { data } = await client.query<PokemonQueryResult,{first:Number}>({
      query:GET_POKEMONS_QUERY,
      variables : {first}
    })

    return {
      props: {
        pokemons: data.pokemons,
      },
    }
  } catch (err) {
    return {
      props: { pokemons: [] },
    }
  }
}

const GET_POKEMONS_QUERY = gql`
query pokemons($first: Int!){
  pokemons(first: $first){
    id
    number
    name
    image
  }
}
`;

