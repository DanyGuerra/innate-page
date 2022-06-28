import Head from "next/head";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import NewsLetter from "../../src/components/NewsLetter";
import Padecimientos from "../../src/components/Padecimientos";
import Diagnostico from "../../src/components/Diagnostico";
import Sucursales from "../../src/components/Sucursales";
import ButtonFixed from "../../src/components/ButtonFixed";

export default function SucursalPolanco() {
  return (
    <div>
      <Head>
        <title>INNATE - CDMX - Polanco</title>
      </Head>
      <Header></Header>
      <ButtonFixed />
      <Sucursales sucursal={"polanco"}></Sucursales>
      <NewsLetter></NewsLetter>
      <Padecimientos></Padecimientos>
      <Diagnostico></Diagnostico>
      <Footer></Footer>
    </div>
  );
}
