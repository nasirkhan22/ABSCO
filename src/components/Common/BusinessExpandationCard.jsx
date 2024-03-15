import React from "react";

function BusinessExpandationCard({ logo, title, prices, increments, key }) {
  return (
    <div
      key={key}
      className="flex flex-col gap-5 bg-white p-[59px_10px_40px_20px] rounded-lg w-full h-72"
    >
      <h1>{logo}</h1>
      <span className="text-DarkGray font-semibold w-2/3">{title}</span>
      <div className="flex flex-col gap-2">
        <h1 className="text-Blue text-3xl font-bold">{prices}</h1>
        <span className="text-Green font-semibold">{increments}</span>
      </div>
    </div>
  );
}

export default BusinessExpandationCard;
