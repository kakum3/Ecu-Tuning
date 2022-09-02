import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Mapcomponent from "../component/mapcomp";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";

export const Map = () => {
  const { store, actions, setStore } = useAppContext();
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
    if ((store.map_markers[0].w_name = "EMPTY")) actions.getMap();
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

            <Mapcomponent
              center={{ lat: ip.latitude || 39, lng: ip.longitude || 9 }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
