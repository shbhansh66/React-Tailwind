import React from 'react'

const rightCardContent = () => {
  return (
   <div className='absolute top-0 left-0 w-full h-full  p-8 flex justify-between flex-col'>
            <h1 className="w-10 h-10 rounded-full bg-white font-semibold
 flex items-center justify-center ">1</h1>
            <div>
              <p className='mb-14 text-gray-200 text-lg leading-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae impedit nemo dolor rem ea, quia dolores magnam ducimus  accusantium repudiandae nesciunt. Repellat, minus.</p>
              <div className='flex justify-between'>
                <button  className='w-36 h-10 rounded-full bg-blue-500 font-semibold'>Satisfied</button>
                <button className='w-12 h-10 rounded-full bg-blue-500'>
                  <i class="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
            
        </div>
  )
}

export default rightCardContent
