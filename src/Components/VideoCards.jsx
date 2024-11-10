import React from 'react';
import VideoLength from './VideoLength';
import { abbreviateNumber } from 'js-abbreviation-number';
import { parseISO, formatDistanceToNow } from 'date-fns';

const VideoCards = ({info}) => {
   console.log(info);
 
  // Check if 'info' exists before destructuring
  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>; // Or handle the empty state in some way
  }
 
  const { snippet, statistics,contentDetails} = info;

  const { channelTitle ,title, thumbnails,publishedAt}= snippet;



  // Format publishedAt to "time ago" format
  const formattedDate = formatDistanceToNow(parseISO(publishedAt), { addSuffix: true });
 
  return (
  
    <div className='relative px-2 m-2 w-72 '>
      <div className='relative w-full h-full'> {/* Ensure wrapper consistency */}
        <img
          alt='thumbnail'
          className='rounded-xl w-full h-full object-cover' // Ensures consistent image sizing
          src={thumbnails.medium.url}
        />
        {contentDetails.duration && <VideoLength time={contentDetails.duration} />}
      </div>

      <div className='flex'>
      <div className='flex text-white mt-3 '>
        <div className='flex items-start'>
          <div className='flex h-9 w-9 rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={info.snippet.thumbnails.default.url} alt="channel-pic"/>
          </div>
        </div>
       </div>

      <div className='flex flex-col mt-3 ml-3 overflow-hidden'>
        <span className='text-sm font-bold line-clamp-2'>
        {title}
        </span>

        <span className='text-[12px] font-semibold mt-2 text-black/[0.7] flex items-center'>
        {channelTitle}
        </span>
        <div className='flex text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden'>
         <span>
          {`${abbreviateNumber(statistics.viewCount,2)} views`}
         </span>

         <span className='flex text-[24px] leading-none font-bold text-black/[0.7] relative top-[-10px] mx-1'>
         .
         </span>
         <span className='truncate'>
            {formattedDate}
         </span>
        </div>

      </div>

</div>
     
    </div>
  )
}

export default VideoCards;