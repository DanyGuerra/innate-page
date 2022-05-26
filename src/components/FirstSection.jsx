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
        position: "relative",
      }}
    >
      <div
        sx={{
          position: "absolute",
          top: 0,
          opacity: 0.3,
        }}
      >
        <Image src={headerBack} width="150px" height="650px"></Image>
      </div>
      <div
        sx={{
          width: "70%",
          height: "calc(100vh - 50px)",
          display: "grid",
          gridTemplate: "25% 20% 20% 35%/ 50% 50%",
        }}
      >
        <div
          sx={{
            gridColumn: "1/3",
            gridRow: "2/3",
            textAlign: "center",
          }}
        >
          <h1
            sx={{
              fontSize: 7,
              fontFamily: "'Playfair Display', serif",
              textAlign: "center",
              color: "primary",
              fontWeight: 400,
              m: 0,
            }}
          >
            Mejora tu calidad de vida
          </h1>
          <p
            sx={{
              fontSize: 5,
              textAlign: "center",
              color: "primary",
              fontWeight: 400,
              m: 0,
            }}
          >
            CON UNA COLUMNA VERTEBRAL SANA.
          </p>
        </div>

        <div
          sx={{
            gridColumn: "1/3",
            gridRow: "3/4",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            div: {
              width: "350px",
              height: "50px",
              bg: "primary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
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
