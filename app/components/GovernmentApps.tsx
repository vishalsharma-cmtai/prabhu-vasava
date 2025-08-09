// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { assets } from "@/assets/assets";

// const links = [
//   {
//     label: "NARENDRA MODI",
//     src: assets.namo_app,
//     link: "https://www.narendramodi.in/",
//   },
//   { label: "APPLICATION", src: assets.prabhuvasava, link: "/apps" },
//   { label: "UMANG", src: assets.umang, link: "https://web.umang.gov.in/" },
//   { label: "BHIM", src: assets.bhim_app, link: "https://www.bhimupi.org.in/" },
//   {
//     label: "FACEBOOK",
//     src: assets.facebook,
//     link: "https://www.facebook.com/narendramodi",
//   },
//   {
//     label: "INSTAGRAM",
//     src: assets.instagram,
//     link: "https://www.instagram.com/narendramodi/",
//   },
//   {
//     label: "TWITTER",
//     src: assets.twitter,
//     link: "https://twitter.com/narendramodi",
//   },
//   {
//     label: "YOUTUBE",
//     src: assets.youtube,
//     link: "https://www.youtube.com/user/narendramodi",
//   },
// ];

// const GovernmentApps = () => {
//   return (
//     <main className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-24 pb-10 overflow-hidden  text-gray-900 rounded-4xl">
      
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src={assets.bgflag}
//           alt="Background Flag"
//           fill
//           className="object-cover opacity-40"
//           priority
//         />
//       </div>


//       <header className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-orange-600">
//           Government Apps
//         </h1>
//       </header>

//       <section
//         aria-label="Government App Links"
//         className="relative w-full max-w-[600px] aspect-square"
//       >
        
//         {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
//           <Image
//             src={assets.flag}
//             alt="Center Flag"
//             width={180}
//             height={180}
//             className="rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
//           />
//         </div> */}

//         {links.map(({ label, src, link }, index) => {
//           const total = links.length;
//           const angle = (index / total) * 2 * Math.PI;
//           const radius = 42; // % of width/height
//           const x = 50 + radius * Math.cos(angle);
//           const y = 50 + radius * Math.sin(angle);

//           return (
//             <Link
//               key={label}
//               href={link}
//               target={link.startsWith("http") ? "_blank" : "_self"}
//               rel="noopener noreferrer"
//               className="absolute flex flex-col items-center group z-10"
//               style={{
//                 top: `${y}%`,
//                 left: `${x}%`,
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <Image
//                 src={src}
//                 alt={label}
//                 width={60}
//                 height={60}
//                 className="rounded-full shadow-md hover:scale-110 hover:shadow-orange-300 transition-all duration-300"
//               />
//               <span className="mt-2 text-xs font-semibold text-center text-gray-700 group-hover:text-orange-600 w-24 truncate">
//                 {label}
//               </span>
//             </Link>
//           );
//         })}
//       </section>
//     </main>
//   );
// };

// export default GovernmentApps;


"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const links = [
  {
    label: "NARENDRA MODI",
    src: assets.namo_app,
    link: "https://www.narendramodi.in/",
  },
  { label: "APPLICATION", src: assets.prabhuvasava, link: "/apps" },
  { label: "UMANG", src: assets.umang, link: "https://web.umang.gov.in/" },
  { label: "BHIM", src: assets.bhim_app, link: "https://www.bhimupi.org.in/" },
  {
    label: "FACEBOOK",
    src: assets.facebook,
    link: "https://www.facebook.com/narendramodi",
  },
  {
    label: "INSTAGRAM",
    src: assets.instagram,
    link: "https://www.instagram.com/narendramodi/",
  },
  {
    label: "TWITTER",
    src: assets.twitter,
    link: "https://twitter.com/narendramodi",
  },
  {
    label: "YOUTUBE",
    src: assets.youtube,
    link: "https://www.youtube.com/user/narendramodi",
  },
];

const GovernmentApps = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-24 pb-10 overflow-hidden text-gray-900">
      {/* Background flag full screen */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={assets.bgflag}
          alt="Background Flag"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-orange-600">
          Government Apps
        </h1>
      </header>

      {/* Apps in two vertical rows inside max-w-7xl */}
      <section
        aria-label="Government App Links"
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-7xl z-10"
      >
        {links.map(({ label, src, link }) => (
          <Link
            key={label}
            href={link}
            target={link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <Image
              src={src}
              alt={label}
              width={100} // Increased size
              height={100}
              className="rounded-full shadow-md hover:scale-110 hover:shadow-orange-300 transition-all duration-300"
            />
            <span className="mt-3 text-sm font-semibold text-center text-gray-700 group-hover:text-orange-600">
              {label}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default GovernmentApps;

