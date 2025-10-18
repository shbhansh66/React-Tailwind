import React from 'react'
import Rightcard from './rightCard.jsx'

const rightcontent = (props) => {
  return (
    <div id="right" className='h-[80vh] w-3/4 rounded-4xl p-5 flex gap-10 flex-nowrap overflow-auto'>
    {
      props.users.map(function(elem,idn){
  return <Rightcard key={idn} color={elem.color} id={idn} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })
    }
  
    
    </div>
  )
}

export default rightcontent
