/** @jsxImportSource theme-ui */
import Header from "../../src/components/Header";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Sucursales from "../../src/components/Sucursales";

export default function Faq() {
  return (
    <div>
      <Head>
        <title>INNATE-Preguntas Frecuentes</title>
      </Head>
      <Header></Header>
      <Sucursales></Sucursales>
      <Footer></Footer>
    </div>
  );
}
