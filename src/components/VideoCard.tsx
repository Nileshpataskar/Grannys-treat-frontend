import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  isActive: boolean;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, isActive, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (!isActive) {
      onPlay();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: '#000',
        '&:hover .controls': {
          opacity: 1,
        },
      }}
    >
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        playing={isActive && isPlaying}
        muted={isMuted}
        loop
        playsinline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
      />
      
      {/* Overlay gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Controls */}
      <Box
        className="controls"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          zIndex: 10,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            onClick={handlePlayPause}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              width: 80,
              height: 80,
            }}
          >
            {isPlaying ? (
              <PauseIcon sx={{ fontSize: 50 }} />
            ) : (
              <PlayArrowIcon sx={{ fontSize: 50 }} />
            )}
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontWeight: 600,
              fontSize: '1.5rem',
            }}
          >
            {title}
          </Typography>
        </Box>
        <IconButton
          onClick={handleMute}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            width: 80,
            height: 80,
          }}
        >
          {isMuted ? (
            <VolumeOffIcon sx={{ fontSize: 50 }} />
          ) : (
            <VolumeUpIcon sx={{ fontSize: 50 }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoCard; 