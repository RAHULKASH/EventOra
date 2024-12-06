import React from 'react'
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const CreateEvents = () => {
  return (
    <div className='text-white pt-28 w-full'>
      <main>
      <div className='text-white flex '>
          <p className='flex '>Create Events</p>
          <span className='pt-1 pl-2 '>
            <Link to="create_event_form"><IoAdd/></Link>
            
            </span>
      </div>
      </main>
      
      
      
    </div>
  )
}
