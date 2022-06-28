/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "./Icons";
import { PrimaryButton, SecondaryButtonInversed } from "./Buttons";

// Images
import sucursalDelValle from "../../assets/img/INNATE-sucursal-DELVALLE.png";
import sucursalRoma from "../../assets/img/INNATE-Napoles.png";
import sucursalSantaFe from "../../assets/img/INNATE-sucursal-SANTAFE.png";
import sucursalPolanco from "../../assets/img/INNATE-sucursal-POLANCO.png";
import sucursalPedregal from "../../assets/img/INNATE-sucursal-PEDREGAL.png";
import sucursalMetepec from "../../assets/img/INNATE-sucursal-METEPEC.png";
import sucursalCuernavaca from "../../assets/img/INNATE-sucursal-CUERNAVACA.png";
import sucursalMty from "../../assets/img/INNATE-sucursal-MTY.png";
import sucursalGdl from "../../assets/img/INNATE-sucursal-GDL.png";
import sucursalPuebla from "../../assets/img/INNATE-sucursal-PUEBLA.png";
import sucursalQro from "../../assets/img/INNATE-Queretaro.png";
import sucursalInterlomas from "../../assets/img/INN-Sucursal-Mapa-Interlomas.png";
import sucursalSaltillo from "../../assets/img/INN-Sucursal-Mapa-Saltillo.png";

const AccordionSucursales = () => {
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
      param: "delvalle",
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
      agendarLabel: "BTN_footer_DelValle",
    },
    {
      sucursal: "Roma",
      param: "roma",
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
      agendarLabel: "BTN_footer_Juarez",
    },
    {
      sucursal: "Santa Fe",
      param: "santafe",
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
      agendarLabel: "BTN_footer_SantaFe",
    },
    {
      sucursal: "Polanco",
      param: "polanco",
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
      agendarLabel: "BTN_footer_Polanco",
    },
    {
      sucursal: "Pedregal",
      param: "pedregal",
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
      agendarLabel: "BTN_footer_Pedregal",
    },
    {
      sucursal: "Interlomas",
      param: "interlomas",
      state: "CDMX",
      phone: ["55 6521 5306"],
      adress:
        "Pje. Interlomas 39, Edifico Terraz Interlomas, Huixquilucan CP. 52787 Int. Local PA 05",
      horarios: [
        "Lunes a Jueves 09:00 a 18:00",
        "Viernes 09:00 a 14:00",
        "Sábado 09:00 a 13:00",
      ],

      image: sucursalInterlomas,
      agendarLabel: "BTN_footer_Interlomas",
    },
    {
      sucursal: "Metepec",
      param: "metepec",
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
      agendarLabel: "BTN_footer_Metepec",
    },
    {
      sucursal: "Cuernavaca",
      param: "cuernavaca",
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
      agendarLabel: "BTN_footer_Cuernavaca",
    },
    {
      sucursal: "San Pedro Garza",
      param: "monterrey",
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
      agendarLabel: "BTN_footer_MTY",
    },
    {
      sucursal: "Puerta de Hierro",
      param: "guadalajara",
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
      agendarLabel: "BTN_footer_GDL",
    },
    {
      sucursal: "Puebla",
      param: "puebla",
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
      agendarLabel: "BTN_footer_Puebla",
    },
    {
      sucursal: "Querétaro",
      param: "queretaro",
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
      agendarLabel: "BTN_footer_Queretaro",
    },

    {
      sucursal: "Saltillo",
      param: "saltillo",
      state: "COAH",
      phone: ["844 665 52 62"],
      adress:
        "Boulevard parque centro No. 1425, local C-1. C.P. 25279, Colonia Los Parques, Saltillo Coahuila.  ",
      horarios: [
        "Lunes a Jueves 09:00 a 18:00",
        "Viernes 09:00 a 16:00",
        "Sábado 09:00 a 13:00",
      ],

      image: sucursalSaltillo,
      agendarLabel: "BTN_footer_Saltillo",
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

  const handleCita = (param) => {
    window.location = `${process.env.CITAS_URL}/?source=${param}`;
  };

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "50px",
      }}
      ref={mySection}
      id="sucursales"
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
                      gridTemplate: "auto auto auto / repeat(1, 1fr)",
                      "@media screen and (min-width: 779px)": {
                        gridTemplate: "auto auto / 40% 60%",
                      },
                    }}
                    ref={accordion}
                  >
                    <a
                      href={`/sucursales/${item.param}`}
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
                        alt={`Mapa sucursal Innate ${item.sucursal}`}
                      ></Image>
                    </a>
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
                      <a href={`/sucursales/${item.param}`}>
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
                      </a>
                      <span>
                        {item.phone.length > 0
                          ? item.phone.map((tel, index) =>
                              index == 0 ? (
                                <a
                                  key={tel}
                                  href={`tel:${tel.replace(/ /g, "")}`}
                                >
                                  Tel:{tel}
                                </a>
                              ) : (
                                <a
                                  key={tel}
                                  href={`tel:${tel.replace(/ /g, "")}`}
                                >
                                  {" "}
                                  y {tel}
                                </a>
                              )
                            )
                          : null}
                      </span>
                      <section
                        sx={{
                          mt: "30px",
                          display: "flex",
                          gap: "5%",
                          justifyContent: "center",
                        }}
                      >
                        <span sx={{ width: "40%" }}>
                          <PrimaryButton
                            width="100%"
                            height="50px"
                            handleClick={() => handleCita(item.agendarLabel)}
                          >
                            Agendar
                          </PrimaryButton>
                        </span>

                        <a
                          href={`tel:${
                            item.phone.length > 0
                              ? item.phone[0].replace(/ /g, "")
                              : ""
                          }`}
                          sx={{ width: "40%" }}
                        >
                          <SecondaryButtonInversed width="100%" height="50px">
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

export default AccordionSucursales;
