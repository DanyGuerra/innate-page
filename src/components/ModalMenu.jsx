/** @jsxImportSource theme-ui */
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ModalMenu = ({ handleCloseMenu }) => {
  const navModal = useRef(null);

  useEffect(() => {
    gsap.set(navModal.current, { translateX: -500, opacity: 0 });
    gsap.to(navModal.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.5,
      ease: "expo.out",
    });
  }, []);

  return (
    <section
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        bg: "blur",
        zIndex: 5,
      }}
      onClick={handleCloseMenu}
    >
      <nav
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          height: "100vh",
          bg: "primary",
          color: "textInverted",
          fontSize: 2,
          padding: "40px",
          pt: "80px",
          gap: "30px",
          position: "relative",
          overflowY: "auto",
          zIndex: 100,
        }}
        ref={navModal}
      >
        <a
          sx={{
            cursor: "pointer",
            position: "fixed",
            top: "10px",
            left: "280px",
          }}
          onClick={handleCloseMenu}
        >
          X
        </a>
        <Link href="/sobre-innate">
          <a sx={{ cursor: "pointer" }} onClick={handleCloseMenu}>
            Sobre Innate
          </a>
        </Link>
        <Link href="/sobre-innate#equipoSection">
          <a sx={{ cursor: "pointer" }} onClick={handleCloseMenu}>
            Nuestros Quiroprácticos
          </a>
        </Link>

        <Link href="/faq">
          <a sx={{ cursor: "pointer" }} onClick={handleCloseMenu}>
            Preguntas Frecuentes
          </a>
        </Link>
        <Link href="/faq#sucursales">
          <a sx={{ cursor: "pointer" }} onClick={handleCloseMenu}>
            Sucursales
          </a>
        </Link>
        <Link href="/testimoniales">
          <a sx={{ cursor: "pointer" }} onClick={handleCloseMenu}>
            Testimoniales
          </a>
        </Link>
        <Link href="/testimoniales#contacto">
          <a sx={{ cursor: "pointer" }} onClick={handleCloseMenu}>
            Contacto
          </a>
        </Link>
      </nav>
    </section>
  );
};

export default ModalMenu;
