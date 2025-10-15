import React from 'react'

const Navbar = () => {
  return (
    <div className='md:py-6 md:px-12  mx-4 flex items-center justify-between'>
      <h4 className= 'my-2 bg-black uppercase text-white px-4 md:px-6 py-1 md:py-2 rounded-full '>Target Audience</h4>
      <button className='bg-gray-100 px-4 md:px-6 py-1 md:py-2 uppercase rounded-full tracking-widest text-sm'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar
