import React from "react";

function BusinessExpandationCard({ logo, title, prices, increments }) {
  return (
    <div className="bg-white p-[30px_10px_40px_10px]">
      <div className="">
        <h1>{logo}</h1>
        <span>{title}</span>
        <h1>{prices}</h1>
        <span>{increments}</span>
      </div>
    </div>
  );
}

export default BusinessExpandationCard;
