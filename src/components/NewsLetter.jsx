/** @jsxImportSource theme-ui */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import newsLetterBack from "../../assets/img/newsletter-back.png";
import newsLetterEnvelope from "../../assets/img/newsletter-envelope.png";
import { SecondaryButton } from "./Buttons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { IconCheck, IconExclamation } from "./Icons";
import ModalMessage from "./ModalMessage";

const inputsInitial = [
  {
    name: "email",
    type: "email",
    placeholder: "Ingresa tu email...",
    validation: null,
    value: "",
    errorMessage: "",
  },
];

const NewsLetter = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mySection = useRef(null);
  const envelope = useRef(null);
  const sectionAnimation = useRef(null);
  const selectorAnimation = gsap.utils.selector(sectionAnimation);

  const [inputs, setInputs] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setInputs(inputsInitial);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      envelope.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
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
        stagger: 0.5,
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function isNumberValid(number) {
    const regex = /^[0-9]*$/;
    return regex.test(number);
  }

  const inputChange = (e) => {
    const nameInput = e.target.name;
    const resultado = inputs.map((input) => {
      if (input.name === nameInput) {
        input.value = e.target.value;
        input = oneValidation(input);
      }
      return input;
    });

    setInputs(resultado);
  };

  const checkValidation = () => {
    return inputs.map((input) => {
      return input.validation;
    });
  };

  const allValidation = () => {
    const resultado = inputs.map((input) => {
      input = oneValidation(input);
      return input;
    });

    setInputs(resultado);
  };

  const oneValidation = (input) => {
    const value = input.value;
    if (!value) {
      input.validation = false;
      input.errorMessage = "Campo obligatorio";
    } else if (value.length < input.minLength) {
      input.validation = false;
      input.errorMessage = `Debe contenter almenos ${input.minLength} caracteres`;
    } else if (input.size && value.length !== input.size) {
      input.validation = false;
      input.errorMessage = `Debe ingresar ${input.size} caracteres`;
    } else {
      switch (input.type) {
        case "text":
          input.validation = true;
          input.errorMessage = "";
          break;
        case "email":
          if (!isEmail(value)) {
            input.validation = false;
            input.errorMessage = "Debe ingresar un correo válido";
          } else {
            input.validation = true;
            input.errorMessage = "";
          }
          break;
        case "tel":
          if (!isNumberValid(value)) {
            input.validation = false;
            input.errorMessage = "Debe ingresar valores numéricos";
          } else {
            input.validation = true;
            input.errorMessage = "";
          }
          break;
        default:
          break;
      }
    }
    return input;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    allValidation();
    const validation = checkValidation();
    if (validation.every((el) => el === true)) {
      const objCorreo = inputs.find((element) => element.name == "email");
      const correo = objCorreo.value;
      e.target.disabled = true;
      try {
        const sendData = await fetch("/api/newsletter/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            correo: correo,
          }),
        });

        if (sendData.ok) {
          setMessage("Se ha registrado tu correo de manera éxitosa");
          setShowMessage(true);
          setTimeout(() => {
            e.target.disabled = false;
          }, 1000);
        } else {
          setMessage("Algo salió mal intentalo mas tarde");
          setShowMessage(true);
          setTimeout(() => {
            e.target.disabled = false;
          }, 1000);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Validacion incorrecta");
    }
  };

  return (
    <>
      <ModalMessage
        show={showMessage}
        handleClose={() => setShowMessage(false)}
        message={message}
      ></ModalMessage>
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
        id="newsletter"
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
              {inputs.map((input, index) => (
                <div
                  key={index}
                  sx={{
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <small
                    sx={{
                      position: "absolute",
                      bottom: "-18px",
                      left: 0,
                    }}
                  >
                    {input.errorMessage}
                  </small>
                  <input
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
                    name={input.name}
                    type={input.type}
                    onChange={inputChange}
                    onBlur={inputChange}
                    placeholder={input.placeholder}
                    size={input.size}
                    maxLength={input.maxLength}
                  />
                  <div
                    sx={{
                      position: "absolute",
                      top: "12px",
                      right: "5px",
                      svg: {
                        fill: "white",
                      },
                    }}
                  >
                    {(() => {
                      if (input.validation === false) {
                        return (
                          <IconExclamation color="#ff0000"></IconExclamation>
                        );
                      } else if (input.validation === true) {
                        return <IconCheck color="#7CFC00"></IconCheck>;
                      }
                    })()}
                  </div>
                </div>
              ))}

              <SecondaryButton
                height="45px"
                width="230px"
                handleClick={handleSubmit}
              >
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
    </>
  );
};

export default NewsLetter;
