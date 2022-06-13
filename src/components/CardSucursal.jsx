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
        gridTemplate: "auto auto auto / repeat(1, 1fr)",
        "@media screen and (min-width: 779px)": {
          gridTemplate: "auto auto / 40% 60%",
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
        <Image
          src={suc.image}
          width="260px"
          height="260px"
          alt={`Mapa sucursal Innate ${suc.sucursal}`}
        ></Image>
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
    </div>
  );
};

export default CardSucursal;
