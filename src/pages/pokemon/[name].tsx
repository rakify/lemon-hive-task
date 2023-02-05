import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { DETAIL_POKEMON } from "../api/gqlQueries";
import Details from "../../components/Details";
import { IDetail } from "../../libs/interface";
import Header from "@/components/Header";

export interface IError {
  status: number;
  message: string;
}

const DetailsPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  const [pokemon, setPokemon] = useState<IDetail | null>(null);

  const [catchOpen, setCatchOpen] = useState<boolean>(false);

  const { loading, error, data } = useQuery(DETAIL_POKEMON, {
    notifyOnNetworkStatusChange: true,
    variables: {
      name: name,
    },
    fetchPolicy: "network-only",
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <div>
        <Header />
        <Details props={{ pokemon: data }} />
      </div>
    );
};

export default DetailsPage;
