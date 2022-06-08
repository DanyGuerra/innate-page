import styles from "../src/styles/Home.module.css";
import Header from "../src/components/Header";
import Head from "next/head";
import Footer from "../src/components/Footer";
import FirstSection from "../src/components/FirstSection";
import NewsLetter from "../src/components/NewsLetter";
import Padecimientos from "../src/components/Padecimientos";
import Diagnostico from "../src/components/Diagnostico";
import Compromiso from "../src/components/Compromiso";
import QuiropracticaPura from "../src/components/QuiropracticaPura";
import Sucursales from "../src/components/Sucursales";

export default function Home() {
  return (
    <>
      <Head>
        <title>INNATE-Centro Quiroprácticos</title>
      </Head>
      <Header />
      <FirstSection />
      <NewsLetter />
      <Padecimientos />
      <Diagnostico />
      <Compromiso />
      <QuiropracticaPura />
      <Sucursales />
      <Footer />
    </>
  );
}
