import React, { useState, useEffect } from "react";
import "./Profile.css";

import { useSelector } from "react-redux";
import { userData } from "../userSlice.js";

import { useNavigate } from "react-router-dom";
import { bringUserProfile } from "../../services/apiCalls.js";

export const Profile = () => {
  const [datosPerfilUser, setDatosPerfilUser] = useState({});

  //Instancio conexion a RDX en modo lectura

  const userRdxData = useSelector(userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userRdxData.credentials.token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    bringUserProfile()
      .then((results) => {
        setDatosPerfilUser(results.data);
      })
      .catch((error) => console.log(error));
  }, [datosPerfilUser]);

  return (
    <div className="profileDesign">
      {datosPerfilUser.id !== "" ? (
        <div>{datosPerfilUser.name}</div>
      ) : (
        <div>CARGANDO</div>
      )}
    </div>
  );
};
