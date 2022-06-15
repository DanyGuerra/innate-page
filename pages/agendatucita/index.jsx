import Head from "next/head";
import HeaderSimple from "../../src/components/HeaderSimple";
import Footer from "../../src/components/Footer";
import Diagnostico from "../../src/components/Diagnostico";
import Padecimientos from "../../src/components/Padecimientos";
import FirstSectionAgendar from "../../src/components/FirstSectionAgendar";
import AccordionSucursales from "../../src/components/AccordionSucursales";
import { useEffect, useState } from "react";

const DEFAULT_PRICE = {
  prev: 3799,
  actual: 1699,
};

const SALTILLO_PRICE = {
  prev: 3799,
  actual: 1299,
};

function AgendaCita({ query }) {
  const [actualPrice, setActualPrice] = useState({});

  useEffect(() => {
    setPrice();
  }, []);

  const setPrice = () => {
    switch (query.sucursal) {
      case "SALTILLO":
        setActualPrice(SALTILLO_PRICE);
        console.log("case saltillo");
        break;
      default:
        setActualPrice(DEFAULT_PRICE);
        console.log("Default case");
        break;
    }
  };

  return (
    <>
      <Head>
        <title>INNATE - Agenda tu cita</title>
      </Head>
      <HeaderSimple />
      <FirstSectionAgendar actualPrice={actualPrice} />
      <Diagnostico />
      <Padecimientos />
      <AccordionSucursales />
      <Footer />
    </>
  );
}

AgendaCita.getInitialProps = ({ query }) => {
  return { query };
};

export default AgendaCita;
