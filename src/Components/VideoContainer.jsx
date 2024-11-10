import React, { useEffect, useState} from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
  
  const [videos,setVideos]= useState([]);
  useEffect(()=>{
    getVideos();

  },[])

  const getVideos =async()=>{
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const jdata=await data.json();
    console.log(jdata.items);
    setVideos(jdata.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=>(
        <Link to={"/watch?v=" + video.id}><VideoCards key={video.id} info={video}/>
        </Link>
      ))
        }
     
    </div>
  )
}

export default VideoContainer;