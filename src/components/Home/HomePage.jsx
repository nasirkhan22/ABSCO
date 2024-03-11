import React from "react";
import { Button } from "antd";
import RightArrow from "@assets/svgComponents/RightArrow";
import BgImage from "@assets/images/background.png";
import ClientsSection from "@components/Home/ClientsSection";
import OurServices from "@components/Home/OurServices";
import WhoWeAre from "@components/Home/WhoWeAre";
import CompanyExpandation from "@components/Home/CompanyExpandation";
export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
        width: "100%",
      }}
      className="!h-screen flex flex-col gap-5 pl-[100px] absolute bg-red-500 top-0 z-[-1] pt-[200px] pb-40"
    >
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
      <div className="">
        <ClientsSection />
        {/* <OurServices />
        <WhoWeAre />
        <CompanyExpandation /> */}
      </div>
    </div>
  );
}
