/** @jsxImportSource theme-ui */
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export const SecondaryButton = ({ width, height, children, handleClick }) => {
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
        fontFamily: "body",
        fontSize: 2,
        width: `${width}`,
        height: `${height}`,
        bg: "white",
        color: "primary",
        cursor: "pointer",
        "&:disabled": {
          cursor: "progress",
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export const SecondaryButtonInversed = ({
  width,
  height,
  children,
  handleClick,
}) => {
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
        fontFamily: "body",
        fontSize: 2,
        bg: "transparent",
        borderRadius: "50px",
        border: "1px solid transparent",
        borderColor: "primary",
        width: `${width}`,
        height: `${height}`,
        color: "primary",
        cursor: "pointer",
        "&:hover": {
          bg: "red",
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export const SecondaryButtonInverIcon = ({
  width,
  height,
  children,
  handleClick,
  icon,
}) => {
  return (
    <button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        fontFamily: "body",
        fontSize: 2,
        bg: "transparent",
        borderRadius: "50px",
        border: "1px solid transparent",
        borderColor: "primary",
        width: `${width}`,
        height: `${height}`,
        color: "primary",
        svg: {
          fill: "primary",
        },
        "&:hover": {
          cursor: "pointer",
          bg: "primary",
          color: "white",
          svg: {
            fill: "white",
          },
        },
      }}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="25"
        height="25px"
      >
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
      </svg>
      <span>{children}</span>
    </button>
  );
};

export const PrimaryButton = ({ width, height, children, handleClick }) => {
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
        cursor: "pointer",
        "&:disabled": {
          cursor: "progress",
        },
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export const PrimaryButtonAnimation = ({
  width,
  height,
  children,
  handleClick,
}) => {
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
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
