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

export default function Home() {
  const [filter, setFilter] = useState<TFilter>({
    limit: 10,
    offset: 0,
  });

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: filter.limit, offset: filter.offset },
  });

  if (loading) return <div>"Loading..."</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (!data) return <div>"No data found."</div>;

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
      <div
        className="bottomTitle bg-cover bg-center sm:w-[271px] md:w-[542px] sm:h-[56] md:h-[110px] mt-[107px] mb-[30px] text-2xl sm:text-3xl"
        style={{ backgroundImage: "url(/images/Brush.png)" }}
      >
        Ash & Pikachu Arrive in Pokémon Universe
      </div>
      <div className="space-y-5 relative m-[30px]">
        <div className="w-[70%] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quam
          harum nesciunt, numquam reiciendis similique repellendus accusamus
          tempore assumenda quidem ad laborum. Unde quisquam voluptate sed saepe
          dolor labore adipisci.
        </div>

        <div className="w-[25%] h-[12em] absolute top-[-1rem] right-3 bg-red-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          optio.
        </div>

        <div className="w-[25%] h-[12em] absolute  top-16 right-[18rem] bg-green-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          optio.
        </div>

        <div className="w-[25%] h-[13rem] absolute top-[13rem] right-3 bg-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          optio.
        </div>

        <div className="w-[45%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          sit repellendus officia officiis atque voluptate culpa corporis
          dignissimos hic libero accusamus ullam aut, necessitatibus minus
          aliquam dolor maxime recusandae voluptatibus excepturi fuga nostrum
          sint laborum! Debitis optio architecto cumque provident. Quidem
          dolorum id unde inventore eum eaque fugiat maxime nam.
        </div>

        <div className="w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          sequi provident eligendi consequatur est amet neque repudiandae
          voluptatem deleniti minima quae magni cupiditate pariatur quo non
          recusandae hic, odit corporis ea doloribus minus reprehenderit
          nostrum. Aperiam voluptatum iusto ut aut eum! Sunt atque aliquam
          blanditiis voluptates, officiis corporis animi nostrum ex asperiores,
          magni facere quos, rerum dignissimos. Expedita, nostrum error?
        </div>

        <div className="pt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus illo commodi nostrum iure, amet nemo consectetur
          distinctio. Vitae, nostrum quidem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ad officiis illo porro expedita esse
          laborum iste debitis libero suscipit quibusdam non cupiditate omnis
          aperiam temporibus perferendis consequatur velit, eligendi voluptates
          atque, rem mollitia, at rerum ex. Blanditiis, repellendus. Saepe dolor
          sequi repellendus cupiditate hic porro nisi sunt, molestias tempore
          dolorum maxime recusandae placeat. Deleniti vel necessitatibus n
          praesentium mollitia ipsum necessitatibus autem possimus nemo, dolorem
          at minima placeat repellat debitis eligendi fugit reiciendis tempora!
          Dolor natus ex culpa, magnam nisi in sequi optio illo eum maiores
          delectus facere quae adipisci nobis deleniti at sint, sunt
          voluptatibus. Sit quas possimus beatae? Cupiditate inventore
          necessitatibus optio delectus laudantium quis. Culpa recusandae vel
          necessitatibus nisi ab, quos magnam libero omnis accusantium neque
          iusto eligendi labore mollitia eius.
        </div>
      </div>
    </>
  );
}
