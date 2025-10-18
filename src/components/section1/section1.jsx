import React from 'react'
import Navbar from './Navbar'
import Page1content from './page1content.jsx'

const section1 = (props) => {
  return (
    <div className='h-screen w-full '>
    <Navbar/>
    <Page1content users={props.users}/>
    </div>
  )
}

export default section1
