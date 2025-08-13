"use client";

import React, { useState } from "react";

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
    url: "https://youtu.be/B2_ANDy0-uU",
    caption:
      "Gujarat: BJP's Bardoli candidate Prabhu Vasava wins by more than 7,42,000 votes",
  },
  {
    id: "2",
    title: "Video 2",
    url: "https://youtu.be/_fyRL59qZWU",
    caption:
      "See what BJP's Bardoli candidate Prabhu Vasava has to say ahead of Lok Sabha",
  },
  {
    id: "3",
    title: "Video 3",
    url: "https://youtu.be/XyW_sgLTg44",
    caption:
      "Matters of urgent public importance: Shri Prabhubhai Vasava, 27.06.2016",
  },
  {
    id: "4",
    title: "Video 4",
    url: "https://youtu.be/6hMp-j5me18",
    caption:
      "Parbhubhai Nagarbhai Vasava , (BJP) takes oath as Member of Parliament (Bardoli (ST), Gujarat)",
  },
  {
    id: "5",
    title: "Video 5",
    url: "https://youtu.be/ESeZ2STjMUs",
    caption:
      "Exclusive Interview: बारडोली (गुजरात) Prabhubhai Vasava - एक अजेय आदिवासी नेता | Sarvesh Mishra",
  },
  {
    id: "6",
    title: "Video 6",
    url: "https://youtu.be/Ia0W0PmXnb0",
    caption:
      "Mp Prabhubhai Vasava Presented In Loksabha To Construct 3 Flyover On Abad-Mumbai Nh 8",
  },
];

const PER_PAGE = 6;

const VideoGallery: React.FC = () => {
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

export default VideoGallery;
