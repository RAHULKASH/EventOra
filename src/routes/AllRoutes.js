import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import {Home,EventList,EventDetails} from "../pages";
import {About}from "../pages/About/About"
import {CreateEvents} from '../pages/CreateEvents/CreateEvents'
import { LoginAsOrganizer,LoginAsFaculty,LoginAsAttendee} from "../pages/Login";
import { RegisterAsOrganizer,RegisterAsFaculty,RegisterAsAttendee} from "../pages/Register";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' end element={<Home/>}/>
        <Route path='/about' end element={<About/>}/>
        <Route path='/eventList'  element={<EventList/>}/>
        <Route path='/eventDetails'  element={<EventDetails/>}/>
        <Route path='/login' element={<Login />}>
          <Route path="loginAsFaculty" end element={<LoginAsFaculty/>} />
          <Route path="loginAsOrganizer" element={<LoginAsOrganizer/>} />
          <Route path="loginAsAttendee" end element={<LoginAsAttendee/>} />
        </Route>
        <Route path='/register' element={<Register />}>
          <Route path="registerAsFaculty" end element={<RegisterAsFaculty/>} />
          <Route path="registerAsOrganizer" element={<RegisterAsOrganizer/>} />
          <Route path="registerAsAttendee" element={<RegisterAsAttendee/>} />
        </Route>
    </Routes>
  )
}

