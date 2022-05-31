/** @jsxImportSource theme-ui */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Diagnostico = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mySection = useRef(null);
  const motionPath = useRef(null);
  const sectionAnimation = useRef(null);
  const selectorAnimation = gsap.utils.selector(sectionAnimation);

  useEffect(() => {}, []);

  const animation = () => {
    gsap.fromTo(
      selectorAnimation(".animation-one"),
      {
        translateX: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        translateX: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionAnimation.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      selectorAnimation("li"),
      {
        translateY: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 0.25,
        stagger: 0.2,
        delay: 0.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionAnimation.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      motionPath.current,

      {
        translateY: -500,
      },
      {
        translateY: 0,
        duration: 0.25,
        delay: 1.75,
        ease: "power1.out",

        scrollTrigger: {
          trigger: sectionAnimation.current,
          start: "top center",
        },
      }
    );
  };

  return (
    <section
      sx={{
        width: "100%",
        mb: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={mySection}
    >
      <div
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            textAlign: "center",
          }}
        >
          <p>La primera cita consiste de 7 pasos para un</p>
          <h1>diagnostico personalizado e integral:</h1>
        </div>

        <nav>
          <ul sx={{ listStyle: "none" }}>
            <li>
              <span>Este es el titulo </span>
              <div>
                <p>Aqui va la descripcion</p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Diagnostico;
