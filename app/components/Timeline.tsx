// "use client";

// import { useState } from "react";

// interface TimelineItem {
//   title: string;
//   description: string;
// }

// type TimelineData = {
//   [key: string]: TimelineItem[];
// };

// const tabs = [
//   "Personal Information",
//   "Political Timeline",
//   "Member",
//   "Cooperative & Education Field",
//   "Social & Cultural Activity",
// ] as const;

// const data: TimelineData = {
//   "Personal Information": [
//     { title: "Father's Name", description: "Nagarbhai Diveliyabhai Vasava" },
//     {
//       title: "Permanent Address",
//       description:
//         "140-Gopalnagar Society Mandvi Ta-Mandvi, Dist-Surat, 394160 (Gujarat)",
//     },
//     {
//       title: "Delhi Address",
//       description: "17 Ravi Shankar Shukla Lane, New Delhi K.G. Marg New Delhi",
//     },
//     { title: "Cast", description: "Scheduled Tribe (S.T)" },
//     { title: "Birth Date", description: "1st March" },
//     { title: "Education Qualification", description: "Mechanical Engineer" },
//   ],

//   "Political Timeline": [
//     {
//       title: "2016",
//       description:
//         "Member of Standing Committee on Science & Technology and Environment & Forests.",
//     },
//     {
//       title: "2014 - 2016",
//       description:
//         "Member, Standing Committee on Food, Consumer Affairs and Public Distribution.",
//     },
//     {
//       title: "2014",
//       description:
//         "Joined BJP in Feb. Elected to 16th Lok Sabha defeating Congress candidate.",
//     },
//     {
//       title: "2012",
//       description:
//         "Re-elected as MLA from Mandvi Assembly seat. Defeated BJP candidate.",
//     },
//     {
//       title: "2007",
//       description:
//         "Elected as MLA from Songadh Assembly seat as a Congress candidate.",
//     },
//   ],

//   Member: [
//     { title: "MP", description: "17th Lok Sabha, 23-Bardoli (Gujarat)" },
//     { title: "MP", description: "16th Lok Sabha, 23-Bardoli (Gujarat)" },
//     {
//       title: "MLA",
//       description: "157-Mandvi (12th & 13th Gujarat Assembly)",
//     },
//   ],

//   "Cooperative & Education Field": [
//     {
//       title: "Director",
//       description: "The Surat District Co-Operative Bank Ltd., Surat",
//     },
//     {
//       title: "President",
//       description:
//         "APMC Mandvi, Navchetan Kelavani Mandal Sathavav, Nagarbhai Vasava Smruti Trust, Cricket Association Surat Rural, Devgadh Vibhag Jangal Kamdar Sahkari Mandali",
//     },
//   ],

//   "Social & Cultural Activity": [
//     {
//       title: "Upliftment",
//       description:
//         "Working for the upliftment of Tribals and downtrodden sections of society.",
//     },
//     {
//       title: "Culture",
//       description:
//         "Actively engaged in social & cultural development activities.",
//     },
//   ],
// };

// const TimelineSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(
//     "Personal Information"
//   );

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       <div className="flex flex-wrap justify-center gap-4 mb-12 bg-orange-100 rounded p-6 ">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-xl text-sm font-semibold border cursor-pointer transition-all duration-300 ${
//               activeTab === tab
//                 ? "bg-orange-500 text-white border-orange-500 shadow"
//                 : "bg-white text-orange-600 border-orange-300 hover:bg-orange-500 hover:text-white"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="relative flex flex-col items-center">
//         <div className="absolute w-1 bg-orange-200 h-full left-1/2 transform -translate-x-1/2 z-0" />

//         {data[activeTab].map((item, index) => {
//           const isLeft = index % 2 === 0;
//           return (
//             <div
//               key={index}
//               className="relative w-full flex justify-between items-start py-6"
//             >
//               <div className={`w-1/2 px-4 ${isLeft ? "text-right" : ""}`}>
//                 {isLeft && (
//                   <div className="inline-block max-w-md bg-orange-500 shadow-md p-4 rounded-lg border border-orange-100">
//                     <h3 className="font-bold text-black">{item.title}</h3>
//                     <p className="text-sm text-white mt-1">
//                       {item.description}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
//                 <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md" />
//               </div>

//               <div className={`w-1/2 px-4 ${!isLeft ? "text-left" : ""}`}>
//                 {!isLeft && (
//                   <div className="inline-block max-w-md bg-orange-500 shadow-md p-4 rounded-lg border border-orange-100">
//                     <h3 className="font-bold text-black">{item.title}</h3>
//                     <p className="text-sm text-white mt-1">
//                       {item.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TimelineSection;

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
        "Member of Standing Committee on Science & Technology and Environment & Forests.",
    },
    {
      title: "2014 - 2016",
      description:
        "Member, Standing Committee on Food, Consumer Affairs and Public Distribution.",
    },
    {
      title: "2014",
      description:
        "Joined BJP in Feb. Elected to 16th Lok Sabha defeating Congress candidate.",
    },
    {
      title: "2012",
      description:
        "Re-elected as MLA from Mandvi Assembly seat. Defeated BJP candidate.",
    },
    {
      title: "2007",
      description:
        "Elected as MLA from Songadh Assembly seat as a Congress candidate.",
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
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-xl p-6 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              activeTab === tab
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-xl scale-105"
                : "bg-white text-orange-600 border-orange-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-full" />

        {data[activeTab].map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="relative w-full flex justify-between items-start py-6"
            >
              {/* Left Side */}
              <div className={`w-1/2 px-4 ${isLeft ? "text-right" : ""}`}>
                {isLeft && (
                  <div className="inline-block max-w-md bg-gradient-to-r from-orange-500 to-red-500 shadow-lg p-4 rounded-lg border border-orange-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/90 mt-1">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
                <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
              </div>

              {/* Right Side */}
              <div className={`w-1/2 px-4 ${!isLeft ? "text-left" : ""}`}>
                {!isLeft && (
                  <div className="inline-block max-w-md bg-gradient-to-r from-orange-500 to-red-500 shadow-lg p-4 rounded-lg border border-orange-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/90 mt-1">
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
