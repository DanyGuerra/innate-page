/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowDown, ArrowUp } from "./Icons";
import parse from "html-react-parser";

const AccordionFaq = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [itemClicked, setItemClicked] = useState(null);

  const mySection = useRef(null);
  const navSection = useRef(null);
  const accordion = useRef(null);
  const refNavTitle = useRef(null);

  const accordionData = [
    {
      title: "¿Qué hace la quiropráctica?",
      content:
        "La quiropráctica busca restaurar el equilibrio natural de tu columna vertebral. Los nervios que conectan tu cerebro con el resto de tu cuerpo viajan a través de tu columna vertebral. Cuando una de tus vértebras se desacomoda, aunque sea sólo un poco, esos nervios se pellizcan, lo que genera interferencia o inflamación. Esto impide que tu cerebro se comunique correctamente con tu cuerpo, como cuando un accidente cierra una autopista. Poco a poco, con un cuidado quiropráctico, tus vértebras regresan a su lugar y así tu cerebro se comunica perfectamente con el resto de tu cuerpo.",
    },
    {
      title: "¿Qué es un ajuste quiropráctico?",
      content:
        "Es el método quiropráctico para corregir o disminuir las subluxaciones (pequeños desplazamientos de una vértebra que irritan los nervios) y restablecer la salud de tu sistema nervioso. Consiste en movimientos suaves, pero específicos, que el quiropráctico realiza usando sus manos, con la ayuda de una camilla quiropráctica sobre la columna vertebral.",
    },
    {
      title: "¿Qué pasará en mi primera consulta quiropráctica?",
      content:
        "Se te van a realizar distintas pruebas para ver cómo está tu sistema nervioso y tu columna vertebral, conocer qué tan alineado o chueco estás, y si eres candidato a recibir un ajuste quiropráctico.",
    },
    {
      title: "¿Quienes pueden recibir un ajuste quiropráctico?",
      content:
        "Tenemos pacientes desde bebes hasta los 93 años y contando, todos pueden beneficiarse de una columna vertebral más saludable. Hay método quiropráctico para bebés, método quiropráctico para niños, para adultos, para embarazadas, para adultos mayores y mucho más.",
    },
    {
      title: "¿Qué puedo esperar después de mi primer consulta quiropráctica?",
      content:
        "Podrás escuchar algunos tronidos (crepitaciones, por la liberación de las articulaciones), sueño, cansancio o dolor ligero como si retomaras el ejercicio.",
    },
    {
      title: "¿Sobre qué superficie me hacen los ajustes?",
      content:
        "Utilizamos una camilla quiropráctica con pistones que nos permiten acomodar tu cuerpo en la posición ideal para realizar el ajuste quiropráctico.",
    },
    {
      title: "¿Quién me va a atender?",
      content:
        'Todos nuestros especialistas son licenciados en quiropráctica, titulados y en constante actualización a través de cursos, congresos y diplomados. Puedes conocer a nuestro equipo <a href="/sobre-innate#equipoSection">aquí</a>.',
    },
    {
      title: "¿Los quiroprácticos son doctores?",
      content:
        "No. Los quiroprácticos son licenciados en quiropráctica, estudian específicamente la anatomía y fisología del sistema nervioso y del sistema locomotor (músculos y huesos).",
    },
    {
      title: "¿Los quiroprácticos recetan medicinas?",
      content:
        "No. La quiropráctica busca ayudar a que tu cuerpo funcione mejor sin necesidad de medicamentos ni cirugías.",
    },
    {
      title: "¿Las radiografías hacen daño?",
      content:
        "La dosis de radiación que recibes en las radiografías es mínima y no tienen impacto significativo en tu salud. Estar constantemente expuesto a radiación es lo que hace daño.",
    },
    {
      title: "¿La embarazadas pueden asistir al quiropráctico?",
      content:
        "Sí, recibimos a muchas embarazadas. Utilizamos un método quiropráctico para embarazadas en donde damos ajustes a columna y pelvis, para que las futuras mamás estén en mejores condiciones para recibir al bebé y minimizar el impacto del embarazo en los huesos.",
    },
    {
      title: "¿Los bebés y niños pueden asistir al quiropráctico?",
      content:
        "Sí, nuestros quiroprácticos atienden niños y bebés. Utilizamos un método quiropráctico para niños donde los ajustes son más suaves y específicos. Nuestros hijos reciben ajustes desde los 6 meses de nacidos para que su columna vertebral nunca deje de estar tan sana como cuando nacieron. Más vale prevenir.",
    },
    {
      title: "¿Qué es una termografía?",
      content:
        "Es un escaner térmico que nos permite visualizar la interferencia nerviosa que hay en los distintos puntos de tu columna vertebral. Junto con tu quiropráctico podrás ver una gráfica de qué tan tensa está tu espalda y cuello.",
    },
    {
      title: "¿Qué precio tiene un ajuste quiropráctico?",
      content:
        'Las tarifas de nuestras sesiones quiroprácticas varían en cada estado de la república. Creemos que todo mundo tiene derecho a una columna vertebral sana, por lo que constantemente publicamos promociones y descuentos, suscríbete a nuestro <a href="/#newsletter">newsletter</a> para obtener los mejores precios en un quiropráctico cerce de ti.',
    },
  ];

  useEffect(() => {
    if (accordion) {
      animationAccordion(accordion.current);
    }
  }, [itemClicked]);

  useEffect(() => {
    const selectorNav = gsap.utils.selector(navSection);
    const navAnimation = () => {
      gsap.fromTo(
        selectorNav("section"),
        {
          translateY: -200,
          opacity: 0,
        },
        {
          opacity: 1,
          translateY: 0,
          stagger: 0.1,
          duration: 0.25,
          delay: 0.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: mySection.current,
            start: "top center",
          },
        }
      );
      gsap.fromTo(
        navSection.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          delay: 0.75,
          ease: "expo.out",
          scrollTrigger: {
            trigger: mySection.current,
            start: "top center",
          },
        }
      );
    };

    const titleAnimation = () => {
      gsap.fromTo(
        refNavTitle.current,
        {
          translateX: -400,
          opacity: 0,
        },
        {
          opacity: 1,
          translateX: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: mySection.current,
            start: "top center",
          },
        }
      );
    };
    navAnimation();
    titleAnimation();
  }, []);

  const animationAccordion = (el) => {
    gsap.fromTo(
      el,
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "auto",
        duration: 0.5,
        ease: "expo.out",
      }
    );
    gsap.to(el, {
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    });
  };

  const toogle = (index) => {
    if (itemClicked === index) {
      return setItemClicked(null);
    }

    setItemClicked(index);
  };

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
        mb: "10vh",
      }}
    >
      <div ref={refNavTitle} sx={{ textAlign: "center" }}>
        <h1
          sx={{
            fontSize: 5,
            mb: 0,
            fontFamily: "heading",
            textAlign: "center",
            color: "primary",
            fontWeight: 700,
            "@media screen and (min-width: 779px)": {
              fontSize: 6,
            },
          }}
        >
          Preguntas Frecuentes
        </h1>
        <p sx={{ fontSize: 4, mt: 0, mb: "50px" }}>sobre quiropráctica</p>
      </div>
      <nav
        sx={{
          width: "90%",
          maxWidth: "700px",
          minHeight: "600px",
          overflow: "hidden",

          ".active": {
            bg: "primary",
            color: "textInverted",
            svg: {
              fill: "white",
            },
          },
        }}
        ref={navSection}
      >
        {accordionData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                onClick={() => toogle(index)}
                sx={{
                  borderTop: "1px solid black",

                  "&:hover": {
                    cursor: "pointer",
                    bg: "primary",
                    color: "textInverted",
                    svg: {
                      fill: "white",
                    },
                  },
                }}
                className={itemClicked === index ? "active" : ""}
              >
                <section
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "10px 10px",
                    minHeight: "45px",
                    "@media screen and (min-width: 779px)": {
                      p: "10px 50px",
                    },
                  }}
                >
                  <div
                    sx={{
                      fontSize: 3,
                    }}
                  >
                    <sup>{index < 9 ? `0${index + 1}` : `${index + 1}`}</sup>
                    {` ${item.title}`}
                  </div>

                  {itemClicked === index ? <ArrowUp></ArrowUp> : <ArrowDown />}
                </section>
              </div>

              {itemClicked === index ? (
                <div
                  sx={{
                    p: "10px 35px",
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    a: {
                      color: "primary",
                      textDecoration: "underline",
                    },
                    "@media screen and (min-width: 779px)": {
                      flexDirection: "row",
                    },
                  }}
                  ref={accordion}
                >
                  <p>{parse(item.content)}</p>
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </nav>
    </section>
  );
};

export default AccordionFaq;
