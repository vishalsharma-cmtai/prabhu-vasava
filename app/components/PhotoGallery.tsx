"use client";

import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const tabs = [
  "Show all",
  "Government",
  "Political",
  "Social Activity",
  "Sports Activity",
] as const;

import type { StaticImageData } from "next/image";

type EventPhoto = {
  url: string | StaticImageData;
  caption: string;
};

type EventData = {
  category: string;
  event: string;
  preview: string | StaticImageData;
  photos: EventPhoto[];
};

const events: EventData[] = [
  {
    category: "Sports Activity",
    event: "Sansad Khel Spardha at Vyara",
    preview: assets.sports_event1_image1,
    photos: [
      {
        url: assets.sports_event1_image1,
        caption: "Sansad Khel Spardha at Vyara",
      },
    ],
  },
  {
    category: "Sports Activity",
    event: "Sansad Khel Sparda",
    preview: assets.sports_event2_image1,
    photos: [
      {
        url: assets.sports_event2_image1,
        caption: "Sansad Khel Sparda",
      },
    ],
  },
  {
    category: "Social Activity",
    event: "બારડોલી લોકસભાના માંગરોળ તાલુકાના કંટવા ગામના વિધાર્થીને ભારત લાવવાના શક્ય એટલા પ્રયત્નો હાથ ધર્યા",
    preview: assets.social_event1_image3,
    photos: [
      { url: assets.social_event1_image1, caption: "" },
      { url: assets.social_event1_image2, caption: "" },
      { url: assets.social_event1_image3, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: "રાષ્ટ્રીય સ્વયંસેવક સંધની પથ સંચલન યાત્રાનુ સંગઠન સાથે પુષ્પવર્ષા થી સ્વાગત કર્યું.",
    preview: assets.social_event2_image2,
    photos: [
      { url: assets.social_event2_image1, caption: "" },
      { url: assets.social_event2_image2, caption: "" },
      { url: assets.social_event2_image3, caption: "" },
      { url: assets.social_event2_image4, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: "માંડવી તાલુકાના છ ગ્રામ પંચાયતને સાંસદ ગ્રાન્ટમાંથી ટેન્કર વિતરણ કરવામાં આવ્યું",
    preview: assets.social_event3_image3,
    photos: [
      { url: assets.social_event3_image1, caption: "" },
      { url: assets.social_event3_image2, caption: "" },
      { url: assets.social_event3_image3, caption: "" },
      { url: assets.social_event3_image4, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: "પરિક્ષણ શિબિર",
    preview: assets.social_event4_image2,
    photos: [
      { url: assets.social_event4_image1, caption: "" },
      { url: assets.social_event4_image2, caption: "" },
      { url: assets.social_event4_image3, caption: "" },
      { url: assets.social_event4_image4, caption: "" },
      { url: assets.social_event4_image5, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: "ગંગા સ્વરૂપા મહિલાઓનો મેડિકલ ચેકઅપ, ચશ્મા વિતરણ તથા યજ્ઞ",
    preview: assets.social_event5_image1,
    photos: [
      { url: assets.social_event5_image1, caption: "" },
      { url: assets.social_event5_image2, caption: "" },
      { url: assets.social_event5_image3, caption: "" },
      { url: assets.social_event5_image4, caption: "" },
      { url: assets.social_event5_image5, caption: "" },
      
    ],
  },
  {
    category: "Social Activity",
    event: "ગંગા સ્વરૂપા બહેનોને સાડી-રાશન કીટ વિતરણ, મેડિકલ ચેકઅપ અને ચશ્મા વિતરણ કાર્યક્રમમાં",
    preview: assets.social_event6_image3,
    photos: [
      { url: assets.social_event6_image1, caption: "" },
      { url: assets.social_event6_image2, caption: "" },
      { url: assets.social_event6_image3, caption: "" },
      { url: assets.social_event6_image4, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: ", દેહદાનના પ્રચાર પ્રસાર માટે કાર્યાલય ખાતેથી સક્ષમ રથનું પ્રસ્થાન કરાવ્યું",
    preview: assets.social_event7_image1,
    photos: [
      { url: assets.social_event7_image1, caption: "" },
      
    ],
  },
  {
    category: "Social Activity",
    event: "નાહરી કેન્દ્ર સઠવાવ-દેશી ભોજનાલય નો શુભારંભ",
    preview: assets.social_event8_image1,
    photos: [
      { url: assets.social_event8_image1, caption: "" },
      { url: assets.social_event8_image2, caption: "" },
      { url: assets.social_event8_image3, caption: "" },
      { url: assets.social_event8_image4, caption: "" },
      { url: assets.social_event8_image5, caption: "" },
      { url: assets.social_event8_image6, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: "પરીક્ષણ શિબિર નું આયોજનમાં હાજરી આપી",
    preview: assets.social_event9_image1,
    photos: [
      { url: assets.social_event9_image1, caption: "" },
      { url: assets.social_event9_image2, caption: "" },
      { url: assets.social_event9_image3, caption: "" },
      { url: assets.social_event9_image4, caption: "" },
      { url: assets.social_event9_image5, caption: "" },
    ],
  },
  {
    category: "Social Activity",
    event: "During Adivasi Vikas GauravYatra",
    preview: assets.social_event10_image1,
    photos: [
      { url: assets.social_event10_image1, caption: "" },
    ],
  },

  // Political Activity
  {
    category: "Political",
    event: "પ્રધાનમંત્રી જનજાતિ આદિવાસી ન્યાય મહા અભિયાન(પીએમ-જનમન) અવાસ યોજના સહાય",
    preview: assets.political_event1_image1,
    photos: [
      { url: assets.political_event1_image1, caption: "" },
      { url: assets.political_event1_image2, caption: "" },
      { url: assets.political_event1_image3, caption: "" },
      { url: assets.political_event1_image4, caption: "" },
      { url: assets.political_event1_image5, caption: "" },
      { url: assets.political_event1_image6, caption: "" },
      { url: assets.political_event1_image7, caption: "" },
      { url: assets.political_event1_image8, caption: "" },
      { url: assets.political_event1_image9, caption: "" },
      { url: assets.political_event1_image10, caption: "" },
      { url: assets.political_event1_image11, caption: "" },
    ],
  },
  {
    category: "Political",
    event: "'ભગવાન બિરસા મુંડા આદિવાસી ગૌરવ યાત્રા'",
    preview: assets.political_event2_image1,
    photos: [
      { url: assets.political_event2_image1, caption: "" },
      { url: assets.political_event2_image2, caption: "" },
      { url: assets.political_event2_image3, caption: "" },
      { url: assets.political_event2_image4, caption: "" },
      { url: assets.political_event2_image5, caption: "" },
      { url: assets.political_event2_image6, caption: "" },
      { url: assets.political_event2_image7, caption: "" },
      { url: assets.political_event2_image8, caption: "" },
      { url: assets.political_event2_image9, caption: "" },
      { url: assets.political_event2_image10, caption: "" },
      { url: assets.political_event2_image11, caption: "" },
      { url: assets.political_event2_image12, caption: "" },
      { url: assets.political_event2_image13, caption: "" },
      { url: assets.political_event2_image14, caption: "" },
      { url: assets.political_event2_image15, caption: "" },
    ],
  },
  {
    category: "Political",
    event: "157- માંડવી વિધાનસભાના મધ્યસ્થ ચૂંટણી કાર્યાલયના ઉદ્ઘાટન પ્રસંગે ઉપસ્થિત",
    preview: assets.political_event3_image1,
    photos: [
      { url: assets.political_event3_image1, caption: "" },
      { url: assets.political_event3_image2, caption: "" },
      { url: assets.political_event3_image3, caption: "" },
      { url: assets.political_event3_image4, caption: "" },
    ],
  },
  {
    category: "Political",
    event: "બારડોલી વિધાનસભાની મુલાકાત અર્થે પધારેલ કેન્દ્રીય રાજ્ય મંત્રી શ્રી @KPGBJP",
    preview: assets.political_event4_image1,
    photos: [
      { url: assets.political_event4_image1, caption: "" },
      { url: assets.political_event4_image2, caption: "" },
      { url: assets.political_event4_image3, caption: "" },
      { url: assets.political_event4_image4, caption: "" },
    ],
  },
  {
    category: "Political",
    event: "લોકશાહીના મંદિર સમા સંસદ પરીભવન ખાતે એક અનેરી ઉર્જા અને આત્મવિશ્વાસ સાથે…🏛️",
    preview: assets.political_event5_image1,
    photos: [
      { url: assets.political_event5_image1, caption: "" },
      { url: assets.political_event5_image2, caption: "" },
    ],
  },

  {
    category: "Government",
    event: "लोकसभा की पिटीशन कमिटी के अंतरगत ONGC एवं इंश्योरेंस कंपनियों के साथ अध्ययन दौरे की बैठकमें उपस्थिति",
    preview: assets.government_event1_image1,
    photos: [
      { url: assets.government_event1_image1, caption: "" },
      { url: assets.government_event1_image2, caption: "" },
      { url: assets.government_event1_image3, caption: "" },
      { url: assets.government_event1_image4, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "માંડવી રેફરલ હોસ્પિટલ ખાતે કોરોના ની અગમચેતી ના પગલારુપે મોકડ્રિલ કરવામા આવી.",
    preview: assets.government_event2_image1,
    photos: [
      { url: assets.government_event2_image1, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "सशक्त–आत्मनिर्भर",
    preview: assets.government_event3_image1,
    photos: [
      { url: assets.government_event3_image1, caption: "" },
      { url: assets.government_event3_image2, caption: "" },
      { url: assets.government_event3_image3, caption: "" },
      { url: assets.government_event3_image4, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "#NationalGames का भव्य समापन समारोह में संमिलित हुआ।",
    preview: assets.government_event4_image1,
    photos: [
      { url: assets.government_event4_image1, caption: "" },
      { url: assets.government_event4_image2, caption: "" },
      { url: assets.government_event4_image3, caption: "" },
      { url: assets.government_event4_image4, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "कोसंबा रेलवे स्टेशन पर ठहराव स्वीकृत किया गया |",
    preview: assets.government_event5_image1,
    photos: [
      { url: assets.government_event5_image1, caption: "" },
      { url: assets.government_event5_image2, caption: "" },
      { url: assets.government_event5_image3, caption: "" },
      { url: assets.government_event5_image4, caption: "" },
      { url: assets.government_event5_image5, caption: "" },
      { url: assets.government_event5_image6, caption: "" },
      { url: assets.government_event5_image7, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "सूरत में कौशल्य, आईटी और उद्यमिता राज्य मंत्री श्री @Rajeev_GoI के साथ मुलाकात की",
    preview: assets.government_event6_image1,
    photos: [
      { url: assets.government_event6_image1, caption: "" },
      { url: assets.government_event6_image2, caption: "" },
      { url: assets.government_event6_image3, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "ન્યુ ઈન્ડિયા ફોર યંગ ઈન્ડિયા: ટિકેડ ઓફ ઓપોર્ચ્યુનિટીઝ વિષય પર યુવાનો સાથે સંવાદ કાર્યક્રમ યોજાયો",
    preview: assets.government_event7_image1,
    photos: [
      { url: assets.government_event7_image1, caption: "" },
      { url: assets.government_event7_image2, caption: "" },
      { url: assets.government_event7_image3, caption: "" },
      { url: assets.government_event7_image4, caption: "" },
      { url: assets.government_event7_image5, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "સરકારી વિનિયન કોલેજ, સાયન્સ એન્ડ કોમર્સ કોલેજનો શુભારંભ",
    preview: assets.government_event8_image1,
    photos: [
      { url: assets.government_event8_image1, caption: "" },
      { url: assets.government_event8_image2, caption: "" },
      { url: assets.government_event8_image3, caption: "" },
      { url: assets.government_event8_image4, caption: "" },
      { url: assets.government_event8_image5, caption: "" },
      { url: assets.government_event8_image6, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "यह उमंग है, आज़ादी के अमृत महोत्सव का यह उत्साह है, देश की स्वतंत्रता के पर्व का।",
    preview: assets.government_event9_image1,
    photos: [
      { url: assets.government_event9_image1, caption: "" },
      { url: assets.government_event9_image2, caption: "" },
      { url: assets.government_event9_image3, caption: "" },
      { url: assets.government_event9_image4, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "મહુવા તાલુકાના ઉકા તરસાડીયા કેમ્પસ માલિબા ખાતે પ્રભારી મંત્રી શ્રી @KanuDesai180 જીની અધ્યક્ષતામાં",
    preview: assets.government_event10_image1,
    photos: [
      { url: assets.government_event10_image1, caption: "" },
      { url: assets.government_event10_image2, caption: "" },
      { url: assets.government_event10_image3, caption: "" },
      { url: assets.government_event10_image4, caption: "" },
      { url: assets.government_event10_image5, caption: "" },
      { url: assets.government_event10_image6, caption: "" },
      { url: assets.government_event10_image7, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "સુરત જિલ્લાના માંડવી ખાતે વિશ્વ આદિવાસી દિવસ નિમિત્તે ભવ્ય કાર્યક્રમનું આયોજન કરવામાં આવ્યું, જેમાં",
    preview: assets.government_event11_image1,
    photos: [
      { url: assets.government_event11_image1, caption: "" },
      { url: assets.government_event11_image2, caption: "" },
      { url: assets.government_event11_image3, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "आदरणीय उप राष्ट्रपति एवं राज्यसभा सदन के सभापति श्री @MVenkaiahNaidu जी के विदाई समारोह",
    preview: assets.government_event12_image1,
    photos: [
      { url: assets.government_event12_image1, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "विजयी विश्व तिरंगा प्यारा, झंडा ऊंचा रहे हमारा। #TirangaUtsav#HarGharTiranga",
    preview: assets.government_event13_image1,
    photos: [
      { url: assets.government_event13_image1, caption: "" },
      { url: assets.government_event13_image2, caption: "" },
      { url: assets.government_event13_image3, caption: "" },
      { url: assets.government_event13_image4, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "हर घर लहराएगा तिरंगा, हर घर होगा देशभक्ति से रंगा",
    preview: assets.government_event14_image1,
    photos: [
      { url: assets.government_event14_image1, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "Rashtrapati Shapath Program",
    preview: assets.government_event15_image1,
    photos: [
      { url: assets.government_event15_image1, caption: "" },
      { url: assets.government_event15_image2, caption: "" },
      { url: assets.government_event15_image3, caption: "" },
    ],
  },
  {
    category: "Government",
    event: "shala pravesh ustav",
    preview: assets.government_event16_image1,
    photos: [
      { url: assets.government_event16_image1, caption: "" },
      { url: assets.government_event16_image2, caption: "" },
    ],
  },
];

const PhotoGalleryMain: React.FC = () => {
const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Show all");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const filteredEvents =
    activeTab === "Show all"
      ? events
      : events.filter((event) => event.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-300 ${
              activeTab === tab
                ? "bg-orange-600 text-white border-orange-600 shadow-lg scale-105"
                : "bg-white text-orange-600 border-orange-300 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Event Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredEvents.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No events available.
          </p>
        ) : (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition transform hover:scale-[1.02]"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={event.preview}
                  alt={event.event}
                  fill
                  sizes="(max-width: 768px) 100vw, 
                         (max-width: 1200px) 50vw, 
                         33vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-800 font-semibold mb-1">
                  {event.photos[0]?.caption?.trim() || event.event}
                </p>
                <span className="text-orange-600 text-sm font-medium">
                  View All →
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh] shadow-xl animate-slideUp">
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {selectedEvent.event.toUpperCase()}
            </h2>

            {/* Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedEvent.photos.map((photo, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-md overflow-hidden shadow-sm"
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={photo.url}
                      alt={photo.caption?.trim() || selectedEvent.event}
                      fill
                      sizes="(max-width: 768px) 100vw, 
                             (max-width: 1200px) 50vw, 
                             33vw"
                      className="object-cover"
                    />
                  </div>
                  {/* If you want captions under each image, uncomment this */}
                  {/* <p className="text-center text-sm p-2">
                    {photo.caption?.trim() || selectedEvent.event}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGalleryMain;
