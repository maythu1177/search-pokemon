import { Evolution } from "@/apollo/type/pokemon";

interface PokemonEvolutionProps {
  evo: Evolution;
}
export default function PokemonEvolution({ evo }: PokemonEvolutionProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="col-span-3">
        <div className="text-xl font-semibold text-blue-700">{evo.name}</div>
        <div>
          <div className="flex mt-4">
            <div className="border pl-2 bg-slate-200 border-blue-500 py-1  rounded text-base font-medium dark:text-white">
              Max HP
              <span className=" ml-1 border border-blue-600 rounded bg-blue-500 text-white px-2 py-1">
                {evo.maxHP}
              </span>
            </div>
            <div className="ml-2 border pl-2 bg-slate-200 border-blue-500 py-1  rounded text-base font-medium dark:text-white">
              Max CP
              <span className="ml-1 border border-blue-600 rounded bg-blue-500 text-white px-2 py-1">
                {evo.maxCP}
              </span>
            </div>
            <div className="border ml-2 pl-2 bg-slate-200 border-blue-500 py-1  rounded text-base font-medium dark:text-white">
              Flee Rate
              <span className="ml-1 border border-blue-600 rounded bg-blue-500 text-white px-2 py-1">
                {evo.fleeRate}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <table className="w-full table-fixed  text-md font-semibold mb-1 ">
            <tbody>
              <tr className="bg-gray-100 ">
                <td className="w-24 font-medium px-4 py-2 text-slate-600">
                  Resistant
                </td>
                <td>
                  {evo.resistant.map((v, r) => (
                    <span key={r} className="font-medium text-slate-600 ml-2">
                      {v}{" "}
                      <img
                        className={` icon inline ${v.toLowerCase()}`}
                        src={`/icons/${v.toLowerCase() + ".svg"}`}
                      ></img>
                    </span>
                  ))}
                </td>
              </tr>

              <tr className="bg-gray-100 ">
                <td className="font-medium px-4 py-2 text-slate-600">
                  Weakness
                </td>
                <td>
                  {evo.weaknesses.map((v, r) => (
                    <span key={r} className="font-medium text-slate-600 ml-2">
                      {v}{" "}
                      <img
                        className={` icon inline ${v.toLowerCase()}`}
                        src={`/icons/${v.toLowerCase() + ".svg"}`}
                      ></img>
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          {evo.types?.map((v, k) => (
            <span
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
        <div>
          <img className=" mt-2 w-40  h-40" src={evo.image} alt={evo.name} />
        </div>
      </div>
    </div>
  );
}
