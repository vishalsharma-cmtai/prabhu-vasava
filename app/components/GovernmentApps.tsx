"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { Download } from "lucide-react";

const apps = [
  {
    label: "NARENDRA MODI",
    src: assets.namo_app,
    link: "https://play.google.com/store/apps/details?id=com.narendramodiapp",
    description:
      "Official Mobile App of Prime Minister of India Narendra Modi.",
  },
  {
    label: "APPLICATION",
    src: assets.prabhuvasava,
    link: "https://www.prabhuvasava.com.in/",
    description: "Access various government applications and citizen services.",
  },
  {
    label: "UMANG",
    src: assets.umang,
    link: "https://play.google.com/store/apps/details?id=in.gov.umang.negd.g2c&hl=en_IN",
    description:
      "Unified app for availing multiple central and state government services.",
  },
  {
    label: "BHIM",
    src: assets.bhim_app,
    link: "https://play.google.com/store/apps/details?id=in.org.npci.upiapp&hl=en_IN",
    description: "Secure UPI-based payment app for fast money transfers.",
  },
];

export default function GovernmentApps() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 pt-12 pb-10 text-gray-900">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
          Government Apps
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm">
          Explore official Indian government applications for services,
          information, and digital transactions.
        </p>
      </header>

      <section
        aria-label="Government App Links"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl"
      >
        {apps.map(({ label, src, link, description }) => {
          const card = (
            <div
              className="group relative bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 p-6 flex flex-col items-center text-center border border-orange-200 overflow-hidden"
              aria-hidden={false}
            >
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-300 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-200/30 to-orange-400/20 blur-3xl transition-opacity duration-500 pointer-events-none" />

              <div className="w-20 h-20 relative mb-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-md">
                <Image src={src} alt={label} fill className="object-contain" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">{label}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {description}
              </p>

              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-md transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                <Download size={18} /> Download
              </span>
            </div>
          );

          if (link.startsWith("http")) {
            return (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Open ${label} (external)`}
              >
                {card}
              </a>
            );
          } else {
            return (
              <Link
                key={label}
                href={link}
                className="block"
                aria-label={`Open ${label}`}
              >
                {card}
              </Link>
            );
          }
        })}
      </section>
    </main>
  );
}
