import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import MainContent from "../Components/MainContent/MainContent";
import NavBar from "../Components/Navbar/NavBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asaytics Coding Assessment</title>
        <meta name="Assessment" content="Asaytics Coding Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <MainContent />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
