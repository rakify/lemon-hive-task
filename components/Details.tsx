import React, { FC } from "react";
import { TDetail } from "../libs/interface/index";
import Footer from "./Footer";
import Header from "./Header";
import ListBottom from "./ListBottom";
import TypePokemon from "./TypePokemon";

interface Props {
  props: PropsItems;
}

interface PropsItems {
  pokemon: TDetail | null;
}
const Details: FC<Props> = ({ props }) => {
  const { pokemon } = props;

  return (
    <>
      <div className="flex justify-around">
        <div
          className="hidden sm:flex"
          style={{ backgroundImage: "url(/images/Left.png)", flex: 1 }}
        ></div>

        <div style={{ flex: 20 }}>
          <Header />
          <div className="details container flex flex-col sm:flex-row">
            {/* Show image on top of phone */}
            <div className="sm:hidden image p-[10px]">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon?.id ?? 0
                }.png`}
                alt="pokemon"
                className="w-[288px] h-[288px] transition-all duration-300"
              />
            </div>
            <div className="leftTop flex flex-col gap-2 p-[50px]">
              <p className="text-2xl sm:text-5xl font-medium leading-tight text-blue-500 capitalize text-center sm:text-left mb-2">
                {pokemon?.name ?? "Not found"} #{pokemon?.id! < 10 ? "00" : "0"}
                {pokemon?.id}
              </p>
              <div
                style={{
                  fontWeight: 200,
                  fontSize: "20px",
                  lineHeight: "23px",
                }}
              >
                There is a plant seed on its back right from the day this
                Pokémon is born. The seed slowly grows larger.
              </div>
              {/* Height Weight */}
              <div className="prectangle3 bg-gradient-to-r from-[#F68CC8] to-orange-500">
                <div className="rectangle3">
                  <div className="flex flex-column justify-between ">
                    <div>
                      <p>Height</p>
                      <p style={{ fontWeight: 200, fontSize: "16px" }}>
                        {pokemon && pokemon?.height / 10} m
                      </p>
                      <p>Weight</p>
                      <p style={{ fontWeight: 200, fontSize: "16px" }}>
                        {pokemon && pokemon?.weight / 10} kg
                      </p>
                    </div>
                    <div>
                      <p>Category</p>
                      <p style={{ fontWeight: 200, fontSize: "16px" }}>Seed</p>
                      <p>Abilities</p>
                      {pokemon?.abilities.map((ability, index) => (
                        <div key={index} className="capitalize">
                          <p style={{ fontWeight: 200, fontSize: "16px" }}>
                            {ability?.ability?.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Only in larger device show image */}
            <div className="hidden sm:flex">
              <div className="p-[10px] image flex flex-col">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokemon?.id ?? 0
                  }.png`}
                  alt="pokemon"
                  className="sm:w-[475px] sm:h-[475px] transition-all duration-300"
                />
                <div
                  style={{
                    height: "42px",
                    width: "283px",
                    filter: "blur(29px)",
                    background: "rgba(0, 0, 0, 0.2)",
                  }}
                ></div>
              </div>
            </div>
            <div className="rightSide">
              {/* Types */}
              <div className="p-[50px]">
                <p>Type</p>
                <ListBottom props={{ name: pokemon?.name ?? "" }} />
              </div>
              {/* Weakness */}
              <div className="pb-[50px] pr-[50px] pl-[50px]">
                <p>Weakness</p>
                <div className="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                  <div className="typesContainer flex  col-span-2 items-center ">
                    {["fire", "psychic", "flying", "ice"].map((type, index) => (
                      <TypePokemon props={{ index, type: type }} key={index} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="w-full lg:px-10 pb-[50px] pr-[50px] pl-[50px]">
                <p>Stats</p>
                {pokemon?.stats.map((stat, index) => (
                  <div className="mb-5 mt-2 lg:mb-3" key={index}>
                    <div className="flex items-center justify-between mb-1">
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
        </div>
        <div
          className="hidden sm:flex"
          style={{ backgroundImage: "url(/images/Left.png)", flex: 1 }}
        ></div>
      </div>
    </>
  );
};

export default Details;
