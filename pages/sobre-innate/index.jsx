// import styles from "../../src/styles/Home.module.css";
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import VideoSection from "../../src/components/VideoSection";
import Padecimientos from "../../src/components/Padecimientos";
import Diagnostico from "../../src/components/Diagnostico";
import QuiropracticaPura from "../../src/components/QuiropracticaPura";
import AccordionSucursales from "../../src/components/AccordionSucursales";
import NuestroEquipo from "../../src/components/NuestroEquipo";
import SectionValores from "../../src/components/SectionValores";

export default function About() {
  return (
    <div>
      <Head>
        <title>INNATE-Sobre Innate</title>
      </Head>
      <Header></Header>
      <VideoSection title="Sobre Innate" idVideo="Y9KrE1dNzNE"></VideoSection>
      <NuestroEquipo></NuestroEquipo>
      <SectionValores></SectionValores>
      <Padecimientos></Padecimientos>
      <Diagnostico></Diagnostico>
      <QuiropracticaPura></QuiropracticaPura>
      <AccordionSucursales></AccordionSucursales>
      <Footer></Footer>
    </div>
  );
}
