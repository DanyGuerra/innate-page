// import styles from "../../src/styles/Home.module.css";
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import VideoSection from "../../src/components/VideoSection";
import Padecimientos from "../../src/components/Padecimientos";
import Sucursales from "../../src/components/Sucursales";

export default function About() {
  return (
    <div>
      <Head>
        <title>INNATE-Testimoniales</title>
      </Head>
      <Header></Header>
      <VideoSection title="Testimoniales" idVideo="n8RqZZ_xicg"></VideoSection>
      <Padecimientos></Padecimientos>
      <Sucursales></Sucursales>
      <Footer></Footer>
    </div>
  );
}
