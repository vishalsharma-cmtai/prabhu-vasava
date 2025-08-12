"use client";

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
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
    const { name, email, mobile, address, purpose } = formData;
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
      <div className="w-full max-w-2xl lg:max-w-3xl mx-auto p-6 sm:px-10">
        <div className="w-full max-w-2xl lg:max-w-3xl mx-auto mt-10 mb-10 p-6 sm:px-10 bg-gradient-to-br from-orange-50 via-white to-orange-200 rounded-3xl shadow-lg border border-orange-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-orange-600">
            Book an Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email", "mobile", "address"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "mobile"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  placeholder={
                    field === "name"
                      ? "Full Name"
                      : field === "email"
                      ? "Email Address"
                      : field === "mobile"
                      ? "Mobile Number"
                      : "Address"
                  }
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <div className="relative">
              <textarea
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

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform ${
                  isSubmitting
                    ? "bg-orange-300 text-white opacity-70 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 hover:shadow-xl cursor-pointer"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>

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
    </>
  );
};

export default AppointmentForm;
