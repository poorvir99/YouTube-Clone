import React from 'react';

const VideoCards = ({info}) => {
  // console.log(info);
  // Check if 'info' exists before destructuring
  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>; // Or handle the empty state in some way
  }

  const { snippet, statistics} = info;

  const { channelTitle ,title, thumbnails}= snippet;
 
  return (
  
    <div className='px-2 m-2 w-72'>
       <img alt='thumbnail' className='rounded-xl' src={thumbnails.medium.url}/>
       <ul className=''>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
       </ul>
    </div>
  )
}

export default VideoCards;