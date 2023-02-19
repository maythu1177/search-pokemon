import { client } from "@/apollo/apollo-client";
import { PokemonDetail } from "@/apollo/type/pokemon";
import { gql } from "@apollo/client";
import Link from "next/link";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Layout from "@/components/Layout";
import PokemonEvolution from "@/components/PokemonEvolution";
import PokemonType from "@/components/PokemonType";

interface Props {
  pokemon: PokemonDetail;
}
export default function Pokemon({ pokemon }: Props) {
  return (
    <Layout title={pokemon.name}>
      <Link href="/">
        <div className="flex justify-end text-blue-500 text-xl font-meduim underline">
          Back
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-1">
        <div className="border p-5 border-gray my-2 capitalize bg-white rounded-md shadow-md">
          <h4 className="text-gray-400">#{pokemon.number}</h4>
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3">
              <div className="text-xl font-semibold text-blue-700">
                {pokemon.name}
              </div>
              <div>
                <div className="flex mt-4">
                  <div className="border pl-2 bg-slate-200 border-blue-500 py-1  rounded text-base font-medium dark:text-white">
                    Max HP
                    <span className=" ml-1 border border-blue-600 rounded bg-blue-500 text-white px-2 py-1">
                      {pokemon.maxHP}
                    </span>
                  </div>
                  <div className="ml-2 border pl-2 bg-slate-200 border-blue-500 py-1  rounded text-base font-medium dark:text-white">
                    Max CP
                    <span className="ml-1 border border-blue-600 rounded bg-blue-500 text-white px-2 py-1">
                      {pokemon.maxCP}
                    </span>
                  </div>
                  <div className="border ml-2 pl-2 bg-slate-200 border-blue-500 py-1  rounded text-base font-medium dark:text-white">
                    Flee Rate
                    <span className="ml-1 border border-blue-600 rounded bg-blue-500 text-white px-2 py-1">
                      {pokemon.fleeRate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex mt-2 ">
                <div className="mr-1 p-1 ">
                  <div className="text-lg font-semibold mb-1 text-center">
                    Weight
                  </div>
                  <div className="px-2 py-2 border bg-slate-200 border-slate-300 rounded-md">
                    <span className="mr-1">Min {pokemon.weight.minimum} </span>
                    <span>Max {pokemon.weight.maximum} </span>
                  </div>
                </div>
                <div className="p-1">
                  <div className="text-lg font-semibold mb-1 text-center">
                    Height
                  </div>
                  <div className="px-2 py-2 border bg-slate-200 border-slate-300 rounded-md">
                    <span className=" mr-1">Min {pokemon.height.minimum} </span>
                    <span>Max {pokemon.height.maximum} </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
              <PokemonType types={pokemon.types} name={pokemon.name}></PokemonType>
              </div>
              <div>
                <img
                  className=" mt-2 w-40  h-40"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <table className="w-full table-fixed  text-md font-semibold mb-1 ">
              <thead>
                <tr className="bg-gray-300 text-left">
                  <th className="px-4 py-2 text-slate-600">Attack</th>
                  <th className="px-4 py-2 text-slate-600">Name</th>
                  <th className="px-4 py-2 text-slate-600">Type</th>
                  <th className="px-4 py-2 text-slate-600">Damage</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.attacks.fast.map((v, r) => (
                  <tr className="bg-gray-100 " key={r}>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      Fast
                    </td>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      {v.name}
                    </td>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      {v.type}
                    </td>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      {v.damage}
                    </td>
                  </tr>
                ))}

                {pokemon.attacks.special.map((v, r) => (
                  <tr className="bg-gray-200 " key={r}>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      Special
                    </td>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      {v.name}
                    </td>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      {v.type}
                    </td>
                    <td className="font-medium px-4 py-2 text-slate-600">
                      {v.damage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {pokemon.evolutions != null && (
          <>
            <div className="text-2xl p-5 capitalize font-medium rounded-md ">
              Evolutions
            </div>
            {pokemon.evolutions.map((evolution, evoKey) => (
              <div
                key={evoKey}
                className="border p-5 border-gray my-1 capitalize bg-white rounded-md shadow-md"
              >
                <PokemonEvolution evo={evolution}></PokemonEvolution>
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  interface PokemonDetailQueryResult {
    pokemon: PokemonDetail;
  }
  try {
    let id: string = context.query.id as string; // = "UG9rZW1vbjowOTg=";
    let name: string = context.query.name as string; //'Krabby';
    console.log("Params", context.query);
    const { data } = await client.query<
      PokemonDetailQueryResult,
      { id: String; name: String }
    >({
      query: GET_POKEMON_DETAIL_QUERY,
      variables: { id, name },
    });

    return {
      props: {
        pokemon: data.pokemon,
      },
    };
  } catch (err) {
    console.log("error ", err);
    return {
      props: { pokemon: null },
    };
  }
};

const GET_POKEMON_DETAIL_QUERY = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  }
`;
