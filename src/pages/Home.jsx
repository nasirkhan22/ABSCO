import React from "react";
import { Button } from "antd";
import Arrow from "@assets/svgs/rightarrow.svg?react";
import ClientsSection from "./ClientsSection";
export default function Home() {
  return (
    <>
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
          <Button className="primary-btn">
            Book an Appointment
            <Arrow />
          </Button>
          <Button className="seconday-btn">Learn More</Button>
        </div>
      </div>
      <div className="pt-[100px]">
        <ClientsSection />
      </div>
    </>
  );
}
