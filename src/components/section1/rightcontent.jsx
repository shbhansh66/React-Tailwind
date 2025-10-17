import React from 'react'
import Right from './rightCard.jsx'

const rightcontent = () => {
  return (
    <div className='h-[80vh] w-3/4 rounded-4xl p-5 flex gap-10 flex-nowrap overflow-auto'>
    <Right/>
    <Right/>
    <Right/>
    <Right/>
    <Right/>
    </div>
  )
}

export default rightcontent
