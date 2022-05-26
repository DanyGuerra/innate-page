import Header from "../src/components/Header";
import styles from "../src/styles/Home.module.css";
import Head from "next/head";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>INNATE-Centro Quiroprácticos</title>
      </Head>
      <Header></Header>
      <h1>HOME</h1>
      <Footer></Footer>
    </>
  );
}
