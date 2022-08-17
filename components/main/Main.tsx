import Image from "next/image";
import React from "react";
import AboutMe from "./AboutMe";
import Appointments from "./Appointments";
import Availability from "./Availability";
import ClientsWork from "./ClientsWork";
import ExtraTips from "./ExtraTips";
import Policy from "./Policy";
import WorkImages from "./WorkImages";

function Main() {
  return (
    // <main className="relative sm:border-[1px] sm:border-[#f1cc85] sm:mx-14 my-4 sm:p-5">
    <main className="relative md:border-[1px] md:border-[#f1cc85] sm:pt-5 md:mx-5 xl:m-auto max-w-[1150px]">
      {/* <main className="relative sm:border-[1px] sm:border-[#f1cc85] mt-10 sm:pt-5 sm:p-1 sm:m-3 lg:p-5 lg:mx-14  2xl:w-[60%] 2xl:m-auto max-w-[1150px]"> */}
      <AboutMe />
      {/* <WorkImages /> */}
      <Appointments />
      <Policy />
      <ClientsWork />
      <Availability />
      <ExtraTips />
    </main>
  );
}

export default Main;
