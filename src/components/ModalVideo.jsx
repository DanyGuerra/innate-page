/** @jsxImportSource theme-ui */
import gsap from "gsap";
import { useRef, useEffect } from "react";
import YouTube from "react-youtube";

const ModalVideo = ({ handleClose, show }) => {
  const refModal = useRef(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  useEffect(() => {
    animation();
  }, [show]);

  const animation = () => {
    gsap.to(refModal.current, {
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    });
  };

  return show ? (
    <section
      sx={{
        position: "fixed",
        top: "0px",
        left: 0,
        width: "100%",
        height: "100vh",
        bg: "#00000080",
        zIndex: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflowY: "scroll",
        opacity: 0,
      }}
      ref={refModal}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1080px",
          fontSize: 2,
          position: "relative",
          mt: "50px",
          p: "50px 0px",
          bg: "background",
        }}
      >
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
          <YouTube videoId={"Y9KrE1dNzNE"} opts={opts} className="video" />
        </div>
        <div
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            fontSize: 4,
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

export default ModalVideo;
