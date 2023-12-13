'use client'
import React from 'react'
import { FaCircleArrowRight, FaCircleCheck, FaHouseChimney, FaBriefcase, FaGraduationCap, FaBasketShopping, FaClapperboard, FaPersonRunning } from "react-icons/fa6";
import AreaLineItem from './AreaLineItem';
import TagLineItem from './TagLineItem';

const ToDoSection = ({ areas, tags }) => {
    initItems = [
        {
            "id": 1,
            "checked": false,
            "item": "Define the website's purpose and goals",
            "tag": "website",
            "area": "work",
            "due": null,
            "priority": "highest",
            "status": "started",
        },
        {
            "id": 2,
            "checked": false,
            "item": "Set a budget and timeline for the project",
            "tag": "website",
            "area": "work",
            "due": null,
            "priority": "highest",
            "status": "next",
        },
        {
            "id": 3,
            "checked": false,
            "item": "Perform security checks and implement necessary measures",
            "tag": "website",
            "area": "work",
            "due": null,
            "priority": "low",
            "status": "next",
        },
    ]
    // useEffect(() => {
    //   try {
    //     const response = await fetch(URL)
    //   }
    //   catch (err) {
        
    //   } finally {

    //   }
    // }, [])
    
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
                <h1 className='pl-8 text-gray-400 text-[12px]'>GOALS IN "WORK"</h1>
                <TagLineItem tag={tags[0]}/>
                <TagLineItem tag={tags[1]}/>
                <TagLineItem tag={tags[2]}/>
                <TagLineItem tag={tags[3]}/>
            </div>
        </div>
        <div className='flex flex-col bg-gray-900'>
            <h1>Checklist here</h1>
            <div className='started '>
                
            </div>
            {/* <div className='next'>

            </div>
            <div className='later'>

            </div> */}
        </div>
    </section>
  )
}

export default ToDoSection