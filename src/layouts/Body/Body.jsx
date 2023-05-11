
import React from 'react';

import {Routes, Route, Navigate} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Detail } from '../Detail/Detail';
import { Profile } from '../Profile/Profile';
import { Appointments } from '../Appointments/Appointments';
import { NewAppointment } from '../NewAppointment/NewAppointment';

export const Body = () => {

    return (

        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/detail" element={<Detail />}/>
                <Route path="/appointments" element={<Appointments />}/>
                <Route path="/newappointments" element={<NewAppointment />}/>
            </Routes>
        </>
    )
}