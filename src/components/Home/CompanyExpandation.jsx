import React from "react";

function CompanyExpandation() {
  const cardsData = [
    {
      icon: "he",
      title: "gdfgdfgd",
      prices: "fdgdfbdf",
    },
  ];
  return (
    <div className="bg-LightSky">
      <div className="flex flex-col justify-center items-center p-[70px_100px_70px_100px] gap-2">
        <span className="text-Sky">KINGDOM OF SAUDI ARABIA</span>
        <h1 className="text-Blue font-bold text-4xl">Why Expand to KSA?</h1>
        <p className="text-center w-[40%] text-DarkGray">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form
        </p>
      </div>
      <div className="bg-white p-[30px_10px_40px_10px]">
        {cardsData.map(({ icon, title, prices }, index) => (
          <div className="">
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyExpandation;
