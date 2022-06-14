/** @jsxImportSource theme-ui */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SecondaryButtonInverIcon } from "./Buttons";
import Image from "next/image";
import sucursalesCircle from "../../assets/img/sucursales_circulo_verde.png";
import CardEquipoItem from "./CardEquipoItem";

const CardEquipo = ({ equipo }) => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "100px",
        color: "primary",
      }}
      ref={mySection}
    >
      <h2
        sx={{
          m: 0,
          fontSize: 6,
          fontFamily: "heading",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Equipo
      </h2>

      <div
        sx={{
          mt: "40px",
          width: "90%",
          maxWidth: " 360px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            width: "100%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "145px",
              height: "130px",
              p: {
                zIndex: 1,
                m: 0,
                color: "white",
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
            <p>En sucursal</p>
          </div>
        </div>

        {equipo.map((person, index) => {
          return (
            <div
              key={index}
              sx={{
                width: "100%",
                height: "250px",
                display: "block",
                position: "relative",
                order: `${equipo.length > 1 && index === 0 ? -1 : 0}`,
                ".person-left": {
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                },
                ".person-right": {
                  position: "absolute",
                  right: 0,
                  top: 0,
                },
                ".ced-left": {
                  position: "absolute",
                  left: "calc(50% - 40px)",
                  top: 0,
                },
                ".ced-right": {
                  position: "absolute",
                  right: "calc(50% - 50px)",
                  bottom: 0,
                },
              }}
            >
              <CardEquipoItem person={person}></CardEquipoItem>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardEquipo;
