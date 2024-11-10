import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { abbreviateNumber } from 'js-abbreviation-number';
import { AiOutlineLike } from "react-icons/ai"
import { IMG_PROFILE } from '../utils/constant';

const WatchPage = () => {
    const [searchParams]= useSearchParams();
    const dispatch=useDispatch();

    const GOOGLE_API_KEY="AIzaSyBWMwxsnNRJ58EylgduxYaHhgtdnQb8GOk";
    // const { statistics} = info;

    const [videoDetails,setVideoDetails]= useState({});
    const [comments,setComments]=useState([]);
    const [suggestedVideos, setSuggestedVideos] = useState([]);

    useEffect(()=>{
       dispatch(closeMenu())

       fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${searchParams.get("v")}&key=${GOOGLE_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const snippet = data.items[0].snippet;
                const statistics = data.items[0].statistics;
                setVideoDetails({
                    title: snippet.title,
                    channelTitle: snippet.channelTitle,
                    channelPic: snippet.thumbnails.default.url,
                    likeCount: statistics.likeCount,
                    viewCount: statistics.viewCount,
                    commentCount:statistics.commentCount,
                    channelId: snippet.channelId // 
                });
            }
        });

        // Fetch channel details (including subscriber count)
    if (videoDetails.channelId) {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${videoDetails.channelId}&key=${GOOGLE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const statistics = data.items[0].statistics;
                    setVideoDetails(prevDetails => ({
                        ...prevDetails,
                        subscriberCount: statistics.subscriberCount
                    }));
                }
            });
    }


             // Fetch comments
             fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${searchParams.get("v")}&key=${GOOGLE_API_KEY}`)
             .then(response => response.json())
             .then(data => {
                 if (data.items) {
                     const fetchedComments = data.items.map(item => ({
                         author: item.snippet.topLevelComment.snippet.authorDisplayName,
                         text: item.snippet.topLevelComment.snippet.textDisplay,
                         profilePic: item.snippet.topLevelComment.snippet.authorProfileImageUrl // Extract profile picture URL
                     }));
                    //  console.log(fetchedComments);
                     setComments(fetchedComments);
                 }
             });

             //Suggested Videos
             fetch(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchParams.get("v")}&type=video&part=snippet&key=${GOOGLE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
            if (data.items) {
                const videos = data.items.map(item => ({
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.medium.url,
                channelTitle: item.snippet.channelTitle,
                videoId: item.id.videoId,
                }));
                setSuggestedVideos(videos);

            //     // Optional: Fetch additional data such as view count using a second request
            //     const videoIds = data.items.map(item => item.id.videoId).join(',');
            //     return fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${GOOGLE_API_KEY}`);
            // }
            // })
            // .then(response => response?.json())
            // .then(statisticsData => {
            // if (statisticsData?.items) {
            //     setSuggestedVideos(prevVideos => 
            //     prevVideos.map((video, index) => ({
            //         ...video,
            //         viewCount: statisticsData.items[index]?.statistics?.viewCount || 0
            //     }))
            //     );

            }
            });

            },[dispatch, searchParams, GOOGLE_API_KEY, videoDetails.channelId])

  return (
    <div className='px-28 mt-5 flex flex-col md:flex-row'>
        <div className="flex-1 md:w-2/3">
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
         
         <div className='text-black font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {videoDetails.title}
        </div>

     <div className='flex justify-between flex-col md:flex-row mt-4'>
         <div className='flex'>
            <div className=' flex items-start'>
                 <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                     <img className="" src={videoDetails.channelPic} alt="channel-pic"/>
                 </div>
             </div>

             <div className='flex flex-col ml-3'>
                 <div className='text-black text-md font-semibold flex items-center'>
                   {videoDetails.channelTitle}
                 </div>

                 <div className='text-black/[0.7] text-sm'>
                    {videoDetails.subscriberCount ? `${abbreviateNumber(videoDetails.subscriberCount, 2)} subscribers` : ''}
                </div>

             </div>

             <div className='flex flex-row ml-5'>
                  <button className=' py-2 px-5 text-black bg-[#eeeeee] font-semibold rounded-r-full rounded-l-full mr-5'>Join</button>
                  <button className='bg-black py-2 px-5 text-white  font-semibold rounded-r-full rounded-l-full'>Subscribe</button>
             </div>

             <div className='flex text-black mt-4 md:mt-0 ml-[130px]'>
             <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-[#eeeeee]'>
              <AiOutlineLike className="text-xl text-black mr-2"/>
              <span className='cursor-pointer'>
             {`${abbreviateNumber(videoDetails.likeCount,2)} Likes`}
             </span>
             </div>

             <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-[#eeeeee] ml-[12px]'>
             <span className='cursor-pointer'>
             {`${abbreviateNumber(videoDetails.viewCount,2)} Views`}
             </span>
             </div>

         </div>

         </div>

     
     </div>

             {/* Display comments */}
             <div className="mt-[50px] w-[67%]">
                
                 <h2 className="text-xl font-bold mb-2">
                    {`${videoDetails.commentCount} Comments`}
                    </h2>
                    <div className='flex items-center'>
                    <div className='flex h-11 w-11 rounded-full overflow-hidden mt-[25px] mb-[30px]'>
                       <img  src={IMG_PROFILE} alt="channel-pic"/>   
                    </div>

                      <div className='flex w-full ml-5 h-1/2'>
                      <input className="w-full  border border-[#C7C9CE] border-t-0 border-l-0 border-r-0 border-b-1 placeholder:text-[#757575]  pb-2 font-semibold text-sm focus:outline-none focus:ring-0 focus:border-black" type="text" placeholder="Add a Comment..."/>
                      </div>
                    </div>
                    {comments.length === 0 ? (
                    <p>No comments available</p>
                ) : (
                    comments.map((comment, index) => (
                        <div key={index} className="mb-2 py-2  flex items-start line-clamp-2">
                            <img 
                    src={comment.profilePic} 
                    alt="Author profile"
                    className="w-11 h-11 rounded-full mr-5" 
                />
                <div>
                    <p className="font-semibold text-sm">{comment.author}</p>
                    <p className='text-sm'>{comment.text}</p>
                </div>
            </div>
                    ))
                )}

            </div>
            </div>


            {/* Suggested Videos Section */}
    <div className="w-full md:w-1/3 md:ml-5 mt-5 md:mt-0">
      <h3 className="text-lg font-bold mb-3">Suggested Videos</h3>
      {suggestedVideos.length === 0 ? (
        <p>No suggested videos available</p>
      ) : (
        suggestedVideos.map((video, index) => (
          <div key={index} className="flex mb-4">
            <img 
              src={video.thumbnail} 
              alt="Video thumbnail" 
              className="w-32 h-20 object-cover rounded-md mr-4"
            />
            <div>
              <p className="text-sm font-semibold line-clamp-2">{video.title}</p>
              <p className="text-xs text-gray-500">{video.channelTitle}</p>
              <p className="text-xs text-gray-500">{video.viewCount} views</p>
            </div>
          </div>
        ))
      )}
    </div>




     </div>

   
  )
}

export default WatchPage;