/** @jsxImportSource theme-ui */
import { useRef } from "react";
import gsap from "gsap";
import CardSucursal from "./CardSucursal";
import CardEquipo from "./CardEquipo";

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

//Team Images
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
      equipo: [{ profileImg: imgGerardo, cedImg: cedGerardo, style: "right" }],
      urlMap: "https://goo.gl/maps/WegENy3XMywtAWZv8",
      agendarLabel: "BTN_sucursal_DelValle",
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
      equipo: [
        { profileImg: imgJuanjo, cedImg: cedJuanjo, style: "left" },
        { profileImg: imgAlexis, cedImg: cedAlexis, style: "right" },
      ],
      urlMap: "https://goo.gl/maps/NW119mWz1hw2QJaZ7",
      agendarLabel: "BTN_sucursal_Roma",
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
      equipo: [{ profileImg: imgCamille, cedImg: cedCamille, style: "left" }],
      urlMap: "https://goo.gl/maps/f5KysCQ2qauFwyfu6",
      agendarLabel: "BTN_sucursal_SantaFe",
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
      equipo: [
        { profileImg: imgEsteban, cedImg: cedEsteban, style: "left" },
        { profileImg: imgLuisDaniel, cedImg: cedLuisDaniel, style: "right" },
      ],
      urlMap: "https://goo.gl/maps/4cRt8uuHBiZzxRRp7",
      agendarLabel: "BTN_sucursal_Polanco",
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
      urlMap:
        "https://www.google.com/maps/place/Cda.+Gruta+19,+Jardines+del+Pedregal,+%C3%81lvaro+Obreg%C3%B3n,+01900+Ciudad+de+M%C3%A9xico,+CDMX/@19.3258652,-99.2024346,17z/data=!3m1!4b1!4m5!3m4!1s0x85cdfffa99da65d9:0xffd089891f868baf!8m2!3d19.3258652!4d-99.2002459",
      agendarLabel: "BTN_sucursal_Pegregal",
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
      equipo: [
        { profileImg: imgLuisDaniel, cedImg: cedLuisDaniel, style: "right" },
      ],
      urlMap: "https://goo.gl/maps/rqSnxT5XBpL9d3Pu8",
      agendarLabel: "BTN_sucursal_Metepec",
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
      urlMap: "https://goo.gl/maps/6GJSTnUEF8Qs8jPT6",
      agendarLabel: "BTN_sucursal_Cuernavaca",
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
      urlMap: "https://goo.gl/maps/dj4AjqPsWUT6xwhWA",
      agendarLabel: "BTN_sucursal_MTY",
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
      equipo: [{ profileImg: imgMariel, cedImg: cedMariel, style: "left" }],
      urlMap: "https://goo.gl/maps/k8iMdNhSTHUTasL47",
      agendarLabel: "BTN_sucursal_GDL",
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
      equipo: [{ profileImg: imgMagda, cedImg: cedMagda, style: "left" }],
      urlMap: "https://goo.gl/maps/L4iFZEszF1QaoYzR7",
      agendarLabel: "BTN_sucursal_Puebla",
    },
    {
      title: "QUERÉTARO",
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
      urlMap: "https://goo.gl/maps/jVG3R2LmEvbkqVZL8",
      agendarLabel: "BTN_sucursal_Queretaro",
    },
  ];

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
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
          rowGap: "10px",
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

      {sucursales.map((suc, index) =>
        sucursal === suc.param && suc.equipo ? (
          <CardEquipo key={index} equipo={suc.equipo} />
        ) : null
      )}
    </section>
  );
};

export default Sucursales;
