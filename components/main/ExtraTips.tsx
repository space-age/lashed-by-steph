import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import tip1 from "../../images/tips/tip1.jpg";
import tip2 from "../../images/tips/tip2.jpg";
import tip3 from "../../images/tips/tip3.jpg";
import tip4 from "../../images/tips/tip4.jpg";
import tip5 from "../../images/tips/tip5.jpg";
import tip6 from "../../images/tips/tip6.jpg";
import tip7 from "../../images/tips/tip7.jpg";
import tip8 from "../../images/tips/tip8.jpg";
import tip9 from "../../images/tips/tip9.jpg";
import tip10 from "../../images/tips/tip10.jpg";
import tip11 from "../../images/tips/tip11.jpg";
import Image from "next/image";

function ExtraTips() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const tips = [
    tip1,
    tip2,
    tip3,
    tip4,
    tip5,
    tip6,
    tip7,
    tip8,
    tip9,
    tip10,
    tip11,
  ];

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative mt-5 p-5 mb-15">
      <h2 className="text-center text-5xl font-playfair italic capitalize text-[#f1cc85]">
        My Tips
      </h2>
      <div className="group relative mt-5 md:mx-5">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex items-center space-x-5 overflow-x-scroll scrollbar-hide md:space-x-3.5"
          ref={rowRef}
        >
          {tips.map((tip, index) => (
            <div
              key={index}
              className="relative h-80 min-w-[50%] md:min-w-[25%]"
            >
              <Image
                src={tip}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </section>
  );
}

export default ExtraTips;
