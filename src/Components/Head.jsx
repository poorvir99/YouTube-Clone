import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faMicrophone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IMG_MENU, IMG_LOGO,IMG_PROFILE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head=()=>{
  const dispatch = useDispatch();
  const toggleMenuHandler=()=>{
      dispatch(toggleMenu())
  }
    return(
        <div className="grid grid-flow-col items-center mt-0 fixed top-0 right-0 left-0 z-50 bg-white">
           <div className="flex p-2 col-span-1 items-center pb-0 pt-0">
           
              <img 
              onClick={()=>toggleMenuHandler()}
              alt="menu" 
              className="h-7 mr-2 cursor-pointer ml-5 hover:bg-[#e9e9e9f7] rounded-full" 
               src={IMG_MENU}/> 
             <a href="/">
             <img alt="logo"
              className="h-16 "
              src={IMG_LOGO}/>
              </a>
           </div>

           <div className="col-span-8 text-center flex items-center justify-center cursor-pointer">
             <input className="w-1/2 border border-[#C7C9CE]  placeholder:text-[#A0A0A0] rounded-l-full p-2 pl-4 font-semibold focus:outline-none focus:ring-0 focus:border-blue-300" type="text" placeholder="Search"/>
             <button className="border border-r-[#C7C9CE] border-t-[#C7C9CE] border-b-[#C7C9CE] px-2 rounded-r-full p-2 w-[64px] mr-7 bg-gray-100 hover:bg-[#e9e9e9f7]"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

             <div className="col-span-1 pl-0">
              <FontAwesomeIcon className="h-5 bg-gray-100 px-3 py-2 rounded-full hover:bg-[#e9e9e9f7]" icon={faMicrophone} />
              </div>
           </div>

           <div className="flex items-center justify-around cursor-pointer">
              
              <div className=" col-span-1 bg-gray-100 px-3 py-1 rounded-r-full rounded-l-full hover:bg-[#e9e9e9f7]">
              <FontAwesomeIcon className="h-4 pr-1" icon={faPlus} /> Create
              </div>

              <div className=" col-span-1">
              <FontAwesomeIcon className="h-5" icon={faBell} />
              </div>

              <div className=" col-span-1">
                <img alt="user-icon"
                  className="h-8  rounded-full mr-2 "
                src={IMG_PROFILE}/>
              </div>
           </div>
        
        </div>
    )
}

export default Head;