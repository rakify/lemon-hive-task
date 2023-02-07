import { DETAIL_POKEMON } from "@/pages/api/gqlQueries";
import { useQuery } from "@apollo/client";
import React from "react";
import TypePokemon from "./TypePokemon";

type Props = {
  name: string;
};

const ListBottom = (props: Props) => {
  console.log(props.name);

  const { loading, error, data } = useQuery(DETAIL_POKEMON, {
    notifyOnNetworkStatusChange: true,
    variables: {
      name: props.name,
    },
    fetchPolicy: "network-only",
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    console.log(data.pokemon.types);

    return (
      <div className="grid grid-rows-1 grid-cols-3 gap-3">
        <div className="typesContainer flex  col-span-2 items-center">
          {data.pokemon?.types.map((type, index) => (
            <TypePokemon props={{ index, type: type.type.name }} />
          ))}
        </div>
      </div>
    );
  }
};

export default ListBottom;
