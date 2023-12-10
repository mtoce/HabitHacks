"use server"

import React from 'react'
import Fire from '@/fire.svg'
import Meditation from '@/meditation.svg'
import Ban from '@/ban.svg'
import Bed from '@/bed.svg'
import Dumbbell from '@/dumbbell.svg'

// Create a Form for a user to create a new Habit from scratch.
const NewHabitForm = () => {

  // toggle list function to control the state of the site whether the list is open or not.
  // toggleList = () => {
  //   this.setState(prevState => ({
  //     isListOpen: !prevState.isListOpen
  //   }))
  // }



  return (
    <div>
      <h1>Create Your own</h1>
      <div className='flex flex-column'>
        <input placeholder="Name" type="text" />
        <input placeholder="Description" type="text" />
      </div>
      <div className='flex flex-row'>
        {/* Choose Icon Div */}
        <div>
          <select name="iconList" id="iconList">
            <option value="fire">
              <Fire color="#800E00" />
            </option>
            <option value="meditation">
              <Meditation color="#FFD700" />
            </option>
            <option value="ban">
              <Ban color="#0072A0" />
            </option>
            <option value="bed">
              <Bed color="#D9D9D9" />
            </option>
            <option value="meal">
              <Meal color="#FC641B" />
            </option>
            <option value="dumbbell">
              <Dumbbell color="#FC641B" />
            </option>
          </select>
        </div>
        {/* Choose Color Div */}
        <div>

        </div>
        {/* Choose Sound Div */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default NewHabitForm