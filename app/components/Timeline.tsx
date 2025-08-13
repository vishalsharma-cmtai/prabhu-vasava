"use client";

import { useState } from "react";

interface TimelineItem {
  title: string;
  description: string;
}

type TimelineData = {
  [key: string]: TimelineItem[];
};

const tabs = [
  "Personal Information",
  "Political Timeline",
  "Member",
  "Cooperative & Education Field",
  "Social & Cultural Activity",
] as const;

const data: TimelineData = {
  "Personal Information": [
    { title: "Father's Name", description: "Nagarbhai Diveliyabhai Vasava" },
    {
      title: "Permanent Address",
      description:
        "140-Gopalnagar Society Mandvi Ta-Mandvi, Dist-Surat, 394160 (Gujarat)",
    },
    {
      title: "Delhi Address",
      description: "17 Ravi Shankar Shukla Lane, New Delhi K.G. Marg New Delhi",
    },
    { title: "Cast", description: "Scheduled Tribe (S.T)" },
    { title: "Birth Date", description: "1st March" },
    { title: "Education Qualification", description: "Mechanical Engineer" },
  ],

  "Political Timeline": [
    {
      title: "2016",
      description:
        "He became the member of Standing Committee on Science & Technology and Environment & Forests on October 18, 2016",
    },
    {
      title: "2014 - 2016",
      description:
        "Member, Standing Committee on Food, Consumer Affairs and Public Distribution. (1 Sept 2014 - 18 Oct. 2016).",
    },
    {
      title: "2014",
      description:
        "In Feb 2014, he quit from Congress Party and Joined BJP. In May 2014, he was elected to 16th Lok Sabha from Bardoli constituency. He defeated Chaudhari Tusharbhai Amarsinhbhai of Congress.",
    },
    {
      title: "2012",
      description:
        "He was re-elected as Member of Gujarat Legislative Assembly, but this time from Mandvi Assembly seat. He defeated Vasava Hemalataben Maheshbhai of BJP.",
    },
    {
      title: "2007",
      description:
        "Vasava Parbhubhai Nagarbhai (Congress Candidate) was elected as Member of Gujarat Legislative Assembly from Songadh Assembly seat. He defeated Chaudhry Vijaybhai Nasvanbhai of BJP.",
    },
  ],

  Member: [
    { title: "MP", description: "17th Lok Sabha, 23-Bardoli (Gujarat)" },
    { title: "MP", description: "16th Lok Sabha, 23-Bardoli (Gujarat)" },
    {
      title: "MLA",
      description: "157-Mandvi (12th & 13th Gujarat Assembly)",
    },
  ],

  "Cooperative & Education Field": [
    {
      title: "Director",
      description: "The Surat District Co-Operative Bank Ltd., Surat",
    },
    {
      title: "President",
      description:
        "APMC Mandvi, Navchetan Kelavani Mandal Sathavav, Nagarbhai Vasava Smruti Trust, Cricket Association Surat Rural, Devgadh Vibhag Jangal Kamdar Sahkari Mandali",
    },
  ],

  "Social & Cultural Activity": [
    {
      title: "Upliftment",
      description:
        "Working for the upliftment of Tribals and downtrodden sections of society.",
    },
    {
      title: "Culture",
      description:
        "Actively engaged in social & cultural development activities.",
    },
  ],
};

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(
    "Personal Information"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-2xl p-6 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-2xl text-md font-semibold border cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              activeTab === tab
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-xl scale-105"
                : "bg-white text-orange-600 border-orange-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-full" />

        {data[activeTab].map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="relative w-full flex justify-between items-start py-6"
            >
              <div className={`w-1/2 px-4 ${isLeft ? "text-right" : ""}`}>
                {isLeft && (
                  <div className="inline-block max-w-md bg-gradient-to-r from-orange-400 to-red-400 shadow-lg p-4 rounded-lg border border-orange-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <p className="text-md text-white/90 mt-1">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
                <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
              </div>

              {/* Right Side */}
              <div className={`w-1/2 px-4 ${!isLeft ? "text-left" : ""}`}>
                {!isLeft && (
                  <div className="inline-block max-w-md bg-gradient-to-r from-orange-400 to-red-400 shadow-lg p-4 rounded-lg border border-orange-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <p className="text-md text-white/90 mt-1">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;
