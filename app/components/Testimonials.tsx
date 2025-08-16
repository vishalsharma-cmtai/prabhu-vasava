// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { assets } from "@/assets/assets";

// const testimonials = [
//   {
//     name: "राहुल शर्मा",
//     role: "किसान",
//     image: assets.random_people3,
//     rating: 5,
//     title: "बहुत ही अच्छा अनुभव रहा",
//     text: "मैंने प्रभु वसावा जी से मिलने के लिए ऑनलाइन अपॉइंटमेंट बुक किया था। प्रक्रिया आसान और तेज़ थी। मिलने पर उन्होंने मेरी समस्या ध्यान से सुनी और तुरंत समाधान का आश्वासन दिया।",
//   },
//   {
//     name: "सोनिया पटेल",
//     role: "शिक्षिका",
//     image: assets.random_people1,
//     rating: 4,
//     title: "सुविधाजनक और समय पर सेवा",
//     text: "अपॉइंटमेंट सिस्टम के जरिए MLA साहब से समय पर मुलाकात हुई। स्टाफ भी बहुत सहयोगी था और किसी तरह की परेशानी नहीं हुई।",
//   },
//   {
//     name: "अमित वर्मा",
//     role: "व्यापारी",
//     image: assets.random_people2,
//     rating: 5,
//     title: "जनता की चिंता करने वाले नेता",
//     text: "मैं अपनी खेती से जुड़ी समस्या लेकर गया था। प्रभु वसावा जी ने तुरंत अधिकारियों से बात करके मदद करने का भरोसा दिया। उनका व्यवहार बहुत ही विनम्र है।",
//   },
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideInterval = useRef<number | undefined>(undefined);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//     resetTimer();
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//     resetTimer();
//   };

//   const startTimer = () => {
//     slideInterval.current = window.setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 4000);
//   };

//   const resetTimer = () => {
//     if (slideInterval.current !== undefined)
//       clearInterval(slideInterval.current);
//     startTimer();
//   };

//   useEffect(() => {
//     startTimer();
//     return () => {
//       if (slideInterval.current !== undefined) {
//         clearInterval(slideInterval.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="py-10 px-4 ">
//       <h1 className="text-4xl text-center mb-10 md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
//         Reviews from Public
//       </h1>

//       <div className="relative max-w-4xl mx-auto overflow-hidden">
//         {/* Slides */}
//         <div
//           className="flex transition-transform duration-700 ease-in-out items-center"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {testimonials.map((t, idx) => (
//             <div
//               key={idx}
//               className="w-full flex-shrink-0 px-4 flex justify-center"
//             >
//               <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center border border-orange-100 transform hover:scale-105 transition duration-300">
//                 <div className="flex items-center justify-center mb-4">
//                   <div className="w-24 h-24 rounded-full overflow-hidden">
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       width={96}
//                       height={96}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
//                 <p className="text-sm text-gray-500">{t.role}</p>
//                 <div className="flex justify-center mt-2 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className={
//                         i < t.rating
//                           ? "text-orange-500 fill-orange-500"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                 </div>
//                 <h4 className="font-bold text-gray-800 mb-2">{t.title}</h4>
//                 <p className="text-gray-600 text-sm">{t.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 transition"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 transition"
//         >
//           <ChevronRight size={24} />
//         </button>

//         <div className="flex justify-center mt-6 space-x-2">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setCurrentIndex(i);
//                 resetTimer();
//               }}
//               className={`w-3 h-3 rounded-full transition ${
//                 i === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { assets } from "@/assets/assets";

const testimonials = [
  {
    name: "राहुल शर्मा",
    role: "किसान",
    image: assets.random_people3,
    rating: 5,
    title: "बहुत ही अच्छा अनुभव रहा",
    text: "मैंने प्रभु वसावा जी से मिलने के लिए ऑनलाइन अपॉइंटमेंट बुक किया था। प्रक्रिया आसान और तेज़ थी। मिलने पर उन्होंने मेरी समस्या ध्यान से सुनी और तुरंत समाधान का आश्वासन दिया।",
  },
  {
    name: "सोनिया पटेल",
    role: "शिक्षिका",
    image: assets.random_people1,
    rating: 4,
    title: "सुविधाजनक और समय पर सेवा",
    text: "अपॉइंटमेंट सिस्टम के जरिए MLA साहब से समय पर मुलाकात हुई। स्टाफ भी बहुत सहयोगी था और किसी तरह की परेशानी नहीं हुई।",
  },
  {
    name: "अमित वर्मा",
    role: "व्यापारी",
    image: assets.random_people2,
    rating: 5,
    title: "जनता की चिंता करने वाले नेता",
    text: "मैं अपनी खेती से जुड़ी समस्या लेकर गया था। प्रभु वसावा जी ने तुरंत अधिकारियों से बात करके मदद करने का भरोसा दिया। उनका व्यवहार बहुत ही विनम्र है।",
  },
  {
    name: "नेहा सिंह",
    role: "छात्रा",
    image: assets.random_people4,
    rating: 5,
    title: "बहुत सहयोगी",
    text: "मेरे कॉलेज की समस्या पर तुरंत और प्रभावी एक्शन लिया गया, इसके लिए मैं हृदय से धन्यवाद देती हूँ।",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1); // start at 1 because of clones
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [transition, setTransition] = useState(true);
  const slideInterval = useRef<number | undefined>(undefined);

  const clonedSlides = [
    testimonials[testimonials.length - 1], // last as first clone
    ...testimonials,
    testimonials[0], // first as last clone
  ];

  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const startTimer = () => {
    slideInterval.current = window.setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const resetTimer = () => {
    if (slideInterval.current !== undefined)
      clearInterval(slideInterval.current);
    startTimer();
  };

  useEffect(() => {
    slideInterval.current = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => {
      if (slideInterval.current !== undefined) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentIndex === clonedSlides.length - slidesPerView) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1); // jump back to first real slide
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(clonedSlides.length - slidesPerView - 1);
      }, 500);
    }
  }, [currentIndex, slidesPerView, clonedSlides.length]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50); // re-enable transition after jump
    }
  }, [transition]);

  return (
    <section className="py-10 px-4">
      <h1 className="text-4xl text-center mb-10 md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
        Reviews from Public
      </h1>

      <div className="relative max-w-7xl mx-auto flex items-center">
        <button
          onClick={() => {
            prevSlide();
            resetTimer();
          }}
          className="bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 transition z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden flex-1 px-4">
          <div
            className={`flex ${
              transition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / slidesPerView
              }%)`,
            }}
          >
            {clonedSlides.map((t, idx) => (
              <div
                key={idx}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-3 text-center border border-orange-100 transform hover:scale-105 transition duration-300 h-[400px] flex flex-col justify-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <div className="flex justify-center mt-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < t.rating
                            ? "text-orange-500 fill-orange-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{t.title}</h4>
                  <p className="text-gray-600 text-sm">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            nextSlide();
            resetTimer();
          }}
          className="bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
