/** @jsxImportSource theme-ui */
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export const SecondaryButton = ({ width, height, children }) => {
  const handleHover = (e) => {
    const element = e.target;
    gsap.to(element, {
      opacity: 1,
      backgroundColor: "transparent",
      color: "white",
      ease: "expo.out",
      duration: 1,
    });
  };
  const handleMouseLeave = (e) => {
    const element = e.target;
    gsap.to(element, {
      opacity: 1,
      backgroundColor: "white",
      color: "#008833",
      ease: "expo.out",
      duration: 1,
    });
  };
  return (
    <button
      sx={{
        bg: "primary",
        borderRadius: "50px",
        border: "1px solid white",
        width: `${width}`,
        height: `${height}`,
        bg: "white",
        color: "primary",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};
