import React from "react";
import CompanyIcon from "@assets/svgs/company-icon.svg?react";
import SoltutionIcon from "@assets/svgs/solution-icon.svg?react";
import IndustriesIcon from "@assets/svgs/industries-icon.svg?react";
import StartingYearIcon from "@assets/svgs/startingYear-icon.svg?react";
import ShiningTours from "@assets/svgs/shiningTours.svg?react";
import Alsn from "@assets/svgs/alsn.svg?react";
import FitnessEvolution from "@assets/svgs/fitnessEvolution.svg?react";
import BlueCurrlyArrow from "@assets/svgComponents/BlueCurrlyArrow";

function ClientsSection() {
  return (
    <div className="bg-LightSky relative pb-16">
      <div className="flex items-center justify-center flex-col gap-10 bg-white rounded-3xl relative top-[-30px]  m-[0px_100px_0px_100px] p-[40px_0px_40px_0px]">
        <div className="flex flex-col items-center">
          <span className="text-Sky">A CLOSER LOOK AT WHAT</span>
          <h1 className="text-Blue font-bold text-5xl">We've Accomplished</h1>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <CompanyIcon />
            <span className="text-Sky font-bold text-2xl">650+</span>
            <span className="text-Blue">Companies Registered</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SoltutionIcon />
            <span className="text-Sky font-bold text-2xl">100+</span>
            <span className="text-Blue">Solutions Provided</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IndustriesIcon />
            <span className="text-Sky font-bold text-2xl">25+</span>
            <span className="text-Blue">Industries Assisted</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <StartingYearIcon />
            <span className="text-Sky font-bold text-2xl">220</span>
            <span className="text-Blue">Starting Year</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 mt-9">
        <div className="flex flex-col items-center gap-2 relative">
          <div className="absolute right-[-15px] top-[51px]">
            <BlueCurrlyArrow
              viewBox={"0 0 100.422 220"}
              transform={"translate(181.422 52.665) rotate()"}
              width={"181.422"}
              height={"120.357"} />
          </div>
          <span className="text-Sky">OUR CLIENTS</span>
          <h1 className="text-Blue font-bold text-5xl">Our Trusted Clients</h1>
          <p className="text-center w-[68%] text-DarkGray">
            Empowering businesses with tailored solutions, our clients trust
            Absco for seamless success
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center p-5 rounded-lg bg-white">
            <ShiningTours />
          </div>
          <div className="flex items-center p-5 rounded-lg bg-white">
            <Alsn />
          </div>
          <div className="flex items-center p-5 rounded-lg bg-white">
            <FitnessEvolution />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default ClientsSection;
