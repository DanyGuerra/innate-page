/** @jsxImportSource theme-ui */

import { SecondaryButtonInverIcon } from "./Buttons";

const CanalYoutube = () => {
  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
        mb: "100px",
        color: "primary",
      }}
    >
      <p sx={{ m: 0 }}>Visita nuestro canal</p>
      <h2
        sx={{
          m: 0,
          fontSize: 5,
          fontFamily: "heading",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        de Youtube
      </h2>
      <div
        sx={{
          mt: "30px",
          width: "90%",
          maxWidth: "225px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.youtube.com/channel/UCatxwbMglOUe8McB4BkRZrw"
          target="_blank"
          sx={{ width: "100%" }}
        >
          <SecondaryButtonInverIcon width="100%" height="53px">
            Canal de Youtube
          </SecondaryButtonInverIcon>
        </a>
      </div>
    </section>
  );
};

export default CanalYoutube;
