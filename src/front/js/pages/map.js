import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Mapcomponent from "../component/mapcomp";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";

export const Map = () => {
  const { store, actions, setStore } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    actions.getMap();
  }, []);

  return (
    <main className="container-fluid">
      <div className="card rounded shadow">
        <div className="row">
          <div className="services overflow-auto p-5 col-sm-12 col-lg-5 col-xl-4">
            <h1 className="">Servicios</h1>
            <hr />
            <Servicelist />
          </div>
          <div className="col-sm-12 col-lg-7 col-xl-8 position-relative">
            {store.loggedIn ? null : (
              <span className="position-absolute top-50 position-absolute top-50 start-50 translate-middle toptop">
                <div className="card border-warning mb-3">
                  <div className="card-header">Lo sentimos</div>
                  <div className="card-body fs-6">
                    Necesitas una cuenta en ECUTuning para continuar.
                    <p className="card-text d-flex justify-content-between">
                      <sub>
                        <Link to="/signup" className="btn btn-link btn-sm">
                          Registrarse
                        </Link>
                      </sub>
                      <sub>
                        <Link to="/login" className="btn btn-link btn-sm">
                          Entrar
                        </Link>
                      </sub>
                    </p>
                  </div>
                </div>
              </span>
            )}
            
              <Mapcomponent />
          
          </div>
        </div>
      </div>
    </main>
  );
};
