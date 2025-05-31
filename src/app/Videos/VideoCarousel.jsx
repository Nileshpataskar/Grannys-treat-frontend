import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Swiper CSS imports for v7+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import VideoCard from "./VideoCard";
import { videoData } from "./videoData";

const VideoCarousel = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Replace with a real fetch() if you have an API endpoint.
    setVideos(videoData);
  }, []);

  return (
    <div className="w-full mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        style={{ padding: "32px 0" }}
      >
        {videos.map((vid) => (
          <SwiperSlide key={vid.id}>
            <div className="flex justify-center">
              <VideoCard
                thumbnailUrl={vid.thumbnailUrl}
                videoUrl={vid.videoUrl}
                author={vid.author}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
