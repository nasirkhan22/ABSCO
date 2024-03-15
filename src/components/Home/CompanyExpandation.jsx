import React from "react";
import BusinessExpandationCard from "../Common/BusinessExpandationCard";

function CompanyExpandation() {
  const cardsData = [
    {
      icon: "he",
      title: "Nominal GDP 2023",
      prices: "64.1 Billions",
    },
    {
      icon: "he",
      title: "Nominal GFCF 2023",
      prices: "SAR 279 Billions",
    },
    {
      icon: "he",
      title: "FDI Inward Stock, 2023",
      prices: "SAR 1,017 Billions",
      increments: "10.2% % increase",
    },
    {
      icon: "he",
      title: "FDI Inflows",
      prices: "SAR 8.1 Billions",
      increments: "0.098 % increase",
    },
    {
      icon: "he",
      title: "Investment License, 2023",
      prices: "SAR 1,819 Billions",
      increments: "93.3% % increase",
    },
    {
      icon: "he",
      title: "Transport & Logistics Investement Expexted by 2023",
      prices: "64.1 Billions",
      increments: "93.3% % increase",
    },
    {
      icon: "he",
      title: "Nominal GDP 2023",
      prices: "64.1 Billions",
    },
    {
      icon: "he",
      title: "Nominal GDP 2023",
      prices: "64.1 Billions",
    },
  ];
  return (
    <div className="bg-LightSky p-[70px_100px_70px_100px]">
      <div className="flex flex-col justify-center items-center  gap-2">
        <span className="text-Sky">KINGDOM OF SAUDI ARABIA</span>
        <h1 className="text-Blue font-bold text-4xl">Why Expand to KSA?</h1>
        <p className="text-center w-[40%] text-DarkGray">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form
        </p>
      </div>
      <div className="grid grid-cols-3 pt-10 gap-5">
        {cardsData.map(({ icon, title, prices, increments }, index) => (
          <BusinessExpandationCard
            key={index}
            logo={icon}
            title={title}
            prices={prices}
            increments={increments}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyExpandation;
