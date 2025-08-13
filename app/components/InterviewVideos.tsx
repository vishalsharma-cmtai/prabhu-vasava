"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Video = {
  id: string;
  title: string;
  url: string;
  caption: string;
};

const getEmbedUrl = (url: string) => {
  if (url.includes("youtu.be")) {
    const videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

const videos: Video[] = [
  {
    id: "1",
    title: "Video 1",
    url: "https://youtu.be/f2pAcxjaFnA",
    caption:
      "માંડવી : સરદાર વલ્લભભાઈ પટેલની જન્મ જયંતી નિમિત્તે સુતરની આટી તથા પુષ્પાંજલિ અર્પણ કરાઈ",
  },
  {
    id: "2",
    title: "Video 2",
    url: "https://youtu.be/mP2ehZ29lsc",
    caption: "ધોબણી નાકા ખાતે ભગવાન બિરસા મુંડાની જન્મ જયંતીની ઉજવણી",
  },
  {
    id: "3",
    title: "Video 3",
    url: "https://youtu.be/2mAWODp8bfY",
    caption:
      "માંડવી નેશનલ હાઈવે 56 પર 7 કામદારો ને વીજ કરંટ લાગતા સાંસદ પ્રભુભાઈ વસાવા એ પ્રતિક્રિયા આપી",
  },
  {
    id: "4",
    title: "Video 4",
    url: "https://youtu.be/-ruaLq26IwI",
    caption: "Parbhubhai Vasava Member of Parliament Bardoli",
  },
  {
    id: "5",
    title: "Video 5",
    url: "https://youtu.be/XyW_sgLTg44",
    caption:
      "Matters of urgent public importance: Shri Prabhubhai Vasava, 27.06.2016",
  },
  {
    id: "6",
    title: "Video 6",
    url: "https://youtu.be/BhMH9trYQeo",
    caption:
      "Shri Prabhubhai Nagarbhai Vasava on The Prohibition of Electronic Cigarettes Bill, 2019",
  },
];

const PER_PAGE = 6;

const InterviewVideos: React.FC = () => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const totalPages = Math.ceil(videos.length / PER_PAGE);

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {videos.slice(start, end).map((video) => (
            <div
              key={video.id}
              className="flex flex-col items-center shadow-md rounded-lg p-4 bg-white"
            >
              <div className="aspect-video w-full overflow-hidden rounded">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${getEmbedUrl(video.url)}?rel=0&autoplay=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                />
              </div>
              <p className="mt-3 text-xl text-orange-500 text-center px-2 font-bold">
                {video.caption}
              </p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (

          <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className="px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Next
          </button>
        </div>
          )}
      </div>
    </div>
  );
};

export default InterviewVideos;

export const InterviewVideosPreview: React.FC = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent text-center mb-8">
          Interview Videos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-6">
          {videos.slice(0, 3).map((video) => (
            <div
              key={video.id}
              className="flex flex-col items-center shadow-md rounded-lg p-4 bg-white"
            >
              <div className="aspect-video w-full overflow-hidden rounded">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${getEmbedUrl(video.url)}?rel=0&autoplay=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                />
              </div>
              <p className="mt-3 text-xl text-orange-500 text-center px-2 font-bold">
                {video.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/interview/videos">
            <button className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                View More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
