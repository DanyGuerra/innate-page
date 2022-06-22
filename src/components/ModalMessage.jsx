/** @jsxImportSource theme-ui */
import gsap from "gsap";
import { useRef, useEffect } from "react";

const ModalMessage = ({ handleClose, show, message }) => {
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
    gsap.fromTo(
      refModal.current,
      {
        translateX: 400,
      },
      {
        translateX: 0,
        duration: 1,
        ease: "expo.out",
      }
    );
  };

  return show ? (
    <section
      sx={{
        position: "fixed",
        top: "60px",
        right: 0,
        width: "100%",
        maxWidth: "400px",
        zIndex: 9,
        opacity: 0,
      }}
      ref={refModal}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 2,
          position: "relative",
          p: "20px 20px",
          border: "5px solid transparent",
          borderColor: "primary",
          bg: "background",
        }}
      >
        <p>{message ? message : ""}</p>
        <div
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
            fontSize: 3,
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

export default ModalMessage;
