import React from "react";
import ASA from "../ASA/ASA";

import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import styles from "./Team.module.css";
import Loading from "../Loading/Loading";
import { Document } from "../../generated";

const Team = () => {
  const { data, error, loading } = useQuery(Document);

  if (loading) return <Loading />;

  if (data) {
    let result = data.asalist.result;

    return (
      <div className={styles.container}>
        <ASA ASAs={result} />
      </div>
    );
  }
  return <main>{error?.message}</main>;
};

export default Team;
