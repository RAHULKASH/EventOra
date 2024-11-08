import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import {Home,EventList,EventDetails} from "../pages";
import { LoginAsOrganizer,LoginAsFaculty,LoginAsAttendee} from "../pages/Login";
import { RegisterAsOrganizer,RegisterAsFaculty,RegisterAsAttendee} from "../pages/Register";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' end element={<Home/>}/>
        <Route path='/eventList' end element={<EventList/>}/>
        <Route path='/eventDetails' end element={<EventDetails/>}/>
        <Route path='/login' element={<Login />}>
          <Route path="loginAsFaculty" element={<LoginAsFaculty/>} />
          <Route path="loginAsOrganizer" element={<LoginAsOrganizer/>} />
          <Route path="loginAsAttendee" end element={<LoginAsAttendee/>} />
        </Route>
        <Route path='/register' element={<Register />}>
          <Route path="registerAsFaculty" element={<RegisterAsFaculty/>} />
          <Route path="registerAsOrganizer" element={<RegisterAsOrganizer/>} />
          <Route path="registerAsAttendee" element={<RegisterAsAttendee/>} />
        </Route>
    </Routes>
  )
}

