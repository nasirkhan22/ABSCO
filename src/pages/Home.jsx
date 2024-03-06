import React from "react";
import { Button } from "antd";
import Arrow from "@assets/svgs/rightarrow.svg?react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-5 pl-[100px]">
      <h1 className="text-6xl font-extrabold text-white tracking-wider">
        Partner With Us for <br /> Seamless <span className="text-[#E5D608]">Company <br /> Formation</span>
      </h1>
      <p className="text-[#ECECEC] text-lg">
        Driven by Saudi Vision 2030, ABSCO is KSA’s recognized <br /> leader in
        business expansion. Based in Riyadh, we <br /> simplify your journey
        into the Kingdom.
      </p>
      
      <div className="flex items-center gap-8">
        <Button className="flex justify-center items-center gap-3 w-[270px] h-12 text-white text-xl bg-[#27A8E0] hover:!border-[#27A8E0] hover:!bg-white hover:!text-[#27A8E0] rounded-full">
          Book an Appointment
          <Arrow />
        </Button>
        <Button className="flex justify-center items-center w-[146px] h-12 text-lg rounded-full text-white hover:!text-white hover:!bg-[#27A8E0]">
          Learn More
        </Button>
      </div>
    </div>
  );
}
