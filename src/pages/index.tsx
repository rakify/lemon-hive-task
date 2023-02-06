import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "apollo-client";
import List from "../components/List";
import { GET_POKEMONS } from "../pages/api/gqlQueries";
import { IFilterGet, IListPokemon, IPokemons } from "../libs/interface";
import Header from "@/components/Header";

export default function Home() {
  const [filter, setFilter] = useState<IFilterGet>({
    limit: 10,
    offset: 0,
  });

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: filter.limit, offset: filter.offset },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!data) return "No data found.";

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(/images/Background.png)" }}
    >
      <Header />
      <List props={{ pokemons: data.pokemons.results }} />
      <div className="bottomTitle">
        <p>Ash & Pikachu Arrive in Pokémon Universe</p>
      </div>
      <div className=" space-y-5 relative">
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
    </div>
  );
}
