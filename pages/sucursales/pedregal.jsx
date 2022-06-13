import Head from "next/head";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import NewsLetter from "../../src/components/NewsLetter";
import Padecimientos from "../../src/components/Padecimientos";
import Diagnostico from "../../src/components/Diagnostico";
import Sucursales from "../../src/components/Sucursales";

export default function SucursalPedregal() {
  return (
    <div>
      <Head>
        <title>INNATE - CDMX - Pedregal</title>
      </Head>
      <Header></Header>
      <Sucursales sucursal={"pedregal"}></Sucursales>
      <NewsLetter></NewsLetter>
      <Padecimientos></Padecimientos>
      <Diagnostico></Diagnostico>
      <Footer></Footer>
    </div>
  );
}
