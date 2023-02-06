import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import React, { FC, ChangeEvent, useState } from "react";
import { DETAIL_POKEMON } from "../api/gqlQueries";
import Details from "../../components/Details";
import { IDetail } from "../../libs/interface";
import Header from "@/components/Header";

const DetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const { loading, error, data } = useQuery(DETAIL_POKEMON, {
    notifyOnNetworkStatusChange: true,
    variables: {
      name: name,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!data) return "No data found.";

  return (
    <div>
      <Header />
      <Details props={{ pokemon: data.pokemon }} />
    </div>
  );
};

export default DetailsPage;
