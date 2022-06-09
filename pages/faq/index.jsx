/** @jsxImportSource theme-ui */
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Sucursales from "../../src/components/Sucursales";
import AccordionFaq from "../../src/components/AccordionFaq";
import MasDudas from "../../src/components/MasDudas";

export default function Faq() {
  return (
    <div>
      <Head>
        <title>INNATE-Preguntas Frecuentes</title>
      </Head>
      <Header></Header>
      <AccordionFaq></AccordionFaq>
      <MasDudas></MasDudas>
      <Sucursales></Sucursales>
      <Footer></Footer>
    </div>
  );
}
