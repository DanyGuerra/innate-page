/** @jsxImportSource theme-ui */
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import AccordionSucursales from "../../src/components/AccordionSucursales";
import AccordionFaq from "../../src/components/AccordionFaq";
import MasDudas from "../../src/components/MasDudas";
import ButtonFixed from "../../src/components/ButtonFixed";

export default function Faq() {
  return (
    <div>
      <Head>
        <title>INNATE-Preguntas Frecuentes</title>
      </Head>
      <Header></Header>
      <ButtonFixed />
      <AccordionFaq></AccordionFaq>
      <MasDudas></MasDudas>
      <AccordionSucursales></AccordionSucursales>
      <Footer></Footer>
    </div>
  );
}
