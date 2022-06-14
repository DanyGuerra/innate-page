/** @jsxImportSource theme-ui */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SecondaryButtonInverIcon } from "./Buttons";
import Image from "next/image";

const CardEquipoItem = ({ person }) => {
  gsap.registerPlugin(ScrollTrigger);
  const refCed = useRef(null);

  useEffect(() => {
    cedAnimation();
  }, []);

  const cedAnimation = () => {
    gsap.fromTo(
      refCed.current,
      {
        translateY: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 2,
        ease: "expo.out",
      }
    );

    gsap.to(refCed.current, {
      rotation: "360",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  };

  return (
    <>
      <span
        className={`${
          person.style === "left" ? "person-left" : "person-right"
        }`}
      >
        <Image src={person.profileImg} width="178px" height="178px"></Image>
      </span>
      <span
        className={`${person.style === "left" ? "ced-left" : "ced-right"}`}
        ref={refCed}
      >
        <Image src={person.cedImg} width="150" height="150"></Image>
      </span>
    </>
  );
};

export default CardEquipoItem;
