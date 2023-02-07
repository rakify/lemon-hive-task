import { GET_SINGLE_POKEMON_DETAILS } from "@/pages/api/gqlQueries";
import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import TypePokemon from "./TypePokemon";

interface Props {
  props: PropsItems;
}
interface PropsItems {
  name: string;
}

const ListBottom: FC<Props> = ({ props }) => {
  const { name } = props;
  const { loading, error, data } = useQuery(GET_SINGLE_POKEMON_DETAILS, {
    variables: {
      name: name,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <div className="grid grid-rows-1 grid-cols-3 gap-3">
      <div className="typesContainer flex  col-span-2 items-center">
        {data.pokemon?.types.map((type: any, index: number) => (
          <TypePokemon props={{ index, type: type.type.name }} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListBottom;
