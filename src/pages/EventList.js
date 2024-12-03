import React, { useEffect } from 'react';
import { EventCard } from "../components";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export const EventList = () => {
  const cardref = useRef()
  // useEffect(()=>{
    
  //     gsap.from(cardref.current,{
  //       scale:0,
  //       duration:1,
  //       opacity:0,
  //       // ScrollTrigger:{
  //       //   trigger:cardref,
  //       //   start: "top 75%",
  //       //   end: "bottom 25%",
  //       //   scrub: true,
  //       //   markers: true,
  //       // }
  //   })
  // },[])
  useGSAP(()=>{
    gsap.from(cardref.current,{
      scale:0,
      duration:1,
      opacity:0,
      ScrollTrigger:{
        trigger:cardref.current,
        start: "top 20%",
        end: "bottom 25%",
        scrub: true,
        markers: true,
      }
  })

  })
  gsap.from(cardref.current,{
    scale:0,
    duration:1,
    opacity:0,
    // ScrollTrigger:{
    //   trigger:cardref,
    //   start: "top 75%",
    //   end: "bottom 25%",
    //   scrub: true,
    //   markers: true,
    // }
})
 

  return (
    <div  className='flex flex-col items-center p-8 '>
    <nav  class="flex" aria-label="Breadcrumb " className='p-8 text-4xl'>
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
         <li class="inline-flex items-center">
         <div class="flex items-center">
             <button  class="ms-1  font-medium  md:ms-2 text-gray-400 hover:text-white active:text-white">Past Events</button>
          </div>
        </li>
        <li>
            <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
             <button class="ms-1  font-medium  md:ms-2 text-gray-400 hover:text-white active:text-white">Upcoming Events</button>
             </div>
        </li>
        <li aria-current="page">
        <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
             <button  class="ms-1  font-medium   md:ms-2 text-gray-400 hover:text-white active:text-whte">Current Events</button>
             </div>
        </li>
     </ol>
    </nav>

    <div ref={cardref} className='flex flex-row flex-wrap gap-12 justify-center items-center py-16 list-none'>
      <li >
      <EventCard/>
      </li>
      <li>
      <EventCard/>
      </li>
      <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li> <li>
      <EventCard/>
      </li>
    </div>
    </div>
  )
}
