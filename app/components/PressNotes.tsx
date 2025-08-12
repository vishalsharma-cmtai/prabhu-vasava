"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const pressNotes = [
  {
    title: "માંડવી તાલુકાના જાખલા ગામેથી સાંસદ પ્રભુભાઈ...",
    src: assets.press01,
  },
  {
    title:
      "બારડોલી લોકસભાના માંગરોળ તાલુકાના કંટવા ગામના વિધાર્થીને ભારત લાવવાના શક્ય એટલા પ્રયત્નો હાથ ધર્યા...",
    src: assets.press02,
  },
  {
    title:
      "આદરણીય પ્રધાનમંત્રીશ્રી @narendramodi સાહેબના જન્મદિવસના ઉપલક્ષમાં...",
    src: assets.press03,
  },
  {
    title: "માંડવી હોસ્પિટલ દ્વારા દિવ્યાંગજનો માટે પરીક્ષણ શિબિરનું આયોજન...",
    src: assets.press04,
  },
  {
    title:
      "विकलांगता प्रमाणन के उद्देश्य से चिकित्सा शिबिर का आयोजन किया गया।...",
    src: assets.press05,
  },
  {
    title: "સરકારી હોસ્પિટલ ખાતે દિવ્યાંગો માટે પરીક્ષણ યોજાયો...",
    src: assets.press06,
  },
  { title: "Vijay Reli At. Mandvi...", src: assets.press07 },
  { title: "Sandesh News 16 जनवरी 2020...", src: assets.press08 },
];

export default function PressNotes() {
  const [selectedImage, setSelectedImage] = useState<
    import("next/image").StaticImageData | null
  >(null);

  return (
    <>
      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pressNotes.map((note, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
              onClick={() => setSelectedImage(note.src)}
            >
              <div className="relative w-full h-56">
                <Image
                  src={note.src}
                  alt={note.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                  {note.title}
                </h3>
              </div>
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full px-4">
              <Image
                src={selectedImage}
                alt="Full Size"
                width={1400}
                height={900}
                className="rounded-xl object-contain w-full h-auto shadow-lg"
                priority
              />
              <button
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-red-500 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
