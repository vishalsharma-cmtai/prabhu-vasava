"use client";

import Link from "next/link";

const Gallery = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="flex justify-center mb-6 space-x-4">
        <Link href="/gallery/photo">
          <button className="px-4 py-2 rounded-md font-medium transition bg-blue-600 text-white">
            Photo Gallery
          </button>
        </Link>
        <Link href="/gallery/video">
          <button className="px-4 py-2 rounded-md font-medium transition bg-blue-600 text-white">
            Video Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
