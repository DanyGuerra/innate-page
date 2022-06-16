/** @jsxImportSource theme-ui */
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
import headerBack from "../../assets/img/header-back.png";
import videoIcon from "../../assets/icons/conocer-btn.png";

const FirstSection = () => {
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
    window.location = `${process.env.CITAS_URL}`;
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
        pt: "50px",
        pb: "100px",
      }}
    >
      <div
        sx={{
          position: "relative",
          width: "90%",
          height: "calc(100vh - 50px)",
          display: "grid",
          overflow: "hidden",
          gridTemplate: "55% 15% 40%/ 50% 50% ",
          "@media screen and (min-width: 779px)": {
            gridTemplate: "25% 20% 40% 15%/ 50% 50%",
            width: "70%",
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
            "@media screen and (min-width: 779px)": {
              left: "calc(50% - 75px)",
              width: "150px",
              opacity: 0.3,
            },
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
            justifyContent: "center",
            alignItems: "flex-start",

            "@media screen and (min-width: 779px)": {
              alignItems: "center",
              gridColumn: "1/3",
              gridRow: "2/3",
            },
          }}
          ref={titleHeader}
        >
          <h1
            sx={{
              fontSize: 5,
              fontFamily: "heading",
              textAlign: "left",
              color: "primary",
              fontWeight: 400,
              m: 0,
              "@media screen and (min-width: 779px)": {
                textAlign: "center",
                fontSize: 7,
              },
            }}
          >
            Mejora tu calidad de vida
          </h1>
          <p
            sx={{
              fontSize: 2,
              textAlign: "left",
              color: "primary",
              fontWeight: 400,
              m: 0,
              "@media screen and (min-width: 779px)": {
                textAlign: "center",
                fontSize: 5,
              },
            }}
          >
            CON UNA COLUMNA VERTEBRAL SANA.
          </p>
        </div>

        <div
          sx={{
            gridColumn: "1/3",
            gridRow: "2/3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
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
              gridRow: "3/4",
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
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleAgendar}
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
                <rect width="100%" height="100%" ref={buttonOneHeader} />
              </clipPath>
              <image
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAA8CAMAAAB8U9CyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
              bWFnZVJlYWR5ccllPAAAADNQTFRFQKZmv+HMf8OZEI9An9KycLyNYLWAIJdN7/jyj8ulr9q/z+nZ
              MJ5Z3/DlUK1zAIgz////W6McvQAAABF0Uk5T/////////////////////wAlrZliAAAC9ElEQVR4
              2uyc23ajMAxFZfmCbTDw/19bzCVAShoIiNXpnPPSpqEK2QhZNrKohYTk/fIVnbCksthVTUM2pu1D
              mGpTtm0ZXXeM8RuH2KKhYOrOSkEhW4zMjkg3syiLRxlROEqF/uOJ44cmSjX+1MU50MmwMm7JYVZl
              a90U7tXbjVbf7YUXx75WVU0QfLRWGba0VFCf4DGWnk5ETwZr3m2x7L95lf+r+0UdB+07V7LZq6hq
              TolVB2Y68aSyWf2BmdpwUKHed13ImXynpN7dJpUznMj0zkaG7rj7TOaonjWbSk/fpQ7lQdDcXCvd
              XbO6aO5VsfbZwWOrKyxXY1jbMmaOgPZ3M/lL2gm6G+7YgrMU6MhDUNbgdB1o1Q8RgYqCaHBdOPCF
              Gl2ZPJxWVtNg6IBCVHpK7+DQsnITaKCQlQXou2JHAOg78zuABug/owTQ94gB+sa5IUAD9B8DjZnh
              TaDh0jeBrgFCWlUPmgFCXLnKghQ4iCv0T1gwGt4SpKk1ACEtPTwzBGlxpeEpuAUJYZmx3AApnrB4
              BO2BQlZuKqDB9FBWxQQaFTPCUiNo5NLiQXoAjQxPPO2gqVIdMGRHw0c1KZJp2SA9l+0qpB6Secey
              ProMDNhSei5Et0hAZDjTxlY7wL5ecXNrhUcEERwM19vd4NT3gG69cZiXX6iSftyM7HSjySKQXJBz
              vNtn2G8mTliwPidd7t2ijHnjKYX93Q1Q/nHGoQ+0kfAVeJ2aFe7v1xEtysc+kivt4cYoKcCxj6rw
              n3Wg8Z1nI8M+NhCe6KlUGgvf3jknPN28Kpnc9yZyjHg884Mu6BL2bdK+ap1DZC32EzzWoa8DPQdx
              ZqPSox+b+Q8HUHLmuT3d9aA3ZDZHz7HzFnPuG+Zo9fehn9k/uu+Dttr73QJ63XKQF/3LVu8E4xWr
              9Jzk5IvRRSXXL249uuT85pW69jeAPqM0XKKUb4GQu2qtFHhXjCrq3LouvL9ZtF30tqubqnsZ36xk
              6jwoFZvn/iXAAF8h4nBEqXTbAAAAAElFTkSuQmCC"
                width="100%"
                height="60px"
                clipPath="url(#rect-mask)"
              ></image>
            </svg>
            <p>Agendar Consulta</p>
          </div>

          <div
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
            <Image
              src={videoIcon}
              alt="Icono de video"
              width="25px"
              height="25px"
            ></Image>
            <p>Conocer mas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
