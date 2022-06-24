import Head from "next/head";
import Footer from "../src/components/Footer";
import { useEffect, useState } from "react";
import HeaderSimple from "../src/components/HeaderSimple";
import FormCitas from "../src/components/FormCitas";

function Citas() {
  return (
    <>
      <Head>
        <title>INNATE - Registro citas</title>
      </Head>
      <HeaderSimple />
      <FormCitas />
      <Footer />
    </>
  );
}

export default Citas;
