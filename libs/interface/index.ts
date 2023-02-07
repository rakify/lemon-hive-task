export interface TFilter {
  limit: number;
  offset: number;
}

export interface TPokemonList {
  pokemons?: {
    count?: number;
    message?: string;
    next?: string;
    previous?: string;
    results: Array<TPokemon>;
    status?: boolean;
  };
}

export interface TPokemon {
  id: number;
  url: string;
  name: string;
  image: string;
  artwork: string;
}

export interface TDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  message?: string;
  status: boolean;
}
