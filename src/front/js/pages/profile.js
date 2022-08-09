import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
   
      <div className="row">
      <h1>Perfil Usuario/Taller</h1>


      </div>

      
  );
};
