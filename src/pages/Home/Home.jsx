import React from "react";
import ClientsSection from "@components/Home/ClientsSection";
import OurServices from "@components/Home/OurServices";
import WhoWeAre from "@components/Home/WhoWeAre";
import CompanyExpandation from "@components/Home/CompanyExpandation";

function Home() {
  return (
    <div>
      <ClientsSection />
      <OurServices />
      <WhoWeAre />
      <CompanyExpandation />
    </div>
  );
}

export default Home;
