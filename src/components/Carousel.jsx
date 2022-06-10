/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import { LeftArrow, RightArrow } from "./Icons";

// Images
import imgCamille from "../../assets/img/INNATE-equipo-CAMILLE_DEMBOSKI.png";
import cedCamille from "../../assets/img/INNATE-equipo-circulo-CAMILLE.png";
import imgGerardo from "../../assets/img/INNATE-equipo-GERARDO_MONTIEL_TEJEDA.png";
import cedGerardo from "../../assets/img/INNATE-equipo-circulo-GERARDO.png";
import imgJuanjo from "../../assets/img/INNATE-equipo-JUAN_JOSE_SALDANA_MENA.png";
import cedJuanjo from "../../assets/img/INNATE-equipo-circulo-JUAN.png";
import imgEsteban from "../../assets/img/INNATE-equipo-ESTEBAN_HERNANDEZ_MAZA.png";
import cedEsteban from "../../assets/img/INNATE-equipo-circulo-ESTEBAN.png";
import imgAlexis from "../../assets/img/INNATE-equipo-ALEXIS_SALVADOR_URIBE.png";
import cedAlexis from "../../assets/img/INNATE-equipo-circulo-ALEXIS.png";
import imgLuisDaniel from "../../assets/img/INNATE-equipo-LUIS_DANIEL_CARRILLO_CONCEPCION.png";
import cedLuisDaniel from "../../assets/img/INNATE-equipo-circulo-LUIS.png";
import imgMariel from "../../assets/img/INNATE-equipo-MARIEL_MOCTEZUMA_LORETO.png";
import cedMariel from "../../assets/img/INNATE-equipo-circulo-MARIEL.png";
import imgMagda from "../../assets/img/INNATE-equipo-MAGDALENA_ITZEL_MARTINEZ_HERNANDEZ.png";
import cedMagda from "../../assets/img/INNATE-equipo-circulo-MAGDALENA.png";
import imgAle from "../../assets/img/INNATE-equipo-ALEJANDRO_CORONA_SAUCEDO.png";
import cedAle from "../../assets/img/INNATE-equipo-circulo-ALEJANDRO.png";
import imgAram from "../../assets/img/INNATE-equipo-ARAM_OMAR_GOMEZ_MENDOZA.png";
import cedAram from "../../assets/img/INNATE-equipo-circulo-ARAM.png";

const Carousel = ({ mySection }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const SLIDE_DURATION = 7;

  const refCard = useRef(null);
  const refImage = useRef(null);
  const refCed = useRef(null);
  const refTextCard = useRef(null);

  useEffect(() => {
    cardAnimation();
    const interval = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (duration === SLIDE_DURATION) {
      nextSlide();
      setDuration(0);
    }
  }, [duration]);

  useEffect(() => {
    slideAnimation();
    cedAnimation();
  }, [current]);

  const cardAnimation = () => {
    gsap.fromTo(
      refCard.current,
      {
        translateY: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 1,
        delay: 0.75,
        ease: "expo.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };
  const slideAnimation = () => {
    gsap.fromTo(
      refImage.current,
      {
        translateX: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateX: 0,
        duration: 2,
        ease: "expo.out",
      }
    );
    gsap.fromTo(
      refTextCard.current,
      {
        translateY: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 2,
        ease: "expo.out",
      }
    );
  };

  const cedAnimation = () => {
    gsap.fromTo(
      refCed.current,
      {
        translateY: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 2,
        ease: "expo.out",
      }
    );

    gsap.to(refCed.current, {
      rotation: "360",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  };

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
    {
      name: "Juan José Saldaña Mena",
      university: "Universidad UNEVE",
      courses: ["Carrera en Educación física", "Maestria en docencia"],
      image: imgJuanjo,
      ced: cedJuanjo,
      style: "right",
    },
    {
      name: "Esteban Hernández Maza",
      university: "Universidad UNEVT",
      courses: ["Cértificado Thompson Technique"],
      image: imgEsteban,
      ced: cedEsteban,
      style: "left",
    },
    {
      name: "Alexis Salvador Uribe",
      university: "Universidad UNEVT",
      courses: ["Cértificado Thompson Technique"],
      image: imgAlexis,
      ced: cedAlexis,
      style: "right",
    },
    {
      name: "Luis Daniel Carrillo Concepción",
      university: "Universidad UNEVT",
      courses: [],
      image: imgLuisDaniel,
      ced: cedLuisDaniel,
      style: "left",
    },
    {
      name: "Mariel Moctezuma Loreto",
      university: "Universidad Veracruzana",
      courses: ["Cértificado Thompson Technique"],
      image: imgMariel,
      ced: cedMariel,
      style: "right",
    },
    {
      name: "Magdalena Itzel Martínez Hernández",
      university: "Universidad UNEVE",
      courses: ["Cértificado Thompson Technique"],
      image: imgMagda,
      ced: cedMagda,
      style: "left",
    },
    {
      name: "Alejandro Corona Saucedo",
      university: "Universidad UNEVE",
      courses: ["Cértificado Thompson Technique"],
      image: imgAle,
      ced: cedAle,
      style: "right",
    },
    {
      name: "Aram Omar Gómez Mendoza",
      university: "Universidad UNEVE",
      courses: [
        "Posgrado en filosofía Quiropráctica expedido por Sherman College of Chiropractic",
        "Certificación en Thompson Technique",
        "Certificación en Thompson Technique Minardy Systems",
        "Certificación Knee Chest Solid Headpiece por The Art of the Specific",
      ],
      image: imgAram,
      ced: cedAram,
      style: "left",
    },
  ];

  const prevSlide = () => {
    setDuration(0);
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };
  const nextSlide = () => {
    setDuration(0);
    if (current == slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
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
        gap: "10px",
      }}
      ref={refCard}
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
                      ref={refImage}
                    >
                      <Image
                        src={slide.image}
                        width="178px"
                        height="178px"
                        alt={`${slide.name}`}
                      ></Image>
                    </span>
                    <span
                      className={`${
                        slide.style === "left" ? "ced-left" : "ced-right"
                      }`}
                      ref={refCed}
                    >
                      <Image
                        src={slide.ced}
                        width="150"
                        height="150"
                        alt={`Cédula de ${slide.name}`}
                      ></Image>
                    </span>
                  </div>
                  <div sx={{ textAlign: "center" }} ref={refTextCard}>
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
                      {slide.courses.length > 0 ? "Cursos" : null}
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
          width: "100%",
          flexWrap: "wrap",
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
              onClick={() => {
                setDuration(0);
                setCurrent(index);
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
