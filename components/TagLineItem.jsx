import React from 'react'

const TagLineItem = ({ tag }) => {

  return (
    <div className='flex flex-col justify-start bg-gray750 rounded-lg pl-4 ml-3 mr-3 gap-1.5 pt-3 pb-3'>
        <h1 className='text-[14px]'>{tag.title}</h1>
        
        <div className='bg-gray-700 rounded-xl h-[6px] mr-10'>

        </div>
        {/* Show due date if not null and < 100 days away. Change color of text based on time until due */}
        {tag.due_date && tag.due_date < 100 && <div>
            <p style={ {'font-size' : '12px'} }>DUE IN {tag.due_date} DAYS</p>
        </div>}
    </div>
  )
}

export default TagLineItem