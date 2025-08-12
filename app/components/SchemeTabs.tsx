"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const schemes = [
  {
    id: 1,
    title: "MINORITY DEPARTMENT",
    description:
      "अल्पसंख्यक कार्य मंत्रालय का गठन सामाजिक न्याय एवं अधिकारिता मंत्रालय में से 29 जनवरी, 2006 को अधिसूचित अल्पसंख्यक समुदायों अर्थात् मुस्लिम, ईसाई, बौद्घ, सिक्ख, पारसियों तथा जैनों से संबंधित मामलों पर बल देने के लिए किया गया था...",
    thumbnail: assets.minority,
    link: "https://minorityaffairs.gov.in/",
    type: "central",
  },
  {
    id: 2,
    title: "POST SAVING SCHEME",
    description:
      "भारतीय डाक पेमेंट बैंक बचत और चालू खाते, धन हस्तांतरण और प्रत्यक्ष लाभ अंतरण सेवाओं के साथ-साथ बिल/उपयोगिता भुगतान सेवा प्रदान करता है...",
    thumbnail: assets.post_saving,
    link: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
    type: "central",
  },
  {
    id: 3,
    title: "MSME SCHEME",
    description:
      "Manufacturing Enterprises - the enterprises engaged in the manufacture or production of goods pertaining to any industry specified...",
    thumbnail: assets.msme,
    link: "https://msme.gov.in/",
    type: "central",
  },
  {
    id: 4,
    title: "SWACHH BHARAT MISSION",
    description:
      "सर्वव्यापी स्वच्छता के कवरेज के प्रयासों में तेजी लाने के लिए और स्वच्छता पर बल देने के लिए प्रधानमंत्री श्री नरेन्द्र मोदी जी ने इस मिशन की शुरुआत की...",
    thumbnail: assets.swachh_bharat,
    link: "https://swachhbharatmission.gov.in/",
    type: "central",
  },
  {
    id: 5,
    title: "JAN AROGYA YOJANA",
    description:
      "On the landing page of AM I Eligible Portal, the user has to enter an active mobile number (to receive an OTP) and enter the Captcha code...",
    thumbnail: assets.jan_arogya,
    link: "https://pmjay.gov.in/",
    type: "state",
  },
  {
    id: 6,
    title: "SMART CITY MISSION",
    description:
      "January 2018, 99 cities have been selected to be upgraded as part of the Smart Cities Mission after they defeated other cities in competition...",
    thumbnail: assets.smart_city,
    link: "https://smartcities.gov.in/",
    type: "state",
  },
];

const tabs = ["All", "Central", "State"];

const SchemeTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSchemes =
    activeTab === "All"
      ? schemes
      : schemes.filter((scheme) => scheme.type === activeTab.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-full border cursor-pointer transition-all duration-300 ${
              activeTab === tab
                ? "bg-orange-500 text-white border-orange-500 shadow-md"
                : "bg-white text-orange-600 border-orange-300 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scheme Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSchemes.map((scheme) => (
          <a
            key={scheme.id}
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] bg-gray-50">
              <Image
                src={scheme.thumbnail}
                alt={scheme.title}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                {scheme.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-4 flex-1">
                {scheme.description}
              </p>
              {/* Fixed Button at Bottom */}
              <span className="text-sm text-orange-500 font-medium inline-flex items-center gap-1 hover:underline mt-auto">
                Open Scheme <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const SchemePreview = () => {
  const topThree = schemes.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent text-center mb-8">
        Featured Government Schemes
      </h1>

      {/* Preview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topThree.map((scheme) => (
          <a
            key={scheme.id}
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] bg-gray-50">
              <Image
                src={scheme.thumbnail}
                alt={scheme.title}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                {scheme.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-4 flex-1">
                {scheme.description}
              </p>
              <span className="text-sm text-orange-500 font-medium inline-flex items-center gap-1 hover:underline mt-auto">
                Open Scheme <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link href="/government">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all cursor-pointer">
            View All Schemes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SchemeTabs;
