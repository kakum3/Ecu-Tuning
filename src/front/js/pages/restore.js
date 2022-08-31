import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import { useAppContext } from "../index";
import LogoWhite from "../svgs/logoWhite";
export const Restore = () => {
  const { store, actions, setState } = useAppContext();

  const formSubmit = (e) => {
    e.preventDefault();
    actions.getRestore({email:e.target.email.value});
  };
  return (
    <div className="container m-auto mt-5">
      <div className="text-center mt-5">
        <span className="img-fluid">
          <LogoWhite className="logo-home" />
        </span>
      </div>
      <main className="m-auto col-12 col-md-8 col-lg-6 card p-5 rounded shadow">
        <h3>Recuperar</h3>
        <hr />
        <form onSubmit={formSubmit}>
          <div className="form-floating mb-3">
            <input
              defaultValue={""}
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>

          <button className="w-100 btn btn-primary mb-2" type="submit">
            Recuperar
          </button>
          <sub className="col">
            ¿No tienes una cuenta?{" "}
            <Link to="/signup" className="btn btn-link btn-sm">
              Regístrate
            </Link>
          </sub>
        </form>
      </main>
    </div>
  );
};
