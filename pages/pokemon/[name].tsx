import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SINGLE_POKEMON_DETAILS } from "../api/gqlQueries";
import Details from "../../components/Details";
import Header from "@/components/Header";

const DetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const { loading, error, data } = useQuery(GET_SINGLE_POKEMON_DETAILS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      name: name,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <div>
      <Header />
      <Details props={{ pokemon: data.pokemon }} />
    </div>
  );
};

export default DetailsPage;
