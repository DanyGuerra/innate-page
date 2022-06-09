/** @jsxImportSource theme-ui */
import Image from "next/image";

import logoFace from "../../assets/img/INNATE-FAQ-FB.png";
import logoInsta from "../../assets/img/INNATE-FAQ-IG.png";
import logoWhats from "../../assets/img/INNATE-FAQ-WA.png";

const MasDudas = () => {
  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
        mb: "100px",
      }}
    >
      <h1
        sx={{
          fontSize: 5,
          m: 0,
          fontFamily: "heading",
          textAlign: "center",
          color: "primary",
          fontWeight: 700,
        }}
      >
        Si tienes más dudas
      </h1>
      <p sx={{ m: 0 }}>ponte en contacto con nosotros</p>
      <div
        sx={{
          mt: "20px",
          width: "50%",
          display: "flex",
          gap: "20%",
          justifyContent: "center",
          "@media screen and (min-width: 779px)": {
            gap: "5%",
          },
        }}
      >
        <a href="http://bit.ly/2megysO" target="_blank">
          <Image src={logoFace} width="36px" height="36px"></Image>
        </a>
        <a href="http://bit.ly/2kk6qOE" target="_blank">
          <Image src={logoInsta} width="36px" height="36px"></Image>
        </a>
        <a
          href="https://wa.me/5215568770693?text=Quiero%20%20agendar%20una%20cita%20"
          target="_blank"
        >
          <Image src={logoWhats} width="36px" height="36px"></Image>
        </a>
      </div>
    </section>
  );
};

export default MasDudas;
