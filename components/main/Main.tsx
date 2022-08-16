import Image from "next/image";
import React from "react";
import AboutMe from "./AboutMe";
import Appointments from "./Appointments";
import Availability from "./Availability";
import ClientsWork from "./ClientsWork";
import Policy from "./Policy";
import WorkImages from "./WorkImages";

function Main() {
  return (
    <main className="relative border-[1px] border-[#f1cc85] mx-14 my-4 p-5">
      <AboutMe />
      {/* <WorkImages /> */}
      <Appointments />
      <Policy />
      <ClientsWork />
      <Availability />
    </main>
  );
}

export default Main;
