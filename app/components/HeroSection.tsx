// import React from "react";
// import Image from "next/image";
// import { assets } from "@/assets/assets";

// interface HeroSectionProps {
//   title: string;
//   subTitle?: string;
//   isHome?: boolean;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   title,
//   subTitle,
//   isHome = false,
// }) => {
//   return (
//     <div
//       className={`w-full relative overflow-hidden ${
//         isHome ? "h-[calc(100vh-72px)]" : "h-[400px] md:h-[500px]"
//       }`}
//     >
//       {isHome ? (
//         <>
//           <div className="block md:hidden">
//             <Image
//               src={assets.hero_section_phone}
//               alt="Hero Background"
//               fill
//               quality={100}
//               priority
//             />
//           </div>
//           <div className="hidden md:block">
//             <Image
//               src={assets.hero_section_home}
//               alt="Hero Background"
//               fill
//               quality={100}
//               priority
//             />
//           </div>
//         </>
//       ) : (
//         <Image
//           src={assets.hero_section}
//           alt="Hero Background"
//           fill
//           quality={100}
//           priority
//         />
//       )}

//       <div className="absolute inset-0 bg-opacity-40 pointer-events-none" />

//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
//         <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//           {title}
//         </h1>
//         {subTitle && (
//           <h3 className="text-xl md:text-2xl font-semibold mt-2 drop-shadow-lg">
//             {subTitle}
//           </h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <div
      className={`w-full relative overflow-hidden ${
        isHome ? "h-[calc(100vh-72px)]" : "h-[400px] md:h-[500px]"
      }`}
    >
      {isHome ? (
        <>
          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="block md:hidden absolute inset-0"
          >
            <Image
              src={assets.hero_section_phone}
              alt="Hero Background Mobile"
              fill
              quality={100}
              priority
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute inset-0"
          >
            <Image
              src={assets.hero_section_home}
              alt="Hero Background Desktop"
              fill
              quality={100}
              priority
            />
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={assets.hero_section}
            alt="Hero Background"
            fill
            quality={100}
            priority
          />
        </motion.div>
      )}


      <div className="absolute inset-0 bg-opacity-40 pointer-events-none" />


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {title}
        </h1>
        {subTitle && (
          <h3 className="text-xl md:text-2xl font-semibold mt-2 drop-shadow-lg">
            {subTitle}
          </h3>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;
