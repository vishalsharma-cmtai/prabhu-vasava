"use client";

import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    purpose: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending...
    setTimeout(() => {
      setSuccessMessage("Appointment request sent successfully!");
      setIsSubmitting(false);
      setFormData({ name: "", mobile: "", address: "", purpose: "" });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-20 p-8 bg-orange-500 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-orange-300 shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-orange-300 shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-orange-300 shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        <textarea
          name="purpose"
          placeholder="Purpose of Appointment"
          value={formData.purpose}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-orange-300 shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-300 transition-all duration-300 cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>

        {successMessage && (
          <p className="text-green-100 text-center mt-4">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
