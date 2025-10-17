import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './rightCardContent.jsx'


const rightCard = () => {
  return (
    <div className='w-80 h-full bg-red-500 relative rounded-lg overflow-hidden shrink-0 '>
        <img className='h-full w-full object-cover ' src="https://plus.unsplash.com/premium_photo-1661576762314-388502b67042?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNpb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="woking women" />
       <RightCardContent/>
       
      
    </div>
  )
}

export default rightCard
