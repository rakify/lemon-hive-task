import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;

export const GET_SINGLE_POKEMON_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      base_experience
      height
      weight
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;
