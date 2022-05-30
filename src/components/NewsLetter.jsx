/** @jsxImportSource theme-ui */
import Image from "next/image";
import newsLetterBack from "../../assets/img/newsletter-back.png";
import newsLetterEnvelope from "../../assets/img/newsletter-envelope.png";
import { SecondaryButton } from "./Buttons";

const NewsLetter = () => {
  const animationOneSideToOther = (el, distance, time, delay = 0) => {
    gsap.set(el, { translateX: distance });
    gsap.to(el, {
      translateX: 0,
      duration: time,
      delay: delay,
      ease: "expo.out",
    });
  };

  const revealAnimation = (el, time, delay) => {
    gsap.to(el, {
      width: 0,
      duration: time,
      delay: delay,
      ease: "expo.out",
    });
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
      }}
    >
      <div
        sx={{
          width: "360px",
          bg: "none",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <span
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={newsLetterEnvelope} width="71px" height="31px"></Image>
        </span>
        <h1
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
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
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

      <span
        sx={{
          position: "absolute",
          top: 0,
          left: "calc(50% -30px)",
          height: "100%",
          width: "360px",
        }}
      >
        <Image src={newsLetterBack}></Image>
      </span>
    </section>
  );
};

export default NewsLetter;
