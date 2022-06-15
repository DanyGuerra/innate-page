/** @jsxImportSource theme-ui */
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import headerBack from "../../assets/img/header-back.png";
import sucursalesCircle from "../../assets/img/sucursales_circulo_verde.png";

const FirstSectionAgendar = ({ actualPrice }) => {
  const imageBack = useRef(null);
  const titleHeader = useRef(null);
  const buttonOneHeader = useRef(null);
  const buttonTwoHeader = useRef(null);

  useEffect(() => {
    animationOneSideToOther(imageBack.current, -200, 2.5);
    animationOneSideToOther(titleHeader.current, 200, 2.5);
    animationOneSideToOther(buttonTwoHeader.current, 800, 0.5, 1);
    animationOneSideToOther(buttonOneHeader.current, 800, 0.5, 1);
  }, []);

  const animationOneSideToOther = (el, distance, time, delay = 0) => {
    gsap.set(el, { translateX: distance });
    gsap.to(el, {
      translateX: 0,
      duration: time,
      delay: delay,
      ease: "expo.out",
    });
  };

  const revealAnimation = (el, time, delay) => {
    gsap.to(el, {
      width: 0,
      duration: time,
      delay: delay,
      ease: "expo.out",
    });
  };

  const handleAgendar = () => {
    window.location = "/";
  };
  const handleConoceMas = () => {
    window.location = "/";
  };

  return (
    <section
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "100px",
        pb: "0px",
      }}
    >
      <div
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: "800px",
          height: "100vh",
          display: "grid",
          overflow: "hidden",
          gridTemplate: "50% 50% / 30% 70%",
          "@media screen and (min-width: 779px)": {
            alignItems: "center",
            gridColumn: "1/3",
            gridRow: "2/3",
          },
        }}
      >
        <div
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "112px",
            opacity: 1,
            zIndex: -1,
            objectFit: "cover",
            overflow: "hidden",
          }}
          ref={imageBack}
        >
          <Image
            src={headerBack}
            width="150px"
            height="650px"
            layout="responsive"
            alt="Especialistas quiropracticos en columna vertebral muestran una espalda sana, sin escoliosis ciática ni hernia"
          ></Image>
        </div>
        <div
          sx={{
            gridColumn: "2/3",
            gridRow: "1/2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            height: "100%",
            "@media screen and (min-width: 779px)": {
              // alignItems: "center",
              // gridColumn: "1/3",
              // gridRow: "2/3",
            },
          }}
          ref={titleHeader}
        >
          <div>
            <h1
              sx={{
                fontSize: 5,
                fontFamily: "heading",
                textAlign: "left",
                color: "primary",
                fontWeight: 400,
                m: 0,
                mb: "20px",
                "@media screen and (min-width: 779px)": {
                  fontSize: 7,
                },
              }}
            >
              Expertos en cuidar tu espalda
            </h1>
            <p
              sx={{
                fontSize: 2,
                textAlign: "left",
                color: "primary",
                fontWeight: 400,
                m: 0,
                "@media screen and (min-width: 779px)": {
                  fontSize: 4,
                },
              }}
            >
              PRIMERA VISITA CON EXAMEN COMPLETO DE COLUMNA VERTEBRAL
            </p>
          </div>

          <div
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "110px",
              textAlign: "center",
              p: {
                zIndex: 1,
                m: 0,
                color: "white",
                fontSize: 2,
              },
              "@media screen and (min-width: 779px)": {
                width: "210px",
                height: "190px",
                p: {
                  fontSize: 4,
                },
              },
            }}
          >
            <div
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Image
                src={sucursalesCircle}
                alt="Sucursales de Innate background"
              ></Image>
            </div>
            <p>
              DE <strike>{`$${actualPrice.prev}`}</strike> A <br />
              <b sx={{ fontSize: 5 }}>{`$${actualPrice.actual}`}</b>
            </p>
          </div>
        </div>

        <div
          sx={{
            gridColumn: "1/3",
            gridRow: "2/3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
            width: "100%",
            height: "100%",
            div: {
              width: "80%",
              color: "white",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            },
            p: {
              m: 0,
            },

            "@media screen and (min-width: 779px)": {
              flexDirection: "row",
              justifyContent: "space-evenly",
              div: {
                width: "35%",
              },
            },
          }}
        >
          <div
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleConoceMas}
          >
            <svg
              className="svg"
              viewBox="0 0 300 60"
              sx={{
                position: "absolute",
                right: 0,
                zIndex: -1,
              }}
            >
              <clipPath id="rect-mask">
                <rect width="100%" height="100%" ref={buttonTwoHeader} />
              </clipPath>
              <image
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAA8CAMAAAB8U9CyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
                  bWFnZVJlYWR5ccllPAAAADNQTFRFf39/QEBAv7+/EBAQYGBgn5+fj4+PUFBQ7+/vMDAwICAg39/f
                  z8/Pr6+vcHBwAAAA////Omtc8AAAABF0Uk5T/////////////////////wAlrZliAAADNUlEQVR4
                  2uycyZajMAxFZXkEG5P//9q2gXQI8yBzqrv0FrUgp5L4RsiSkAWvpxSMEkkRGhyuoHs9J9+AFQoA
                  VP5rQn/VIRpEbEDJdqxaQEP77eChZX6vo03E8xUprD60Hn/+R8FBxk4+u1flXk5X7ZZqlX8E9D8I
                  NILZ/DrNxoqk0p2tR1iVGNbdfL+rQw3p/sDPx/z9D7uNMMsq2Z6SNXegE4B2ugNRGdev3sRErRkW
                  nb1F1ZLJAuo4fz+ZPqV9XLWI/gHQTk9tR6pGtb9M0RUHHbOrrdrfLqmLWzTmnbtlSZtubCzso5E5
                  DwpFQQMDfgtKgfZpL6yZ74h0KAEaBZNd8NaGDLQzoFOyxaa8IgE5l7wP2nE4dyiT0TdBM+fDTkTp
                  cB20Z85n/ch50MC7373t8SBow8wuVsFOgA4AioldUaX9CdehGdhVqTObYWBeJMHHLmiONG5H1UKF
                  fdBcNiKx7F3Q7Dho5HdAa8mMSIRboNk708lsgOawjpT0OmjOuSkjDwR+GlhY4Lfi6KB4G6QyZtmK
                  xTjaYxP5CQpxHL0QdXCdrojiFDTX6Uq5auZMLhFzb+e3+xXAnEkZw+dZ4bhMVDngHIU0ARzFx/bN
                  vuvMA94ICWUNwuSAgVysR2vg+Jk4itarhX9OvYliZ7Pd1+E5WaGR3m6gcew6iLTXqQT9wTTWbdeh
                  NO4+BUcNgoFTZN7H2g089+feNesV0B7/ynltreGH4PekFkE3bL/UgiXQbL0lYzzggtIzMR68hkMX
                  zLnoXviCPoarLFMpuhe+QbOKGPRo+AEE4I6kQhJukhl6LtgVEc5rHUy6hBaKSs4KTlYuqrKgqjyI
                  KB8pHu941Wr1DhG4djdXPdvELPRBmoy40U7e7B7oDAhRsIknU4V+SJjT/SQ36MtA7+EOX5R9ejkO
                  RlpbmB0I3+n493kS1aD/xdSlSAQ1duPu+olQtej6MOr3StVnNt+50SXdsLPlUWJnjih348/sPwi+
                  GhEMyyOLCEbS4eZsPqIBg1jMuddiNgDvIN1hkJ6h4fhTJzmGT2XbqMspkZjOLTTpmvqA726vvN2D
                  6puwkl9tsmWFR8dxHtEfAQYA8Wnh8vDmUzUAAAAASUVORK5CYII="
                width="100%"
                height="60px"
                clipPath="url(#rect-mask)"
              ></image>
            </svg>

            <p>¡QUIERO MI DESCUENTO!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSectionAgendar;
