import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import List from "../components/List";
import { GET_ALL_POKEMONS } from "../pages/api/gqlQueries";
import { TFilter, TPokemon } from "../libs/interface";
import Header from "@/components/Header";
import Link from "next/link";
import ListBottom from "@/components/ListBottom";
import FrontBottom from "@/components/FrontBottom";

export default function Home() {
  const [filter, setFilter] = useState<TFilter>({
    limit: 10,
    offset: 0,
  });

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: filter.limit, offset: filter.offset },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url(/images/Background.png)" }}
      >
        <Header />
        <div className="hidden md:block">
          <List props={{ pokemons: data.pokemons.results }} />
        </div>
        <div className="md:hidden">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="pb-8"
            focusOnSelect={false}
            itemClass="parentGrid transition-all duration-300 bg-white hover:bg-blue-500 mr-[10px]  rounded-[10px]"
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              mobile: {
                breakpoint: {
                  max: 640,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 100,
              },
            }}
            rewind={true}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {data?.pokemons?.results.map((item: TPokemon, index: number) => (
              <Link
                href={`/pokemon/${item?.name ?? ""}`}
                key={index}
                className=""
              >
                <div className="relative flex  m-2  bg-slate-100  rounded-[10px]">
                  <p className="absolute z-30 top-0 text-[15px] text-black">
                    #{index + 1 < 10 ? "00" : "0"}
                    {index + 1}
                  </p>

                  <img
                    src={item?.artwork ?? ""}
                    alt={item?.name ?? ""}
                    className="w-[150px] h-[150px]  transition-all duration-300"
                  />
                </div>

                <div className="itemName m-4">
                  <p className="text-[20px] capitalize">{item?.name ?? ""}</p>
                </div>
                <div className="pl-3 pb-10">
                  <ListBottom props={{ name: item?.name ?? "" }} />
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="hidden sm:flex"
          style={{ backgroundImage: "url(/images/Left.png)", flex: 1 }}
        ></div>

        <div style={{ flex: 20, paddingBottom: "50px" }}>
          <div
            className="bottomTitle bg-cover bg-center sm:w-[271px] md:w-[542px] sm:h-[56] md:h-[110px] mt-[107px] mb-[30px] text-2xl sm:text-3xl"
            style={{ backgroundImage: "url(/images/Brush.png)" }}
          >
            Ash & Pikachu Arrive in Pokémon Universe
          </div>
          <FrontBottom />
        </div>
        <div
          className="hidden sm:flex"
          style={{ backgroundImage: "url(/images/Left.png)", flex: 1 }}
        ></div>
      </div>
    </>
  );
}
