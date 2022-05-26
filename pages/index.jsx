import Header from "../src/components/Header";
import styles from "../src/styles/Home.module.css";
import Head from "next/head";
import Footer from "../src/components/Footer";
import FirstSection from "../src/components/FirstSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>INNATE-Centro Quiroprácticos</title>
      </Head>
      <Header></Header>
      <FirstSection></FirstSection>
      <Footer></Footer>
    </>
  );
}
