import React from 'react'

const GoalLineItem = ({ goal }) => {

  return (
    <div className='flex flex-col justify-start bg-gray750 rounded-lg pl-4 ml-3 mr-3 gap-1.5 pt-3 pb-3'>
        {/* <h1 className='text-[14px]'>{goal.title}</h1> */}
        <h1 className='text-[14px]'>Goal Title</h1>
        
        <div className='bg-gray-700 rounded-xl h-[6px] mr-10'>

        </div>
        {/* Show due date if not null and < 100 days away. Change color of text based on time until due */}
        {goal.due && goal.due < 100 && <div>
            <p style={ {'font-size' : '12px'} }>DUE IN {goal.due} DAYS</p>
        </div>}
    </div>
  )
}

export default GoalLineItem