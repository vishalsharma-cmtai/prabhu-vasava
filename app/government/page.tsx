"use client";
import React from "react";
import SchemeTabs from "../components/SchemeTabs";
import HeroSection from "../components/HeroSection";

const App = () => {
  return (
    <div>
      <HeroSection
        title="Government Schemes"
        subTitle="Home / Government Schemes"
      />
      <SchemeTabs />
    </div>
  );
};

export default App;
