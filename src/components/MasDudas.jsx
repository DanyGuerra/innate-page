/** @jsxImportSource theme-ui */
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import logoFace from "../../assets/img/INNATE-FAQ-FB.png";
import logoInsta from "../../assets/img/INNATE-FAQ-IG.png";
import logoWhats from "../../assets/img/INNATE-FAQ-WA.png";

const MasDudas = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);
  const selectorItems = gsap.utils.selector(mySection);

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    gsap.fromTo(
      selectorItems(".item"),
      {
        opacity: 0,
        translateY: -50,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.25,
        stagger: 0.5,
        ease: "power.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
        mb: "50px",
      }}
      ref={mySection}
    >
      <h1
        sx={{
          fontSize: 5,
          m: 0,
          fontFamily: "heading",
          textAlign: "center",
          color: "primary",
          fontWeight: 700,
        }}
        className="item"
      >
        Si tienes más dudas
      </h1>
      <p className="item" sx={{ m: 0 }}>
        ponte en contacto con nosotros
      </p>
      <div
        className="item"
        sx={{
          mt: "20px",
          width: "50%",
          display: "flex",
          gap: "20%",
          justifyContent: "center",
          "@media screen and (min-width: 779px)": {
            gap: "5%",
          },
        }}
      >
        <a href="http://bit.ly/2megysO" target="_blank" rel="noreferrer">
          <Image
            src={logoFace}
            width="36px"
            height="36px"
            alt="Facebook Innate"
          ></Image>
        </a>
        <a href="http://bit.ly/2kk6qOE" target="_blank" rel="noreferrer">
          <Image
            src={logoInsta}
            width="36px"
            height="36px"
            alt="Instagram Innate"
          ></Image>
        </a>
        <a
          href="https://wa.me/5215568770693?text=Quiero%20%20agendar%20una%20cita%20"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={logoWhats}
            width="36px"
            height="36px"
            alt="Contacto Whatsapp Innate"
          ></Image>
        </a>
      </div>
    </section>
  );
};

export default MasDudas;
