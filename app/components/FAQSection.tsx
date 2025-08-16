"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book an appointment with Prabhu Vasava Ji?",
    answer:
      "Appointments can be booked online through the “Appointment” link in the main navigation menu. Simply provide your details, select a preferred date, and you’ll receive confirmation via email or phone.",
  },
  {
    question: "Where is the contact office located?",
    answer:
      "The contact office is at Mandvi, Sardar Patel Shopping, District Surat, Gujarat – 394160. You can reach us at 02623-222108 for any assistance.",
  },
  {
    question: "How can I submit a grievance or request support?",
    answer:
      "You can submit your request via the contact form on the “Contact Us” page. Once submitted, our support team will review and get back to you at the earliest.",
  },
  {
    question: "Can I learn about government schemes directly from the site?",
    answer:
      "Absolutely! Browse the “My Government” section to explore key government schemes and initiatives currently active. You’ll find detailed summaries and links to official resources.",
  },
  {
    question: "How do I access App downloads listed on the site?",
    answer:
      "Visit the Government Apps section to download official apps like UMANG, BHIM, and the Narendra Modi app. Click the “Download” button, which links directly to the app on Google Play or the official source.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-10 pb-10 px-6">
      <motion.h2
        className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-orange-200 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between cursor-pointer items-center w-full px-6 py-4 bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 transition"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-orange-600" />
              </motion.span>
            </button>

            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-gray-600 bg-white"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
