import React from 'react'
import Left from './leftcontent.jsx'
import Right from './rightcontent.jsx'

const page1content = (props) => {
  return (
    <div className='h-[90vh]  my-1 w-full  p-2 flex items-center justify-between gap-4'>
     <Left/>
     <Right users={props.users}/>
    </div>
  )
}

export default page1content
