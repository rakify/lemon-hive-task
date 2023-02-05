import React, { FC } from "react";
import { IDetail } from "../libs/interface/index";
import TypePokemon from "./TypePokemon";

interface Props {
  props: PropsItems;
}

interface PropsItems {
  pokemon: IDetail | null;
}

const DetailComponent: FC<Props> = ({ props }) => {
  const { pokemon } = props;
  console.log(pokemon);

  return (
    <div className="contianer flex">
      <div className="text-5xl font-medium text-indigo-600 leading-tight">
        {pokemon?.name ?? ""}
      </div>
    </div>
  );
};

export default DetailComponent;
