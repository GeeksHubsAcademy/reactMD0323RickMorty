import React, { useState, useEffect } from "react";
import "./Login.css";
import { InputText } from "../../components/InputText/InputText";
import { loginMeAgain } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

//Conexion a redux en modo escritura......
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";

export const Login = () => {
  //Instanciamos RDX en modo escritura

  const dispatch = useDispatch();

  //Instanciamos RDX en modo lectura

  const userRdxData = useSelector(userData);

  //Instanciamos Navigate

  const navigate = useNavigate();

  //Hook
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const inputHandlerFunction = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(()=>{
    if(userRdxData.credentials.token){
      navigate("/")
    };
  },[]);

  // useEffect(() => {
  //   console.log(credentials);
  // }, [credentials]);



  const logMeFunction = () => {
    loginMeAgain(credentials)
      .then((resultado) => {
        
        const decoded = jwt_decode(resultado.data.token);

        const datos = {
            token: resultado.data.token,
            user: decoded
        }
        //Una vez tengo el token, lo guardo con el dispatch
        dispatch(login({ credentials: datos }));

        setMessage(`Bienvenido de nuevo mr.${decoded.email}`);
        //Nos vamos de aqui....

        setTimeout(() => {
          navigate("/");
        }, 2750);

      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginDesign">
      {message != "" ? (
        <div>{message}</div>
      ) : (
        <div>
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

          <div className="loginButtonDesign" onClick={() => logMeFunction()}>
            Login!
          </div>
        </div>
      )}
    </div>
  );
};
