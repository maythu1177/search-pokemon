export type Pokemon = {
  id: string;
  number: string;
  name: string;
  image: string;
};

/*export type PokemonDetails = {
  id: string,
  number: string,
  name: string,
  body: string,
  weight: { minimum: string; maximum: string },
  height: { minimum: string; maximum: string },
  classification: string,
  type: string[],
  resistant: string[],
  weaknesses : string[],
  fleeRate: number,
  maxCP: number,
  maxXP: number,
  image: string
}*/

export type PokemonDetail = {
  id: string;
  name: string;
  number: string;
  image: string;
  weight:{minimum:number,maximum:number};
  height:{minimum:number,maximum:number}
  attacks: Attacks;
  evolutions: Evolution[];
  maxHP:number;
  maxCP:number;
  fleeRate:number;
  types:string[];
};

export type Attacks = {
  fast: Fast[];
  special: Fast[];
};

export type Fast = {
  name: string;
  type: string;
  damage: number;
};

export type Evolution = {
  id: string;
  number: string;
  name: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};



