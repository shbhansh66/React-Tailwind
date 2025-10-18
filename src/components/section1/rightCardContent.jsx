import React from 'react'

const rightCardContent = (props) => {
 
  return (
   <div className='absolute top-0 left-0 w-full h-full  p-8 flex justify-between flex-col'>
            <h1 style={{backgroundColor:props.color}} className="w-10 h-10 rounded-full font-semibold
 flex items-center justify-center ">{props.id+1}</h1>
            <div>
              <p className='text-shadow-2xs mb-14 text-gray-200 text-lg leading-normal '>{props.intro}</p>
              <div className='flex justify-between'>
                <button  style={{backgroundColor:props.color}} className='w-36 h-10 rounded-full  font-semibold'>{props.tag}</button>
                <button className='w-12 h-10 rounded-full bg-blue-500'>
                  <i class="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
            
        </div>
  )
}

export default rightCardContent
