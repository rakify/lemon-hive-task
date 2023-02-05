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
  if (data)
    return (
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url(/images/Background.png)" }}
      >
        <Header />
        <List props={{ pokemons: data.pokemons.results, loading }} />
        <div className="bottomTitle">
          <p>Ash & Pikachu Arrive in Pokémon Universe</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus. Lorem ipsum
          dolor sit amet consectetur. Risus cursus nibh elementum ornare a
          aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus
          nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium
          gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl
          urna non fames felis leo. Vitae pulvinar sed viverra . Lorem ipsum
          dolor sit amet consectetur. Turpis integer massa consectetur sed enim
          quis viverra. Vestibulum eu nibh dolor semper. Nisl feugiat quis nec
          odio pulvinar feugiat velit. Nulla massa sit morbi morbi. Tortor
          viverra eget lacus feugiat. Tempus vitae vitae orci at ultrices nisi
          diam faucibus. Ultricies in cursus volutpat aliquam turpis urna in
          sed. Hendrerit arcu sit lectus adipiscing egestas semper nunc. Ante
          consectetur id congue pulvinar libero tristique et orci. Platea
          convallis dictum dui augue. Tincidunt mattis urna sit semper sed duis
          feugiat mi. Lorem ipsum dolor sit amet consectetur. Turpis integer
          massa consectetur sed enim quis viverra. Vestibulum eu nibh dolor
          semper. Nisl feugiat quis nec odio pulvinar feugiat velit. Nulla massa
          sit morbi morbi. Tortor viverra eget lacus feugiat. Tempus vitae vitae
          orci at ultrices nisi diam faucibus. Ultricies in cursus volutpat
          aliquam turpis urna in sed. Hendrerit arcu sit lectus adipiscing
          egestas semper nunc. Ante consectetur id congue pulvinar libero
          tristique et orci. Platea convallis dictum dui augue. Tincidunt mattis
          urna sit semper sed duis feugiat mi.Ante consectetur id congue Lorem
          ipsum dolor sit amet consectetur. Tincidunt at cras tortor non
          volutpat quisque facilisis. Ultricies consequat sed vitae ac. Nisl eu
          nam id lectus tellus sit egestas. Orci iaculis et vehicula nisi
          facilisi neque lorem. In vulputate feugiat lobortis eros viverra.
          Turpis viverra vel fames enim tortor. Scelerisque dictumst aliquam
          gravida eget ut accumsan. A est dis platea vitae blandit quis.
          Ultricies ac at urna vel morbi diam. Donec ut sit sit et. Etiam cum
          faucibus eu elementum ut fermentum in cursus. Lorem ipsum dolor sit
          amet consectetur. Tincidunt at cras tortor non volutpat quisque
          facilisis. Ultricies consequat sed vitae ac. Nisl eu nam id lectus
          tellus sit egestas. Orci iaculis et vehicula nisi facilisi neque
          lorem. In vulputate feugiat lobortis eros viverra. Turpis viverra vel
          fames enim tortor. Scelerisque dictumst aliquam gravida eget ut
          accumsan. A est dis platea vitae blandit quis. Ultricies ac at urna
          vel morbi diam. Donec ut sit sit et. Etiam cum faucibus eu elementum
          ut fermentum in cursus. Ante consectetur id congue Ante consectetur id
          congue At a enim parturient id. Suspendisse ullamcorper fermentum
          accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at etiam
          lectus gravida sed. Sit in turpis suspendisse et aliquam. Vulputate
          sit phasellus proin eget arcu. Enim nec ante velit erat nibh nunc
          amet. Tellus at sit imperdiet non. Cras dictum curabitur urna mauris
          in. Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id
          etiam vitae non posuere tristique. Morbi sit mi sed nam amet tristique
          tellus. Sed quam aliquam pharetra nunc ipsum mattis. Volutpat
          pellentesque cras euismod habitant sit nibh. Dictum odio at aliquam
          sed. Orci odio lacinia id sem sed suspendisse mi fringilla purus. Quis
          sed ultricies ac nullam odio. Gravida sollicitudin viverra ornare
          pretium etiam tortor imperdiet tellus. Id purus etiam nunc hendrerit
          quam in. Dui netus lectus nulla cursus ultrices nulla. Morbi sit in
          gravida fermentum. Non sed lobortis amet eget sed donec.At a enim
          parturient id. Suspendisse ullamcorper fermentum accumsan diam tellus.
          Nibh pretium ultrices scelerisque dolor at etiam lectus gravida sed.
          Sit in turpis suspendisse et aliquam. Vulputate sit phasellus proin
          eget arcu. Enim nec ante velit erat nibh nunc amet. Tellus at sit
          imperdiet non. Cras dictum curabitur urna mauris in. Ut dui odio
          sagittis ut imperdiet ultricies mauris ac. A sit id etiam vitae non
          posuere tristique. Morbi sit mi sed nam amet tristique tellus. Sed
          quam aliquam pharetra nunc ipsum mattis. Volutpat pellentesque cras
          euismod habitant sit nibh. Dictum odio at aliquam sed. Orci odio
          lacinia id sem. At a enim parturient id. Suspendisse ullamcorper
          fermentum accumsan diam tellus. Nibh pretium ultrices scelerisque
          dolor at etiam lectus gravida sed. Sit in turpis suspendisse et
          aliquam. At a enim parturient id. Suspendisse ullamcorper fermentum
          accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at etiam
          lectus gravida sed. Sit in turpis suspendisse et aliquam. Vulputate
          sit phasellus proin eget arcu. Enim nec ante velit erat nibh nunc
          amet. Tellus at sit imperdiet non. Cras dictum curabitur urna mauris
          in. Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id
          etiam vitae non posuere tristique. Morbi sit mi sed nam amet tristique
          tellus. Sed quam aliquam pharetra.
        </div>
      </div>
    );
}
