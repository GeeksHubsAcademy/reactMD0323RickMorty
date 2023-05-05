

import React, {useState, useEffect} from 'react';
import './Login.css';
import { InputText } from '../../components/InputText/InputText';

export const Login = () => {

    //Hook
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const inputHandlerFunction =(e)=>{
        
        setCredentials((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))

    }

    useEffect(()=>{

        console.log(credentials);

    },[credentials]);

    return(
        <div className='loginDesign'>
            <InputText 
                type={"email"}
                className={"basicInput"}
                placeholder={""}
                name={"email"}
                handler={inputHandlerFunction}          
            />

            <InputText 
                type={"password"}
                className={"basicInput"}
                placeholder={""}
                name={"password"}
                handler={inputHandlerFunction}          
            />
        </div>
    )
}