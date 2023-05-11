import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewAppointment.css";
import { bringDentists } from "../../services/apiCalls";

import { useSelector } from "react-redux";
import { userData } from "../userSlice";
//Bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import { Calendar } from "../../components/Calendar/Calendar";

export const NewAppointment = () => {
  //Instanciamos REDUX en modo lectura

  const userRdxData = useSelector(userData);

  const [dentists, setDentists] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    customerId: userRdxData.credentials.user.id,
    professionalId: "",
  });

  useEffect(() => {
    if (dentists.length === 0) {
      bringDentists()
        .then((results) => {
          setDentists(results.data);
        })
        .catch((error) => console.log(error));
    }
  }, [dentists]);

  useEffect(() => {
    console.log(orderInfo);
  }, [orderInfo]);

  const dropHandler = (pro) => {
    setOrderInfo((prevState) => ({
      ...prevState,
      professionalId: pro._id,
    }));
  };

  return (
    <div className="newAppointmentDesign">
      {dentists.length > 0 && (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            {dentists.map((professional) => {
              return (
                // <div key={professional.id}>
                <Dropdown.Item
                  key={professional._id}
                  href="#/action-1"
                  onClick={() => dropHandler(professional)}
                >
                  {professional.name}
                </Dropdown.Item>
                // </div>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      )}
    <Calendar />
    </div>
  );
};
