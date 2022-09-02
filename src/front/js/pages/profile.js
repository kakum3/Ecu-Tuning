import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Servicelist from "../component/servicelist";
import { useAppContext } from "../index";
import Placecomplete from "../component/autocomplete";
import ImageUp from "../component/imageupload.js";
export const Profile = () => {
  const { store, actions, setStore } = useAppContext();
  const [taller, setTaller] = useState(true);

  useEffect(() => {
    if (store.user_data.user_info.name === "") actions.getProfile();
  }, []);
  useEffect(() => {
    if (store.user_data.user_info.is_client === true) setTaller(false);
  }, [store.user_data.user_info]);

  const handleForm = (e) => {
    e.preventDefault();
    actions.postProfile({
      name: e.target.name.value,
      email: e.target.email.value,
      a_password: e.target.a_password.value,
      n_password: e.target.n_password.value,
      w_name: e.target.w_name.value || null,
      w_address: e.target.w_address.value || null,
      lat: e.target.lat.value || null,
      lng: e.target.lng.value || null,
    });
  };
  return (
    <main className="container">
      <div className="card p-5 rounded shadow">
        <div className="col h-auto mb-5">
          <h3 className="">Imagen {!taller ? null : "del taller"}</h3>
          <hr />
          <ImageUp />
        </div>

        <form
          onSubmit={handleForm}
          className="row"
        >
          {!taller ? null : (
            <><section className="col-12 col-lg-6">
              <h1>Datos del Taller</h1>
              <hr />
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Talleres ..."
                  aria-label="Nombre del Taller"
                  aria-describedby="basic-addon2"
                  name="w_name"
                  defaultValue={{...store.user_data.taller}.w_name}
                />
                <label htmlFor="floatingInput">Nombre del Taller</label>
              </div>
              <div className="input-group mb-3">
                <Placecomplete />
              </div>
              
            </section>
            <section className="col-12 col-lg-6 services">
            <h1 className="">Servicios</h1>
                <hr />
                <Servicelist />
            </section></>
          )}


          <section className="col-12 col-lg-6">
            <h1>Perfil</h1>
            <hr />

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Nombre"
                aria-describedby="introduce-nombre"
                name="name"
                defaultValue={{...store.user_data.user_info}.name}
              />
              <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="introduce-email"
                name="email"
                defaultValue={{...store.user_data.user_info}.email}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña actual..."
                aria-label="Contraseña actual"
                aria-describedby="Contraseña actual"
                name="a_password"
                defaultValue="admin"
              />
              <label htmlFor="floatingInput">Contraseña actual</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña nueva..."
                aria-label="Contraseña nueva"
                aria-describedby="Contraseña nueva"
                name="n_password"
                defaultValue="admin"
              />
              <label htmlFor="floatingInput">Contraseña nueva</label>
            </div>
          </section>

          


          <div className="w-100 text-center">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
