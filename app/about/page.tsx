// "use client";
// import React from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import TimelineSection from "../components/Timeline";
// import HeroSection from "../components/HeroSection";

// const About = () => {
//   return (
//     <>
//       <HeroSection title="About us" />
//       <div className="max-w-7xl mx-auto px-4 py-10 bg-white">
//         <h1 className="text-4xl font-bold text-orange-600 text-center mb-10">
//           {/* About Page */}
//         </h1>

//         <div className="flex flex-col md:flex-row items-start gap-10">
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <Image
//               src={assets.about_us_image}
//               alt="About Us"
//               width={400}
//               height={300}
//               className="rounded-xl shadow-xl object-cover"
//             />
//           </div>

//           <div className="w-full md:w-1/2 space-y-4 text-gray-800">
//             <h4 className="text-lg font-semibold text-orange-600">
//               Know more about
//             </h4>

//             <h1 className="text-3xl font-bold">PRABHU N. VASAVA</h1>
//             <h3 className="text-xl font-medium text-orange-500">
//               Member Of Parliament <br />
//               23 - Bardoli
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Myself Prabhu Vasava, son of Late Nagarbhai Diveliyabhai Vasava
//               from Mandvi - Surat.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               I represent as a Member of Parliament for the 23 Bardoli Lok Sabha
//               constituency (16th and 17th) of Gujarat State from the largest
//               political party, Bharatiya Janata Party.
//             </p>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-orange-600 mb-2">
//                 Follow Us
//               </h4>
//               <div className="flex gap-4 text-orange-500">
//                 <Link
//                   href="https://facebook.com"
//                   target="_blank"
//                   aria-label="Facebook"
//                 >
//                   <Facebook className="hover:text-orange-600 transition" />
//                 </Link>
//                 <Link
//                   href="https://instagram.com"
//                   target="_blank"
//                   aria-label="Instagram"
//                 >
//                   <Instagram className="hover:text-orange-600 transition" />
//                 </Link>
//                 <Link
//                   href="https://twitter.com"
//                   target="_blank"
//                   aria-label="Twitter"
//                 >
//                   <Twitter className="hover:text-orange-600 transition" />
//                 </Link>
//                 <Link
//                   href="https://youtube.com"
//                   target="_blank"
//                   aria-label="YouTube"
//                 >
//                   <Youtube className="hover:text-orange-600 transition" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <h5 className="text-orange-600 font-semibold text-lg">
//             Know more about
//           </h5>
//           <h1 className="text-3xl font-bold mb-2">Our Story</h1>
//           <p className="text-gray-700">
//             Together we the people achieve more than any single person could
//             ever do alone.
//           </p>
//         </div>

//         <TimelineSection />
//       </div>
//     </>
//   );
// };

// export default About;

"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import TimelineSection from "../components/Timeline";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <>
      <HeroSection title="About us" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image with glowing gradient rings */}
            <div className="relative group w-full md:w-1/2 flex justify-center">
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div> */}
              {/* <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-30 group-hover:opacity-40 transition-all duration-500 animate-pulse delay-75"></div> */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-orange-200 group-hover:ring-orange-300 transition-all duration-500 group-hover:scale-105">
                <Image
                  src={assets.about_us_image}
                  alt="About Us"
                  width={500}
                  height={500}
                  className="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Know more about
              </h4>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent animate-gradient-x">
                  PRABHU N.
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  VASAVA
                </span>
              </h1>
              <h3 className="text-2xl text-orange-600 font-bold leading-relaxed">
                Member Of Parliament
                <br />
                <span className="text-3xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  23 - Bardoli
                </span>
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                Myself Prabhu Vasava, son of Late Nagarbhai Diveliyabhai Vasava
                from Mandvi - Surat.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                I represent as a Member of Parliament for the{" "}
                <span className="font-semibold text-orange-600">
                  23 Bardoli Lok Sabha constituency
                </span>{" "}
                (16th and 17th) of Gujarat State from the Bharatiya Janata Party.
              </p>

              {/* Social Icons */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, color: "hover:text-blue-600", bg: "hover:bg-blue-50" },
                    { Icon: Instagram, color: "hover:text-pink-600", bg: "hover:bg-pink-50" },
                    { Icon: Twitter, color: "hover:text-blue-400", bg: "hover:bg-blue-50" },
                    { Icon: Youtube, color: "hover:text-red-600", bg: "hover:bg-red-50" },
                  ].map(({ Icon, color, bg }, i) => (
                    <Link key={i} href="#" target="_blank" aria-label={`Social ${i}`}>
                      <div
                        className={`p-3 rounded-full bg-orange-100 text-orange-600 ${color} ${bg} transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="mt-24 text-center">
            <h5 className="text-orange-600 font-semibold text-lg">Know more about</h5>
            <h1 className="text-3xl font-bold mb-2">Our Story</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Together we the people achieve more than any single person could ever do alone.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <TimelineSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

