"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import { assets } from "@/assets/assets";
import Testimonials from "../components/Testimonials";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    appointmentDate: "",
    purpose: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const { name, email, mobile, address, appointmentDate, purpose } = formData;
    const newErrors: Record<string, string> = {};

    if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) {
      newErrors.name = "Please enter a valid name (at least 2 letters)";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!/^[1-9]\d{9}$/.test(mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!appointmentDate) {
      newErrors.appointmentDate = "Please select a date for your appointment";
    }

    if (!purpose.trim()) {
      newErrors.purpose = "Purpose is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "appointment" }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage("✅ Appointment request sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          appointmentDate: "",
          purpose: "",
        });
      } else {
        setSuccessMessage(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("❌ Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HeroSection title="Appointment" subTitle="Home / Appointment" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <Image
            src={assets.about_us_image}
            alt="Prabhu Vasava"
            width={180}
            height={180}
            className="rounded-full border-4 border-orange-300 shadow-lg mx-auto md:mx-0"
          />
          <h2 className="text-2xl font-bold text-orange-600">
            Prabhu N. Vasava
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MP Bardoli — Dedicated to serving the people with transparency,
            respect, and commitment.
          </p>

          {/* Testimonials */}
          <div className="space-y-4">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg shadow-sm">
              <p className="italic text-gray-700">
                “Booking an appointment was easy and efficient. I felt heard and
                supported.”
              </p>
              <span className="block mt-2 text-orange-600 font-semibold">
                — Amit Patel
              </span>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg shadow-sm">
              <p className="italic text-gray-700">
                “I appreciate how quickly my concerns were addressed. The
                process was smooth and professional.”
              </p>
              <span className="block mt-2 text-orange-600 font-semibold">
                — Priya Desai
              </span>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600">
            <span className="text-xl">🔒</span>
            <p>Your data is safe. We never share your personal information.</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="order-1 md:order-2 bg-gradient-to-br from-orange-100 via-white to-orange-300 rounded-3xl shadow-lg border border-orange-100 p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-orange-600">
            Book an Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "mobile", label: "Mobile Number", type: "tel" },
              { name: "address", label: "Address", type: "text" },
              {
                name: "appointmentDate",
                label: "Date of Appointment",
                type: "date",
              },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  id={name}
                  type={type}
                  name={name}
                  placeholder={label}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="purpose"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Purpose of Appointment
              </label>
              <textarea
                id="purpose"
                name="purpose"
                placeholder="Purpose of Appointment"
                value={formData.purpose}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-orange-200 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
              />
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>
              )}
            </div>

            {/* Gradient Button with Hover Effect */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative overflow-hidden px-8 py-3 font-semibold rounded-2xl shadow-xl transition-all duration-300 w-full ${
                isSubmitting
                  ? "bg-orange-300 text-white opacity-70 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105"
              }`}
            >
              {!isSubmitting && (
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></span>
              )}
              <span className="relative flex justify-center items-center gap-2">
                {isSubmitting ? "Sending..." : "Book Your Appointment"}
              </span>
            </button>

            {successMessage && (
              <p
                className={`text-center mt-4 text-lg font-medium ${
                  successMessage.startsWith("✅")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="mb-10">
        <Testimonials />
      </div>
    </>
  );
};

export default AppointmentForm;
