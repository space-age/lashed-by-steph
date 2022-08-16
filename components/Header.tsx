import Image from "next/image";
import React from "react";

import img from "../images/header.jpg";

function Header() {
  return (
    <div className="relative w-full">
      <div className="relative -z-100 h-[100vh] w-screen">
        <Image src={img} layout="fill" />
        <div className="h-[30%] w-full bg-gradient-to-b bottom-[-1px] absolute z-1000 "></div>
      </div>
      <div className="relative  ">
        <h1 className="text-center -mt-44 mx-20 font-light text-6xl leading-[1.15] ">
          <span className="">Stephanie is an eyelash extension artist</span>
          <br />
          <span>from Homeland, California</span>
        </h1>
        <div className="text-center text-5xl font-playfair italic mt-4 pb-10">
          <span className="header--underline">
            She would love to hear from you
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
