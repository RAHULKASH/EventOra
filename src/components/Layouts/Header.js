import logo from "../../assets/images/EventOra_logo.jpg";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { useRef } from "react";

export const Header = () => {

  const boxRef = useRef()

useGSAP(()=>{
    gsap.from(boxRef.current,{
      scale:0,
      duration:1,
      delay:1,
      opacity:0
    })
})


  return (
    <nav ref={boxRef} className=" absolute w-full flex-wrap min-h-20 flex gap-6 flex-row justify-between text-white items-center p-4 ">
       <div className=" flex flex-row items-center gap-4">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <p className="text-3xl font-sans">EventOra</p>
       </div>
       <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <Link to="/" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Home</span>
            </span>
          </Link>
          <Link to="eventList" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Events</span>
            </span>
          </Link>
          <Link to="login" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Login</span>
            </span>
          </Link>
          <Link  to="register" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Register</span>
            </span>
          </Link>
       </div>

    </nav>
  )
}

