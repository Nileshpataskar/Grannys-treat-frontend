// src/components/VideoCard/VideoCard.jsx
import { PauseCircle, PlayCircle, Volume1Icon, VolumeXIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import ReactPlayer from "react-player";
// Import icons from lucide-react

const VideoCard = ({
  id,
  videoUrl,
  poster,
  username,
  isPlaying,
  onTogglePlay,
  onVideoEnd,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const playerRef = useRef(null);

  const handleEnd = () => {
    onVideoEnd();
  };

  const handlePlayPause = (e) => {
    e.stopPropagation();
    onTogglePlay(id);
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative w-[340px] h-[580px] rounded-xl overflow-hidden shadow-lg bg-white flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* VIDEO CONTAINER */}
      <div className="relative w-full flex-grow bg-gray-200">
        {/* POSTER: always show when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10">
            <img
              src={poster}
              alt={username || "Video thumbnail"}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* REACTPLAYER: always mounted, but visibility toggles via opacity */}
        <div
          className={`absolute inset-0 ${
            isPlaying ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            width="100%"
            height="100%"
            playing={isPlaying}
            muted={isMuted}
            light={false}
            onEnded={handleEnd}
            playsinline
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                  disablePictureInPicture: true,
                },
              },
            }}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>

        {/* PLAY / PAUSE button: normally hidden once playing;
             but if hovered OR not playing, show it (smaller size). */}
        {(isHovered || !isPlaying) && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={handlePlayPause}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 focus:outline-none"
            >
              {isPlaying ? (
                // Use Lucide Pause icon
                <PauseCircle className="w-6 h-6 text-gray-800" />
              ) : (
                // Use Lucide Play icon
                <PlayCircle className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        )}

        {/* MUTE / UNMUTE button: top-right, visible on hover or when playing */}
        <div className="absolute top-2 right-2 z-20">
          <button
            onClick={handleMuteToggle}
            className="text-gray-800 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
          >
            {isMuted ? (
              // Use Lucide VolumeX (muted) icon
              <VolumeXIcon className="w-5 h-5" />
            ) : (
              // Use Lucide Volume (unmuted) icon
              <Volume1Icon className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>

      {/* USERNAME SECTION */}
      <div className="p-3 text-center bg-white border-t border-gray-200">
        <p className="text-lg font-[Fredoka] font-bold text-[#285192]">{username}</p>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  id: PropTypes.number.isRequired,
  videoUrl: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  dimensions: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  onVideoEnd: PropTypes.func.isRequired,
};

export default VideoCard;
