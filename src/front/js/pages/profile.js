import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";

export const Profile = () => {
  const { store, actions, setStore } = useAppContext();
  const [taller, setTaller] = useState(true);
  const location = useLocation();
  const loadSelected = () => {
    console.log("Load selected: ", store.user_data.taller.w_services)
    setStore({
      sel_services: store.all_services.map((e, i) =>
        store.user_data.taller.w_services.some((a) => e.name === a.name)
          ? { ...e, value: true }
          : { ...e, value: false }
      ),
    });
  }
  useEffect(() => {
    if (store.user_data.user_info.name === "") actions.getProfile();
    loadSelected()
  }, []);
  useEffect(() => {
    loadSelected()
  }, [store.user_data]);
  useEffect(() => {
    console.log(location.pathname)
    loadSelected()
  }, [location]);
  const handleRadioChange = (e) => {
    setTaller(!taller);
  };
  const handleForm = (e) => {
    e.preventDefault();
    actions.postProfile({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      is_client: e.target.is_client.checked,
      w_name: e.target.w_name.value || null,
      w_address: e.target.w_address.value || null,
    });
  };
  return (
    <div className="container m-auto mt-5">
      <button onClick={loadSelected}>OMG</button>
      <main className="m-auto col-12 col-md-10 col-lg-8 card p-5 rounded shadow">
        <form onSubmit={handleForm}>
          {" "}
          <section className="row">
            <h1>Perfil</h1>
            <hr />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Nombre"
                aria-describedby="introduce-nombre"
                name="name"
                defaultValue={store.user_data.user_info.name}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="introduce-email"
                name="email"
                defaultValue={store.user_data.user_info.email}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Contraseña"
                aria-label="Contraseña"
                aria-describedby="basic-addon3"
                name="password"
                defaultValue="hidden"
              />
            </div>
            <div className="input-group m-auto mt-3">
              <div
                className="form-check form-check-inline mx-auto"
                onClick={handleRadioChange}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  checked={!taller}
                  name="is_client"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Soy un Cliente
                </label>
              </div>
              <div
                className="form-check form-check-inline mx-auto"
                onClick={handleRadioChange}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  checked={taller}
                  name="is_taller"
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
              <h1 className="mt-5">Datos del Taller</h1>
              <hr />
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Talleres ..."
                  aria-label="Nombre del Taller"
                  aria-describedby="basic-addon2"
                  name="w_name"
                  defaultValue={store.user_data.taller.w_name}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Calle, Avenida ..."
                  aria-label="Dirección"
                  aria-describedby="basic-addon2"
                  name="w_address"
                  defaultValue={store.user_data.taller.w_address}
                />
              </div>
              <h1 className="mt-5">Servicios</h1>
              <hr />
              {JSON.stringify(store.sel_services)}
              <Servicelist />
            </section>
          )}
          <div className="input-group mt-3">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
