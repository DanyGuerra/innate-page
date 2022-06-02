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
        border: "1px solid transparent",
        borderColor: "primary",
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
export const SecondaryButtonInversed = ({ width, height, children }) => {
  const handleHover = (e) => {
    const element = e.target;
    gsap.to(element, {
      backgroundColor: "#008833",
      color: "white",
      ease: "expo.out",
      duration: 1,
    });
  };
  const handleMouseLeave = (e) => {
    const element = e.target;
    gsap.to(element, {
      backgroundColor: "transparent",
      color: "#008833",
      ease: "expo.out",
      duration: 1,
    });
  };
  return (
    <button
      sx={{
        bg: "transparent",
        borderRadius: "50px",
        border: "1px solid transparent",
        borderColor: "primary",
        width: `${width}`,
        height: `${height}`,
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

export const PrimaryButton = ({ width, height, children }) => {
  return (
    <button
      sx={{
        fontFamily: "body",
        fontSize: 2,
        borderRadius: "50px",
        border: "1px solid transparent",
        borderColor: "primary",
        width: `${width}`,
        height: `${height}`,
        bg: "primary",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {children}
    </button>
  );
};
export const PrimaryButtonAnimation = ({ width, height, children }) => {
  const refButton = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      refButton.current,
      { scale: 1, opacity: 0.5 },
      {
        opacity: 1,
        duration: 0.5,
        scale: 1.05,
        ease: "expo.Out",
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo(
      refButton.current,
      { opacity: 0.7 },
      {
        opacity: 1,
        duration: 0.3,
        ease: "elastic.In",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  const handleHover = (e) => {
    const element = e.target;
    gsap.to(element, {
      backgroundColor: "transparent",
      color: "#008833",
      ease: "expo.out",
      duration: 1,
    });
  };
  const handleMouseLeave = (e) => {
    const element = e.target;
    gsap.to(element, {
      opacity: 1,
      backgroundColor: "#008833",
      color: "white",
      ease: "expo.out",
      duration: 1,
    });
  };
  return (
    <button
      sx={{
        fontFamily: "body",
        fontSize: 2,
        borderRadius: "50px",
        border: "1px solid transparent",
        borderColor: "primary",
        width: `${width}`,
        height: `${height}`,
        bg: "primary",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      ref={refButton}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};
