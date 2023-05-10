import React, { useEffect } from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";

//Conexion a RDX en modo lectura
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../../layouts/userSlice";

export const Header = () => {
  //Instancio la conexion a RDX en modo lectura....
  const datosUserRedux = useSelector(userData);

  //Instancio la conexion a RDX en modo escritura....

  const dispatch = useDispatch();

  useEffect(()=>{
      console.log(datosUserRedux, "tioooooooooooo")
  })

  //Instancio useNavigate para poder navegar..

  const navigate = useNavigate();

  //Funcion de logout

  const logMeOut = () => {
    dispatch(logout({ credentials: {}}));

    setTimeout(()=>{
      navigate("/");
    },500)
  }

  return (
    <div className="headerDesign">
      {!datosUserRedux?.credentials?.token ? (
        <div>
          <div className="link" onClick={() => navigate("/")}>
            home
          </div>
          <div className="link" onClick={() => navigate("/login")}>
            login
          </div>
          <div className="link" onClick={() => navigate("/register")}>
            register
          </div>
        </div>
      ) : (
        <div>
          <div className="link" onClick={() => navigate("/")}>
            home
          </div>
          <div className="link" onClick={() => navigate("/profile")}>
            {datosUserRedux.credentials.rol}
          </div>
          <div className="link" onClick={()=> logMeOut()}>logout</div>
        </div>
      )}
    </div>
  );
};
