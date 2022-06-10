// import styles from "../../src/styles/Home.module.css";
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import VideoSection from "../../src/components/VideoSection";
import Padecimientos from "../../src/components/Padecimientos";
import AccordionSucursales from "../../src/components/AccordionSucursales";
import CanalYoutube from "../../src/components/CanalYoutube";
import TestimonialesCarousel from "../../src/components/TestimonialesCarousel";

export default function About() {
  return (
    <div>
      <Head>
        <title>INNATE-Testimoniales</title>
      </Head>
      <Header></Header>
      <VideoSection title="Testimoniales" idVideo="n8RqZZ_xicg"></VideoSection>
      <TestimonialesCarousel></TestimonialesCarousel>
      <CanalYoutube></CanalYoutube>
      <Padecimientos></Padecimientos>
      <AccordionSucursales></AccordionSucursales>
      <Footer></Footer>
    </div>
  );
}
