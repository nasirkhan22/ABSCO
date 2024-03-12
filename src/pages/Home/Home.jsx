import React from "react";
import ClientsSection from "@components/Home/ClientsSection";
import OurServices from "@components/Home/OurServices";
import HomePage from "@components/Home/HomePage";
import WhoWeAre from "../../components/Home/WhoWeAre";
import BgImage from "@assets/images/background.png";

function Home() {
  return (
    <div>
      {/* <HomePage /> */}
      <ClientsSection />
      <OurServices />
      <WhoWeAre />
    </div >
  );
}

export default Home;
