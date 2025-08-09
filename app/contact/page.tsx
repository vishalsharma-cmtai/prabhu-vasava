"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"; // Icons
import HeroSection from "../components/HeroSection";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState<"delhi" | "head">("delhi");

  const contactInfo = {
    delhi: {
      title: "Delhi Office",
      phone: {
        call: "9499100117",
        whatsapp: "8287823899",
      },
      email: ["mpprabhuvasava@gmail.com", "prabhu.vasava23@sansad.nic.in"],
      address: "17 RAVISANKAR SUKLA LANE, KG MARG, NEW DELHI - 110001",
    },
    head: {
      title: "Head Office",
      phone: {
        call: "9537277301",
        whatsapp: "9428002444",
      },
      email: ["mpprabhuvasava@gmail.com"],
      address:
        "AT. MANDVI, Sardar Patel Shopping, Dist. Surat, GUJARAT - 394160",
    },
  };

  const currentInfo =
    activeTab === "delhi" ? contactInfo.delhi : contactInfo.head;

  return (
    <>
      <HeroSection title="Contact Us" />
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className={`px-4 py-2 text-lg font-medium transition-all ${
              activeTab === "delhi"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500 hover:text-orange-400"
            }`}
            onClick={() => setActiveTab("delhi")}
          >
            Delhi Office
          </button>
          <button
            className={`px-4 py-2 text-lg font-medium cursor-pointer transition-all ${
              activeTab === "head"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500 hover:text-orange-400"
            }`}
            onClick={() => setActiveTab("head")}
          >
            Head Office
          </button>
        </div>

        <div className="bg-orange-50 rounded-xl shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-orange-600">
            {currentInfo.title}
          </h2>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-800">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>
                <strong>Call:</strong>{" "}
                <a
                  href={`tel:${currentInfo.phone.call}`}
                  className="hover:underline"
                >
                  {currentInfo.phone.call}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${currentInfo.phone.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {currentInfo.phone.whatsapp}
                </a>
              </span>
            </div>
          </div>

          <div className="space-y-1 text-gray-800">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              <strong>Emails:</strong>
            </div>
            <ul className="ml-7 list-disc text-sm text-gray-700 space-y-1">
              {currentInfo.email.map((email, index) => (
                <li key={index}>
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-2 text-gray-800">
            <MapPin className="w-5 h-5 text-red-500 mt-1" />
            <p>
              <strong>Address:</strong> {currentInfo.address}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
