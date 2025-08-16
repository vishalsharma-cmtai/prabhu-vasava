"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={assets.bjp_logo} alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold tracking-wide">
              Prabhu Vasava
            </span>
          </div>
          <p className="text-md leading-relaxed text-white/90">
            Serving the people with dedication, commitment, and a vision for a
            better tomorrow.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 border-b-2 border-white/30 inline-block pb-1">
            Quick Links
          </h4>
          <ul className="space-y-2 text-md">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Gallery", href: "/gallery/photo" },
              { name: "Interview", href: "/interview/videos" },
              { name: "My Government", href: "/government" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:underline hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 border-b-2 border-white/30 inline-block pb-1">
            Contact
          </h4>
          <ul className="space-y-3 text-md text-white/90">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              AT. MANDVI, Sardar Patel Shopping, Dist. Surat,
              <br /> GUJARAT - 394160
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              02623-222108
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 border-b-2 border-white/30 inline-block pb-1">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {[
              {
                icon: Facebook,
                link: "https://www.facebook.com/prabhunvasava/",
                label: "Facebook",
              },
              {
                icon: Instagram,
                link: "https://www.instagram.com/prabhunvasava/",
                label: "Instagram",
              },
              {
                icon: Twitter,
                link: "https://x.com/prabhunvasava?s=09",
                label: "Twitter",
              },
              {
                icon: Youtube,
                link: "https://www.youtube.com/@prabhubhain.vasava",
                label: "YouTube",
              },
            ].map(({ icon: Icon, link, label }) => (
              <Link
                key={label}
                href={link}
                target="_blank"
                aria-label={label}
                className="hover:text-white/80 transition-transform transform hover:scale-110"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-sm py-4 px-4 text-white gap-2 sm:gap-10">
  <span>
    © {new Date().getFullYear()} Prabhu Vasava. All rights reserved | Designed by CMT AI
  </span>
  
  <div className="flex gap-6">
    <Link href="/privacy">Privacy Policy</Link>
    <Link href="/copyright">Copyright Actions</Link>
  </div>
</div>

    </footer>
  );
};

export default Footer;
