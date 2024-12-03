import React from 'react';
import { EventCard } from '../../../components';
import gsap from "gsap";
import{ useGSAP} from "@gsap/react";
import { useRef } from 'react';



export const PopularEvents = () => {
  const helo = useRef();
  useGSAP(()=>{
    gsap.from(helo.current,{
      scale:0,
      duration:1,
      delay:1,
      opacity:0,
      ease:'elastic.out(1,0.3)',
      stagger:0.2,
      yoyo:true,

    })
    
})


  return (
    <div className='flex flex-col p-16 items-center'>
        <p className='self-ceter text-4xl my-8 text-white'>Popular Events</p>
        <div  className='flex flex-row gap-12 flex-wrap max-w-7xl justify-center list-none py-4'>
          <li ref={helo}>
            <EventCard/>
            </li>
            <li ref={helo}>
            <EventCard/>
            </li>
            <li ref={helo}>
            <EventCard/>
            </li>
            <li ref={helo}>
            <EventCard/>
            </li>
            <li ref={helo}>
            <EventCard/>
            </li>
            <li ref={helo}>
            <EventCard/>
            </li>
        </div>
    </div>
  )
}
