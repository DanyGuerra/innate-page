/** @jsxImportSource theme-ui */
import background from "../../assets/img/INNATE-sobre-innate-back.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const SectionValores = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);
  const imageBack = useRef(null);
  const itemsSection = gsap.utils.selector(mySection);

  useEffect(() => {
    fadeAnimation();
    paralellAnimation();
  }, []);

  const fadeAnimation = () => {
    gsap.fromTo(
      itemsSection(".item"),
      { opacity: 0, translateY: -50 },
      {
        translateY: 0,
        opacity: 1,
        stagger: 0.5,
        ease: "expo.out",
        duration: 1,
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  const paralellAnimation = () => {
    gsap.to(imageBack.current, {
      translateY: 250,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: mySection.current,
        start: "top bottom",
        scrub: true,
      },
    });
  };

  return (
    <section
      sx={{
        position: "relative",
        width: "100%",
        bg: "primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "50px 0px 100px 0px",
        mb: "100px",
      }}
      ref={mySection}
    >
      <div
        sx={{
          width: "80%",
          maxWidth: "560px",
          color: "white",
          h1: {
            fontSize: 5,
            fontFamily: "heading",
            textAlign: "center",
            fontWeight: 700,
          },
        }}
      >
        <h1 className="item">Visión</h1>
        <p className="item">
          Ser una práctica con un alto volumen de usuarios educados acerca de la
          importancia del sistema nervioso y de una columna vertebral sana.
        </p>
        <h1 className="item">Misión</h1>
        <p className="item">
          Practicar la quiropráctica de una forma pura, promoviendo la revisión
          para la detección de la subluxación vertebral y corrigiéndola a través
          de únicamente ajustes quiroprácticos con la finalidad de auxiliar el
          funcionamiento del sistema nervioso.
        </p>
      </div>
      <span
        sx={{
          width: "20%",
          minWidth: "200px",
          maxWidth: "320px",
          height: "auto",
          opacity: 0.3,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        ref={imageBack}
      >
        <Image
          src={background}
          layout="responsive"
          alt="Background Innate"
        ></Image>
      </span>
    </section>
  );
};

export default SectionValores;
