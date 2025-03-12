// src/components/VideoSlider/VideoSlider.jsx
import { useState, useRef } from "react";
import { videos } from "./videoData";
import VideoCard from "./VideoCard";

const VideoSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="  w-full  mx-auto px-4 py-12">
      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-auto gap-10 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="w-4 shrink-0" />

        {videos.map((video) => (
          <VideoCard
            key={video.id}
            videoUrl={video.url}
            poster={video.poster}
            username={video.username}
            dimensions={video.dimensions}
          />
        ))}

        <div className="w-4 shrink-0" />
      </div>
    </div>
  );
};

export default VideoSlider;
