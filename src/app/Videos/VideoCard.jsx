// src/components/VideoCard/VideoCard.jsx
import PropTypes from 'prop-types';
import { useState } from "react";

const VideoCard = ({ videoUrl, poster, username, dimensions }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById(`video-${dimensions}`);
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-w-[250px] flex   mx-2">
      <div className="relative rounded-lg rounded-b-none overflow-hidden bg-white shadow-lg">
        {/* Dimensions badge */}
        

        {/* Video container */}
        <div className="relative ovex aspect-[9/16] bg-gray-100">
          <video
            id={`video-${dimensions}`}
            className="w-full h-full object-cover"
            poster={poster}
            onLoadedData={handleVideoLoad}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Play button */}
          {!isPlaying && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1" />
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Username */}
        <div className="p-3 text-center">
          <p className="text-sm font-medium text-gray-800">{username}</p>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  dimensions: PropTypes.string.isRequired
};

export default VideoCard;
