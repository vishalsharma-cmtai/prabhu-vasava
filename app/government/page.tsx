"use client";
import React from "react";
import SchemeTabs from "../components/SchemeTabs";
import HeroSection from "../components/HeroSection";
import GovernmentApps from "../components/GovernmentApps";

const App = () => {
  return (
    <div>
      <HeroSection
        title="Government Schemes"
        subTitle="Home / Government Schemes"
      />
      <SchemeTabs />
      <div className="mb-10">
      <GovernmentApps />
      </div>
    </div>
  );
};

export default App;
