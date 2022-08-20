import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";

export const Profile = () => {
  const { store, actions, setStore } = useAppContext();
  const [taller, setTaller] = useState(true);

	useEffect( () => {
		actions.getProfile(actions.getToken())
	}, [])
  const handleRadioChange = (e) => {
    setTaller(!taller);
  };
  return (
    <div className="container m-auto mt-5">
      <main className="m-auto col-12 col-md-10 col-lg-8 card p-5 rounded shadow">
        <section className="row">
          <h1>Perfil</h1>
          DEV: {JSON.stringify(store.user_data)}
          <hr />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Contraseña"
              aria-label="Contraseña"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="input-group m-auto">
            <div className="form-check form-check-inline mx-auto" onClick={handleRadioChange}>
              <input
                className="form-check-input"
                type="radio"
                checked={!taller}
                name="es_cliente"
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Soy un Cliente
              </label>
            </div>
            <div className="form-check form-check-inline mx-auto" onClick={handleRadioChange}>
              <input
                className="form-check-input"
                type="radio"
                checked={taller}
                name="es_taller"
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Soy un Taller
              </label>
            </div>
          </div>
        </section>
        {!taller ? null : (
          <section>
            <h1 className="mt-5">Dirección</h1>
            <hr />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Calle, Avenida ..."
                aria-label="Dirección"
                aria-describedby="basic-addon2"
              />
            </div><h1 className="mt-5">Nombre del Taller</h1>
            <hr /><div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Talleres ..."
                aria-label="Nombre del Taller"
                aria-describedby="basic-addon2"
              />
            </div>
            <h1 className="mt-5">Servicios</h1>
            <hr />
            <Servicelist />
          </section>
        )}
      </main>
    </div>
  );
};
