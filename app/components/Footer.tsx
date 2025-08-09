// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { assets } from "@/assets/assets";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   MapPin,
//   Phone,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-orange-500 text-white">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <Image src={assets.bjp_logo} alt="Logo" width={40} height={40} />
//             <span className="text-xl font-bold tracking-wide">
//               Prabhu Vasava
//             </span>
//           </div>
//           <p className="text-md leading-relaxed text-white/90">
//             Serving the people with dedication, commitment, and a vision for a
//             better tomorrow.
//           </p>
//         </div>


//         <div>
//           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-md">
//             <li>
//               <Link href="/" className="hover:underline hover:text-white/90">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:underline hover:text-white/90"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/gallery"
//                 className="hover:underline hover:text-white/90"
//               >
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/interview"
//                 className="hover:underline hover:text-white/90"
//               >
//                 Interview
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/government"
//                 className="hover:underline hover:text-white/90"
//               >
//                 My Government
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:underline hover:text-white/90"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>


//         <div>
//           <h4 className="text-lg font-semibold mb-4">Contact</h4>
//           <ul className="space-y-3 text-md text-white/90">
//             <li className="flex items-start gap-2">
//               <MapPin size={18} className="mt-1" />
//               Flat No. 201, North Avenue,
//               <br /> New Delhi - 110001
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone size={18} />
//               02623-222108
//             </li>
//           </ul>
//         </div>

        
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//           <div className="flex gap-4">
//             <Link
//               href="https://facebook.com"
//               target="_blank"
//               aria-label="Facebook"
//             >
//               <Facebook className="hover:text-white/80 transition" />
//             </Link>
//             <Link
//               href="https://instagram.com"
//               target="_blank"
//               aria-label="Instagram"
//             >
//               <Instagram className="hover:text-white/80 transition" />
//             </Link>
//             <Link
//               href="https://twitter.com"
//               target="_blank"
//               aria-label="Twitter"
//             >
//               <Twitter className="hover:text-white/80 transition" />
//             </Link>
//             <Link
//               href="https://youtube.com"
//               target="_blank"
//               aria-label="YouTube"
//             >
//               <Youtube className="hover:text-white/80 transition" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/20 text-center text-sm py-4 px-4 text-white/80">
//         © {new Date().getFullYear()} Prabhu Vasava. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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
        
        {/* Logo & About */}
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

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b-2 border-white/30 inline-block pb-1">
            Quick Links
          </h4>
          <ul className="space-y-2 text-md">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Gallery", href: "/gallery" },
              { name: "Interview", href: "/interview" },
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

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b-2 border-white/30 inline-block pb-1">
            Contact
          </h4>
          <ul className="space-y-3 text-md text-white/90">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              Flat No. 201, North Avenue,
              <br /> New Delhi - 110001
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              02623-222108
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b-2 border-white/30 inline-block pb-1">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
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

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center text-sm py-4 px-4 text-white/80">
        © {new Date().getFullYear()} Prabhu Vasava. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
