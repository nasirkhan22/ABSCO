import { Button } from "antd";
import React from "react";
import Cards from "@components/Common/Cards";
import BlueCurrlyArrow from "@assets/svgComponents/BlueCurrlyArrow";
import RightArrow from "@assets/svgComponents/RightArrow";

function OurServices() {
  return (
    <div className="flex bg-white p-[50px_100px_50px_100px] relative">
      <div className="flex flex-col gap-2">
        <span className="text-Sky tracking-widest">OUR SERVICES</span>
        <h1 className="text-5xl text-Blue font-bold">What we Offer?</h1>
        <p className="text-DarkGray w-[50%]">
          Expert support for business formation, legal compliance, and strategic
          financial solutions.
        </p>
        <Button className="flex items-center primary-btn w-[218px] h-12">
          View All Services
          <RightArrow className={"rightArrow"} />
        </Button>
      </div>
      <BlueCurrlyArrow
        className={"absolute bottom-[-30px] left-[270px]"}
        viewBox={"0 0 10.422 220"}
        transform={"translate(90.422 52.665) rotate(105)"}
        width={"250.422"}
        height={"250.357"}
      />
      <div className="flex flex-col gap-5">
        <Cards
          header={"Pre-Licensing Matters"}
          parag={
            "Seamlessly navigate pre-licensing matters, from name reservation to legal documentation."
          }
        />
        <div className="pl-20">
          <Cards
            header={"Company Formation"}
            parag={
              "We simplify the intricacies of business setup by providing comprehensive services."
            }
          />
        </div>
        <Cards
          header={"Mergers and Acquisitions"}
          parag={
            "Drive strategic growth and market presence with our meticulously crafted M&A solutions."
          }
        />
      </div>
    </div>
  );
}

export default OurServices;
