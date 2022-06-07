/** @jsxImportSource theme-ui */

import Carousel from "./Carousel";

const NuestroEquipo = () => {
  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: "100px",
      }}
    >
      <h1
        sx={{
          fontSize: 5,
          fontFamily: "heading",
          textAlign: "center",
          color: "primary",
          fontWeight: 700,
        }}
      >
        Nuestro Equipo
      </h1>
      <Carousel></Carousel>
    </section>
  );
};

export default NuestroEquipo;
