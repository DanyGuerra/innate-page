/** @jsxImportSource theme-ui */
import YouTube from "react-youtube";

const VideoSection = ({ title, idVideo }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "50px",
        mb: "10vh",
      }}
    >
      <h1
        sx={{
          fontSize: 4,
          fontFamily: "heading",
          textAlign: "center",
          color: "primary",
          fontWeight: 400,
          "@media screen and (min-width: 779px)": {
            fontSize: 6,
          },
        }}
      >
        {title}
      </h1>
      <div
        sx={{
          width: "90%",
          maxWidth: "1020px",
          height: "25vh",
          "@media screen and (min-width: 779px)": {
            height: "60vh",
          },

          ".video": { height: "100%", width: "100%" },
        }}
      >
        <YouTube videoId={idVideo} opts={opts} className="video" />
      </div>
    </section>
  );
};

export default VideoSection;
