import React from "react";
import ClientsSection from "@components/OurClients/ClientsSection";
import OurServices from "@components/OurServices/OurServices";
import HomePage from "../../components/Home/HomePage";

function Home() {
  return (
    <div className="">
      <HomePage />
      <ClientsSection />
      <OurServices />
    </div>
  );
}

export default Home;
