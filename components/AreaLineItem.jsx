import React from 'react'

const AreaLineItem = ({ area, areaIcon }) => {
  return (
    <div className='flex flex-row justify-start items-center space-x-4 pl-8 pr-8'>
        {areaIcon}
        <p>{area.title}</p>
    </div>
  )
}

export default AreaLineItem