// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { assets } from '@/assets/assets';
// import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
// import GovernmentApps from '../components/GovernmentApps';
// import  {SchemePreview}  from '../components/SchemeTabs';
// import { InterviewVideosPreview } from '../components/InterviewVideos';

// const Home = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <section className="flex flex-col md:flex-row items-center gap-12">

//         {/* Left Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="w-full max-w-md rounded-xl overflow-hidden relative shadow-xl hover:scale-105 transition-transform duration-500">
//             <Image
//               src={assets.about_us_image}
//               alt="About Us"
//               width={500}
//               height={500}
//               className="rounded-lg object-contain"
//               priority
//             />
//           </div>
//         </div>

        
//         <div className="w-full md:w-1/2 space-y-5 text-gray-800">
//           <h4 className="text-lg font-semibold text-orange-600">Know more about</h4>

//           <h1 className="text-3xl md:text-4xl font-bold">PRABHU N. VASAVA</h1>

//           <h3 className="text-xl text-orange-500 font-medium leading-snug">
//             Member Of Parliament <br />
//             23 - Bardoli
//           </h3>

//           <p className="leading-relaxed text-gray-700">
//             Myself Prabhu Vasava, son of Late Nagarbhai Diveliyabhai Vasava from Mandvi - Surat.
//           </p>
//           <p className="leading-relaxed text-gray-700">
//             I represent the 23 Bardoli Lok Sabha constituency (16th and 17th) of Gujarat State from the
//             Bharatiya Janata Party.
//           </p>

//           <div className="mt-6 space-y-4">
//             <h4 className="text-lg font-semibold text-orange-600">Follow Us</h4>
//             <div className="flex gap-4 text-orange-500">
//               {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
//                 <Link key={i} href="#" target="_blank" aria-label={`Social ${i}`}>
//                   <Icon className="hover:text-orange-600 transition-colors duration-300" />
//                 </Link>
//               ))}
//             </div>

//             <Link href="/about">
//               <button className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white cursor-pointer font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
//                 Read More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

      
//       <div className="mt-20">
//         <GovernmentApps />
//       </div>
//       <div>
//         <InterviewVideosPreview />
//       </div>
//       <div>
//         <SchemePreview />
//       </div>
//     </div>
//   );
// };

// export default Home;

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
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
} from 'lucide-react';
import GovernmentApps from '../components/GovernmentApps';
import { SchemePreview } from '../components/SchemeTabs';
import { InterviewVideosPreview } from '../components/InterviewVideos';

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
    { icon: Users, number: '50K+', label: 'Citizens Served', color: 'text-orange-500' },
    { icon: Heart, number: '25+', label: 'Community Programs', color: 'text-red-500' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform rotate-12 scale-150"></div> */}
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 py-12">
            {/* Left Image Section */}
            <div
              className={`w-full lg:w-1/2 flex justify-center transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-30 group-hover:opacity-40 transition-all duration-500 animate-pulse delay-75"></div>

                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-orange-200 group-hover:ring-orange-300 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={assets.about_us_image}
                    alt="Prabhu N. Vasava - MP Bardoli"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                    <span className="text-sm font-bold">MP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div
              className={`w-full lg:w-1/2 space-y-8 mx-4 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="space-y-4">
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

                <div className="relative">
                  <h3 className="text-2xl text-orange-600 font-bold leading-relaxed">
                    Member Of Parliament
                    <br />
                    <span className="text-3xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      23 - Bardoli
                    </span>
                  </h3>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-expand-width"></div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p className="hover:text-gray-900 transition-colors duration-300">
                  Myself Prabhu Vasava, son of Late Nagarbhai Diveliyabhai Vasava from Mandvi - Surat.
                </p>
                <p className="hover:text-gray-900 transition-colors duration-300">
                  I represent the{' '}
                  <span className="font-semibold text-orange-600">
                    23 Bardoli Lok Sabha constituency
                  </span>{' '}
                  (16th and 17th) of Gujarat State from the Bharatiya Janata Party.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 px-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 ${
                      activeCounter === index
                        ? 'ring-2 ring-orange-400 bg-gradient-to-br from-orange-50 to-white'
                        : ''
                    }`}
                  >
                    <stat.icon className={`mx-auto mb-2 w-8 h-8 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Media & CTA */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">Connect With Us</h4>

                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
                    { Icon: Instagram, color: 'hover:text-pink-600', bg: 'hover:bg-pink-50' },
                    { Icon: Twitter, color: 'hover:text-blue-400', bg: 'hover:bg-blue-50' },
                    { Icon: Youtube, color: 'hover:text-red-600', bg: 'hover:bg-red-50' },
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

                <Link href="/about">
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
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

        {/* Section Previews */}
        <div className="space-y-20 mt-24">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <GovernmentApps />
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <InterviewVideosPreview />
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <SchemePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
