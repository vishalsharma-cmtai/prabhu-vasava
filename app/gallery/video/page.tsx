import HeroSection from "@/app/components/HeroSection";
import VideoGallery from "@/app/components/VideoGallery";
import React from "react";

const VideoGalleryPage = () => {
  return (
    <>
      <HeroSection title="Video Gallery" subTitle='Home / Video Gallery' />
      <VideoGallery />
    </>
  );
};

export default VideoGalleryPage;
