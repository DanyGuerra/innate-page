/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { SecondaryButtonInversed } from "./Buttons";
import sucursal from "../../assets/img/INNATE-sucursal.png";
import sucursal2 from "../../assets/img/INNATE-sucursal2.png";
import compromisoInnate from "../../assets/img/INNATE-compromiso.png";
import sucursalesCircle from "../../assets/img/sucursales_circulo_verde.png";

const Compromiso = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mySection = useRef(null);
  const refTitle = useRef(null);
  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const refImgRotate = useRef(null);
  const imageBackground = useRef(null);
  const aboutButton = useRef(null);

  useEffect(() => {
    paralellAnimation();
    imageRotationAnimation();
    imageAppers();
    titleAnimation();
  }, []);

  const paralellAnimation = () => {
    gsap.to(refImage1.current, {
      translateY: -280,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: mySection.current,
        start: "top center",
        scrub: true,
      },
    });
    gsap.to(refImage2.current, {
      translateY: 280,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: mySection.current,
        start: "top center",
        scrub: true,
      },
    });
  };

  const titleAnimation = () => {
    gsap.fromTo(
      refTitle.current,
      {
        translateX: -200,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  const imageRotationAnimation = () => {
    gsap.to(refImgRotate.current, {
      rotation: "360",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  };
  const imageAppers = () => {
    gsap.fromTo(
      refImgRotate.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      refImage2.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.75,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      refImage1.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.25,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      imageBackground.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      aboutButton.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.75,
        ease: "power1.out",
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
          textAlign: "center",
          width: "90%",
          "@media screen and (min-width: 779px)": {
            width: "60%",
          },
        }}
        ref={refTitle}
      >
        <h1
          sx={{
            color: "primary",
            fontFamily: "heading",
            fontSize: 5,
            fontWeight: "body",
          }}
        >
          Nuestro compromiso
        </h1>
        <p>
          En Centros Quiroprácticos Innate estamos comprometidos con tu salud y
          con brindar consultas quiroprácticas de calidad. Ponemos todo el
          conocimiento de nuestros especialistas quiroprácticos titulados a tu
          servicios para ayudarte a optimizar las funciones de tu cuerpo.
        </p>
      </div>
      <section
        sx={{
          width: "90%",
          position: "relative",
          mt: "100px",
          height: "65vh",
          "@media screen and (min-width: 779px)": {
            width: "70%",
          },
        }}
      >
        <div
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "30%",
            zIndex: 10,
            "@media screen and (min-width: 779px)": {
              left: "20px",
              width: "300px",
            },
          }}
          ref={refImgRotate}
        >
          <Image
            src={compromisoInnate}
            alt="Cédula profesional encargado sanitario"
          ></Image>
        </div>
        <div
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            maxWidth: "50%",
          }}
          ref={refImage1}
        >
          <Image src={sucursal2} alt="Sucursal Innate"></Image>
        </div>
        <div
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: -1,
            maxWidth: "50%",
          }}
          ref={refImage2}
        >
          <Image src={sucursal} alt="Sucursal de Innate"></Image>
        </div>
        <div
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
          ref={imageBackground}
        >
          <div
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "245px",
              height: "210px",
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
            <p>CDMX</p>
            <p>Monterrey</p>
            <p>Guadalajara</p>
            <p>Metepec</p>
            <p>Puebla</p>
            <p>Cuernavaca</p>
            <p>Querétaro</p>
          </div>
        </div>
      </section>
      <div
        ref={aboutButton}
        sx={{
          zIndex: 10,
        }}
      >
        <SecondaryButtonInversed
          width="200px"
          height="50px"
          handleClick={() => (window.location = "/sobre-innate")}
        >
          Sobre Innate
        </SecondaryButtonInversed>
      </div>
    </section>
  );
};

export default Compromiso;
