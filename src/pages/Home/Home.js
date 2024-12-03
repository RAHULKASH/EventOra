import React from 'react'
import {HeroContainer} from "./components/HeroContainer";
import { PopularEvents } from './components/PopularEvents';
import { About } from '../About/About';

export const Home = () => {
  return (
    <div>

        <HeroContainer />
       
        <PopularEvents />
       
    </div>
  )
}
