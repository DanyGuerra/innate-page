/** @jsxImportSource theme-ui */
import { useEffect, useRef } from "react";
import { PrimaryButtonAnimation } from "./Buttons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Padecimientos = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mySection = useRef(null);
  const motionPath = useRef(null);
  const sectionAnimation = useRef(null);
  const selectorAnimation = gsap.utils.selector(sectionAnimation);

  useEffect(() => {
    animation();
  }, []);

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
        position: "relative",
      }}
      ref={mySection}
    >
      <div
        sx={{
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media screen and (min-width: 779px)": {
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "50%",
          },
        }}
        ref={sectionAnimation}
      >
        <h1
          sx={{
            fontSize: 5,
            color: "primary",
            fontFamily: "heading",
            fontWeight: "body",
            width: "100%",
            textAlign: "center",
            "@media screen and (min-width: 779px)": {
              width: "50%",
              textAlign: "right",
            },
          }}
          className={"animation-one"}
        >
          Si padeces de:
        </h1>
        <div
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            "@media screen and (min-width: 779px)": {
              width: "50%",
            },
          }}
        >
          <svg viewBox="0 0 43.1 240.1" width="25">
            <image
              width="45"
              height="241"
              href="data:image/png;base64,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
            RU5ErkJggg=="
              mask="url(#arrow)"
            ></image>
            <defs>
              <mask id="arrow">
                <path
                  ref={motionPath}
                  id="flechaDash"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M40.6,210.9c-10,4.2-18.9,10.6-26.2,18.5c-1.4-2.2-2.7-4.5-3.9-6.9c1.2,0.5,2.5,1.1,3.7,1.6
                      c3.7,1.6,7-0.3,7.5-4.3c4.5-36.5,9.2-73.1,13.5-109.6c1-8.4,1.7-16.9,1.2-25.4c-0.6-8.9-2.2-17.8-3.6-26.6C30,40,27.1,21.8,24.2,3.6
                      c-1-6.3-10.6-3.6-9.6,2.7c2.8,17.6,5.5,35.2,8.3,52.8c1.5,9.2,3.2,18.5,3.6,27.8c0.4,8.5-0.5,16.9-1.5,25.3
                      c-4.1,33.5-8.2,67-12.4,100.6L3,208.5c-3.4-1.5-9.2,1.1-7.3,5.6c3.7,9.2,8.2,18,13.8,26.2c1.6,2.4,5.7,3.7,7.9,1
                      c7.5-9.7,17-17,28.3-21.8C51.5,217,46.4,208.4,40.6,210.9z"
                ></path>
              </mask>
            </defs>
          </svg>
          <ul
            sx={{
              li: {
                mt: "0px",
                mb: "0px",
              },
              "@media screen and (min-width: 779px)": {
                li: {
                  mt: "10px",
                  mb: "10px",
                },
              },
            }}
          >
            <li>Dolor de espalda</li>
            <li>Dolor de cuello </li>
            <li>Estrés </li>
            <li>Mala postura </li>
            <li>Migraña </li>
            <li>Ciática</li>
          </ul>
        </div>
        <div
          sx={{
            width: "100%",
            mt: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={"animation-one"}
        >
          <div
            sx={{
              width: "60%",
              p: "auto",
              "@media screen and (min-width: 779px)": {
                width: "50%",
              },
            }}
          >
            <PrimaryButtonAnimation height="50px" width="100%">
              Agenda tu primera cita
            </PrimaryButtonAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Padecimientos;
