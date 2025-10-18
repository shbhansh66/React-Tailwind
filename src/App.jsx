import React from 'react'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'

const App = () => {
  
  const users=[
    {
      color:'blue',
      img:'https://plus.unsplash.com/premium_photo-1688822011902-55a31e5a17a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse ipsam possimus aut cum animi.',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse ipsam possimus aut cum animi.',
      color:'yellow',
      tag:'Unsatisfied'
    },
     {
      color:'blue',
      img:'https://plus.unsplash.com/premium_photo-1688822011902-55a31e5a17a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse ipsam possimus aut cum animi.',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse ipsam possimus aut cum animi.',
      tag:'Satisfied',
      color:'green'
    },
    {
      img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse ipsam possimus aut cum animi.',
      tag:'Unsatisfied',
      color:'red'
    },
  ]
  return (
    <div >
     <Section1 users={users}/>
     <Section2/>
    </div>
  )
}

export default App
