import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <div className="w-full h-64 md:h-[500px] relative">
      <Image
        src={assets.hero_section}
        alt="Hero Background"
        fill
        quality={100}
        className=""
        priority
      />

      <div className="absolute inset-0 bg-opacity-50" />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
