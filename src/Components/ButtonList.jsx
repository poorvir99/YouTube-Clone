import React from 'react';
import Button from './Button';


//build a scrollbar

const lists = ["All", "News", "Podcasts", "Music", "Gaming", "Live", "JavaScript", "React", "Cricket", "NASA", "India", "Thoughts", "Goa", "New"];

const ButtonList = () => {
  
  return (
    <div className='flex '>
      {
        lists.map((name,index)=>(
          <Button key={index} name={name}/>
        ))
      }
    </div>
  )
}

export default ButtonList;