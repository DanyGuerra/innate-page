/** @jsxImportSource theme-ui */
import Link from "next/link";
import logo from "../../assets/img/INNATE-logo_innate_icon.svg";
import logoText from "../../assets/img/INNATE-logo_innate_text.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSchedule = () => {
    console.log("hola");
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const navHeader = useRef(null);
  const selectorNav = gsap.utils.selector(navHeader);

  useEffect(() => {
    gsap.set(selectorNav("a"), {
      opacity: 0,
    });
    gsap.to(selectorNav("a"), { opacity: 1, stagger: 0.3 });
  }, []);

  return (
    <header
      sx={{
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "primary",
        fontSize: 1,
        pl: "20px",
        position: "relative",
        gap: "5%",

        "@media screen and (min-width: 1080px)": {
          fontSize: 2,
          gap: "3%",
        },
      }}
    >
      {showMenu ? (
        <section
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            bg: "blur",
            zIndex: 10,
          }}
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
            }}
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
      ) : (
        <></>
      )}
      <Link href="/">
        <a
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            width: "40%",
            "@media screen and (min-width: 779px)": {
              width: "20%",
            },
          }}
        >
          <Image src={logo} alt="Innate Logo" width="20px" height="50px" />
          <Image
            src={logoText}
            alt="Innate Text Logo"
            width="145px"
            height="50px"
          />
        </a>
      </Link>
      <nav
        sx={{
          display: "none",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          textAlign: "center",
          width: "10%",

          "@media screen and (min-width: 779px)": {
            display: "flex",
            width: "60%",
          },
        }}
        ref={navHeader}
      >
        <Link href="/sobre-innate">
          <a sx={{ cursor: "pointer" }}>Sobre Innate</a>
        </Link>
        <Link href="/sobre-innate#equipoSection">
          <a sx={{ cursor: "pointer" }}>Nuestros Quiroprácticos</a>
        </Link>

        <Link href="/faq">
          <a sx={{ cursor: "pointer" }}>Preguntas Frecuentes</a>
        </Link>
        <Link href="/faq#sucursales">
          <a sx={{ cursor: "pointer" }}>Sucursales</a>
        </Link>
        <Link href="/testimoniales">
          <a sx={{ cursor: "pointer" }}>Testimoniales</a>
        </Link>
        <Link href="/testimoniales#contacto">
          <a sx={{ cursor: "pointer" }}>Contacto</a>
        </Link>
      </nav>

      <div
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center ",
          gap: "10px",

          "@media screen and (min-width: 600px)": {
            width: "35%",
          },
          "@media screen and (min-width: 992px )": {
            width: "10%",
          },
        }}
      >
        <div
          sx={{
            display: "block",
            fontSize: 2,
            "&:hover": {
              cursor: "pointer ",
            },
            "@media screen and (min-width: 779px)": {
              display: "none",
            },
          }}
          onClick={() => {
            setShowMenu(true);
          }}
        >
          MENÚ
        </div>
        <button
          sx={{
            width: "70%",
            minWidth: "60%",
            height: "100%",
            bg: "primary",
            padding: "20px",
            color: "textInverted",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            fontSize: 1,
            fontFamily: "Roboto Condensed",
            "&:hover": {
              cursor: "pointer ",
            },

            "@media screen and (min-width: 779px)": {
              width: "90%",
            },
          }}
          onClick={handleSchedule}
        >
          AGENDAR
        </button>
      </div>
    </header>
  );
};

export default Header;
