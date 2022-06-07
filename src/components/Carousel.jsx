/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import { LeftArrow, RightArrow } from "./Icons";

// Images
import sucursalDelValle from "../../assets/img/INNATE-Napoles.png";
import imgCamille from "../../assets/img/INNATE-equipo-CAMILLE_DEMBOSKI.png";
import cedCamille from "../../assets/img/INNATE-equipo-circulo-CAMILLE.png";
import imgGerardo from "../../assets/img/INNATE-equipo-GERARDO_MONTIEL_TEJEDA.png";
import cedGerardo from "../../assets/img/INNATE-equipo-circulo-GERARDO.png";

const Carousel = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [current, setCurrent] = useState(0);

  const mySection = useRef(null);
  const navSection = useRef(null);
  const selectorNav = gsap.utils.selector(navSection);
  const accordion = useRef(null);
  const refNavTitle = useRef(null);

  const slides = [
    {
      name: "Camile Demboski",
      university: "Universidad FEEVALE – RS",
      courses: [
        'Protocolo Método Activador "AMCT"',
        "Curso Perfeccionamiento en técnica diversificada",
        "Cértificado Thompson Technique",
      ],
      image: imgCamille,
      ced: cedCamille,
      style: "right",
    },
    {
      name: "Gerardo Montiel Tejeda",
      university: "Universidad UNEVE",
      courses: [
        "Cértificado Thompson Technique",
        "Certificado en técnica de activador por Arlan Fhur",
        "Certificado en técnica de activador por la universidad Parker",
      ],
      image: imgGerardo,
      ced: cedGerardo,
      style: "left",
    },
  ];

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        maxWidth: "360px",
      }}
    >
      <div sx={{ position: "relative", width: "100%", height: "600px" }}>
        {slides.map((slide, index) => {
          return (
            <React.Fragment key={index}>
              {current === index ? (
                <>
                  <div
                    sx={{
                      height: "250px",
                      position: "relative",
                      ".person-left": {
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                      },
                      ".person-right": {
                        position: "absolute",
                        right: 0,
                        top: 0,
                      },
                      ".ced-left": {
                        position: "absolute",
                        left: "calc(50% - 40px)",
                        top: 0,
                      },
                      ".ced-right": {
                        position: "absolute",
                        right: "calc(50% - 50px)",
                        bottom: 0,
                      },
                    }}
                  >
                    <span
                      className={`${
                        slide.style === "left" ? "person-left" : "person-right"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        width="178px"
                        height="178px"
                      ></Image>
                    </span>
                    <span
                      className={`${
                        slide.style === "left" ? "ced-left" : "ced-right"
                      }`}
                    >
                      <Image src={slide.ced} width="150" height="150"></Image>
                    </span>
                  </div>
                  <div sx={{ textAlign: "center" }}>
                    <h1
                      sx={{
                        color: "primary",
                        fontSize: 5,
                        fontFamily: "heading",
                        mb: 0,
                        p: "0 40px",
                      }}
                    >
                      {slide.name}
                    </h1>
                    <p
                      sx={{
                        fontSize: 3,
                        mt: "5px",
                      }}
                    >
                      {slide.university}
                    </p>
                    <p
                      sx={{
                        color: "primary",
                        fontSize: 4,
                        mb: 0,
                      }}
                    >
                      Cursos
                    </p>
                    <ul sx={{ textAlign: "left" }}>
                      {slide.courses.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </React.Fragment>
          );
        })}

        <div
          sx={{
            position: "absolute",
            left: 0,
            top: "calc(50% - 17px)",
            bg: "primary",
            width: "34px",
            height: "34px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={prevSlide}
        >
          <LeftArrow></LeftArrow>
        </div>
        <div
          sx={{
            position: "absolute",
            right: 0,
            top: "calc(50% - 17px)",
            bg: "primary",
            width: "34px",
            height: "34px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={nextSlide}
        >
          <RightArrow></RightArrow>
        </div>
      </div>

      <div
        sx={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              sx={{
                border: "1px solid black",
                borderColor: "primary",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                bg: `${current === index ? "primary" : ""}`,
                "&:hover": {
                  cursor: "pointer",
                  bg: "primary",
                },
              }}
              onClick={() => setCurrent(index)}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
