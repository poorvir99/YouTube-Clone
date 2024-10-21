import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams]= useSearchParams();
    const dispatch=useDispatch();

    const GOOGLE_API_KEY="AIzaSyBWMwxsnNRJ58EylgduxYaHhgtdnQb8GOk";

    const [videoDetails,setVideoDetails]= useState({});
    const [comments,setComments]=useState([]);

    useEffect(()=>{
       dispatch(closeMenu())

       fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${searchParams.get("v")}&key=${GOOGLE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const snippet = data.items[0].snippet;
                    setVideoDetails({
                        title: snippet.title,
                        channel: snippet.channelTitle,
                    });
                }
            });


             // Fetch comments
        fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${searchParams.get("v")}&key=${GOOGLE_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.items) {
                const fetchedComments = data.items.map(item => ({
                    author: item.snippet.topLevelComment.snippet.authorDisplayName,
                    text: item.snippet.topLevelComment.snippet.textDisplay,
                }));
                setComments(fetchedComments);
            }
        });

            },[dispatch,GOOGLE_API_KEY])

  return (
    <div className='px-28 mt-5'>
        <iframe 
        className='rounded-xl'
            width="850"
            height="500" 
            src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
            title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
         
         {/* Display video details */}
         <h1 className="text-2xl font-bold mt-4">{videoDetails.title}</h1>
            <p className="text-lg mb-4">Channel: {videoDetails.channel}</p>

            {/* Display comments */}
            <div className="mt-4 w-[67%]">
                <h2 className="text-xl font-semibold mb-2">Comments</h2>
                {comments.length === 0 ? (
                    <p>No comments available</p>
                ) : (
                    comments.map((comment, index) => (
                        <div key={index} className="mb-2 p-2 border rounded-lg">
                            <p className="font-bold">{comment.author}</p>
                            <p>{comment.text}</p>
                        </div>
                    ))
                )}
            </div>

    </div>
  )
}

export default WatchPage;