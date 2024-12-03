import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Login = () => { 
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-10/12'>
   <nav class="w-full p-8 text-xl" aria-label="Breadcrumb " >
    <div className='flex justify-center items-center'>
        <ol class="w-8/12 flex flex-row justify-center items-center sparowce-x-1 md:space-x-2 rtl:space-x-reverse border-2 p-20 ">
         <li class="inline-flex items-center">
         <div class="flex items-center border-2 p-2 m-3 rounded-lg bg-slate-600">
             <Link to="loginAsAttendee"  class="ms-1  font-medium text-gray-400 md:ms-2  hover:text-white active:text-white">As Attendee</Link>
          </div>
        </li>
        <li>
            <div class="flex items-center border-2 p-2 m-3 rounded-lg bg-slate-600">
             <Link to="loginAsOrganizer" class="ms-1  font-medium   md:ms-2 text-gray-400 hover:text-white active:text-white">As Organizer</Link>
             </div>
        </li>
        <li aria-current="page">
        <div class="flex items-center border-2 p-2 m-3 rounded-lg bg-slate-600">
             <Link to="loginAsFaculty"  class="ms-1  font-medium  md:ms-2 text-gray-400 hover:text-white active:text-whte">As Faculty</Link>
             </div>
        </li>
     </ol>
     </div>
    </nav>
        <Outlet/>
    </div>
  )
} 
