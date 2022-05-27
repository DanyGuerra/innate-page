/** @jsxImportSource theme-ui */
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
import headerBack from "../../assets/img/header-back.png";
import headerButton1 from "../../assets/img/header-button.png";
import headerButton2 from "../../assets/img/header-button-2.png";
import videoIcon from "../../assets/icons/conocer-btn.png";

const FirstSection = () => {
  const imageBack = useRef(null);
  const titleHeader = useRef(null);
  const buttonOneHeader = useRef(null);
  const buttonTwoHeader = useRef(null);

  useEffect(() => {
    animationOneSideToOther(imageBack.current, -200, 2);
    animationOneSideToOther(titleHeader.current, 200, 2);
  }, []);

  const animationOneSideToOther = (el, distance, time) => {
    gsap.set(el, { translateX: distance });
    gsap.to(el, {
      translateX: 0,
      duration: time,
      ease: "expo.out",
    });
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
      }}
    >
      <div
        sx={{
          position: "relative",
          width: "90%",
          height: "calc(100vh - 50px)",
          display: "grid",
          gridTemplate: "55% 15% 40%/ 50% 50% ",
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
            opacity: 1,
            zIndex: -1,
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
            div: {
              width: "80%",
              color: "white",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
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
                width: "40%",
              },
            },
          }}
        >
          <div>
            <span
              sx={{
                position: "absolute",
                zIndex: -1,
              }}
            >
              <Image src={headerButton1}></Image>
            </span>
            <p>Agendar Consulta</p>
          </div>
          <div>
            <span
              sx={{
                position: "absolute",
                zIndex: -1,
              }}
            >
              <Image src={headerButton2}></Image>
            </span>
            <Image src={videoIcon} width="25px" height="25px"></Image>
            <p>Conocer mas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
