/** @jsxImportSource theme-ui */
import Link from "next/link";
import logo from "../../assets/img/INNATE-logo_innate_icon.svg";
import logoText from "../../assets/img/INNATE-logo_innate_text.svg";
import Image from "next/image";

const Header = () => (
  <header
    sx={{
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "primary",
      fontSize: 2,
      pl: "20px",
    }}
  >
    <Link
      href="/"
      sx={{
        width: "10%",
      }}
    >
      <a
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <Image src={logo} alt="Innate Logo" width="20px" />
        <Image src={logoText} alt="Innate Text Logo" width="145px" />
      </a>
    </Link>
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        width: "60%",
      }}
    >
      <Link href="/sobre-innate">
        <a sx={{ cursor: "pointer" }}>Acerca de</a>
      </Link>
      <Link href="/faq">
        <a sx={{ cursor: "pointer" }}>Preguntas Frecuentes</a>
      </Link>
      <Link href="/testimoniales">
        <a sx={{ cursor: "pointer" }}>Testimoniales</a>
      </Link>
    </nav>

    <div
      sx={{
        width: "10%",
        height: "100%",
        bg: "primary",
      }}
    ></div>
  </header>
);

export default Header;
