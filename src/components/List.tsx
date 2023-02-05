import Link from "next/link";
import React, { FC } from "react";
import { IPokemons } from "../libs/interface";
import ListBottom from "./ListBottom";

interface Props {
  props: PropsItems;
}

interface PropsItems {
  pokemons: Array<IPokemons>;
  loading: boolean;
}

const Pokemons: FC<Props> = ({ props }) => {
  const { pokemons, loading } = props;

  return (
    <div className="topGrid grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-14 p-20 pb-8 rounded-[5px]">
      {pokemons.length > 0 &&
        pokemons.map((item, index) => (
          <Link
            href={`/pokemon/${item?.name ?? ""}`}
            key={index}
            className="parentGrid pb-8 bg-white transition-all duration-300 hover:bg-blue-500"
          >
            <div className="childGrid relative flex  m-4  bg-slate-100">
              <p className="absolute z-30 top-0 text-[15px] text-black">
                #{index + 1 < 10 ? "00" : "0"}
                {index + 1}
              </p>

              {!loading && (
                <img
                  src={item?.artwork ?? ""}
                  alt={item?.name ?? ""}
                  className="w-40 xl:w-44 h-auto transition-all duration-300"
                />
              )}
            </div>

            <div className="itemName m-4">
              <p className="font-extra text-[20px] capitalize">
                {item?.name ?? ""}
              </p>
            </div>
            <ListBottom name={item?.name ?? ""} />
          </Link>
        ))}
    </div>
  );
};

export default Pokemons;
