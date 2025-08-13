import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

interface HeroSectionProps {
  title: string;
  subTitle?: string;
  isHome?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subTitle,
  isHome = false,
}) => {
  return (
    <div className="w-full h-screen relative overflow-hidden ">
      {isHome ? (
        <video
          src="/hero-section.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={assets.hero_section}
          alt="Hero Background"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-opacity-40 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {title}
        </h1>
        {subTitle && (
          <h3 className="text-xl md:text-2xl font-semibold mt-2 drop-shadow-lg">
            {subTitle}
          </h3>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
