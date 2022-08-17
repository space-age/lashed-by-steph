import Image from "next/image";
import React from "react";

import image1 from "../../images/work/work3.JPG";
import image2 from "../../images/work/work1.JPG";
import image3 from "../../images/work/work8.JPG";
import image4 from "../../images/work/work4.JPG";
import image5 from "../../images/work/work6.JPG";
import image6 from "../../images/work/work5.JPG";
import image7 from "../../images/work/work10.JPG";
import image8 from "../../images/work/work12.JPG";
import image9 from "../../images/work/work11.JPG";
import image10 from "../../images/work/work9.JPG";
import image11 from "../../images/work/work7.JPG";

function ClientsWork() {
  return (
    <section className="mt-5 p-5 gap-10">
      <h2 className="text-center text-5xl font-playfair italic capitalize text-[#f1cc85]">
        Clients Eye Lashes Extensions
      </h2>
      {/* First row */}
      <div className="flex flex-col md:flex-row mt-5 gap-5">
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[25%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image1}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[50%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image2}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[25%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image3}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row mt-5 md:mt-10 gap-5">
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[33%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image4}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[33%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image5}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[33%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image6}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="flex flex-col md:flex-row mt-5 md:mt-10 gap-5 ">
        <div className="w-full md:w-[50%] relative flex flex-col gap-4">
          <div className="relative h-[25vh] md:h-full w-full bg-[#f1cc85] py-3 px-1">
            <div className="hover:border-white border-[1.5px] border-[#f1cc85] m-4 md:p-5 p-2 transition-all duration-300 cursor-pointer">
              <a
                target="_blank"
                href="https://www.instagram.com/lashed_by_stephh/?hl=en"
              >
                <h2 className="text-center flex flex-col font-playfair text-white font-medium">
                  <span className="text-3xl">follow me on</span>
                  <em className="text-6xl">Instagram</em>
                </h2>
              </a>
            </div>
          </div>
          <div className=" relative h-full flex gap-2">
            <div className="bg-purple-100 relative h-[30vh] md:h-full w-[33%]">
              <Image
                src={image7}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            <div className="bg-purple-100 relative h-[30vh] md:h-full w-[33%]">
              <Image
                src={image8}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            <div className="bg-purple-100 relative h-[30vh] md:h-full w-[33%]">
              <Image
                src={image9}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[35vh] md:h-[50vh] md:w-[25%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image10}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="w-full h-[35vh] md:h-[50vh] md:w-[25%] bg-purple-100 relative  brightness-[1]">
          <Image
            src={image11}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default ClientsWork;
