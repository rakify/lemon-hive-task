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

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!data) return "No data found.";

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(/images/Background.png)" }}
    >
      <Header />
      <List props={{ pokemons: data.pokemons.results }} />
      <div className="bottomTitle">
        <p>Ash & Pikachu Arrive in Pokémon Universe</p>
      </div>
      <div className="frontBottom">
        <div className="grid grid-cols-3">
          <p style={{ height: "108px", width: "648px" }}>
            Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
            ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
            tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
            Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
            amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra
            sit pretium lorem elementum. Iaculis sit maecenas sodales mi
            convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          </p>
        </div>
      </div>
    </div>
  );
}
