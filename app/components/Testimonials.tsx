"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { assets } from "@/assets/assets";

const testimonials = [
  {
    name: "Leo",
    role: "Lead Designer",
    image: assets.about_us_image,
    rating: 4,
    title: "It was a very good experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
  },
  {
    name: "Sophia",
    role: "Project Manager",
    image: assets.about_us_image,
    rating: 5,
    title: "Highly recommend!",
    text: "Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.",
  },
  {
    name: "James",
    role: "Developer",
    image: assets.about_us_image,
    rating: 4,
    title: "Great team and support",
    text: "Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<number | undefined>(undefined);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    resetTimer();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    resetTimer();
  };

  const startTimer = () => {
    slideInterval.current = window.setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
  };

  const resetTimer = () => {
    if (slideInterval.current !== undefined)
      clearInterval(slideInterval.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (slideInterval.current !== undefined) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <section className="py-10 px-4 ">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        What Our Clients Say About Us
      </h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-4">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-autobg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center border border-orange-100 transform hover:scale-105 transition duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
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

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 transition"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                resetTimer();
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
