import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>THE MONSTERS ARE BACK IN TOWN</h1>
          <p>Buy and sell NFTs from our top graphic designers</p>
        </div>
      </main>
    </>
  );
};

export default Home;