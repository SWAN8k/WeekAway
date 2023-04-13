import React from 'react'

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className="relative p-4 cursor-pointer">
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl'>Resort</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2070&q=60" alt="/" />
      </div>

      <div className="relative p-4 cursor-pointer">
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl'>Cruises</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=60" alt="/" />
      </div>

      <div className="relative p-4 cursor-pointer">
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl'>Excursions</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODB8OTI5NzI2Nzd8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=60" alt="/" />
      </div>
    </div>
  )
}

export default Activities
