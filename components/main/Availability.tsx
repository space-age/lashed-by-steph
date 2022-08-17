import React from "react";

function Availability() {
  return (
    <section className="mt-5 p-5 relative">
      <h2 className="text-center text-5xl font-playfair italic capitalize text-[#f1cc85] ">
        Let's make something beautiful
      </h2>
      <div className="lg:w-[31%] text-center m-auto mt-7 text-xl italic">
        <p className="mb-2">
          Please{" "}
          <a
            href="mailto:casillaschristopher8@gmail.com?subject= Eyelash Extension Appointment"
            className="cursor-pointer text-[#f1cc85] font-bold underline underline-offset-2"
          >
            contact me
          </a>{" "}
          for availability
        </p>
        <p className="mb-2">
          Calendar gets updated through{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/lashed_by_stephh/?hl=en"
            className="cursor-pointer text-[#f1cc85] font-bold underline underline-offset-2"
          >
            Instagram Page
          </a>
        </p>
        <p className="">
          Please follow to get the latest calendar, reviews, policy information,
          lash tips and wash lashes tips
        </p>
      </div>
    </section>
  );
}

export default Availability;
