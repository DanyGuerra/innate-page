/** @jsxImportSource theme-ui */
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import headerBack from "../../assets/img/header-back.png";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section
      sx={{
        width: "100%",
        height: "calc(100vh - 50px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          position: "relative",
          width: "90%",
          height: "calc(100vh - 50px)",
          display: "grid",
          gridTemplate: "40% 15% 45%/ 30% 70%",
          "@media screen and (min-width: 779px)": {
            gridTemplate: "25% 20% 20% 35%/ 50% 50%",
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
            opacity: 0.7,
            "@media screen and (min-width: 779px)": {
              left: "calc(50% - 75px)",
              width: "150px",
              opacity: 0.3,
            },
          }}
        >
          <Image
            src={headerBack}
            width="150px"
            height="650px"
            layout="responsive"
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
              fontSize: 3,
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
            div: {
              width: "350px",
              height: "50px",
              bg: "primary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            },
            "@media screen and (min-width: 779px)": {
              flexDirection: "row",
              justifyContent: "space-evenly",
              gridRow: "3/4",
            },
          }}
        >
          <div>Agendar Consulta</div>
          <div> Conocer mas</div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
