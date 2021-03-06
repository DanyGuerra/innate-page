/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import headerButton1 from "../../assets/img/newsletter-back.png";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "./Icons";

// Images
import imgHistoria from "../../assets/img/Historia clínica.svg";
import examenPostural from "../../assets/img/Examen postural.svg";
import examenMuscular from "../../assets/img/Examen muscular.svg";
import examenNeuro from "../../assets/img/Examen neurológico.svg";
import termografia from "../../assets/img/Termografia.svg";
import placasX from "../../assets/img/Análisis de Rayos X.svg";
import ajustesQuiro from "../../assets/img/Ajuste quiropráctico.svg";

const Diagnostico = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [itemClicked, setItemClicked] = useState(null);

  const mySection = useRef(null);
  const navSection = useRef(null);
  const selectorNav = gsap.utils.selector(navSection);
  const accordion = useRef(null);
  const refNavTitle = useRef(null);

  const accordionData = [
    {
      title: "Historia Clínica",
      content:
        "Como primer paso te pediremos llenar un cuestionario detallado para conocer los padecimientos, historia familiar y cirugías que hayas tenido.",
      image: imgHistoria,
    },
    {
      title: "Examen postural",
      content:
        "Usamos un aparato llamado Posturómetro para medir asimetrías casi imperceptibles en tu cuerpo (todos estamos un poco chuecos) y localizar dónde cargas más tu peso.",
      image: examenPostural,
    },
    {
      title: "Examen muscular",
      content:
        "Te realizaremos pruebas motrices para medir tu fuerza y sensibilidad y así determinar la salud de tu sistema nervioso.",
      image: examenMuscular,
    },
    {
      title: "Examen neurológico",
      content:
        "Nuestros especialistas quiroprácticos te realizarán una serie de pruebas de equilibrio y reflejos para diagnosticar la salud de tu sistema nervioso.",
      image: examenNeuro,
    },
    {
      title: "Termografía",
      content:
        "Utilizamos un escaner térmico para visualizar la interferencia nerviosa que hay en los distintos puntos de tu columna vertebral. Junto con tu quiropráctico podrás ver una gráfica de qué tan tensa está tu espalda y cuello.",
      image: termografia,
    },
    {
      title: "Placas de Rayos X",
      content:
        "Para darte un tratamiento personalizado te haremos una serie de rayos x digitales de toda tu columna vertebral.",
      image: placasX,
    },
    {
      title: "Ajuste quiropráctico",
      content:
        "Es el método quiropráctico para corregir o disminuir las subluxaciones (pequeños desplazamientos de una vértebra que irritan los nervios) y restablecer la salud de tu sistema nervioso. Consiste en movimientos suaves, pero específicos, que el quiropráctico realiza usando sus manos, con la ayuda de una camilla quiropráctica sobre la columna vertebral.",
      image: ajustesQuiro,
    },
  ];

  useEffect(() => {
    if (accordion) {
      animationAccordion(accordion.current);
    }
  }, [itemClicked]);

  useEffect(() => {
    navAnimation();
    titleAnimation();
    shakeEachElementStagger();
  }, []);

  const navAnimation = () => {
    gsap.fromTo(
      selectorNav("section"),
      {
        translateY: -400,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        stagger: 0.1,
        duration: 1,
        delay: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      navSection.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0.75,
        ease: "expo.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  const titleAnimation = () => {
    gsap.fromTo(
      refNavTitle.current,
      {
        translateX: -400,
        opacity: 0,
      },
      {
        opacity: 1,
        translateX: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  const shakeEachElementStagger = () => {
    gsap.fromTo(
      selectorNav("section"),
      {
        translateX: 0,
      },
      {
        translateX: -20,
        duration: 1,
        ease: "elastic.in",
        repeat: -1,
        delay: 2,
        repeatDelay: 1,
        stagger: {
          each: 2,
          onComplete: () => {
            gsap.to(selectorNav("section"), {
              translateX: 0,
              duration: 1,
              ease: "elastic.out",
            });
          },
        },
      }
    );
  };

  const animationAccordion = (el) => {
    gsap.fromTo(
      el,
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "auto",
        duration: 0.5,
        ease: "expo.out",
      }
    );
    gsap.to(el, {
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    });
  };

  const toogle = (index) => {
    if (itemClicked === index) {
      return setItemClicked(null);
    }

    setItemClicked(index);
  };

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={mySection}
    >
      <div
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          "@media screen and (min-width: 779px)": {
            width: "50%",
          },
        }}
      >
        <div
          sx={{
            textAlign: "center",
            color: "primary",
            p: {
              m: 0,
            },
          }}
          ref={refNavTitle}
        >
          <p>La primera cita consiste de 7 pasos para un</p>
          <p
            sx={{
              fontSize: 5,
              fontFamily: "heading",
            }}
          >
            diagnostico personalizado e integral:
          </p>
        </div>

        <nav
          sx={{
            width: "100%",
            minHeight: "600px",
            overflow: "hidden",

            ".active": {
              bg: "primary",
              color: "textInverted",
              svg: {
                fill: "white",
              },
            },
          }}
          ref={navSection}
        >
          {accordionData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => toogle(index)}
                  sx={{
                    borderTop: "1px solid black",

                    "&:hover": {
                      cursor: "pointer",
                      bg: "primary",
                      color: "textInverted",
                      svg: {
                        fill: "white",
                      },
                    },
                  }}
                  className={itemClicked === index ? "active" : ""}
                >
                  <section
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: "0px 50px",
                      height: "50px",
                    }}
                  >
                    <div>
                      <sup>{`0${index + 1}`}</sup>
                      {` ${item.title}`}
                    </div>

                    {itemClicked === index ? (
                      <ArrowUp></ArrowUp>
                    ) : (
                      <ArrowDown />
                    )}
                  </section>
                </div>

                {itemClicked === index ? (
                  <div
                    sx={{
                      p: "20px 10px",
                      pl: "10%",
                      display: "flex",
                      gap: "10px",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      "@media screen and (min-width: 779px)": {
                        flexDirection: "row",
                      },
                    }}
                    ref={accordion}
                  >
                    <Image
                      src={item.image}
                      alt={`Icono de ${item.title}`}
                      height="100%"
                      width="100%"
                    ></Image>
                    <p
                      sx={{
                        width: "90%",
                        textAlign: "center",
                        "@media screen and (min-width: 779px)": {
                          width: "80%",
                          textAlign: "left",
                        },
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Diagnostico;
