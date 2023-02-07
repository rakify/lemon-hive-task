import Link from "next/link";
import React, { FC } from "react";
import { TPokemon } from "../libs/interface";
import ListBottom from "./ListBottom";

interface Props {
  props: PropsItems;
}
interface PropsItems {
  pokemons: Array<TPokemon>;
}

const Pokemons: FC<Props> = ({ props }) => {
  const { pokemons } = props;

  return (
    <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-14 p-20 pb-8">
      {pokemons &&
        pokemons.map((item: TPokemon, index: number) => (
          <Link
            href={`/pokemon/${item?.name ?? ""}`}
            key={index}
            className="parentGrid pb-8 bg-white transition-all duration-300 hover:bg-blue-500  rounded-[10px]"
          >
            <div className="childGrid relative flex  m-4  bg-slate-100  rounded-[10px]">
              <p className="absolute z-30 top-0 text-[15px] text-black">
                #{index + 1 < 10 ? "00" : "0"}
                {index + 1}
              </p>

              <img
                src={item?.artwork ?? ""}
                alt={item?.name ?? ""}
                className="w-[215px] h-[215px] transition-all duration-300"
              />
            </div>

            <div className="itemName ml-3">
              <p className="text-[20px] capitalize">{item?.name ?? ""}</p>
            </div>
            <div className="pl-3 pb-5">
              <ListBottom props={{ name: item?.name ?? "" }} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Pokemons;
