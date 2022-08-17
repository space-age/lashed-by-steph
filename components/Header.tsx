import Image from "next/image";
import React from "react";

import img from "../images/header.jpg";

function Header() {
  return (
    <div className="relative w-full md:mb-10">
      <div className="relative -z-100 h-[100vh] w-full">
        <Image src={img} layout="fill" objectFit="cover" />
        <div className="h-[30%] w-full bg-gradient-to-b bottom-[-1px] absolute z-1000 "></div>
      </div>
      <div className="relative  text-center ">
        <h1 className="-mt-36 text-4xl sm:-mt-24 sm:text-4xl md:-mt-28 md:text-5xl lg:-mt-40 lg:mx-20 font-light lg:text-6xl leading-[1.15] xl:text-7xl">
          <span className="">Stephanie is an eyelash extension artist</span>
          <br />
          <span>from Homeland, California</span>
        </h1>
        <div className="mt-4 pb-10">
          {/* <span className="header--underline"> */}
          <a
            href="mailto:casillaschristopher8@gmail.com?subject= Eyelash Extension Appointment"
            className="header--underline "
          >
            She would love to hear from you
          </a>
          {/* </span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
