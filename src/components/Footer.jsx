/** @jsxImportSource theme-ui */
import logo1 from "../../assets/img/logo-l-footer1.png";
import logo2 from "../../assets/img/logo-l-footer2.png";
import iconFb from "../../assets/icons/INNATE-fb.png";
import iconIg from "../../assets/icons/INNATE-ig.png";
import iconTk from "../../assets/icons/INNATE-tk.png";
import iconYt from "../../assets/icons/INNATE-yt.png";
import logoFooter from "../../assets/img/logo_innate_footer.svg";
import Image from "next/image";

const Footer = () => {
  const handleSchedule = () => {
    console.log("hola");
  };

  return (
    <footer
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <section
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",

          "@media screen and (min-width: 992px)": {
            flexDirection: "row",
            gap: "5%",
          },
        }}
      >
        <div
          sx={{
            width: "30%",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            "@media screen and (max-width: 992px)": {
              width: "80%",
              flexDirection: "column",
            },
          }}
        >
          <Image src={logo1} alt="" />
          <Image src={logo2} alt="" />
        </div>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "30%",
            order: 0,
            "@media screen and (max-width: 992px)": {
              width: "80%",
              order: -1,
            },
          }}
        >
          <Image src={logoFooter} alt="" width="217px" height="120px" />
        </div>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10%",
            width: "30%",
            "@media screen and (max-width: 992px)": {
              width: "80%",
            },
          }}
        >
          <a
            href="https://www.instagram.com/quiropracticos.innate/"
            target="_blank"
          >
            <Image src={iconIg} alt="" />
          </a>
          <a
            href="https://www.facebook.com/Quiropracticos.Innate/"
            target="_blank"
          >
            <Image src={iconFb} alt="" />
          </a>
          <a
            href="https://www.tiktok.com/@quiropracticosinnate/"
            target="_blank"
          >
            <Image src={iconTk} alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCatxwbMglOUe8McB4BkRZrw"
            target="_blank"
          >
            <Image src={iconYt} alt="" />
          </a>
        </div>
        <p
          sx={{
            pt: "0px",
            mt: 0,
            "@media screen and (min-width: 992px)": {
              flexDirection: "row",
              mt: "20px",
              pt: "20px",
            },
          }}
        >
          INNATE ® 2022 · Aviso de Privacidad
        </p>
      </section>
    </footer>
  );
};

export default Footer;
