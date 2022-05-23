import Header from "../src/components/Header";
import styles from "../src/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>INNATE-Inicio</title>
      </Head>
      <Header></Header>
      <h1>HOME</h1>;
    </>
  );
}
