import React from "react";
import { Button } from "antd";
import RightArrow from "@assets/svgComponents/RightArrow";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 pl-[100px]">
      <h1 className="text-6xl font-extrabold text-white tracking-wider">
        Partner With Us for <br /> Seamless{" "}
        <span className="text-[#E5D608]">
          Company <br /> Formation
        </span>
      </h1>
      <p className="text-[#ECECEC] text-lg">
        Driven by <strong> Saudi Vision 2030, ABSCO </strong> is KSA’s
        recognized <br /> leader in business expansion. Based in Riyadh, we{" "}
        <br /> simplify your journey into the Kingdom.
      </p>

      <div className="flex items-center gap-8">
        <Button className="primary-btn w-[270px] h-12">
          Book an Appointment
          <RightArrow className={"rightArrow"} />
        </Button>
        <Button className="seconday-btn">Learn More</Button>
      </div>
    </div>
  );
}
