import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Mapcomp from "../component/mapcomp";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";

export const Map = () => {
  const { store, actions, setState } = useAppContext();

  return (
    <div className="container m-auto">
      <main className="m-auto mt-3 card rounded shadow">
        <div className="row">
          <div className="p-5 col-sm-12 col-lg-5">
            <h1 className="">Servicios</h1>
            
            <Servicelist />
            <Link className="btn btn-success" to="/details">
              Detalles mapa (Dev)
            </Link>
            DEV(filters): {JSON.stringify(store.sel_services)}
          </div>
          <div className="col-sm-12 col-lg-7">
            
            <Mapcomp />
          </div>
        </div>
      </main>
    </div>
  );
};
