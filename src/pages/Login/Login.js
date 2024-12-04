import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Login = () => { 
  return (
    <div className='flex flex-col items-center w-3/4 max-w-screen-md gap-8  m-8    border rounded-lg bg-gray-800 mt-52  '>
    <nav class="w-full p-8 text-2xl" aria-label="Breadcrumb" >
       <ol class=" w-full justify-evenly inline-flex  flex-row  space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
        <div class="flex items-center">
            <Link to="LoginAsAttendee"  class="ms-1  font-medium text-gray-400  md:ms-2  hover:text-white active:text-white">As Attendee</Link>
         </div>
       </li>
       <li>
           <div class="flex items-center">
            <Link to="LoginAsOrganizer" class="ms-1  font-medium   md:ms-2 text-gray-400 hover:text-white active:text-white">As Organizer</Link>
            </div>
       </li>
       <li aria-current="page">
       <div class="flex items-center">
            <Link to="LoginAsFaculty"  class="ms-1  font-medium   md:ms-2 text-gray-400 hover:text-white active:text-whte">As Faculty</Link>
            </div>
       </li>
    </ol>
   </nav>
       <Outlet/>
   </div>
  )
} 
