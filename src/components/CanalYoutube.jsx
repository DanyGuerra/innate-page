/** @jsxImportSource theme-ui */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SecondaryButtonInverIcon } from "./Buttons";

const CanalYoutube = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);

  useEffect(() => {
    fadeIn();
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
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
        mb: "100px",
        color: "primary",
      }}
      ref={mySection}
    >
      <p sx={{ m: 0 }}>Visita nuestro canal</p>
      <h2
        sx={{
          m: 0,
          fontSize: 5,
          fontFamily: "heading",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        de Youtube
      </h2>
      <div
        sx={{
          mt: "30px",
          width: "90%",
          maxWidth: "225px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.youtube.com/channel/UCatxwbMglOUe8McB4BkRZrw"
          target="_blank"
          sx={{ width: "100%" }}
        >
          <SecondaryButtonInverIcon width="100%" height="53px">
            Canal de Youtube
          </SecondaryButtonInverIcon>
        </a>
      </div>
    </section>
  );
};

export default CanalYoutube;
