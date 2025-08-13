"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Users,
  Heart,
  Award,
  LucideIcon,
} from "lucide-react";
import GovernmentApps from "../components/GovernmentApps";
import { SchemePreview } from "../components/SchemeTabs";
import { InterviewVideosPreview } from "../components/InterviewVideos";
import { HomeGalleryTabs } from "../components/PhotoGallery";
import HeroSection from "../components/HeroSection";

interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
  color: string;
}

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCounter, setActiveCounter] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCounter((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats: Stat[] = [
    {
      icon: Users,
      number: "50K+",
      label: "Citizens Served",
      color: "text-orange-500",
    },
    {
      icon: Heart,
      number: "25+",
      label: "Community Programs",
      color: "text-red-500",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-amber-500",
    },
  ];

  return (
    <>
      <HeroSection title="" isHome />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform rotate-12 scale-150"></div> */}
            </div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 py-12">
              <div
                className={`w-full lg:w-1/2 flex justify-center transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 animate-pulse delay-75"></div>

                  {/* portrait card: taller than wide, rounded-2xl, keep ring & hover */}
                  <div className="relative w-64 h-[22rem] sm:w-72 sm:h-[26rem] md:w-80 md:h-[30rem] lg:w-[28rem] lg:h-[36rem] overflow-hidden shadow-2xl ring-4 ring-orange-200 group-hover:ring-orange-300 transition-all duration-500 group-hover:scale-105 rounded-2xl">
                    <Image
                      src={assets.about_us_image}
                      alt="Prabhu N. Vasava - MP Bardoli"
                      width={900}
                      height={1100}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-[46%] space-y-1 mx-2 transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                    Know more about
                  </h2>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent animate-gradient-x">
                      PRABHU N. VASAVA
                    </span>
                  </h1>
                  <div className="relative">
                    <h3 className="text-2xl text-orange-600 font-bold leading-relaxed">
                      Member Of Parliament
                      <br />
                      <span className="text-2xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        23 - Bardoli
                      </span>
                    </h3>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-expand-width"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2 text-gray-700 text-lg leading-relaxed">
                  <p className="hover:text-gray-900 transition-colors duration-300">
                    Myself Prabhu Vasava, son of Late Nagarbhai Diveliyabhai
                    Vasava from Mandvi - Surat.
                  </p>
                  <p className="hover:text-gray-900 transition-colors duration-300">
                    I represent the{" "}
                    <span className="font-semibold text-orange-600">
                      23 Bardoli Lok Sabha constituency
                    </span>{" "}
                    (16th and 17th) of Gujarat State from the Bharatiya Janata
                    Party.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-2 px-2 mb-2">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center p-2 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 ${
                        activeCounter === index
                          ? "ring-2 ring-orange-400 bg-gradient-to-br from-orange-50 to-white"
                          : ""
                      }`}
                    >
                      <stat.icon
                        className={`mx-auto mb-2 w-8 h-8 ${stat.color}`}
                      />
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media & CTA */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    {[
                      {
                        Icon: Facebook,
                        color: "hover:text-blue-600",
                        bg: "hover:bg-blue-50",
                        link: "https://www.facebook.com/prabhunvasava/",
                      },
                      {
                        Icon: Instagram,
                        color: "hover:text-pink-600",
                        bg: "hover:bg-pink-50",
                        link: "https://www.instagram.com/prabhunvasava/",
                      },
                      {
                        Icon: Twitter,
                        color: "hover:text-blue-400",
                        bg: "hover:bg-blue-50",
                        link: "https://x.com/prabhunvasava?s=09",
                      },
                      {
                        Icon: Youtube,
                        color: "hover:text-red-600",
                        bg: "hover:bg-red-50",
                        link: "https://www.youtube.com/@prabhubhain.vasava",
                      },
                    ].map(({ Icon, color, bg, link }, i) => (
                      <Link
                        key={i}
                        href={link}
                        target="_blank"
                        aria-label={`Social ${i}`}
                      >
                        <div
                          className={`p-3 rounded-full bg-orange-100 text-orange-600 ${color} ${bg} transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link href="/about">
                    <button className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="space-y-2">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <GovernmentApps />
            </div>

            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <InterviewVideosPreview />
            </div>

            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <SchemePreview />
            </div>

            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <HomeGalleryTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
