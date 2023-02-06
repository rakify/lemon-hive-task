import React, { FC } from "react";
import { IDetail } from "../libs/interface/index";
import Footer from "./Footer";
import ListBottom from "./ListBottom";
import TypePokemon from "./TypePokemon";

interface Props {
  props: PropsItems;
}

interface PropsItems {
  pokemon: IDetail | null;
}
const Details: FC<Props> = ({ props }) => {
  const { pokemon } = props;

  return (
    <>
      <div className="contianer flex flex-row">
        <div className="flex flex-col p-[50px]">
          <p className="text-5xl font-medium leading-tight text-blue-500 capitalize">
            {pokemon?.name ?? "Not found"} #{pokemon?.id! < 10 ? "00" : "0"}
            {pokemon?.id}
          </p>
          <div className="prectangle3">
            <div className="rectangle3">
              <div className="flex flex-column justify-between ">
                <div>
                  <p>Height</p>
                  {pokemon?.height}
                  <p>Weight</p>
                  {pokemon?.weight}
                </div>
                <div>
                  <p>Category</p>
                  {pokemon?.height}
                  <p>Abilities</p>
                  {pokemon?.abilities.map((ability, index) => (
                    <div key={index} className="capitalize">
                      {ability?.ability?.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image p-[50px]">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              pokemon?.id ?? 0
            }.png`}
            alt="pokemon"
            className="w-[475px] h-[475px] transition-all duration-300"
          />
        </div>
        <div className="rightSide">
          {/* Types */}
          <div className="p-[50px]">
            <p>Type</p>
            <ListBottom name={pokemon?.name ?? ""} />
          </div>
          {/* Weakness */}
          <div className="pb-[50px] pr-[50px] pl-[50px]">
            <p>Weakness</p>
            <div />
          </div>

          {/* Stats */}
          <div className="w-full lg:px-10 pb-[50px] pr-[50px] pl-[50px]">
            <p>Stats</p>
            {pokemon?.stats.map((stat, index) => (
              <div className="mb-5 mt-2 lg:mb-3">
                <div
                  key={index}
                  className="flex items-center justify-between mb-1"
                >
                  <div className="flex items-center">
                    <p
                      className="font-semi capitalize"
                      style={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "16px",
                      }}
                    >
                      {stat.stat.name}
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-1 bg-[#D9D9D9] rounded-lg ">
                  <div
                    className=" h-1 bg-[#30A7D7] rounded-lg"
                    style={{
                      width: (stat.base_stat / 200) * 100 + "%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
