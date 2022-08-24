import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Mapcomponent from "../component/mapcomp";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";

export const Map = () => {
  const { store, actions, setStore } = useAppContext();
  useEffect(() => {
    if ((store.map_markers[0].w_name = "EMPTY")) actions.getMap();
  }, []);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div className="container m-auto">
      <main className="m-auto mt-3 card rounded shadow">
        <div className="row">
          <div className="p-5 col-sm-12 col-lg-5">
            <h1 className="">Servicios</h1>
            <hr />

            <Servicelist />
            <Link className="btn btn-success" to="/details">
              Detalles mapa (Dev)
            </Link>
          </div>
          <div className="col-sm-12 col-lg-7">
            <span className="position-absolute top-"></span>
            <Mapcomponent />
          </div>
        </div>
      </main>
    </div>
  );
};
