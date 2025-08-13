// "use client";

// import { useState } from "react";
// import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
// import HeroSection from "../components/HeroSection";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const contactInfo = [
//     {
//       title: "Delhi Office",
//       phone: { call: "9499100117", whatsapp: "8287823899" },
//       email: ["mpprabhuvasava@gmail.com", "prabhu.vasava23@sansad.nic.in"],
//       address: "17 RAVISANKAR SUKLA LANE, KG MARG, NEW DELHI - 110001",
//     },
//     {
//       title: "Head Office",
//       phone: { call: "9537277301", whatsapp: "9428002444" },
//       email: ["mpprabhuvasava@gmail.com"],
//       address:
//         "AT. MANDVI, Sardar Patel Shopping, Dist. Surat, GUJARAT - 394160",
//     },
//   ];

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
//       newErrors.name = "Enter at least 2 letters";
//     }
//     if (!/^[1-9]\d{9}$/.test(formData.phone.trim())) {
//       newErrors.phone = "Enter a valid 10-digit phone number";
//     }
//     if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
//       newErrors.email = "Enter a valid email address";
//     }
//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message cannot be empty";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     setSuccessMessage("");

//     try {
//       const res = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, formType: "contact" }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setSuccessMessage("Message sent successfully!");
//         setFormData({
//           name: "",
//           phone: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         alert(data.message || "Failed to send message.");
//       }
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <HeroSection title="Contact Us" subTitle="Home / Contact Us" />

//       <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
//         {/* Contact Details */}
//         <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-xl shadow-lg p-6 border border-orange-100 space-y-4">
//           {contactInfo.map((office, idx) => (
//             <div key={idx} className="space-y-4">
//               <h2 className="text-2xl font-semibold text-orange-600 border-b pb-2">
//                 {office.title}
//               </h2>
//               <div className="space-y-3 text-gray-800">
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-orange-500" />
//                   <span>
//                     <strong>Call:</strong>{" "}
//                     <a
//                       href={`tel:${office.phone.call}`}
//                       className="hover:underline"
//                     >
//                       {office.phone.call}
//                     </a>
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <MessageCircle className="w-5 h-5 text-green-500" />
//                   <span>
//                     <strong>WhatsApp:</strong>{" "}
//                     <a
//                       href={`https://wa.me/${office.phone.whatsapp}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:underline"
//                     >
//                       {office.phone.whatsapp}
//                     </a>
//                   </span>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <Mail className="w-5 h-5 text-blue-500" />
//                     <strong>Email:</strong>
//                   </div>
//                   <ul className="ml-8 mt-1 list-disc text-sm text-gray-700 space-y-1">
//                     {office.email.map((email, i) => (
//                       <li key={i}>
//                         <a
//                           href={`mailto:${email}`}
//                           className="hover:underline break-all"
//                         >
//                           {email}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-red-500 mt-1" />
//                   <p>
//                     <strong>Address:</strong> {office.address}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <div className="bg-gradient-to-br from-orange-50 via-white to-orange-200 rounded-xl shadow-lg p-6 border border-orange-100">
//           <h2 className="text-2xl font-semibold text-orange-600 mb-6">
//             Send us a Message
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
//                     errors.name
//                       ? "border-red-400"
//                       : "border-orange-200 focus:ring-orange-400"
//                   }`}
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Contact Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
//                     errors.phone
//                       ? "border-red-400"
//                       : "border-orange-200 focus:ring-orange-400"
//                   }`}
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm">{errors.phone}</p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
//                   errors.email
//                     ? "border-red-400"
//                     : "border-orange-200 focus:ring-orange-400"
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
//                   errors.subject
//                     ? "border-red-400"
//                     : "border-orange-200 focus:ring-orange-400"
//                 }`}
//               />
//               {errors.subject && (
//                 <p className="text-red-500 text-sm">{errors.subject}</p>
//               )}
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
//                   errors.message
//                     ? "border-red-400"
//                     : "border-orange-200 focus:ring-orange-400"
//                 }`}
//               />
//               {errors.message && (
//                 <p className="text-red-500 text-sm">{errors.message}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-medium shadow-md hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//             {successMessage && (
//               <p className="text-green-600 text-lg mt-3 text-center">
//                 {successMessage}
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactPage;

"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import HeroSection from "../components/HeroSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      title: "Delhi Office",
      phone: { call: "9499100117", whatsapp: "8287823899" },
      email: ["mpprabhuvasava@gmail.com", "prabhu.vasava23@sansad.nic.in"],
      address: "17 RAVISANKAR SUKLA LANE, KG MARG, NEW DELHI - 110001",
    },
    {
      title: "Head Office",
      phone: { call: "9537277301", whatsapp: "9428002444" },
      email: ["mpprabhuvasava@gmail.com"],
      address:
        "AT. MANDVI, Sardar Patel Shopping, Dist. Surat, GUJARAT - 394160",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Enter at least 2 letters";
    }
    if (!/^[1-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact" }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroSection title="Contact Us" subTitle="Home / Contact Us" />

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-xl shadow-lg p-6 border border-orange-100 space-y-4">
          {contactInfo.map((office, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-600 border-b pb-2">
                {office.title}
              </h2>
              <div className="space-y-3 text-gray-800">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>
                    <strong>Call:</strong>{" "}
                    <a
                      href={`tel:${office.phone.call}`}
                      className="hover:underline"
                    >
                      {office.phone.call}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href={`https://wa.me/${office.phone.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {office.phone.whatsapp}
                    </a>
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <strong>Email:</strong>
                  </div>
                  <ul className="ml-8 mt-1 list-disc text-sm text-gray-700 space-y-1">
                    {office.email.map((email, i) => (
                      <li key={i}>
                        <a
                          href={`mailto:${email}`}
                          className="hover:underline break-all"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <p>
                    <strong>Address:</strong> {office.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-200 rounded-xl shadow-lg p-6 border border-orange-100">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-400"
                      : "border-orange-200 focus:ring-orange-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-400"
                      : "border-orange-200 focus:ring-orange-400"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-400"
                    : "border-orange-200 focus:ring-orange-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.subject
                    ? "border-red-400"
                    : "border-orange-200 focus:ring-orange-400"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-400"
                    : "border-orange-200 focus:ring-orange-400"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-2xl font-medium shadow-md transform transition-all duration-300 ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:from-orange-600 hover:to-orange-700 hover:scale-105 cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Book Your Appointment"}
            </button>

            {successMessage && (
              <p className="text-green-600 text-lg mt-3 text-center">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
