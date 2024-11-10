import React from 'react';


const parseYouTubeDuration = (duration) => {
    if (!duration) return '0:00'; // Fallback if the duration is missing
  
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '0:00'; // Fallback for unexpected formats
  
    const hours = match[1] ? parseInt(match[1].replace('H', '')) : 0;
    const minutes = match[2] ? parseInt(match[2].replace('M', '')) : 0;
    const seconds = match[3] ? parseInt(match[3].replace('S', '')) : 0;
  
    // Format the output string
    const formattedTime =
      hours > 0
        ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        : `${minutes}:${String(seconds).padStart(2, '0')}`;
  
    return formattedTime;
  };

const VideoLength = ({time}) => {
    const formattedTime = parseYouTubeDuration(time);
   
  return (
    <div className='absolute bottom-2 right-2 bg-[rgb(0,0,0)]/70 text-white py-1 px-2 text-xs rounded-md'>
     {formattedTime}
    </div>
  )
}

export default VideoLength