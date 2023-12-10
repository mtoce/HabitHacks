'use client'
import React from 'react'
import Image from 'next/image'
import MeditationIcon from '@/public/Meditation.svg'
import FireIcon from '@/public/Fire.svg'
import BanIcon from '@/public/Ban.svg'



const HabitCard = () => {
  return (
    <div className='flex flex-row items-center justify-between w-[350px] h-[100px] bg-neutral-900 rounded-md'>
        {/* Left div, containing the habit logo */}
        <div className='flex items-center flex-center pl-4'>
            <MeditationIcon width={50} height={50} color="#FFD700"/>
        </div>
        {/* Middle div, for what habit this current one will follow (if user opted in), the current habit name, and a motivational message based on the user's streak with the current habit */}
        <div className='flex flex-col items-start'>
            {/* To Do: Make p be the user input from the new habit form or do not include */}
            <p className='text-[10px]'>
                After I make my bed...
            </p>
            {/* To Do: Make the Habit name be the selected habit from the new habit form or the new created habit from the create habit form */}
            <h3 className='text=[20px]'>
                Meditation
            </h3>
            {/* A motivational message to the user that adjusts based on the user's streak with the current habit. To Do: Create different messages based on the streaks and dynamically import them into the p tag below */}
            <p className='text-[10px]'>
                Keep it up!
            </p>
        </div>
        {/* Right div, containing the Streak logo (fire or ban icon) & the streak number, above the check box for the habit allowing the user to mark the current habit as completed */}
        <div className='flex flex-col items-center pr-4'>
            <div className='flex flex-row'>
                {/* To Do: Adjust Streak logo to change based on the user's streak (fire if positive, ban if habit previously skipped) */}
                <FireIcon width={25} height={25} color="#800E00" />
                {/* To Do: dynamically adjust based on user's current streak with the current habit */}
                <p className='text-[25px] text-[#800E00]'>3</p>
            </div>
            <div className='flex flex-row gap-2'>
                {/* Change p tag to be either "to do" or "Done" depending on if the user has checked the box or not */}
                <p className='text-[10px]'>
                    To Do
                </p>
                {/* To Do: Update this checkbox to adjust the state of current habit and thus change the appearance of the card depending on the state */}
                <input type='checkbox' className='width-[25px] height-[25px]'/>
            </div>
        </div>
    </div>
  )
}

export default HabitCard