/** @jsxImportSource theme-ui */
import Image from "next/image";
import { useEffect, useRef } from "react";
import newsLetterBack from "../../assets/img/newsletter-back.png";
import newsLetterEnvelope from "../../assets/img/newsletter-envelope.png";
import { SecondaryButton } from "./Buttons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const NewsLetter = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);
  const envelope = useRef(null);
  const sectionAnimation = useRef(null);
  const selectorAnimation = gsap.utils.selector(sectionAnimation);

  useEffect(() => {
    gsap.fromTo(
      envelope.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );

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
        duration: 0.5,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
          // scrub: true,
          // start: "top top",
          // end: "100",
        },
      }
    );
  };

  return (
    <section
      sx={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bg: "primary",
        position: "relative",
        mb: "100px",
      }}
      ref={mySection}
    >
      <div
        sx={{
          width: "100%",
          bg: "none",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          "@media screen and (min-width: 779px)": {
            width: "30%",
          },
        }}
      >
        <span
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={envelope}
        >
          <Image
            src={newsLetterEnvelope}
            width="71px"
            height="31px"
            alt="Logo sobre de correo"
          ></Image>
        </span>

        <div
          ref={sectionAnimation}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1
            className="animation-one"
            sx={{
              textAlign: "center",
              fontFamily: "heading",
              fontSize: 5,
              fontWeight: "body",
            }}
          >
            Recibe un descuento en tu primera visita*
          </h1>
          <form
            className="animation-one"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
              width: "90%",
            }}
          >
            <input
              type="email"
              sx={{
                width: "100%",
                height: "47px",
                bg: "transparent",
                border: "1px solid white",
                outlineColor: "transparent",
                pl: "10px",
                color: "white",
                "&::placeholder": {
                  color: "white",
                },
              }}
              placeholder="Escribe tu e-mail..."
            />
            <SecondaryButton height="45px" width="230px">
              Quiero mi descuento
            </SecondaryButton>
          </form>
          <div className="animation-one">
            <p>
              Esporádicamente te enviaremos promociones exclusivas y tips para
              mejorar tu salud.
            </p>
            <p
              sx={{
                fontSize: 0,
              }}
            >
              Respetamos tu privacidad y NUNCA TE ENVIAREMOS SPAM. <br />
              *No aplica con otras promociones.
            </p>
          </div>
        </div>
      </div>

      <span
        sx={{
          position: "absolute",
          top: 0,
          left: "calc(50% -30px)",
          height: "100%",
          width: "360px",
        }}
      >
        <Image src={newsLetterBack} alt="NewsLetter fondo"></Image>
      </span>
    </section>
  );
};

export default NewsLetter;
