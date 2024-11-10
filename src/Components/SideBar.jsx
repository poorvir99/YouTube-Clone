import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faClockRotateLeft ,faPlay, faClock,faThumbsUp,faFire,faBagShopping, faMusic, faVideo, faFilm, faGamepad, faTrophy, faPodcast, faBasketShopping, faRss, faLayerGroup, faListCheck, faGear, faQuestion} from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faFlag, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { IMG_SUB1_URL,IMG_SUB2_URL, IMG_SUB3_URL } from '../utils/constant';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const SideBar=()=>{

    const isMenuOpen =useSelector(store=>store.app.isMenuOpen);
    
    //early return pattern
    if(!isMenuOpen) return null;

    return(
        <div className='p-5 w-64 pt-0 mt-0 cursor-pointer fixed top-15 left-0 h-screen overflow-y-auto  no-scrollbar bg-white'>
            <ul>
                <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'>
                    <FontAwesomeIcon icon={faHouse} className={`${isMenuOpen ? 'text-xl' : 'text-sm'}`} />
                    <li className={`${isMenuOpen ? 'px-5 py-3' : 'px-2 py-1'}`}><Link to="/">Home</Link></li>
                </div>
                <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md  px-3'>
                    <FontAwesomeIcon icon={faVideo} /><li className='px-5 py-3'>
                    <Link to="https://www.youtube.com/shorts/hq7EJRgJXog">Shorts</Link></li>  
                </div>
                <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md  px-3'>
                    <FontAwesomeIcon icon={faLayerGroup} /><li className='px-5 pt-3 pb-5'>
                    <Link to="https://www.youtube.com/feed/subscriptions">Subscriptions</Link></li>
                </div> 
            </ul>
            <hr></hr>
            

            
            <h2 className='font-semibold pt-4 pb-1 hover:bg-[#e9e9e9f7] hover:rounded-md px-3'>You<span className='px-2 font-thin'>&#62;</span></h2>
            <ul>
                <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faClockRotateLeft} /> <li className='px-5 py-3'><Link to="https://www.youtube.com/feed/history">History</Link></li> </div>
                <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3 '><FontAwesomeIcon icon={faPlay} /> <li className='px-5 py-3'><Link to="https://www.youtube.com/feed/playlists">Playlists</Link></li></div> 
                 <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon= {faClock} /> <li className='px-5 py-3'><Link to="https://www.youtube.com/playlist?list=WL">Watch later</Link></li></div>
                 <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faThumbsUp} /> <li className='px-5 pt-3 pb-5'><Link to="https://www.youtube.com/playlist?list=LL">Liked videos</Link></li></div>
                
            </ul>

            <hr></hr>
            
            <h2 className='font-semibold pt-4 pb-1'>Subscriptions</h2>
            <ul>
              <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'> <img alt="img" className="w-6 rounded-full" src={IMG_SUB1_URL}/> <li className='px-5 py-3'><Link to="https://www.youtube.com/@Netflix">Netflix</Link></li></div> 
              <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'> <img alt="img" className='w-6 rounded-full' src={IMG_SUB2_URL}/> <li className='px-5 py-3'><Link to="https://www.youtube.com/@PogoChannel">pogo</Link></li></div> 
              <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'> <img  alt="img" className='w-6 rounded-full' src={IMG_SUB3_URL}/> <li className='px-5 py-3'><Link to="https://www.youtube.com/@SpaceX">SpaceX</Link></li></div> 
                <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faListCheck} /><li className='px-5 pt-3 pb-5'><Link to="https://www.youtube.com/feed/channels">All subscriptions</Link></li></div> 
            </ul>

            <hr></hr>
            
                <h2 className='font-semibold pt-4 pb-1'>Explore</h2>
                <ul>
                    <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faFire} /><li className='px-5 py-3'><Link to="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl">Trending</Link></li></div>
                    <div className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faBagShopping} /><li className='px-5 py-3'><Link to="https://www.youtube.com/channel/UCkYQyvc_i9hXEo4xic9Hh2g">Shopping</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faMusic} /><li className='px-5 py-3'><Link to="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">Music</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faFilm} /><li className='px-5 py-3'><Link to="https://www.youtube.com/feed/storefront?bp=ogUCKAU%3D">Movies</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faRss}/> <li className='px-5 py-3'><Link to="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig">Live</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faGamepad} /><li className='px-5 py-3'><Link to="https://www.youtube.com/gaming">Gaming</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faNewspaper} /> <li className='px-5 py-3'><Link to="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">News</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faTrophy} /><li className='px-5 py-3'><Link to="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">Sports</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faBasketShopping}/><li className='px-5 py-3'><Link to="https://www.youtube.com/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ">Fashion &#38; Beauty</Link></li></div>
                    <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faPodcast} /><li className='px-5 pt-3 pb-5'><Link to="https://www.youtube.com/podcasts">Podcasts</Link></li></div>  
                
                </ul>

                <hr></hr>

                <ul className='pt-5'>
                <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faGear}/> <li className='px-5 py-3'><Link to="https://www.youtube.com/account">Settings</Link></li></div>
                <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faFlag}/> <li className='px-5 py-3'><Link to="https://www.youtube.com/reporthistory">Report history</Link></li> </div>
                <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faQuestion}/> <li className='px-5 py-3'><Link to="/">Help</Link></li> </div>
                <div  className='flex items-center hover:bg-[#e9e9e9f7] hover:rounded-md px-3'><FontAwesomeIcon icon={faCommentDots}/> <li className='px-5 pt-3 pb-5'><Link to="/">Send feedback</Link></li> </div>
                
                </ul>

                <hr></hr>

                <div className='pt-2 pb-20'>
                    <p className='text-sm pt-3 px-3 text-[#808080] font-semibold'><Link to="https://www.youtube.com/t/contact_us/">About Press Copyright Contact us Creators Advertise Developers</Link> </p>
                    <p className='text-sm pt-3 px-3 text-[#808080] font-semibold'><Link to="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"> Terms Privacy Policy & Safety How YouTube works Test new features</Link></p>
                    <p className='text-xs pt-3 text-[#A0A0A0] px-3 font-semibold '>© 2024 Google LLC</p>
                    <p className='text-xs pt-3 text-[#A0A0A0] px-3 font-semibold '>Clone by <Link to="https://github.com/poorvir99/YouTube-Clone"><span className='text-black'>Poorvi R</span></Link></p>
                </div>
            
        </div>
    )
}

export default SideBar; 