import styles from "../src/styles/Home.module.css";
import Header from "../src/components/Header";
import Head from "next/head";
import Footer from "../src/components/Footer";
import FirstSection from "../src/components/FirstSection";
import NewsLetter from "../src/components/NewsLetter";
import Padecimientos from "../src/components/Padecimientos";
import Diagnostico from "../src/components/Diagnostico";
import Compromiso from "../src/components/Compromiso";
import QuiropracticaPura from "../src/components/QuiropracticaPura";
import AccordionSucursales from "../src/components/AccordionSucursales";
import { useEffect, useState } from "react";
import ModalAviso from "../src/components/ModalAviso";
import ButtonFixed from "../src/components/ButtonFixed";

function Home() {
  const [firstTime, setFirsTime] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (firstTime) {
        setShowModal(true);
        setFirsTime(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstTime, showModal]);

  return (
    <>
      <Head>
        <title>INNATE - Centro Quiroprácticos</title>
      </Head>
      <Header />
      <ButtonFixed />
      <FirstSection />
      <ModalAviso
        show={showModal}
        handleClose={() => setShowModal(false)}
      ></ModalAviso>
      <NewsLetter />
      <Padecimientos />
      <Diagnostico />
      <Compromiso />
      <QuiropracticaPura />
      <AccordionSucursales />
      <Footer />
    </>
  );
}

export default Home;
