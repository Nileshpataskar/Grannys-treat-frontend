import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Swiper CSS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import VideoCard from "./VideoCard";
import { videos } from "./videoData";

/**
 * VideoCarousel Component
 * A carousel component that displays videos in a swipeable format
 * Uses Swiper for smooth sliding and navigation
 */
const VideoCarousel = () => {
  // Initialize with empty array
  const [videoList, setVideoList] = useState([]);
  // State to track the ID of the currently playing video
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);

  useEffect(() => {
    // Load video data
    setVideoList(videos);
  }, []);

  // Function to handle a video starting playback
  const handlePlayVideo = (videoId) => {
    setCurrentlyPlayingId(videoId);
  };

  return (
    <div className="w-full bg-blue-100 py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#333077]">The real stories</h2>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { 
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: { // Added breakpoint for better tablet view
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: { 
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }}
          className="pb-12"
        >
          {videoList.map((video) => (
            <SwiperSlide key={video.id}>
              <VideoCard
                videoUrl={video.url}
                poster={video.poster}
                username={video.username}
                // Pass down the isPlaying state and the play handler
                isPlaying={currentlyPlayingId === video.id}
                onPlayVideo={() => handlePlayVideo(video.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoCarousel;
