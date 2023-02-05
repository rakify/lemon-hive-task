import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "apollo-client";
import List from "../components/List";
import { GET_POKEMONS } from "../pages/api/gqlQueries";
import { IFilterGet, IListPokemon, IPokemons } from "../libs/interface";
import Header from "@/components/Header";

export default function Home() {
  const [filter, setFilter] = useState<IFilterGet>({
    limit: 10,
    offset: 0,
  });

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: filter.limit, offset: filter.offset },
  });

  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url(/images/Background.png)" }}
      >
        <Header />
        <List props={{ pokemons: data.pokemons.results, loading }} />
      </div>
    );
}
