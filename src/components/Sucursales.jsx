/** @jsxImportSource theme-ui */
import { useRef } from "react";
import gsap from "gsap";
import CardSucursal from "./CardSucursal";

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

const Sucursales = ({ sucursal }) => {
  const sucursales = [
    {
      title: "DEL VALLE",
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
    },
    {
      title: "ROMA",
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
    },
    {
      title: "SANTA FE",
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
    },
    {
      title: "POLANCO",
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
    },
    {
      title: "PEDREGAL",
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
    },
    {
      title: "METEPEC",
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
    },
    {
      title: "MORELOS",
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
    },
    {
      title: "MONTERREY",
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
    },
    {
      title: "GUADALAJARA",
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
    },
    {
      title: "PUEBLA",
      param: "puebla",
      sucursal: "Angelópolis",
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
      title: "QUERETARO",
      sucursal: "Querétaro",
      param: "queretaro",
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "50px 0px",
        mb: "100px",
      }}
    >
      <h1
        sx={{
          fontSize: 4,
          fontFamily: "heading",
          textAlign: "center",
          color: "primary",
          fontWeight: 700,
          "@media screen and (min-width: 779px)": {
            fontSize: 6,
          },
        }}
      >
        Sucursales
      </h1>

      <div
        sx={{
          width: "90%",
          maxWidth: "900px",
          display: "flex",
          flexWrap: "wrap",
          gap: "5%",
          rowGap: "30px",
        }}
      >
        {sucursales.map((suc, index) => {
          return (
            <div
              sx={{
                width: "30%",
                height: "60px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                svg: {
                  fill: "none",
                },
                ".active": {
                  fill: "primary",
                  color: "white",
                },
                "&:hover": {
                  color: "white",
                  svg: { fill: "primary" },
                },
              }}
              key={suc.title}
            >
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 165 60"
                width="150px"
                className={`${sucursal === suc.param ? "active" : ""}`}
              >
                <path
                  d="M61.5,0.9c1-0.9,2.6-0.9,3.7,0c0.4,0.4,5.4-0.9,6-0.9c5.3,0,2.8,0.5,8.2,0.5
                c0.8,0,1.6-0.3,2.4,0.5c0.2,0.2,0.5,0.2,0.8,0.1c0.6,0,1.3,1.9,1.8,1.5c0.6-0.4,1,0.4,1.5,0.1c0.6-0.3,1.1-0.8,1.7-1.1
                c0.2-0.1,0.6-0.4,0.8-0.2c0.6,0.8,1.1,0,1.7,0c2.1-0.1,4.1-0.1,6.2-0.1c1.5,1.2,3,0.5,4.5,0.7s3-0.3,4.6,0.6c0.6,0.4,1.3,0,2,0.1
                c0.4,0.2,0.8,0.3,1.2,0.4c0.4,0,0.8-0.4,1.1-0.4c1.9,0,3.7-0.3,5.6,0.4c2.6,1,6.4-2.2,8-2.2c1.1,0,5-1.5,6-0.2
                c0.3,0.3,0.6,0.4,1,0.4c0.7,0.1,1.5,0,2.2,0.1c0.8,0.1,1.6-0.1,2.3,0.6c0.6,0.6,1.4,0.1,2.2,0.5c0.4,0.3,1-0.3,1.5,0.3
                c0.5,0.5,0.9-0.6,1.5-0.1c0.5,0.3,1,0.3,1.6,0.2c1.7,0,3.5,0,5.2,0.1c1,0,2-0.2,2.9,0.6c0.4,0.4,0.1,0.1,0.7,0.1c0.7,0,1.5,0,2.2,0
                c0.4-0.1,0.6-0.4,0.6-0.8c0.1-0.7,0.5-1.4,1.2-1.7c0.4-0.4,1-0.4,1.5,0c0.7,0.4,1.5,0.1,2.2,0.3c0.7,0.2,0.7-1.8,1.3-1.4
                c0.4,0.3,0.1,1.8,0.7,2.2c0.4,0.3,0.8,0.6,1.3,0.8c0.8,0.2,1,0.8,1,2.3c0,0.8,0,1.5-0.2,2.3c-0.2,1.1-0.4,2.2-0.6,3.3
                c-0.1,0.4,0,0.9,0.3,1.3c0.7,0.1,0.9,0.8,0.9,2.1c-0.1,1.5,0.5,2.7,0.4,4.2c-0.1,1.3,0,2.6,0,3.9c0,1.6,0.6,2.9,0.4,4.5
                c0.5,1.6,0.2,3.6,0.6,5.3c0.1,0.5,0.1,1,0.1,1.5c-0.1,1.3,0.2,2.7,0.7,3.9c0.1,0.5,0.1,1,0.1,1.5c-0.3,0.8-0.4,1.7-0.3,2.5
                c0.1,1.4-0.2,2.7-0.6,4c-0.4,1.1-0.6,2.3-0.6,3.6c0,1.8-0.3-1.4-0.9,0c-0.5,1.4-0.8,2.9-0.7,4.3c0,1-0.2,1.3-0.8,1.3
                c-0.7,0.1-1.3,0.1-2,0c-1-0.2-1.9,0.8-2.9,1c-0.3,0.3-0.5,0.6-0.6,1c-0.2,0.6-0.2,1.3-0.3,1.8c0,0.3-0.2,0.5-0.5,0.6
                c-1-0.8-2.1-0.3-3.2-0.4c-0.5-0.1-1,1.7-1.6,1.1c-0.3-0.2-0.6-0.3-1-0.3c-0.4-0.1,0.1,0.2-0.3-0.1c-1.1-1-2.2-0.6-3.3-0.7
                c-1.7-0.1-3.3,0-5-0.1c-0.7,0.1-1.4,0-2-0.5c-0.3-0.2-0.6-0.3-1-0.2c-0.8-0.1-1.5,1.5-2.3,0.1c-0.8,0-1.6-0.1-2.4-0.1
                c-0.8,0-1.6,0-2.4,0c-0.5,0.1-1,0.8-1.5,1.4s-1-0.4-1.5-0.5c-0.5-0.1-0.9-0.1-1.4-0.1c-3.1,0-6.1,0-9.2-0.1c-1.1,0-2.3,0.3-3.3-0.7
                c-0.3-0.2-0.7-0.2-1-0.1c-1.5,0-3.1,1.6-4.6,1.6c-1,0.1-2-0.2-3-0.6c-0.9-0.5-1.8,1.1-2.7,0.6c-0.2,0-0.4,0-0.6-0.1
                c-1.7-1.2-3.6-0.5-5.3-0.7c-0.9-0.1-1.9,0.3-2.8-0.6c-0.4-0.2-0.8-0.2-1.2-0.1c-2.3,0-4.7,0-7-0.1c-1.2,0-2.4,0.4-3.6-0.6
                c-0.2-0.1-0.4-0.1-0.6-0.1c-0.7-0.3-1.4,1.2-2.1,0.4c-0.7-0.7-1.4-0.3-2.2-0.4s-1.5,0-2.2-0.1c-0.3,0.1-0.6,0-0.8-0.1
                c-1-1-2.1-0.5-3.1-0.6c-1-0.1-2,0-3-0.1c-0.9-0.1-1.7,1.1-2.6,0.3c-0.3-0.3-0.8,0.4-1.1,0.3c-0.4-0.2-0.8-0.3-1.1-0.5
                c-2.8-1.3-5.6,0.3-8.3,0c-1.1-0.1-2.1,1.1-3.2,0.2c-0.4-0.2-0.8-0.2-1.2-0.1c-1,0-2,0-3,0c-0.3,0.1-0.6,0-0.8-0.2
                c-0.6-0.7-1.1-1.6-1.8-1.4c-0.7,0.2-1.3-0.6-1.9-0.7c-1.3-0.2-2.6,0.6-3.9,0.8c-0.9,0.1-1.6-0.9-2.5-0.8c-0.8,0.2-1.7,0-2.4-0.6
                c-0.3-0.2-0.7-0.2-1-0.1c-0.3,0-0.5,0-0.8,0c-0.5,0-1-1.1-1.5-0.7c-0.5,0.4-0.9,0-1.3,0c-0.8,0-1.5,0.4-2.1-0.1
                c-1-0.7-2.1-1.1-3.3-1.4c-1-0.4-2-0.9-2.8-1.6c-0.4-0.3-0.7-0.9-1.1-0.3c-0.6-0.6-1.3-0.4-1.6-2c-0.2-0.7-0.5-1.4-0.9-2
                c-0.6-1.2-1.7-1.6-2.4-0.9c-0.2,0.3-0.6,0.3-0.9,0c0,0,0,0-0.1-0.1c-1.4-1.2-2.7-1-3.9-2.9c-0.6-1-1.3-1.9-2.1-1.9
                c-0.5-0.1-0.9-0.5-1-1c-0.1-0.2-0.3-0.4-0.5-0.6c-1,0.1-1.8-1-2.5-2.1c-0.1-0.4-0.3-0.8-0.6-1.2c-0.7-0.3-1-1.2-0.9-2.6
                c0-0.5,0-1.1,0-1.6c0-0.5-0.1-0.9-0.3-1.4c-0.4-1-0.8-2.2-1.2-3c-1-1.8-0.9-13.1-0.8-15.2c0-1,0.2-1.9,0.5-2.9
                c0.3-0.8,0.9-0.3,1.3-0.4c0.8-0.2,1.6,0.1,2.4-0.6c0.4-0.2,0.8-0.3,1.2-0.2c1.1,0,2.3-0.1,3.4-0.1c0.6,0.1,1.3,0,1.8-0.5
                c0.1-0.2,0.4-0.2,0.6-0.2c1.7,0.3,3.7-0.8,5.4-0.9c0.6-0.1,1-0.5,1.1-1.8c0-0.8,0.2-1.2,0.6-1.2c0.6,0,1.2,0,1.8-0.1
                c0.9,0,1.9,0.3,2.7-0.6c0.3-0.2,0.7-0.2,1-0.1c0.4,0.1,0.8,0,1.2-0.2c0.7-0.7,1.4-0.5,2.1-0.6c1.2,0.1,2.3-0.2,3.3-0.7
                c1.1-0.7,2.3,1,3.5,0.8c0.6-0.2,1.3-0.1,1.8,0.4c0.1,0.2,0.4,0.2,0.6,0c0.5-0.5,1.3-0.6,1.8-0.1c0,0,0.1,0.1,0.1,0.1
                c0.2,0.2,0.5,0.3,0.8,0.1c0.8-0.9,1.7-0.4,2.5-0.6C42.4,1,43.2,1.3,44,0.5c0.2-0.2,0.5-0.2,0.8,0c1,0.8,2.4,0.8,3.3-0.1
                c0.3-0.1,0.6,0,0.8,0.1c0.1,0.2,0.3,0.3,0.6,0.3c0.8-0.9,1.7,3,2.4,1.9c0.7,0,1.5-0.3,2.2,0.2c0.9,0.8,2.2,0.8,3.1,0
                c0.5-0.2,1-0.3,1.6-0.2c0.3,0,0.7-0.2,1-0.3c0.5-0.3-0.1-0.9-0.5-1.5c-0.2-0.2,1.1-0.8,0.9-0.9S61.8,1.1,61.5,0.9z M129,3.4
                l-0.1-0.1l0,0.2L129,3.4z"
                  clipPath="url(#rect-mask)"
                ></path>
                <clipPath id="rect-mask">
                  <rect width="100%" height="100%" />
                </clipPath>
              </svg>
              <a
                href={`/sucursales/${suc.param}`}
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "heading",
                }}
                className={`${sucursal === suc.param ? "active" : ""}`}
              >
                {suc.title}
              </a>
            </div>
          );
        })}
      </div>
      {sucursales.map((suc, index) =>
        sucursal === suc.param ? (
          <CardSucursal key={suc.param} suc={suc} />
        ) : null
      )}
    </section>
  );
};

export default Sucursales;