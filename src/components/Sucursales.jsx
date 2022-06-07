/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "./Icons";
import { PrimaryButton, SecondaryButtonInversed } from "./Buttons";
// Images
import sucursalDelValle from "../../assets/img/INNATE-Napoles.png";
import sucursalRoma from "../../assets/img/INNATE-sucursal-ROMA.png";
import sucursalSantaFe from "../../assets/img/INNATE-sucursal-SANTAFE.png";
import sucursalPolanco from "../../assets/img/INNATE-sucursal-POLANCO.png";
import sucursalPedregal from "../../assets/img/INNATE-sucursal-PEDREGAL.png";
import sucursalMetepec from "../../assets/img/INNATE-sucursal-METEPEC.png";
import sucursalCuernavaca from "../../assets/img/INNATE-sucursal-CUERNAVACA.png";
import sucursalMty from "../../assets/img/INNATE-sucursal-MTY.png";
import sucursalGdl from "../../assets/img/INNATE-sucursal-GDL.png";
import sucursalPuebla from "../../assets/img/INNATE-sucursal-PUEBLA.png";
import sucursalQro from "../../assets/img/INNATE-Queretaro.png";

const Sucursales = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [itemClicked, setItemClicked] = useState(null);

  const mySection = useRef(null);
  const navSection = useRef(null);
  const selectorNav = gsap.utils.selector(navSection);
  const accordion = useRef(null);
  const refNavTitle = useRef(null);

  const accordionData = [
    {
      sucursal: "Del Valle",
      state: "CDMX",
      phone: ["55 6798 2506", "55 6798 2507"],
      adress:
        "Av. Col. Del Valle 421 Int. 101A.  Col. Del Valle, Alcaldía Benito Juárez, CDMX C.P. 03100",
      horarios: [
        "Lunes a Jueves 09:00-18:00",
        "Viernes 09:00-16:00",
        "Sábados 07:00-13:00",
      ],

      image: sucursalDelValle,
    },
    {
      sucursal: "Roma",
      state: "CDMX",
      phone: ["55 5919 1322"],
      adress:
        "Nápoles No.40 Local B Col. Juárez Alcaldía Cuauhtémoc, CDMX C.P.06600",
      horarios: [
        "Lunes, Miercoles y Viernes 09:00 a 13:00",
        "Martes - Jueves 08:00 a 17:00",
        "Sábados 08:00 a 13:00",
      ],

      image: sucursalRoma,
    },
    {
      sucursal: "Santa Fe",
      state: "CDMX",
      phone: ["55 5292 7901"],
      adress:
        "Av. Bernardo Quintana 80 Local 2A, Edificio Las Ventanas, Col. La Loma de Santa Fe. Alcaldía Álvaro Obregón CDMX, C.P. 01210",
      horarios: [
        "Lunes a Jueves 09:00 a 16:00",
        "Viernes 09:00 a 14:00",
        "Sábados 09:00 a 13:00",
      ],

      image: sucursalSantaFe,
    },
    {
      sucursal: "Polanco",
      state: "CDMX",
      phone: ["55 1560 6322"],
      adress:
        "Av. Campos Eliseos 176 Local A  Col. Polanco V Sección Alcaldía Miguel Hidalgo, CDMX C.P. 11560",
      horarios: [
        "Lunes, Miercoles 08:00 a 17:00",
        "Martes - Jueves 09:00 a 16:00",
        "Viernes 08:00 a 13:00",
        "Sábados 09:00 a 13:00",
      ],

      image: sucursalPolanco,
    },
    {
      sucursal: "Pedregal",
      state: "CDMX",
      phone: ["55 2289 5547"],
      adress:
        "Cerrada de Gruta 19, Local 1 Col. Jardínes del Pedregal Alcaldía Álvaro Obregón CDMX, C.P. 01900",
      horarios: [
        "Lunes - Miércoles 09:00 a 16:00",
        "Martes - Jueves 09:00 a 18:00",
        "Viernes 08:00 a 14:00",
        "Sábados 09:00 a 13:00",
      ],

      image: sucursalPedregal,
    },
    {
      sucursal: "Metepec",
      state: "EDOMEX",
      phone: ["722 925 0907"],
      adress:
        "Plaza Rubi. Calle Leona Vicario 501, Coaxustenco Metepec Estado de México C.P. 52140",
      horarios: [
        "Lunes, Miércoles: 09:00 a 17:00",
        "Martes - Jueves: 09:00 a 16:00",
        "Viernes 09:00 a 14:00",
        "Sábado 08:00 a 13:00",
      ],

      image: sucursalMetepec,
    },
    {
      sucursal: "Cuernavaca",
      state: "MOR",
      phone: ["777 202 6764"],
      adress:
        "Plaza Norte. Calzada de los Reyes 316 , Col. Jardín Tetela,  Cuernavaca, Morelos C.P. 62136",
      horarios: [
        "Lunes, Miércoles: 10:00 a 17:00",
        "Martes - Jueves: 10:00 a 18:00",
        "Viernes 10:00 a 14:00",
        "Sábado 08:00 a 13:00",
      ],

      image: sucursalCuernavaca,
    },
    {
      sucursal: "San Pedro Garza",
      state: "N.L",
      phone: ["81 1231 2783"],
      adress:
        "Av. José Vasconcelos 404 Local 213 Casco Urbano San Pedro Garza García, Monterrey, Nuevo León  C.P. 66230",
      horarios: [
        "Lunes a Jueves: 09:00 a 18:00",
        "Viernes: 09:00 a 16:00",
        "Sábado 09:00 a 13:00",
      ],

      image: sucursalMty,
    },
    {
      sucursal: "Puerta de Hierro",
      state: "JAL",
      phone: ["33 3803 2025"],
      adress:
        "Plaza Unicenter. Real de Acueducto 125 Local 8, Puerta de Hierro, Zapopan Jalisco  C.P. 45116",
      horarios: [
        "Lunes - Miércoles: 09:00 a 16:00",
        "Martes - Jueves: 09:00 a 18:00",
        "Viernes 09:00 a 14:00",
        "Sábado 09:00 a 13:00",
      ],

      image: sucursalGdl,
    },
    {
      sucursal: "Puebla",
      state: "PUE",
      phone: ["222 197 3371"],
      adress:
        "Angelópolis Plaza Adagio. Paseo Ópera 11 Adagio Townplaza Distrito Sonata Lomas de Angelópolis 2, C.P. 72830 LOCAL 102",
      horarios: [
        "Lunes a Jueves: 09:00 a 18:00",
        "Viernes 09:00 a 16:00",
        "Sábado 09:00 a 13:00",
      ],

      image: sucursalPuebla,
    },
    {
      sucursal: "Querétaro",
      state: "QRO",
      phone: ["442 224 6968"],
      adress:
        "Av. del Campanario #109, Col. Hacienda el Campanario Querétaro. CP 76146",
      horarios: [
        "Lunes a Jueves 09:00 a 18:00",
        "Viernes 09:00 a 16:00",
        "Sábado 09:00 a 13:00",
      ],

      image: sucursalQro,
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
            width: "80%",
          },
          "@media screen and (min-width: 992px)": {
            width: "40%",
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
          <p
            sx={{
              fontSize: 5,
              fontFamily: "heading",
            }}
          >
            Sucursales
          </p>
        </div>

        <nav
          sx={{
            width: "100%",
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
                    color: "primary",

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
                      <sup sx={{ mr: "5px" }}>{item.state}</sup>
                      {` ${item.sucursal}`}
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
                      display: "grid",
                      rowGap: "10px",
                      columnGap: "10px",
                      gridTemplate: "260px 225px 150px / repeat(1, 1fr)",
                      "@media screen and (min-width: 779px)": {
                        gridTemplate: "260px 150px / 40% 60%",
                      },
                    }}
                    ref={accordion}
                  >
                    <div
                      sx={{
                        textAlign: "center",
                        gridColumn: "1 / 2",
                        gridRow: "1 / 2 ",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={item.image}
                        width="260px"
                        height="260px"
                      ></Image>
                    </div>
                    <div
                      sx={{
                        textAlign: "center",
                        gridColumn: "1 / 2",
                        gridRow: "2 / 3 ",
                        padding: "10px",
                        "@media screen and (min-width: 779px)": {
                          gridColumn: "2 / 3",
                          gridRow: "1 / 2 ",
                        },
                      }}
                    >
                      <h1
                        sx={{
                          fontSize: 5,
                          fontFamily: "heading",
                          color: "primary",
                          m: 0,
                        }}
                      >
                        {item.sucursal}
                      </h1>
                      <p>{item.adress}</p>

                      <span>
                        {item.phone.map((tel, index) =>
                          index == 0 ? (
                            <a key={tel} href={`tel:${tel.replace(/ /g, "")}`}>
                              Tel:{tel}
                            </a>
                          ) : (
                            <a key={tel} href={`tel:${tel.replace(/ /g, "")}`}>
                              {" "}
                              y {tel}
                            </a>
                          )
                        )}
                      </span>
                      <section
                        sx={{
                          mt: "30px",
                          display: "flex",
                          gap: "20px",
                          justifyContent: "center",
                        }}
                      >
                        <PrimaryButton width="165px" height="50px">
                          Agendar
                        </PrimaryButton>

                        <a href={`tel:${item.phone[0].replace(/ /g, "")}`}>
                          <SecondaryButtonInversed width="165px" height="50px">
                            Llamar
                          </SecondaryButtonInversed>
                        </a>
                      </section>
                    </div>
                    <div
                      sx={{
                        textAlign: "center",
                        gridColumn: "1 / 3",
                        gridRow: "3 / 4 ",
                        "@media screen and (min-width: 779px)": {
                          gridColumn: "1 / 3",
                          gridRow: "2 / 3 ",
                        },
                      }}
                    >
                      <span sx={{ color: "primary" }}>Horarios:</span>
                      {item.horarios.map((hor, index) => (
                        <p key={hor}>{hor}</p>
                      ))}
                    </div>
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

export default Sucursales;
