import React from "react";

import Image from "next/image";
import img1 from "../../images/logo.png";
import img2 from "../../images/example3.jpg";
import img3 from "../../images/example4.jpg";

function WorkImages() {
  return (
    <section className="flex mt-10 gap-10 h-[100vh]">
      <div className="flex flex-col gap-8 w-[30%]  ">
        <div className="relative h-[25%] w-full bg-[#f1cc85] py-3 px-1">
          <div className="hover:border-white border-[1.5px] border-[#f1cc85] m-4 p-5 transition-all duration-300 cursor-pointer">
            <a
              target="_blank"
              href="https://www.instagram.com/lashed_by_stephh/?hl=en"
            >
              <h2 className="text-center flex flex-col font-playfair text-white font-medium">
                <span className="text-3xl">schedule appointment</span>
                <em className="text-5xl">Contact Now</em>
              </h2>
            </a>
          </div>
        </div>
        <div className="relative h-[50%] w-full brightness-[1] ">
          <Image
            src={img1}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="relative h-[25%] w-full bg-[#f1cc85] py-3 px-1">
          <div className="hover:border-white border-[1.5px] border-[#f1cc85] m-4 p-5 transition-all duration-300 cursor-pointer">
            <a
              target="_blank"
              href="https://www.instagram.com/lashed_by_stephh/?hl=en"
            >
              <h2 className="text-center flex flex-col font-playfair text-white font-medium">
                <span className="text-3xl">follow her on</span>
                <em className="text-6xl">Instagram</em>
              </h2>
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-[70%] flex-col gap-8">
        <div className="relative h-[50%] w-full brightness-[1] ">
          <Image
            src={img3}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="relative h-[50%] w-full brightness-[1] ">
          <Image
            src={img2}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default WorkImages;
