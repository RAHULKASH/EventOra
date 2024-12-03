import logo from "../../assets/images/EventOra_logo.jpg";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { useRef } from "react";

export const Header = () => {

  const boxRef = useRef()

useGSAP(()=>{
    gsap.from(boxRef.current,{
      y:-100,
      duration:1,
      delay:0.5,
      opacity:0,

    })
})


  return (
    <nav ref={boxRef} className="  absolute w-full flex-wrap min-h-20 flex gap-6 flex-row justify-between text-white items-center p-4 ">
       <div className=" flex flex-row items-center gap-4">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <p className="text-3xl font-bold">EventOra</p>
       </div>
       <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <Link to="/" class="">
            
            <span class="relative px-5 py-2 transition-all ease-out group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-l font-bold">Home</span>
            </span>
          </Link>
          <Link to="about" >
          <span class="relative px-5 py-2 transition-all  ease-out group-hover:bg-opacity-0 duration-400">
          <span class="relative text-white  text-l font-bold">About</span>
          </span>
          </Link>
          <Link to="eventList" class="">
            
            <span class="relative px-5 py-2 transition-all ease-out group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white  text-l font-bold">Events</span>
            </span>
          </Link>
          <Link to="login" >
            
            <span class="relative px-5 py-2 transition-all ease-out group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white  text-l font-bold">Login</span>
            </span>
          </Link>
          <Link  to="register" >
            
            <span class="relative px-5 py-2 transition-all ease-out group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white  text-l font-bold">Register</span>
            </span>
          </Link>
       </div>

    </nav>
  )
}

