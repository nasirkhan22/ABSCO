import React from "react";
import TeamPhoto from "@assets/images/teamPhoto.png";
import { Button } from "antd";
import BlueCurrlyArrow from "@assets/svgComponents/BlueCurrlyArrow";
import RightArrow from "@assets/svgComponents/RightArrow";

function WhoWeAre() {
  return (
    <div className="flex justify-between gap-[100px] bg-[#F5F5F5] p-[100px_100px_100px_100px] relative">
      <img className="w-[600px] h-[400px]" src={TeamPhoto} alt="" />
      <BlueCurrlyArrow
        className={
          "absolute bottom-0 left-1/2 transform -translate-x-1/2 flip-vertical "
        }
        viewBox={"0 0 10.422 220"}
        transform={"translate(110.422 115.665) rotate(105)"}
        width={"200.422"}
        height={"170.357"}
      />
      <div className="flex flex-col gap-3">
        <span className="text-Sky">ABOUT US</span>
        <h1 className="text-Blue text-5xl font-bold  tracking-wide">
          Who Are We?
        </h1>
        <p className="text-DarkGray w-[70%]">
          At ABSCO, we take pride in our ability to navigate complexities and
          offer unparalleled business consulting solutions to meet client’s
          unique needs. <br />
          <br /> We are dedicated to building a dynamic marketplace that
          embraces diversity, innovation, and sustainable growth.
        </p>
        <Button className="primary-btn w-[180px] h-[48px] mt-3">
          Read More
          <RightArrow className={"rightArrow"} />
        </Button>
      </div>
    </div>
  );
}

export default WhoWeAre;
