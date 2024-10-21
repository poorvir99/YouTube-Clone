import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({name}) => {
  return (
    <div>
        {/* <button className='px-4 py-1 m-2 bg-black text-white rounded-md'>All</button> */}
        <button className='px-4 py-1 m-2 ml-4  bg-gray-100 text-black font-semibold rounded-lg hover:bg-[#e9e9e9f7]'><Link to="/">{name}</Link></button>
       
    </div>
  )
}

export default Button;