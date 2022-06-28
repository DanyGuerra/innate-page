/** @jsxImportSource theme-ui */
import { useState } from "react";
import { ArrowDown, ArrowUp } from "./Icons";
import { useEffect } from "react";
import { PrimaryButton } from "./Buttons";
import { IconExclamation, IconCheck } from "./Icons";
import ModalMessage from "./ModalMessage";
import { useRouter } from "next/router";

const FormCitas = () => {
  const router = useRouter();
  const [sucursalSelected, setSucursalSelected] = useState("Sucursal");
  const [showOptions, setShowOptions] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [eventSubmitGoogle, setEventSubmitGoogle] = useState("");
  const [avisoChecked, setAvisoChecked] = useState(false);

  const { query } = router;

  useEffect(() => {
    setInputs(inputsInitial);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    allValidation();
    const validation = checkValidation();
    if (
      validation.every((el) => el === true) &&
      sucursalSelected &&
      sucursalSelected != "Sucursal" &&
      avisoChecked
    ) {
      e.target.disabled = true;
      try {
        const [name, email, phone] = getInputsValues();

        const sendData = await fetch("/api/citas/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            name: name.name,
            email: email.email,
            phone: phone.phone,
            sucursal: sucursalSelected,
            source: query.source,
          }),
        });

        if (sendData.ok) {
          const mailSend = await fetch("api/sendmail/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              name: name.name,
              email: email.email,
              phone: phone.phone,
              sucursal: sucursalSelected,
              source: query.source,
            }),
          });

          window.dataLayer.push({
            event: eventSubmitGoogle,
            btn_activador: { value: query.source },
          });

          setMessage(
            "Se ha registrado tu correo de manera éxitosa. En breve se comunicará un representante de Innate con usted para continuar con el proceso de tu cita."
          );
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
      setMessage("LLena todos los campos y/o acepta el aviso de privacidad");
      setShowMessage(true);
    }
  };

  const inputsInitial = [
    {
      name: "name",
      type: "text",
      placeholder: "Nombre completo",
      validation: null,
      value: "",
      minLength: 4,
      errorMessage: "",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Correo Electrónico",
      validation: null,
      value: "",
      errorMessage: "",
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Teléfono",
      validation: null,
      value: "",
      minLength: 7,
      errorMessage: "",
    },
  ];

  const sucursales = [
    { name: "Santa Fe", eventGoogle: "Submit_SantaFe" },
    { name: "Roma", eventGoogle: "Submit_Roma" },
    { name: "Del Valle", eventGoogle: "Submit_DelValle" },
    { name: "Polanco", eventGoogle: "Submit_Polanco" },
    { name: "Pedregal", eventGoogle: "Submit_Pedregal" },
    { name: "Interlomas", eventGoogle: "Submit_Interlomas" },
    { name: "Metepec", eventGoogle: "Submit_Metepec" },
    { name: "Cuernavaca", eventGoogle: "Submit_Cuernavaca" },
    { name: "Monterrey", eventGoogle: "Submit_MTY" },
    { name: "Guadalajara", eventGoogle: "Submit_GDL" },
    { name: "Puebla", eventGoogle: "Submit_Puebla" },
    { name: "Querétaro", eventGoogle: "Submit_Queretaro" },
    { name: "Saltillo", eventGoogle: "Submit_Saltillo" },
  ];

  const getInputsValues = () => {
    const values = inputs.map((item) => {
      const key = item.name;
      const value = item.value;
      const obj = {};
      obj[key] = value;
      return obj;
    });

    return values;
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

  const toggleShow = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelect = (e) => {
    setSucursalSelected(e.target.getAttribute("value"));
    setEventSubmitGoogle(e.target.getAttribute("data-event"));
    setShowOptions(false);
  };

  const handleCheckbox = (e) => {
    setAvisoChecked(!avisoChecked);
  };

  return (
    <>
      <ModalMessage
        show={showMessage}
        message={message}
        handleClose={() => setShowMessage(false)}
      />
      <section
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 250px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: "50px",
          pb: "100px",
        }}
      >
        <h1
          sx={{
            fontSize: [5, 6],
            color: "primary",
            fontFamily: "heading",
            fontWeight: "heading",
          }}
        >
          Regístrate Aquí
        </h1>
        <div
          sx={{
            width: "90%",
            maxWidth: "600px",
            background: "white",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
            padding: "20px 0px",
            height: "auto",
            minHeight: "500px",
          }}
        >
          <div
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              mb: 30,
              mt: "20px",
            }}
          >
            <div>Llena los siguientes datos</div>
          </div>
          <form
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
              width: "90%",
              maxWidth: "360px",
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
                    color: "red",
                  }}
                >
                  {input.errorMessage}
                </small>
                <input
                  sx={{
                    width: "100%",
                    height: "50px",
                    bg: "white",
                    border: "1px solid white",
                    borderColor: "primary",
                    outlineColor: "primary",
                    pl: "10px",
                    fontFamily: "body",
                    fontSize: 3,
                    color: "primary",
                    "&::placeholder": {
                      color: "#C4C4C4",
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
                      return <IconCheck color="#008833"></IconCheck>;
                    }
                  })()}
                </div>
              </div>
            ))}
          </form>
          <div
            sx={{
              width: "90%",
              maxWidth: "360px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div sx={{ width: "100%", position: "relative" }}>
              <div
                sx={{
                  width: "100%",
                  border: "1px solid red",
                  borderColor: "primary",
                  height: "50px",
                  pl: "10px",
                  fontSize: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  cursor: "pointer",
                  position: "relative",
                  color: `${
                    sucursalSelected == "Sucursal" ? "#C4C4C4" : "primary"
                  }`,
                }}
                onClick={toggleShow}
              >
                <p>{sucursalSelected}</p>
                <div
                  sx={{
                    position: "absolute",
                    top: "15px",
                    right: "10px",
                    svg: {
                      fill: "primary",
                    },
                  }}
                >
                  {showOptions ? <ArrowUp></ArrowUp> : <ArrowDown></ArrowDown>}
                </div>
              </div>
              <div
                sx={{
                  width: "100%",
                  border: "1px solid red",
                  borderColor: "primary",
                  borderTop: "none",
                  background: "white",
                  position: "absolute",
                  top: "50px",
                  display: `${showOptions ? "block" : "none"}`,
                  zIndex: 1,
                }}
              >
                {sucursales.map((item, index) => {
                  return (
                    <div
                      sx={{
                        height: "35px",
                        p: "8px 16px",
                        cursor: "pointer",
                        "&:hover": {
                          bg: "#eeeeee",
                        },
                      }}
                      key={index}
                      value={item.name}
                      data-event={item.eventGoogle}
                      onClick={handleSelect}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            sx={{
              width: "90%",
              maxWidth: "360px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={avisoChecked}
              onChange={handleCheckbox}
            />
            <p>
              Acepto{" "}
              <a
                href="/Innate-Aviso_de_privacidad.pdf"
                target="_blank"
                sx={{ color: "primary" }}
              >
                Aviso de Privacidad
              </a>
            </p>
          </div>
          <div
            sx={{
              width: ["90%", "100%"],
              maxWidth: "300px",
            }}
          >
            <PrimaryButton
              height="50px"
              width="100%"
              handleClick={handleSubmit}
            >
              GUARDAR
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormCitas;
