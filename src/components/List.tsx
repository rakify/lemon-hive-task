import React, { FC } from "react";
import { IPokemons } from "../libs/interface";

interface Props {
  props: PropsItems;
}

interface PropsItems {
  pokemons: Array<IPokemons>;
  loading: boolean;
}

const Pokemons: FC<Props> = ({ props }) => {
  const { pokemons, loading } = props;

  console.log(pokemons);
  return (
    <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-14 p-20 pb-8">
      {pokemons.length > 0 &&
        pokemons.map((item, index) => (
          <div
            // onClick={() => history(`/pokemon/${item.name}`)}
            key={index}
            className="bg-white flex flex-col items-center hover:bg-blue-500"
          >
            <div>
              <p className="font-extra text-2xl text-black-0">
                #{index + 1 < 10 ? "00" : "0"}
                {index + 1}
              </p>
            </div>

            <div id="gridItem">
              {!loading && (
                <img
                  src={item?.artwork ?? ""}
                  alt={item?.name ?? ""}
                  className="w-40 xl:w-44 h-auto bg-gray-500 hover:bg-white"
                />
              )}
            </div>

            <div>
              <p className="font-extra text-2xl text-black-0">
                {item?.name ?? ""}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pokemons;
