/** @jsxImportSource theme-ui */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { PrimaryButton, SecondaryButtonInversed } from "./Buttons";
import Image from "next/image";
import Sucursales from "./Sucursales";

const CardSucursal = ({ suc }) => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);

  useEffect(() => {
    // fadeIn();
  }, []);

  const fadeIn = () => {
    gsap.fromTo(
      mySection.current,
      {
        translateY: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  return (
    <div
      sx={{
        width: "90%",
        maxWidth: "650px",
        p: "20px 10px",
        pt: "50px",
        display: "grid",
        rowGap: "10px",
        columnGap: "10px",
        gridTemplate: "auto auto auto 30px auto/ repeat(1, 1fr)",
        "@media screen and (min-width: 779px)": {
          gridTemplate: "auto auto 30px auto/ 40% 60%",
        },
      }}
      ref={mySection}
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
        <a href={suc.urlMap} target="_blank" rel="noreferrer">
          <Image
            src={suc.image}
            width="260px"
            height="260px"
            alt={`Mapa sucursal Innate ${suc.sucursal}`}
          ></Image>
        </a>
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
            textAlign: "left",
          },
        }}
      >
        <h1
          sx={{
            fontSize: 6,
            fontFamily: "heading",
            color: "primary",
            m: 0,
          }}
        >
          {suc.sucursal}
        </h1>
        <p
          sx={{
            fontSize: 4,
          }}
        >
          {suc.adress}
        </p>

        <div sx={{ display: "flex", flexDirection: "column", fontSize: 3 }}>
          <h3
            sx={{
              color: "primary",
              fontFamily: "heading",
              fontWeight: "body",
              m: 0,
            }}
          >
            Teléfono
          </h3>

          {suc.phone.map((tel, index) => (
            <span key={index}>
              <a key={tel} href={`tel:${tel.replace(/ /g, "")}`}>
                {tel}
              </a>
            </span>
          ))}
        </div>
      </div>
      <div
        sx={{
          p: { m: 0 },
          textAlign: "center",
          gridColumn: "1 / 3",
          gridRow: "3 / 4 ",
          "@media screen and (min-width: 779px)": {
            gridColumn: "1 / 3",
            gridRow: "2 / 3 ",
          },
        }}
      >
        <div
          sx={{
            color: "primary",
            mb: "10px",
            fontSize: 3,
            fontFamily: "heading",
          }}
        >
          Horarios:
        </div>
        {suc.horarios.map((hor, index) => (
          <p key={hor}>{hor}</p>
        ))}
      </div>

      <div
        sx={{
          gridColumn: "1 / 3",
          gridRow: "5 / 6 ",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "70px",
          color: "white",
          "@media screen and (min-width: 779px)": {
            gridRow: "4 / 5 ",
            gap: "10%",
          },
        }}
      >
        <div
          sx={{
            width: "80%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media screen and (min-width: 779px)": {
              width: "40%",
            },
          }}
        >
          <svg
            viewBox="0 0 360 60"
            sx={{
              position: "absolute",
              right: 0,
              zIndex: -1,
            }}
          >
            <image
              width="360"
              height="60"
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
              transform="matrix(1 0 0 1 0 -0.75)"
              mask="url('#writing')"
            ></image>

            <defs>
              <mask id="writing">
                <path
                  stroke="#fff"
                  strokeWidth="80"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M367.4,21.1c-46.8,2.2-93.7,3.2-140.5,2.9c-46.5-0.3-93-2.9-139.5-4.2c-26-0.7-52.1-0.6-78.1,2 c-6.3,0.6-6.4,10.6,0,10c45.9-4.6,91.9-1.4,137.8,0.4c46.8,1.8,93.7,2.3,140.5,1.5c26.6-0.4,53.2-1.3,79.7-2.6  C373.8,30.8,373.8,20.8,367.4,21.1z"
                ></path>
              </mask>
            </defs>
          </svg>
          <span>Agendar</span>
        </div>
        <div
          sx={{
            width: "80%",
            "@media screen and (min-width: 779px)": {
              width: "40%",
            },
          }}
        >
          <a href={`tel:${suc.phone[0].replace(/ /g, "")}`}>
            <div
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                viewBox="0 0 360 60"
                sx={{
                  position: "absolute",
                  right: 0,
                  zIndex: -1,
                }}
              >
                <image
                  width="360"
                  height="60"
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
                  mask="url('#writing2')"
                ></image>
                <defs>
                  <mask id="writing2">
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      d="M371,26.4c-95.7-0.4-191.4-1.3-287.1-1.3c-26.7,0-53.4,0.5-79.9,3.2c-6.3,0.6-6.4,10.6,0,10  c46.9-4.7,94.3-3.2,141.3-2.9c47.9,0.2,95.9,0.4,143.8,0.6c27.3,0.1,54.6,0.2,81.9,0.4C377.4,36.5,377.4,26.5,371,26.4z"
                    ></path>
                  </mask>
                </defs>
              </svg>
              <span>Llamar</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSucursal;
