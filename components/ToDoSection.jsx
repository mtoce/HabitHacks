'use client'
import React from 'react'
import { FaCircleArrowRight, FaCircleCheck, FaHouseChimney, FaBriefcase, FaGraduationCap, FaBasketShopping, FaClapperboard, FaPersonRunning } from "react-icons/fa6";
import AreaLineItem from './AreaLineItem';
import TagLineItem from './TagLineItem';

const ToDoSection = ({ areas, tags }) => {
  return (
    <section className='flex flex-row w-full'>
        <div className='flex flex-col bg-gray-800 h-screen'>
            <div className='w-full flex flex-col pt-12 pb-12 gap-6'>
                <AreaLineItem 
                    area={areas[0]}
                    areaIcon={<FaCircleArrowRight size={20} />}
                />
                <AreaLineItem 
                    area={areas[1]}
                    areaIcon={<FaCircleCheck size={20} />}
                />
            </div>
            <div className='w-full flex flex-col gap-6'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>AREAS OF LIFE</h1>
                {/* TODO: Only render Areas which the User has toDoLineItems with */}
                <AreaLineItem 
                    area={areas[2]}
                    areaIcon={<FaHouseChimney size={20} />}
                />
                <AreaLineItem 
                    area={areas[3]}
                    areaIcon={<FaBriefcase size={20} />}
                />
                <AreaLineItem 
                    area={areas[4]}
                    areaIcon={<FaGraduationCap size={20} />}
                />
                <AreaLineItem 
                    area={areas[5]}
                    areaIcon={<FaBasketShopping size={20} />}
                />
                <AreaLineItem 
                    area={areas[6]}
                    areaIcon={<FaClapperboard size={20} />}
                />
                <AreaLineItem 
                    area={areas[7]}
                    areaIcon={<FaPersonRunning size={20} />}
                />
            </div>
            <div className='flex flex-col pt-12 gap-2'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>GOALS IN "HOME"</h1>
                <TagLineItem tag={tags[0]}/>
                <TagLineItem tag={tags[1]}/>
                <TagLineItem tag={tags[2]}/>
                <TagLineItem tag={tags[3]}/>
            </div>
        </div>
        <div className='flex flex-col bg-gray-900'>
            <h1>Checklist here</h1>
        </div>
    </section>
  )
}

export default ToDoSection