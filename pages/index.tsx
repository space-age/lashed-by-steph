import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/main/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lashed by Steph</title>
        <link rel="icon" href="/tab-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Main />
      <footer></footer>
    </div>
  );
};

export default Home;
