
import React from 'react';
import './Header.css';

import {useNavigate} from 'react-router-dom';

export const Header = () => {

    //Instancio useNavigate para poder navegar..

    const navigate = useNavigate();

    return (
        <div className='headerDesign'>
            <div className='link' onClick={()=>navigate('/')}>home</div>
            <div className='link' onClick={()=>navigate('/login')}>login</div>
            <div className='link' onClick={()=>navigate('/register')}>register</div>
        </div>
    )
}