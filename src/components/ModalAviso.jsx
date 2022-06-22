/** @jsxImportSource theme-ui */
import gsap from "gsap";
import { useRef, useEffect } from "react";

const ModalAviso = ({ handleClose, show }) => {
  const refModal = useRef(null);

  useEffect(() => {
    animation();
  }, [show]);

  const animation = () => {
    gsap.to(refModal.current, {
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    });
  };

  return show ? (
    <section
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        bg: "#00000080",
        zIndex: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflowY: "scroll",
        opacity: 0,
      }}
      ref={refModal}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          maxWidth: "540px",
          fontSize: 2,
          position: "relative",
          p: "20px 20px",
          border: "5px solid transparent",
          borderColor: "primary",
          bg: "background",
        }}
      >
        <h3 sx={{ alignSelf: "flex-start", fontFamily: "heading" }}>
          ESTIMADO PACIENTE:
        </h3>

        <p>
          Por disposición sanitaria en “La Nueva Normalidad” para tu seguridad y
          confort hemos tomado las siguientes medidas y te solicitamos tu
          cooperación para un servicio óptimo:
        </p>
        <ol sx={{ p: "0px 20px" }}>
          <li>
            Al entrar al espacio te solicitamos el uso de gel antibacterial y
            hacer uso del tapete sanitizante
          </li>
          <li>
            El uso de cubre bocas es obligatorio hasta que las autoridades lo
            retiren
          </li>
          <li>Asistir aseado a tu cita</li>
          <li>La toma de temperatura será obligatoria</li>
          <li>Lávate las manos constantemente</li>
          <li>
            Si tienes algún síntoma o sospecha de COVID-19 repórtalo y no
            asistas a cita, asiste a tu médico
          </li>
          <li>
            Nuestro personal en todo momento utilizará gel antibacterial,
            realizará lavado de manos constante y utilizará cubrebocas
          </li>
          <li>
            Te pedimos asistir puntual a tu cita para no tener aglomeraciones en
            sala de espera
          </li>
          <li>
            Se permitirá la permanencia de máximo 10 personas en sala de espera
          </li>
          <li>
            Te pedimos venir sólo a tu cita o pedir a tu acompañante esperarte
            afuera si no requieres asistencia especial
          </li>
          <li>Guarda la sana distancia dentro del espacio</li>
          <li>El equipo de trabajo se mantiene en constante desinfección</li>
          <li>
            Contamos con un proceso de desinfección en medio ambiente por
            empresas especializadas en tal servicio
          </li>
          <li>
            Los horarios están sujetos a disponibilidad y a modificación en caso
            de ser necesario
          </li>
          <li
            sx={{
              a: {
                color: "primary",
                fontWeight: "heading",
              },
            }}
          >
            Sonríe también cuidamos de tu espalda en las buenas y en las malas y
            juntos nos adaptaremos a este cambio.Mantente al pendiente de la
            información sanitaria en la página web:{" "}
            <a
              rel="noreferrer noopener"
              href="https://covid19.cdmx.gob.mx/"
              target="_blank"
            >
              https://covid19.cdmx.gob.mx/
            </a>{" "}
            y en{" "}
            <a
              rel="noreferrer noopener"
              href="https://coronavirus.gob.mx/"
              target="_blank"
            >
              https://coronavirus.gob.mx/
            </a>
          </li>
        </ol>

        <div
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            fontSize: 4,
            color: "primary",
            fontWeight: "heading",
          }}
          onClick={handleClose}
        >
          ✕
        </div>
      </div>
    </section>
  ) : null;
};

export default ModalAviso;
