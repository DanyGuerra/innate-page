/** @jsxImportSource theme-ui */
import Carousel from "./Carousel";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const NuestroEquipo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mySection = useRef(null);
  const refTitle = useRef(null);

  useEffect(() => {
    titleAnimation();
  }, []);

  const titleAnimation = () => {
    gsap.fromTo(
      refTitle.current,
      {
        translateY: -50,
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
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: "100px",
        pt: "10vh",
      }}
      ref={mySection}
      id="equipoSection"
    >
      <h1
        sx={{
          fontSize: 5,
          fontFamily: "heading",
          textAlign: "center",
          color: "primary",
          fontWeight: 700,
        }}
        ref={refTitle}
      >
        Nuestro Equipo
      </h1>
      <Carousel mySection={mySection}></Carousel>
    </section>
  );
};

export default NuestroEquipo;
