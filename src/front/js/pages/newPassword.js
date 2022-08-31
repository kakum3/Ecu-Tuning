import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import { useAppContext } from "../index";
import LogoWhite from "../svgs/logoWhite";
export const NewPassword = () => {
  const { store, actions, setState } = useAppContext();
  const { token } = useParams();
  const formSubmit = (e) => {
    e.preventDefault();
    actions.setNewpassword({password:e.target.password.value, confirm: e.target.confirm.value});
  };
  return (
    <div className="container m-auto mt-5">
      <div className="text-center mt-5">
        <span className="img-fluid">
          <LogoWhite className="logo-home" />
        </span>
      </div>
      <main className="m-auto col-12 col-md-8 col-lg-6 card p-5 rounded shadow">
        <h3>Nueva Contraseña</h3>
        <hr />
        <form onSubmit={formSubmit}>
        <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Contraseña"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="confirm"
              type="password"
              className="form-control"
              id="floatingPasswordConfirm"
              placeholder="Confirmar Contraseña"
            />
            <label htmlFor="floatingPassword">Confirmar Contraseña</label>
          </div>

          <button className="w-100 btn btn-primary mb-2" type="submit">
            Cambiar
          </button>
          

        </form>
      </main>
    </div>
  );
};
