"use client"

import React from 'react'
import { FaList, FaBookOpen, FaNoteSticky, FaChartSimple, FaMagnifyingGlass, FaCloud, FaCloudBolt, FaCloudMoon, FaCloudRain, FaCloudShowersHeavy, FaCloudSun, FaCloudSunRain, FaSun, FaSnowflake, FaCirclePlus } from "react-icons/fa6";
// import { BsCloudSnowFill, BsCloudSleetFill } from "react-icons/bs";
import { FaCog, FaAngry, FaDizzy, FaGrimace, FaGrin, FaGrinAlt, FaGrinBeam, FaGrinBeamSweat, FaGrinHearts, FaGrinSquint, FaGrinSquintTears, FaGrinStars, FaGrinTongue, FaGrinTongueSquint, FaGrinTongueWink, FaGrinWink, FaSadCry, FaSadTear, FaSmile, FaSmileBeam, FaSmileWink } from "react-icons/fa";


const Nav = () => {
  return (
    <nav className='flex flex-col items-center justify-between bg-gray-700 w-20 pt-10 pb-10 h-screen'>
        <div className='flex flex-col space-y-8 align-items'>
            <FaList size={25} fill="white"/>
            <FaChartSimple size={25} fill="white"/>
            <FaNoteSticky size={25} fill="white"/>
            <FaBookOpen size={25} fill="white"/>
            <FaMagnifyingGlass size={25} fill="white" />
        </div>
        <div className='flex flex-col items-center space-y-8 align-items'>
            {/* TODO: display user's current weather, instead of default "sun" */}
            <FaSun size={25} fill="white"/>
            {/* <FaCloud size={25} />
            <FaCloudBolt size={25} />
            <FaCloudMoon size={25} />
            <FaCloudRain size={25} />
            <FaCloudShowersHeavy size={25} />
            <FaCloudSun size={25} />
            <FaCloudSunRain size={25} />
            <FaSnowflake size={25} /> */}
            {/* TODO: display user's current mood, instead of default */}
            <FaSmileWink size={25} fill="white"/>
            {/* <FaAngry size={25} />
            <FaDizzy size={25} />
            <FaGrimace size={25} />
            <FaGrin size={25} />
            <FaGrinAlt size={25} />
            <FaGrinBeam size={25} />
            <FaGrinBeamSweat size={25} />
            <FaGrinHearts size={25} />
            <FaGrinSquint size={25} />
            <FaGrinSquintTears size={25} />
            <FaGrinStars size={25} />
            <FaGrinTongue size={25} />
            <FaGrinTongueSquint size={25} />
            <FaGrinTongueWink size={25} />
            <FaGrinWink size={25} />
            <FaSadCry size={25} />
            <FaSadTear size={25} />
            <FaSmile size={25} />
            <FaSmileBeam size={25} /> */}
            <FaCog size={25} fill="white"/>
            <FaCirclePlus size={35} fill="white"/>
        </div>
    </nav>
  )
}

export default Nav