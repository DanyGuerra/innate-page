/** @jsxImportSource theme-ui */
import logo1 from "../../assets/img/logo-l-footer1.png";
import logo2 from "../../assets/img/logo-l-footer2.png";
import iconFb from "../../assets/icons/INNATE-fb.png";
import iconIg from "../../assets/icons/INNATE-ig.png";
import iconTk from "../../assets/icons/INNATE-tk.png";
import IconYt from "../../assets/icons/INNATE-yt.png";
import Image from "next/image";

const Footer = () => {
  const handleSchedule = () => {
    console.log("hola");
  };

  return (
    <footer sx={{ display: "flex", flexDirection: "column" }}>
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",

          "@media screen and (min-width: 992px)": {
            flexDirection: "row",
          },
        }}
      >
        <div class="logos">
          <Image src={logo1} alt="" />
          <Image src={logo2} alt="" />
        </div>
        <div class="marca">
          <p>INNATE 2022 Aviso de Privacidad</p>
        </div>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a href="https://innate.mx/" target="_blank">
            <Image src={iconFb} alt="" />
          </a>
          <a href="https://innate.mx/" target="_blank">
            <Image src={iconIg} alt="" />
          </a>
          <a href="https://innate.mx/" target="_blank">
            <Image src={iconTk} alt="" />
          </a>
          <a href="https://innate.mx/" target="_blank">
            <Image src={IconYt} alt="" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
