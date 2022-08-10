import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
   
    <div className="container m-auto">
		<div className="row py-3">
      <h1>Perfil Usuario/Taller</h1>

      <p>*Bootstrap
      Input: Nombre
      
      Es taller?
      - Dirrección taller (C/ avenida etc)</p>

      Es taller?
      -Servicelist


      </div></div>

      
  );
};
