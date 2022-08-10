import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Mapcomp from "../component/mapcomp";
import Servicelist from "../component/servicelist";

export const Map = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container card my-5">
      <div className="row py-3">
        <div className="col-sm-12 col-lg-5">
          <Servicelist />
          <Link className="btn btn-success" to="/details">
            Detalles mapa (Dev)
          </Link>
        </div>
        <div className="col-sm-12 col-lg-7">
          <Mapcomp />
        </div>
      </div>
    </div>
  );
};
