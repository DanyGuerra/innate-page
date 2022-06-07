/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import { LeftArrow, RightArrow } from "./Icons";

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

const Carousel = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [current, setCurrent] = useState(0);

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

  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "400px",
      }}
    >
      <div sx={{ position: "relative", width: "700px" }}>
        {accordionData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {current === index ? (
                <Image src={item.image} width="200px" height="200px"></Image>
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
          }}
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
          }}
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
        {accordionData.map((item, index) => {
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
