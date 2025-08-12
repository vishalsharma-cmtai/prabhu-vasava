"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "GALLERY",
      href: "#",
      subLinks: [
        { name: "PHOTO GALLERY", href: "/gallery/photo" },
        { name: "VIDEO GALLERY", href: "/gallery/video" },
      ],
    },
    {
      name: "INTERVIEW",
      href: "#",
      subLinks: [
        { name: "INTERVIEW VIDEOS", href: "/interview/videos" },
        { name: "PRESS NOTES", href: "/interview/press-notes" },
      ],
    },
    { name: "MY GOVERNMENT", href: "/government" },
    { name: "CONTACT US", href: "/contact" },
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  type NavSubLink = { name: string; href: string };
  const isLinkActive = (linkHref: string, subLinks?: NavSubLink[]) => {
    if (linkHref !== "#" && pathname === linkHref) return true;
    if (subLinks && subLinks.some((sub) => pathname === sub.href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={assets.bjp_logo} alt="Logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-bold text-orange-500">
            Prabhu Vasava
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative group"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setHoveredDropdown(link.subLinks ? link.name : null);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setHoveredDropdown(null);
                }, 200);
              }}
            >
              {link.subLinks ? (
                <>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium ${
                      isLinkActive(link.href, link.subLinks)
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  {hoveredDropdown === link.name && (
                    <ul className="absolute left-0 top-8 w-44 bg-white shadow-lg rounded p-2 z-50">
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className={`block px-3 py-2 text-sm rounded ${
                              pathname === sub.href
                                ? "bg-orange-100 text-orange-600 font-medium"
                                : "text-gray-700 hover:bg-orange-100"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium ${
                    pathname === link.href
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Appointment Button */}
        <div className="hidden md:block">
          <Link href="/appointment">
            <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600 transition-all duration-200 cursor-pointer">
              Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 cursor-pointer"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-orange-500 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>

        <div className="px-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.subLinks ? (
                  <div>
                    <button
                      className={`flex justify-between items-center w-full font-bold ${
                        isLinkActive(link.href, link.subLinks)
                          ? "text-green-400"
                          : "text-white"
                      }`}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                    >
                      {link.name}
                      <ChevronDown size={18} />
                    </button>
                    {openDropdown === link.name && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={`block text-sm ${
                                pathname === sub.href
                                  ? "text-green-400 font-medium"
                                  : "text-white/90 hover:underline"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block font-bold transition-all ${
                      pathname === link.href
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/appointment">
                <button className="bg-white text-orange-500 px-4 py-2 rounded cursor-pointer mt-2">
                  Appointment
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
