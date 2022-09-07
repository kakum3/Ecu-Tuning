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
    actions.getProfile();
  }, []);
  
  useEffect(() => {
    if (store.user_data.user_info.is_client === true) setTaller(false);
    setStore({
      sel_services: store.all_services.map((e, i) =>
        store.user_data.taller.w_services.some((a) => e.name === a.name)
          ? { ...e, value: true }
          : { ...e, value: false }
      ),
    });
  }, [store.user_data.user_info]);

  const handleForm = (e) => {
    e.preventDefault();
    actions.postProfile({
      name: e.target.name.value,
      email: e.target.email.value,
      a_password: e.target.a_password.value,
      n_password: e.target.n_password.value,
      w_name: e.target.w_name?.value || null,
      w_address: e.target.w_address?.value || null,
      lat: e.target.lat?.value || null,
      lng: e.target.lng?.value || null,
    });
  };
  const handleDelete = () => actions.deleteProfile();
  return (
    <main className="container">
      <div className="card p-5 rounded shadow">
        <div className="col h-auto mb-5">
          <h3 className="">Imagen {!taller ? null : "del taller"}</h3>
          <hr />
          <ImageUp />
        </div>

        <form onSubmit={handleForm} className="row gy-5 mt-3">
          <div className="col-12 col-lg-6 m-auto">
            <section className="">
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
                  defaultValue={{ ...store.user_data.user_info }.name}
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
                  defaultValue={{ ...store.user_data.user_info }.email}
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
            {!taller ? null : (
              <>
                <section className="mt-5">
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
                      defaultValue={{ ...store.user_data.taller }.w_name}
                    />
                    <label htmlFor="floatingInput">Nombre del Taller</label>
                  </div>
                  <div className="input-group mb-3">
                    <Placecomplete
                      value={{ ...store.user_data.taller }.w_address}
                    />
                  </div>
                </section>
              </>
            )}
          </div>
          {!taller ? null : (
            <section className="col-12 col-lg-6 mt-0">
              <h1 className="">Servicios</h1>
              <hr />
              <div className="overflow-auto services-profile">
                <Servicelist />
              </div>
            </section>
          )}

          <div className="w-100 text-center">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
        <hr />
        <button
          type="button"
          className="btn btn-danger mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Eliminar cuenta<i className="fa-sharp fa-solid fa-close ms-2"></i>
        </button>
        <div
          className="modal fade  text-primary rounded shadow"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-white card mt-5 shadow">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Eliminar cuenta
                </h5>
              </div>

              <div className="modal-body modal-centered ">
                <blockquote>
                  ¿Seguro que desea eliminar su cuenta? Esta se borrará
                  permanentemente y tendrá que volver a resgistrarse.
                </blockquote>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={handleDelete}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
