import React from "react";
import AnimatedUpArrow from "@assets/svgComponents/AnimatedUpArrow";

function Cards({ header, parag }) {
  return (
    <div className="flex bg-LightSky w-[475px] p-5 rounded-2xl relative">
      <div className="flex flex-col">
        <h2 className="text-Blue font-semibold">{header}</h2>
        <p className="text-DarkGray w-[60%]">{parag}</p>
      </div>
      <div className="card bg-white w-16 h-14 absolute right-0 bottom-0 flex items-center justify-center rounded-tl-lg hover:bg-Sky">
        <AnimatedUpArrow className={"arrow w-8 h-11"} />
      </div>
    </div>
  );
}

export default Cards;
