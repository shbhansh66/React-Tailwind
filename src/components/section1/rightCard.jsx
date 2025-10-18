import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './rightCardContent.jsx'


const rightCard = (props) => {
  return (
    <div className='w-80 h-full  relative rounded-lg overflow-hidden shrink-0 '>
        <img className='h-full w-full object-cover ' src={props.img} alt="woking women" />
       <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro}/>
       
      
    </div>
  )
}

export default rightCard
