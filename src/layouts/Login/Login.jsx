import React, { useState, useEffect } from "react";
import "./Login.css";
import { InputText } from "../../components/InputText/InputText";
import { loginMeAgain } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

//Conexion a redux en modo escritura......
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export const Login = () => {
  //Instanciamos RDX...

  const dispatch = useDispatch();

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

  const logMeFunction = () => {
    loginMeAgain(credentials)
      .then((resultado) => {
        
        const decoded = jwt_decode(resultado);

        const datos = {
            token: resultado,
            rol: decoded.role
        }
        //Una vez tengo el token, lo guardo con el dispatch
        dispatch(login({ credentials: datos }));

        setMessage(`Bienvenido de nuevo mr.${decoded.role}`);
        //Nos vamos de aqui....

        setTimeout(() => {
          navigate("/");
        }, 2750);

      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

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
