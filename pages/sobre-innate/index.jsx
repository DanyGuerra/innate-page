// import styles from "../../src/styles/Home.module.css";
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import AboutInnate from "../../src/components/AboutInnate";

export default function About() {
  return (
    <div>
      <Head>
        <title>INNATE-Sobre Innate</title>
      </Head>
      <Header></Header>
      <AboutInnate />
      <Footer></Footer>
    </div>
  );
}
